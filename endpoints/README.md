# Endpoints Sample

Goal
: Get some basic knowledge on endpoints feature as well as templates.

Difficulty
: Medium

## What are *endpoints* in Kubling?
Please see latest [official documentation.](https://docs.kubling.com/Engine/endpoints)

Endpoints are divided into types: Queries and Actions.

### Queries
Allow to dynamically expose services that return a collection of rows using a SQL query.

### Actions
The purpose of actions is to define a sequence of operations that are performed across other systems, typically represented as entities within a VDB. In essence, an action represents the required operations to achieve a desired upstream state, using Kubling SQL queries.

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