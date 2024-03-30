# Authentication Sample

Goal
: Get familiar with the RBAC authentication and authorization extension mechanism.

Difficulty
: Easy

## How to test it

### 1. Generate bundle files
Execute [the gen-bundle script](gen-bundles.sh) to generate the zip files.
<br/>
This example uses minimal module, so also run [its gen-bundle script to generate the module](../minimal/gen-bundles.sh)

### 2. Point the source model to the JavaScript Module bundle 
Edit [VDB Scripting configuration file](descriptor/vdb/scripting/js-config.yaml) and add the URI of the 
`main-module-bundle.zip`, generated in the previous step, to property `zipFilePath`.

### 3. app-config
Point `descriptorBundle` to the file generated in the first step, called `rbac-descriptor-bundle.zip`.

### 4. Run container
This sample works well with our Community Edition, just replace the environment variables and run:

```
docker run --rm \ 
    -e DESCRIPTOR_BUNDLE=[/path/to/rbac-descriptor-bundle.zip] \
    -e APP_CONFIG=[/path/to/app-config.yaml] \
    -e MODULE_BUNDLE=[/path/to/main-module-bundle.zip] \
    -p 35432:35432 -p 8282:8282 \
    -v [/path/to/dbvirt-samples]:[mount/path] \
    kubling/dbvirt-ce:latest
```

Or, assuming that you cloned the repo in `~/dbvirt-samples`, just run:
```
docker run --rm \
    -e DESCRIPTOR_BUNDLE=/dbvirt-samples/rbac/rbac-descriptor-bundle.zip \
    -e APP_CONFIG=/dbvirt-samples/rbac/app-config.yaml \
    -e MODULE_BUNDLE=/dbvirt-samples/minimal/modules/main-module-bundle.zip \
    -p 35432:35432 -p 8282:8282 \
    -v ~/dbvirt-samples:/dbvirt-samples \
    kubling/dbvirt-ce:latest
```

### 5. Queries
Once the container is running, run `psql -h localhost -p 35432 -U [user] -d application` in a terminal. 

Replace `[user]` by `sa`, `scout` and `baddie` and try to perform `SELECT`, `INSERT`, `UPDATE` and `DELETE`
operations in order to see how data role mappings work.

In a real world deployment, user login is performed in an identity and access management 
system such as Keycloak or Microsoft Entra ID through the authenticator, and roles are also defined in (and fetched from) there.
