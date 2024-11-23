# Azure Generated Code Model Sample

## Goal
This example demonstrates how to interact with a complex, heavyweight, and (for some) convoluted endpoint like Azure's.

The Azure client, located in the delegate module under "platform" and containing only Storage and Billing clients, 
was generated using their OpenAPI specification. This means the code is unpolished and not optimized for performance. 
For instance, many JavaScript files contain unused imports.

This test evaluates how the engine behaves when modules are "big." In this context, "big" refers to:
- Sub-evaluations via import statements.
- A considerable number of variables and class instances in a single context.

> **_Important:_** To use this sample, you need:
> - An Azure account.
> - A registered application in Entra ID with a generated secret and required permissions.
>
> For more details, see [the official Azure documentation](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-configure-app-access-web-apis#application-permission-to-microsoft-graph).

**Difficulty**: Medium

---

## SQL Transform Functions
This sample introduces the "custom transform/parse function" feature, allowing users to define custom functions to 
transform column values. These functions are bundled in a separate module file. 
For more details, see [the bundle info](modules/parser/bundle-sql-function-info.yaml).

---

## Dynamic Evaluation
In specific scenarios where the entry script (e.g., `resultset`) contains multiple imports, the dynamic evaluation 
feature may be beneficial.

Dynamic evaluation allows scripts to be evaluated on the fly without importing functions or classes, simplifying 
the compiler's workload. Every context includes a special object called `executeJS`, which executes JavaScript code, 
parses it, and evaluates it dynamically.

### Key Considerations
Dynamic evaluation creates a new context for each `eval` call, suspending the current context until the evaluation completes. 
Here's a trade-off comparison:
- **Imports**: Generate a larger abstract syntax tree (AST) but use a single context.
- **Dynamic Evaluation (`executeJS`)**: Creates a new context per call but can result in a smaller final AST when designed properly.

**Suggestion**: Benchmark both approaches by observing how the engine behaves in your specific scenario.

To test dynamic evaluation:
- Uncomment the second `resultSetScript` in [bundle-script-info.yaml](modules%2Fdelegate%2Fbundle-script-info.yaml).
- Explore [rs_router.js](modules%2Fdelegate%2Faction%2Frs_router.js) to see how the `eval` chain operates.

---

### Estimating Engine Effort
The Storage account handler in both implementations prints the Azure API's response time, referred to as `printed_time`. 
To estimate the engine's effort:
1. Enable the `psql` feature with `\timing on`.
2. Record the reported time in milliseconds as `total_time`.
3. Calculate: `effort(ms) = total_time - printed_time`.

---

## The kdv CLI Tool
The [bundle generator](gen-bundles.sh) for this sample does not use the standard `zip` command to create the JSON module bundle. 
Instead, it leverages the `kdv` CLI tool.

`kdv` is distributed as an OCI image, allowing it to be run with any compatible container runtime, such as Docker.

### Key Details About `kdv`
The Kubling engine does not use the underlying OS filesystem to load JavaScript files. Instead:
- All files are cached in memory and pre-parsed during engine initialization.
- Paths used for loading resources refer to the bundle's root directory, not the host machine's filesystem.

This approach complicates development because IDEs like Visual Studio Code rely on file paths relative to the current 
file location, which is incompatible with Kubling resource paths.

To address this:
- `kdv` parses all JavaScript files during module bundle creation.
- It transforms `import` paths into engine-compatible paths, enabling you to treat a module bundle project as a regular 
- JavaScript project in most IDEs.

> **_Important:_** `kdv` is a work-in-progress (WIP) project. Future features will include testing JavaScript modules, templates, and configuration files to detect issues early in development.

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
    -p 35432:35432 -p 35482:35482 -p 8282:8282 \
    -v [/path/to/dbvirt-samples]:[mount/path] \
    kubling/kubling-ce:latest
```

Or, assuming that you cloned the repo in `~/dbvirt-samples`, just run:
```
docker run --rm \
    -e DESCRIPTOR_BUNDLE=/dbvirt-samples/azure/azure-descriptor-bundle.zip \
    -e APP_CONFIG=/dbvirt-samples/azure/app-config.yaml \
    -e MODULE_BUNDLE=/dbvirt-samples/azure/modules/azure-module-bundle.zip \
    -e SQL_FUNCTIONS_BUNDLE=/dbvirt-samples/azure/modules/azure-sql-fn-parser-bundle.zip \
    -e PROPS_FILE=/dbvirt-samples/azure/azure.properties \
    -p 35432:35432 -p 35482:35482 -p 8282:8282 \
    -v ~/dbvirt-samples:/dbvirt-samples \
    kubling/kubling-ce:latest
```

### 4. Queries
* `SELECT * FROM app_delegate.STORAGE_ACCOUNT WHERE kind = 'StorageV2';`
* `INSERT INTO app_delegate.STORAGE_ACCOUNT (name, resourceGroup, properties__accessTier, sku, kind, location)
   VALUES('FILL_ME', 'FILL_ME', 'Hot', '{"name" : "Standard_LRS", "tier" : "Standard"}', 'StorageV2', 'westeurope');`