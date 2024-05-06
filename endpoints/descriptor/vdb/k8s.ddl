CREATE FOREIGN TABLE DEPLOYMENT
   (clusterName string OPTIONS(val_variable 'cluster_name'),
    clusterUrl string OPTIONS(val_variable 'kubernetes_api_url'),
    metadata__name string,
    metadata__namespace string,
    metadata__labels string,
    containers__total integer,
    spec__template__spec__containers json OPTIONS(parser_format 'asJsonPretty'),
    UNIQUE(clusterUrl, metadata__namespace, metadata__name))
OPTIONS(updatable true,
        supports_idempotency false,
        tags 'kubernetes;{{ schemaModel.properties.cluster_name }};deployment');

CREATE FOREIGN TABLE DEPLOYMENT_CONTAINER
   (clusterName string OPTIONS(val_variable 'cluster_name'),
    clusterUrl string OPTIONS(val_variable 'kubernetes_api_url'),
    metadata__name string NOT NULL OPTIONS(synthetic_type 'parent'),
    metadata__namespace string OPTIONS(synthetic_type 'parent'),
    metadata__labels string OPTIONS(updatable false, synthetic_type 'parent'),

    image string NOT NULL,
    name string NOT NULL,
    command json,
    volumeMounts json,
    UNIQUE(metadata__namespace, metadata__name, name))
  OPTIONS(updatable true,
        synthetic_parent '{{ schemaModel.name }}.DEPLOYMENT',
        synthetic_path 'spec__template__spec__containers',
        synthetic_allow_bulk_insert false,
        tags 'kubernetes;{{ schemaModel.properties.cluster_name }};deployment_container');

CREATE FOREIGN TABLE DEPLOYMENT_CONTAINER_VOLS
   (clusterName string OPTIONS(val_variable 'cluster_name'),
    clusterUrl string OPTIONS(val_variable 'kubernetes_api_url'),
    metadata__name string NOT NULL OPTIONS(synthetic_type 'parent'),
    metadata__namespace string OPTIONS(synthetic_type 'parent'),
    metadata__labels string OPTIONS(synthetic_type 'parent'),
    containerName string OPTIONS(synthetic_type 'parent_array_key', synthetic_parent_field 'name'),
    containerImage string OPTIONS(synthetic_type 'parent_array_key', synthetic_parent_field 'image'),

    mountPath string NOT NULL,
    name string NOT NULL,
    readOnly boolean,
    UNIQUE(metadata__namespace, metadata__name, containerName, name))
  OPTIONS(updatable true,
        synthetic_parent '{{ schemaModel.name }}.DEPLOYMENT_CONTAINER',
        synthetic_path 'volumeMounts',
        synthetic_allow_bulk_insert false,
        tags 'kubernetes;{{ schemaModel.properties.cluster_name }};deployment_container_vols');
