# Endpoints Sample

Goal
: Get some basic knowledge on endpoints feature as well as templates.

Difficulty
: Medium

## What are *endpoints* in DBVirt?
Although SQL is an old and very simple language, that anyone can learn in days, DBVirt was originally created to 
serve other systems, not final users. However, it is not common nowadays to write applications that interact with 
Databases using plain SQL queries, reason why we needed to incorporate a mechanism, using a similar way for defining
virtual databases, that allows to expose HTTP *endpoints* to interact with VDBs, schemas and entities.

Endpoints are divided into types: Queries and Actions.

### Queries
Allow to dynamically expose services that return a collection of rows using a SQL query.

### Actions
*Actions* need a special explanation. The idea behind actions is to define a series of chained operations performed over other
systems usually represented as entities of a VDB.

In other words, an *action* is the representation of required operations for a desired **upstream** state.

The concept around *desired* is very important since a Virtual Database is often composed by entities that represent
interfaces with multiple other systems (upstream), therefore controlling the inner state of those upstream systems depend on
APIs that are not always transactional, like in Kubernetes.

However, an entity defined in DBVirt must be **consistent**, that is, if we `INSERT`, `UPDATE` or `DELETE` a row, the (atomic) operation
will perform other operations on the dependant system and assuming that the system will eventually do what we request,
an `INSERT` on the entity will return the current upstream state (consistency).

## Built-in Kubernetes Translator
DBVirt comes with a lightweight built-in and statically compiled Kubernetes module this sample uses, therefore it is not necessary to build
a JavaScript module from scratch.

We don't plan to keep adding built-in modules, since we believe that could make the engine less flexible and difficult
to maintain (each change in the upstream API would force us to release a new version, whereas a JavaScript module can be easily fixed and
released without having to wait for us).

However, Kubernetes is an exception since this product was originally created to federate Kubernetes clusters and to
interact with them using plain-old SQL queries, therefore we decided to keep the original module embedded and maintained by us.

## How to test it

### 1. Generate bundle files
Execute [the gen-bundle script](gen-bundles.sh) to generate the zip files.

### 2. app-config
Point `descriptorBundle` to the file generated in the first step, called `endpoints-descriptor-bundle.zip`.

### 3. Kubernetes Server Mock
Clone [this project](https://github.com/kubling-community/dbvirt-mock-upstream.git).<br/>
Build using `./mvnw clean package` and run `java -jar target/dbvirt-mock-upstream-24.12.jar`

### 4. Run container
This sample works well with our Community Edition, just replace the environment variables and run:

```
docker run --rm \ 
    -e DESCRIPTOR_BUNDLE=[/path/to/endpoints-descriptor-bundle.zip] \
    -e APP_CONFIG=[/path/to/app-config.yaml] \
    -e PROPS_FILE=[/path/to/env.properties] \
    -p 35432:35432 -p 8282:8282 \
    -v [/path/to/dbvirt-samples]:[mount/path] \
    kubling/dbvirt-ce:latest
```

Or, assuming that you cloned the repo in `~/dbvirt-samples`, just run:
```
docker run --rm \
    -e DESCRIPTOR_BUNDLE=/dbvirt-samples/endpoints/endpoints-descriptor-bundle.zip \
    -e APP_CONFIG=/dbvirt-samples/endpoints/app-config.yaml \
    -e PROPS_FILE=/dbvirt-samples/endpoints/env.properties \
    -p 35432:35432 -p 8282:8282 \
    -v ~/dbvirt-samples:/dbvirt-samples \
    kubling/dbvirt-ce:latest
```

### 5. Endpoints
Once the container is running, use the following commands to start testing:
* ```
  curl --location 'http://localhost:8282/api/v1/query/perform/get_all_deployments' \
    --header 'Content-Type: application/json' \
    --data '{ "namespace": "08abb0fc-f7af-4fe8-98d4-e76729567dc8" }'
  ```
* ```
  curl --location 'http://localhost:8282/api/v1/query/perform/get_all_deployments_volumes' \
    --header 'Content-Type: application/json' \
    --data '{ "namespace": "08abb0fc-f7af-4fe8-98d4-e76729567dc8" }'
  ```
* ```
  curl --location 'http://localhost:8282/api/v1/actions/run/add_deployment_volume' \
    --header 'Content-Type: application/json' \
    --data '{ "clusterName": "my_demo_cluster_1", "namespace": "08abb0fc-f7af-4fe8-98d4-e76729567dc8", "deploymentName": "nginx", "containerName": "1-nginx", "volName": "conf1-m0zhgq-2", "volMountPath": "/my/mnt/2", "volReadOnly": false }'
  ```  