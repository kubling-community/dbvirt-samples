# App Model Sample

Goal
: Explore a real example, using a hypothetical scenario in which a company, that has hundred of applications, 
wants to generate an application model and allow users and systems interact with it

Difficulty
: High

## Template functions
In this sample we introduce the "custom template function" feature that gives users the possibility to define
custom functions that can be invoked when evaluating templates.
Functions are bundled in a separate module file, for more info please see [the bundle info](modules/functions/bundle-function-info.yaml)

## Using PostgresSQL as DB for JOIN info.
In case you don't want to lose data when stopping the container, create a PostgresSQL container using the following command:
```
  docker run -d --name some-postgres \
    -e POSTGRES_PASSWORD=[PASSWORD] \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v [LOCAL PATH]:/var/lib/postgresql/data \
    -p 5432:5432 \
    postgres
```
Inject the required information as environment variables (`PG_X`) using in [properties file](app.properties)

Then connect to the postgres instance and execute:
```
  create table APPLICATION (id varchar(40) not null, name varchar(255) unique, primary key (id));
  create table COMPONENT (id varchar(40) not null, name varchar(255), application_id varchar(40), primary key (id), constraint idx_component unique (id, name));
  
  create table COMPONENT_CODE_REPO_JOIN (component_id varchar(40) not null, code_repo_org varchar(255) not null, code_repo_name varchar(255) not null);
  create table COMPONENT_DEPLOYMENT_JOIN (component_id varchar(40) not null, environment varchar(5), deployment_identifier varchar(512) not null);
  
  create index idx_application on APPLICATION (id);
  alter table if exists COMPONENT add constraint FK7p951ujm4jv7l8i1jc5he7mcf foreign key (application_id) references APPLICATION;
```

Tables will be created in database `postgres`, schema `public`, which for this demo should not be a problem.

## How to test it

### 1. Generate bundle files
Execute [the gen-bundle script](gen-bundles.sh) to generate the zip files.

### 2. Follow the standard procedure explained in the rest of the examples

### 3. Run container
This sample works well with our Community Edition, just replace the environment variables and run:

```
docker run --rm \ 
    -e DESCRIPTOR_BUNDLE=[/path/to/appmodel-descriptor-bundle.zip] \
    -e APP_CONFIG=[/path/to/app-config.yaml] \
    -e MODULE_BUNDLE=[/path/to/appmodel-module-bundle.zip] \
    -e FUNCTIONS_BUNDLE=[/path/to/appmodel-functions-bundle.zip] \
    -e PROPS_FILE=[/path/to/env.properties] \
    -p 35432:35432 -p 8282:8282 \
    -v [/path/to/dbvirt-samples]:[mount/path] \
    kubling/dbvirt-ce:latest
```

Or, assuming that you cloned the repo in `~/dbvirt-samples`, just run:
```
docker run --rm \
    -e DESCRIPTOR_BUNDLE=/dbvirt-samples/appmodel/appmodel-descriptor-bundle.zip \
    -e APP_CONFIG=/dbvirt-samples/appmodel/app-config.yaml \
    -e MODULE_BUNDLE=/dbvirt-samples/appmodel/modules/appmodel-module-bundle.zip \
    -e FUNCTIONS_BUNDLE=/dbvirt-samples/appmodel/modules/appmodel-functions-bundle.zip \
    -e PROPS_FILE=/dbvirt-samples/appmodel/env.properties] \
    -p 35432:35432 -p 8282:8282 \
    -v ~/dbvirt-samples:/dbvirt-samples \
    kubling/dbvirt-ce:latest
```

### 4. Endpoints
Once the container is running, use the following commands to start testing:

#### Create a new app:
* ```
  curl --location 'http://localhost:8282/api/v1/actions/run/new_app' \
    --header 'Content-Type: application/json' \
    --data '{ "app_name": "my-new-app" }'
  ```
#### Get App Info:
* ```
  curl --location 'http://localhost:8282/api/v1/query/perform/get_apps_full' \
    --header 'Content-Type: application/json' \
    --data '{ "app_name": "my-new-app" }'
  ```
  
#### Add a component to the app a new app:
* ```
    curl --location 'http://localhost:8282/api/v1/actions/run/add_component' \
      --header 'Content-Type: application/json' \
      --data '{
          "app_id": [REPLACE BY my-new-app ID],
          "component_name": "app-backend",
          "component_description": "This is the backend"
      }'
  ```
**_Tip:_** Use the info retrieved when calling `get_apps_full` to get my-new-app ID.

#### Deploy a component to Kubernetes:
* ```
  curl --location 'http://localhost:8282/api/v1/actions/run/deploy_component' \
  --header 'Content-Type: application/json' \
  --data '{
      "component_id": [REPLACE BY component ID],
      "env": "env",
      "containers": [
        {
          "name": "my-container",
          "image": "nginx",
          "cpuRequest": "250m",
          "memRequest": "250M",
          "env": [
            {
              "name": "env1",
              "value": "val1"
            }
          ],
          "ports": [
            {
              "portNumber": 80
            }
          ]
        }
      ]
  }'
  ```
**_Tip:_** Call `get_apps_full` again and copy one of the associated component ID.  

#### Get last deploy transition (status):
* ```
  curl --location 'http://localhost:8282/api/v1/query/perform/get_app_component_deploy_last_transition' \
  --header 'Content-Type: application/json' \
  --data '{
      "component_id": [REPLACE BY component ID],
      "env": "dev"
  }'
  ```

### 4. Queries
At this point, we hope you're already familiar with queries, so we recommend trying queries with different complexity,
as you were operating this company's IT/Cloud Infra. Enjoy! 