#!/bin/sh

set -eu

kubling_base_url="${KUBLING_BASE_URL:-http://kubling:8282}"
kubling_vdb="${KUBLING_VDB:-ProviderValuesVDB}"

fail() {
  printf 'ERROR: %s\n' "$1" >&2
  exit 1
}

assert_contains() {
  value="$1"
  expected="$2"
  description="$3"

  case "${value}" in
    *"${expected}"*) ;;
    *) fail "${description}; expected ${expected} in ${value}" ;;
  esac
}

encode_query() {
  printf '%s' "$1" |
    base64 |
    tr -d '\n' |
    sed -e 's/+/%2B/g' -e 's#/#%2F#g' -e 's/=/%3D/g'
}

execute_sql() {
  query="$1"
  encoded_query="$(encode_query "${query}")"
  curl --fail --silent --show-error \
    "${kubling_base_url}/api/v1/admin/query/${kubling_vdb}/${encoded_query}"
}

structured="$(execute_sql "SELECT sample_id, integer_array_value, biginteger_value, bigdecimal_value, timestamp_value, json_value FROM provider.TYPE_SAMPLE")"
assert_contains "${structured}" '"containsRows":true' "structured-value query returned no rows"
assert_contains "${structured}" '"sample_id":"canonical"' "canonical row is missing"
assert_contains "${structured}" '"integer_array_value":"[1, null, 3]"' "array value changed"
assert_contains "${structured}" '"biginteger_value":"123456789012345678901234567890"' "biginteger lost precision"
assert_contains "${structured}" '"bigdecimal_value":"1234567890.12345678901234567890"' "bigdecimal lost precision"
assert_contains "${structured}" '"timestamp_value":"2026-08-03 14:30:15.125"' "timestamp value changed"
assert_contains "${structured}" '"engine":"kubling"' "JSON object is missing its engine field"
assert_contains "${structured}" '"sample":true' "JSON object is missing its sample field"

expanded_json="$(execute_sql "SELECT p.sample_id, j.engine_name, j.is_sample FROM provider.TYPE_SAMPLE AS p, JSONTABLE(p.json_value, '$', false COLUMNS engine_name string PATH '@.engine', is_sample boolean PATH '@.sample') AS j")"
assert_contains "${expanded_json}" '"containsRows":true' "JSONTABLE query returned no rows"
assert_contains "${expanded_json}" '"sample_id":"canonical"' "JSONTABLE lost the source row identity"
assert_contains "${expanded_json}" '"engine_name":"kubling"' "JSONTABLE did not extract the engine field"
assert_contains "${expanded_json}" '"name":"is_sample","type":"boolean"' "JSONTABLE did not declare the boolean result type"
assert_contains "${expanded_json}" '"is_sample":"true"' "JSONTABLE did not extract the boolean field"

lob_and_spatial="$(execute_sql "SELECT TO_CHARS(blob_value, 'UTF-8') AS blob_text, clob_value, ST_AsText(geometry_value) AS geometry_wkt, ST_SRID(geometry_value) AS geometry_srid, geography_value FROM provider.TYPE_SAMPLE")"
assert_contains "${lob_and_spatial}" '"blob_text":"binary large object"' "BLOB content was not read"
assert_contains "${lob_and_spatial}" '"clob_value":"character large object"' "CLOB content was not read"
assert_contains "${lob_and_spatial}" '"geometry_wkt":"POINT (1 2)"' "geometry value changed"
assert_contains "${lob_and_spatial}" '"geometry_srid":"4326"' "geometry SRID changed"
assert_contains "${lob_and_spatial}" '"geography_value":{' "geography value is missing"
assert_contains "${lob_and_spatial}" '"data":"AQEAAAAAAAAAAADwPwAAAAAAAABA"' "geography WKB changed"

printf 'Provider values smoke test passed.\n'
