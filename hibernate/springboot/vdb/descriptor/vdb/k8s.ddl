CREATE FOREIGN TABLE NAMESPACE
   (clusterName string OPTIONS(val_constant '{{ schema.properties.cluster_name }}'),
    clusterUrl string OPTIONS(val_constant '{{ schema.properties.kubernetes_api_url }}'),
    schema string OPTIONS(val_constant '{{ schema.name }}'),
    metadata__name string,
    metadata__labels json OPTIONS(parser_format 'asJsonPretty'),
    status__phase string,
    PRIMARY KEY(metadata__name),
    UNIQUE(clusterName, metadata__name))
OPTIONS(updatable true,
        supports_idempotency false,
        tags 'kubernetes;{{ schema.properties.cluster_name }};namespace');

CREATE FOREIGN TABLE DEPLOYMENT
   (clusterName string OPTIONS(val_constant '{{ schema.properties.cluster_name }}'),
    clusterUrl string OPTIONS(val_constant '{{ schema.properties.kubernetes_api_url }}'),
    schema string OPTIONS(val_constant '{{ schema.name }}'),
    metadata__name string,
    metadata__namespace string,
    metadata__labels json OPTIONS(parser_format 'asJsonPretty'),
    spec__template__spec__containers json OPTIONS(parser_format 'asJsonPretty'),
    spec__selector__matchLabels json OPTIONS(parser_format 'asJsonPretty'),
    spec__template__metadata__labels json OPTIONS(parser_format 'asJsonPretty'),
    status__conditions json OPTIONS(parser_format 'asJsonPretty'),
    status__availableReplicas integer,
    status__readyReplicas integer,
    status__replicas integer,
    status__updatedReplicas integer,
    identifier string NOT NULL OPTIONS(val_pk 'clusterName+metadata__namespace+metadata__name' ),
    PRIMARY KEY(identifier),
    UNIQUE(clusterName, metadata__namespace, metadata__name))
OPTIONS(updatable true,
        supports_idempotency false,
        tags 'kubernetes;{{ schema.properties.cluster_name }};deployment');

CREATE FOREIGN TABLE DEPLOYMENT_CONDITIONS
   (clusterName string OPTIONS(val_constant '{{ schema.properties.cluster_name }}'),
    clusterUrl string OPTIONS(val_constant '{{ schema.properties.kubernetes_api_url }}'),
    metadata__name string NOT NULL OPTIONS(synthetic_type 'parent'),
    metadata__namespace string OPTIONS(synthetic_type 'parent'),

    lastTransitionTime string,
    lastUpdateTime string,
    message string,
    reason string,
    status string,
    type string)
  OPTIONS(updatable false,
        synthetic_parent '{{ schema.name }}.DEPLOYMENT',
        synthetic_path 'status__conditions',
        tags 'kubernetes;{{ schema.properties.cluster_name }};deployment_conditions');

CREATE FOREIGN TABLE DEPLOYMENT_CONTAINER
   (clusterName string OPTIONS(val_constant '{{ schema.properties.cluster_name }}'),
    clusterUrl string OPTIONS(val_constant '{{ schema.properties.kubernetes_api_url }}'),
    metadata__name string NOT NULL OPTIONS(synthetic_type 'parent'),
    metadata__namespace string OPTIONS(synthetic_type 'parent'),
    metadata__labels string OPTIONS(updatable false, synthetic_type 'parent'),

    image string NOT NULL,
    name string NOT NULL,
    command json,
    volumeMounts json,
    identifier string OPTIONS(val_pk 'clusterName+metadata__namespace+metadata__name+name' ),
    PRIMARY KEY(identifier),
    UNIQUE(metadata__namespace, metadata__name, name))
  OPTIONS(updatable true,
        synthetic_parent '{{ schema.name }}.DEPLOYMENT',
        synthetic_path 'spec__template__spec__containers',
        synthetic_allow_bulk_insert false,
        tags 'kubernetes;{{ schema.properties.cluster_name }};deployment_container');

CREATE FOREIGN TABLE DEPLOYMENT_CONTAINER_VOLS
   (clusterName string OPTIONS(val_constant '{{ schema.properties.cluster_name }}'),
    clusterUrl string OPTIONS(val_constant '{{ schema.properties.kubernetes_api_url }}'),
    metadata__name string NOT NULL OPTIONS(synthetic_type 'parent'),
    metadata__namespace string OPTIONS(synthetic_type 'parent'),
    metadata__labels string OPTIONS(synthetic_type 'parent'),
    containerName string OPTIONS(synthetic_type 'parent_array_key', synthetic_parent_field 'name'),
    containerImage string OPTIONS(synthetic_type 'parent_array_key', synthetic_parent_field 'image'),

    mountPath string NOT NULL,
    name string NOT NULL,
    readOnly boolean,
    identifier string OPTIONS(val_pk 'clusterName+metadata__namespace+metadata__name+containerName+name' ),
    PRIMARY KEY(identifier),
    UNIQUE(metadata__namespace, metadata__name, containerName, name))
  OPTIONS(updatable true,
        synthetic_parent '{{ schema.name }}.DEPLOYMENT_CONTAINER',
        synthetic_path 'volumeMounts',
        synthetic_allow_bulk_insert false,
        tags 'kubernetes;{{ schema.properties.cluster_name }};deployment_container_vols');
