# Documents Sample

Goal
: Learn how to deal with complex nested documents, and how to decide whether DBVirt can help.

Difficulty
: Medium

## Schema-and-tuple-based design in an industry dominated by interfaces that exchange documents? Why?
DBVirt is not meant to replace any system's API. However, there is a clear tendency to adapt organizations to systems and cloud providers,
and not the other way around, that is making DevOps operations and especially Application development really hard and sometimes confusing.

Most organizations have decided to throw away their internal IT/Cloud operation model, in favor of a set of specific tools,
that developers can't access directly for "security reasons". Not surprising.

Kubernetes is a good example, since instead of discussing how to migrate to containerized workloads, most organizations invested
time and energy just implementing Kubernetes as a tool, without a clear definition/direction of what it really implies and how to
prepare the whole ecosystem to operate on it.

DBVirt's mission is to isolate system's upstream complexity as much as possible, by defining concepts (entities) that are, more or less, universal,
like Code Repository, Artifact Repository, Container Image, Container Instance (run), Metric, Log Entry, etc., and making them operate in a consistent way
beyond simply provisioning.

In our context, consistency means relationships, for example, a Container Instance is related to an image, which is hosted in an Artifact Repository
and built using some resources hosted in a Code Repository. Without a proper schema, it is difficult to be able to define
that level of traceability that, once done, make the whole IT/Cloud/Sec operation much easier.

Having said that, DBVirt is only an abstraction layer, a facade, which knows nothing about how to interact with specific
implementations, for example GitHub as Code Repository and Kubernetes as a container orchestrator. That knowledge is mostly
loaded dynamically by the engine in the form of JavaScript modules.

## The problem of arrays in JSON and YAML Documents
When acting as a facade, DBVirt needs to transform JSON-based documents exchanged with other systems via their APIs,
into tuples. Flattening a JSON document is not hard, but capturing essential information (for operational reasons)
could be challenging, especially when dealing with complex response documents that have important sections that are dynamic (arrays).

Let's use a Kubernetes `Deployment` as an example. `Deployment` can define several `containers` (under `spec.template.spec.containers`).
Suppose that we need to get a `Deployment` that has 2 containers. 
If we flatten that document as-is, DBVirt will end up showing something like this:<br/>
`spec.template.spec.containers[0].image`, `spec.template.spec.containers[1].image`, etc.<br/>
Which crashes with the very definition of schema, that forces us to list fields during the entity's definition.

### Approaches
This sample is about dealing with arrays using two different approaches:
1. Embed sections of the document into a field.
2. Create a new synthetic entity that models the information contained in the nested document, for example `DEPLOYMENT_CONTAINER`.

### Synthetic Entities
They exist only in the context of a `schema` and have no match in any of the underlying systems. As explained above,
their purpose is to make it easier to deal with arrays in documents. 

### Directives
Options added to fields and entities that instruct the engine the role they play when operating (Select, Insert and Update).<br/>
Directives are passed as `OPTIONS` which are lists of key-value pairs. List of synthetic-related directives as follows:

| Directive                     | Level  | Type    | Options                      | Description                                                                                                                                                                                                       |
|-------------------------------|--------|---------|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `synthetic_parent`            | entity | String  | Any                          | Parent entity. Must include schema name.                                                                                                                                                                          |
| `synthetic_path`              | entity | String  | Any                          | Name of the parent entity field (array) used to ungroup the content                                                                                                                                               |
| `synthetic_allow_bulk_insert` | entity | Boolean | True/False                   | Indicates whether an INSERT operation tolerates multiple entries in the `synthetic_path` or must be strictly one.                                                                                                 |
| `synthetic_type`              | field  | String  | `parent`, `parent_array_key` | Type of synthetic field.<br/>`parent` indicates that exists in and is connected to the parent entity.<br/>`parent_array_key` indicates that the field is used to locate specific elements within `synthetic_path` |
| `synthetic_parent_field`      | field  | String  | Any                          | Indicates that the related parent field name is not the same as defined in the synthetic entity field. Used mostly when field names overlap.                                                                      |

Please see [this diagram](../diagrams/synthetic_directives.svg)

A non-synthetic-related directive worth mentioning:

| Directive              | Level  | Type    | Options    | Description                                                                                                                                                                                                           |
|------------------------|--------|---------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `supports_idempotency` | entity | Boolean | True/False | Indicates whether the upstream API supports idempotency.<br/>When `false` the engine verifies whether the operation changed the original record/document before applying.<br/>If omitted, the default value is `true` |



## How to test it

This sample uses an internal delegation module, therefore it is not needed in configuration.


### 1. Generate bundle files
Execute [the gen-bundle script](gen-bundles.sh) to generate the zip files.

### 2. app-config
Point to the file generated in the first step, called `documents-descriptor-bundle.zip`.
Here you can opt for specifying the URI or keeping the variable `DESCRIPTOR_BUNDLE` which must be passed to the container.

### 3. Kubernetes Server Mock
Clone [this project](https://github.com/kubling-community/dbvirt-mock-upstream.git).<br/>
Build using `./mvnw clean package` and run `java -jar target/dbvirt-mock-upstream-24.12.jar`

### 4. Run container
This sample works well with our Community Edition, just replace the environment variables and run:

```
docker run --rm \ 
    -e DESCRIPTOR_BUNDLE=[/path/to/documents-descriptor-bundle.zip] \
    -e APP_CONFIG=[/path/to/app-config.yaml] \
    -p 35432:35432 -p 8282:8282 \
    -v [/path/to/dbvirt-samples]:[mount/path] \
    kubling/dbvirt-ce:latest
```

Or, assuming that you cloned the repo in `~/dbvirt-samples`, just run:
```
docker run --rm \
    -e DESCRIPTOR_BUNDLE=/dbvirt-samples/documents/documents-descriptor-bundle.zip \
    -e APP_CONFIG=/dbvirt-samples/documents/app-config.yaml \
    -p 35432:35432 -p 8282:8282 \
    -v ~/dbvirt-samples:/dbvirt-samples \
    kubling/dbvirt-ce:latest
```

### 5. Queries
Once the container is running, run `psql -h localhost -p 35432 -U sa -d application` in a terminal. Type any password,
we are not authenticating users in the example.
Some queries you can start with:
* `SELECT * FROM embed.DEPLOYMENT WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8';`<br/><br/>
* `SELECT * FROM synthetic.DEPLOYMENT_CONTAINER WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8';`<br/><br/>
* `SELECT * FROM synthetic.DEPLOYMENT_CONTAINER WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8' and metadata__name = 'nginx';`<br/><br/>
* `SELECT * FROM synthetic.DEPLOYMENT_CONTAINER_VOLS WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8';`<br/><br/>
* `SELECT * FROM synthetic.DEPLOYMENT_CONTAINER_VOLS WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8' and containerName = '1-nginx';`<br/><br/>
* `INSERT INTO synthetic.DEPLOYMENT_CONTAINER
  (metadata__name, metadata__namespace, image, name)
  VALUES('nginx', '08abb0fc-f7af-4fe8-98d4-e76729567dc8', 'kubling.artifactory.internal/kubling-attached-nfs-server:23.5', 'nfs-server');`<br/><br/>
* `UPDATE synthetic.DEPLOYMENT_CONTAINER
  SET image='kubling.artifactory.internal/kubling-attached-nfs-server:23.7'
  WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8' and metadata__name = 'nginx';`<br/><br/>
* `UPDATE synthetic.DEPLOYMENT_CONTAINER
  SET image='kubling.artifactory.internal/kubling-attached-nfs-server:23.7'
  WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8' and metadata__name = 'nginx' and name = '2-nginx';`<br/><br/>
* `INSERT INTO synthetic.DEPLOYMENT_CONTAINER_VOLS
  (metadata__name, metadata__namespace, containerName, mountPath, name, readOnly)
  VALUES('nginx', '08abb0fc-f7af-4fe8-98d4-e76729567dc8', '1-nginx', '/my/mnt', 'conf1-m0zhgq3', false);`<br/><br/>
* `UPDATE synthetic.DEPLOYMENT_CONTAINER_VOLS SET mountPath = '/my/mnt2'
  WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8' and metadata__name = 'nginx';`<br/><br/>
* `UPDATE synthetic.DEPLOYMENT_CONTAINER_VOLS SET mountPath = '/my/mnt2'
  WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8' and metadata__name = 'nginx' and (containerName = '1-nginx' or containerName = '2-nginx');`<br/><br/>
* `UPDATE synthetic.DEPLOYMENT_CONTAINER_VOLS SET mountPath = '/my/mnt2'
  WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8' and metadata__name = 'nginx' and containerName
  in (SELECT containerName FROM synthetic.DEPLOYMENT_CONTAINER_VOLS WHERE metadata__namespace = '08abb0fc-f7af-4fe8-98d4-e76729567dc8');`<br/><br/>

Each query will print out the received context object and won't save or delete any information.   
