CREATE FOREIGN TABLE STORAGE_ACCOUNT
   (
        subscription string OPTIONS(val_constant '{{ schemaModel.properties.azure_subscription }}'),
        resourceGroup string OPTIONS(call_func 'az_sql_get_rg<id>'),
        sku json OPTIONS(parser_format 'asJsonPretty'),
        kind string,
        "identity" string,
        properties json OPTIONS(parser_format 'asJsonPretty'),
        tags json OPTIONS(parser_format 'asJsonPretty'),
        location string,
        "id" string,
        name string,
        type string,
        properties__provisioningState string,
        properties__accessTier string,
        PRIMARY KEY(id)
   )
    OPTIONS(updatable true,
            supports_idempotency false,
            tags 'azure;{{ schemaModel.properties.azure_subscription }};storage;account');

CREATE FOREIGN TABLE STORAGE_ACCOUNT_PROPERTIES
   (
        subscription string OPTIONS(val_constant '{{ schemaModel.properties.azure_subscription }}'),
        id string NOT NULL OPTIONS(synthetic_type 'parent'),
        provisioningState string,
        primaryEndpoints json OPTIONS(parser_format 'asJsonPretty'),
        primaryLocation string,
        statusOfPrimary string,
        creationTime string,
        encryption json OPTIONS(parser_format 'asJsonPretty'),
        accessTier string,
        supportsHttpsTrafficOnly string,
        networkAcls json OPTIONS(parser_format 'asJsonPretty'),
        minimumTlsVersion string,
        allowSharedKeyAccess boolean,
        allowCrossTenantReplication boolean,
        defaultToOAuthAuthentication boolean,
        publicNetworkAccess string,
        PRIMARY KEY(id),
        UNIQUE(subscription, id)
   )
    OPTIONS(updatable false,
            synthetic_parent '{{ schemaModel.name }}.STORAGE_ACCOUNT',
            synthetic_path 'properties',
            tags 'azure;{{ schemaModel.properties.azure_subscription }};storage;account;properties');

CREATE FOREIGN TABLE PSQL_SERVER
   (
        subscription string OPTIONS(val_constant '{{ schemaModel.properties.azure_subscription }}'),
        resourceGroup string OPTIONS(call_func 'az_sql_get_rg<id>'),
        sku json OPTIONS(parser_format 'asJsonPretty'),
        "identity" string,
        properties json OPTIONS(parser_format 'asJsonPretty'),
        tags json OPTIONS(parser_format 'asJsonPretty'),
        location string,
        "id" string,
        name string,
        type string,
        systemData string,
        PRIMARY KEY(id)
   )
    OPTIONS(updatable true,
            supports_idempotency false,
            tags 'azure;{{ schemaModel.properties.azure_subscription }};postgresql');

CREATE FOREIGN TABLE CONTAINER_REGISTRY
   (
        subscription string OPTIONS(val_constant '{{ schemaModel.properties.azure_subscription }}'),
        resourceGroup string OPTIONS(call_func 'az_sql_get_rg<id>'),
        sku json OPTIONS(parser_format 'asJsonPretty'),
        "identity" string,
        properties json OPTIONS(parser_format 'asJsonPretty'),
        "id" string,
        name string,
        type string,
        systemData string,
        PRIMARY KEY(id)
   )
    OPTIONS(updatable true,
            supports_idempotency false,
            tags 'azure;{{ schemaModel.properties.azure_subscription }};postgresql');