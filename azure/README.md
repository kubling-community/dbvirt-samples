# Azure Generated Code Model Sample

Goal
: This example shows how to interact with a complex, heavyweight and (for some) convoluted endpoint like Azure's.
<br>
The Azure client, which is in the delegate module under "platform" and contains only Storage and Billing clients,
was generated using their OpenApi spec, meaning that code is not polished, so we don't expect to be performant.
Besides, no optimizations were applied, like unused imports in a lot of js files.
<br>
<br>
That is interesting since the idea is to test how the engine behaves when modules are "big" which, in our context,
means sub-evaluations via import statements as well as a considerable amount of variables and class instances in a single context. 

> **_Important:_** You do need to have an Azure account and a valid registered app in Entra ID, a generated secret
> and required permissions, for this sample to work.
> <br>
> For more information please see [the official Azure documentation](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-configure-app-access-web-apis#application-permission-to-microsoft-graph)

Difficulty
: Medium

## SQL Transform functions
In this sample we introduce the "custom transform/parse function" feature that gives users the possibility to define
custom functions that can be invoked to transform the value of a column.
Functions are bundled in a separate module file, for more info please see [the bundle info](modules/parser/bundle-sql-function-info.yaml)

## The kdv CLI tool
The [bundle generator](gen-bundles.sh) of this sample does not create the json module bundle using the standard `zip` command,
instead it uses the `kdv` binary located in the [root of the repo](../kdv).
To understand what it does, it is important to note that the engine does not use the underlying OS's filesystem to get JavaScript
files, since everything is cached in memory and pre-parsed during engine initialization.

Therefore, paths used for loading resources do not refer to a regular file path in the host machine, but a full path
whose root is the root of the bundle zip file.<br>
That makes the development a bit difficult since, for example when using Visual Studio Code, all references to resources
are relative to the current file location, in other words, IDEs do not support the resources path Kubling DBVirt needs internally.
<br>
To remediate the issue, when building a module bundle, `kdv` parses all JavaScript files and transforms paths of `import` statements into paths
the engine can handle, meaning that you can treat a module bundle project as a regular JavaScript project in almost all IDEs.

> **_Important:_** `kdv` is a WIP project which will incorporate features for testing JavaScript modules, templates and
> configuration files, so you can detect issues as early as possible.

## How to test it

### 1. Generate bundle files
Execute [the gen-bundle script](gen-bundles.sh) to generate the zip files.

### 2. Fill the information for interacting with the API
Open [this file](azure.properties) and fill the required information. Field names are self-explanatory :D

### 3. Run container
This sample works well with our Community Edition, just replace the environment variables and run:

```
docker run --rm \ 
    -e DESCRIPTOR_BUNDLE=[/path/to/azure-descriptor-bundle.zip] \
    -e APP_CONFIG=[/path/to/app-config.yaml] \
    -e MODULE_BUNDLE=[/path/to/azure-module-bundle.zip] \
    -e SQL_FUNCTIONS_BUNDLE=[/path/to/azure-sql-fn-parser-bundle.zip] \
    -e PROPS_FILE=[/path/to/azure.properties] \
    -p 35432:35432 -p 8282:8282 \
    -v [/path/to/dbvirt-samples]:[mount/path] \
    kubling/dbvirt-ce:latest
```

Or, assuming that you cloned the repo in `~/dbvirt-samples`, just run:
```
docker run --rm \
    -e DESCRIPTOR_BUNDLE=/dbvirt-samples/azure/azure-descriptor-bundle.zip \
    -e APP_CONFIG=/dbvirt-samples/azure/app-config.yaml \
    -e MODULE_BUNDLE=/dbvirt-samples/azure/modules/azure-module-bundle.zip \
    -e SQL_FUNCTIONS_BUNDLE=/dbvirt-samples/azure/modules/azure-sql-fn-parser-bundle.zip \
    -e PROPS_FILE=/dbvirt-samples/azure/azure.properties \
    -p 35432:35432 -p 8282:8282 \
    -v ~/dbvirt-samples:/dbvirt-samples \
    kubling/dbvirt-ce:latest
```

### 4. Queries
* `SELECT * FROM app_delegate.STORAGE_ACCOUNT WHERE kind = 'StorageV2';`
* `INSERT INTO app_delegate.STORAGE_ACCOUNT (name, resourceGroup, properties__accessTier, sku, kind, location)
   VALUES('FILL_ME', 'FILL_ME', 'Hot', '{"name" : "Standard_LRS", "tier" : "Standard"}', 'StorageV2', 'westeurope');`