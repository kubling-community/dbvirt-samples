# Provider Values Sample

This sample shows how Kubling negotiates typed values with a gRPC provider and preserves structured, high-precision, spatial, and large-object values across the provider boundary. It also expands the provider's JSON value into typed relational columns with the packaged `JSONTABLE` function.

The official In-memory provider publishes its value contract through `GetCapabilities`. It declares every concrete provider value type for input and output and enables:

- `array_values_v1`
- `spatial_values_v1`
- `lob_read_v1`

Kubling uses that contract when importing and querying the provider's deterministic `TYPE_SAMPLE` table. The VDB does not duplicate the provider DDL.

## Source map

- `descriptor/vdb/ProviderValuesVDB.yaml` registers the In-memory provider as `PROVIDER_GRPC`.
- `compose.yaml` starts the provider, verifies its gRPC health service, generates the descriptor bundle, and starts Kubling.
- `scripts/smoke-test.sh` verifies arrays, arbitrary-precision numbers, timestamps, JSON, LOB reads, and spatial values.

## Prerequisites

- Git
- Docker Engine
- Docker Compose v2

## Start

```bash
cd provider-values
docker compose up --wait
```

Compose generates the descriptor bundle with the official Kubling CLI image. Generated ZIP files live only in a named volume and are not committed.

When the stack is ready:

- Kubling Studio: <http://localhost:8282/console>
- Health endpoint: <http://localhost:8282/observe/health>
- VDB: `ProviderValuesVDB`
- schema/data source: `provider`
- table: `TYPE_SAMPLE`

## Inspect the provider contract

Use the Compose-provided gRPC client to call the provider directly:

```bash
docker compose run --rm --no-deps provider-readiness \
  -plaintext -d '{}' provider:50051 \
  kubling.provider.v1.ProviderService/GetCapabilities
```

The `values` response includes the three features above, `maxArrayDimensions: 1`, a 64 KiB maximum LOB chunk, a 1 MiB maximum LOB value, and a 300-second reference lifetime.

## Query structured values

Open Kubling Studio and run:

```sql
SELECT sample_id,
       integer_array_value,
       biginteger_value,
       bigdecimal_value,
       timestamp_value,
       json_value
FROM provider.TYPE_SAMPLE;
```

The deterministic row contains:

| value | expected result |
|:--|:--|
| sample ID | `canonical` |
| integer array | `[1, null, 3]` |
| big integer | `123456789012345678901234567890` |
| big decimal | `1234567890.12345678901234567890` |
| timestamp | `2026-08-03 14:30:15.125` |
| JSON | `{"engine":"kubling","sample":true}` |

The admin JSON representation keeps arbitrary-precision numbers as strings so their precision is not reduced by the JSON consumer.

## Read LOB and spatial values

```sql
SELECT TO_CHARS(blob_value, 'UTF-8') AS blob_text,
       clob_value,
       ST_AsText(geometry_value) AS geometry_wkt,
       ST_SRID(geometry_value) AS geometry_srid,
       geography_value
FROM provider.TYPE_SAMPLE;
```

Expected values include:

| column | expected result |
|:--|:--|
| `blob_text` | `binary large object` |
| `clob_value` | `character large object` |
| `geometry_wkt` | `POINT (1 2)` |
| `geometry_srid` | `4326` |

For BLOB and CLOB columns, the provider returns a scoped, expiring LOB reference. Kubling reads the referenced chunks through `ReadLob` and exposes the complete SQL value to the query. The geography column exercises the corresponding CRS-aware binary value; the automated test verifies its exact WKB payload.

## Expand provider JSON into typed rows

`JSONTABLE` is included in the Kubling runtime; this sample does not install an
extra module. Use the JSON value returned by the provider as a nested table
reference:

```sql
SELECT p.sample_id, j.engine_name, j.is_sample
FROM provider.TYPE_SAMPLE AS p,
     JSONTABLE(
       p.json_value,
       '$',
       false COLUMNS
         engine_name string PATH '@.engine',
         is_sample boolean PATH '@.sample'
     ) AS j;
```

Expected result:

| sample_id | engine_name | is_sample |
|:--|:--|:--|
| `canonical` | `kubling` | `true` |

This verifies both halves of the flow: the provider transports a typed JSON
value, then the engine turns that value into typed relational columns.

## Automated verification

Run the same value assertions used by CI:

```bash
docker compose --profile test run --rm --no-deps smoke-test
```

Static checks are available from the repository root:

```bash
bash scripts/check-provider-values.sh
```

## Cleanup

```bash
docker compose down --volumes --remove-orphans
```
