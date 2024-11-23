# Using the `kdv` CLI tool

`kdv` is a binary CLI tool that contains useful commands to accomplish dev-and-build-related tasks.

## An explanation on its size

Even though `Kubling DBVirt` is not a heavy application (OCI Image is <120MB) and its CE version has almost all features you
need during development, which makes it a perfect fit for your local dev environment, some tasks like testing can be challenging
and time-consuming if each simple change you make in the JavaScript handler (module) requires restarting a `testcontainer`.

On the other hand, CLI tools and packages tend to be small, in the order of KB, especially in the Linux world.
However, the first thing you'll notice is that `kdv` is big, at least when comparing to other CLI.<br>
That is because `kdv` contains half of the packages and dependencies used by the server itself, like the `JavaScript` language
interpreter and evaluator (`Context` as we often refer to them) and `SQL` parser and executor.

The only reason to have all those packages embedded in a CLI, is because we created a special `test` command which will help
you to write and execute integration tests in a declarative way (as shown below), as a part of our effort to integrate with popular IDEs like Visual Studio Code.

## Distribution
For local dev environment we recommend using the binary file whose distribution channel is still under development.

In pipelines, workflows or in case you prefer using containers, you can [find them here](https://hub.docker.com/r/kubling/kubling-cli/tags).

## Commands

### &bull; `bundle`
It aggregates various utilities for working with bundle files, like Modules.

#### Subcommands
#### &rarr; `genmod`
Generates a JavaScript Module file.

| Name            | Type         | Description                                                                | Default Value |
|-----------------|--------------|----------------------------------------------------------------------------|---------------|
| Directory Path  | Parameter(0) | Path to the root of the directory containing Module's code.                |               |
| -o, --output    | Option       | Full file name of the generated bundle zip file.                           |               |
| -p, --parse     | Option       | When enabled, all JavaScript files are parsed before bundle is generated.  | `false`       |

Sample usage:<br>
`kdv bundle genmod /dbvirt-samples/azure/modules/delegate -o /dbvirt-samples/azure/modules/azure-module-bundle.zip --parse`

### &bull; `test`
Utilities for performing tests.

#### Subcommands
#### &rarr; `integration`
Runs an Integration test plan.

| Name         | Type         | Description                    | Default Value |
|--------------|--------------|--------------------------------|---------------|
| File Path    | Parameter(0) | Test plan manifest file path.  |               |

Sample usage:<br>
`kdv test integration /dbvirt-samples/appmodel/integration-test-plan.yaml`

### &bull; `cert`
Utilities for working with Kubling Server and Client certificates.

#### Subcommands
#### &rarr; `create`
Creates a pair of certificate stores to use in Server and Client.

| Name             | Type    | Description                                                     | Default Value    |
|------------------|---------|-----------------------------------------------------------------|------------------|
| -v, --validity   | Option  | SERVER and CLIENT certificate store validity expressed in days. | 180              |
| -s, --server     | Option  | Full file name of the generated SERVER certificate store.       | ./server.ks      |
| -c, --client     | Option  | Full file name of the generated CLIENT certificate store.       | ./client.ks      |
| -p, --clientPass | Option  | CLIENT certificate store password.                              | (Random String)  |
| -x, --serverPass | Option  | SERVER certificate store password.                              | (Random String)  |
| -o, --overwrite  | Option  | Overwrite store files if they already exist.                    | `false`          |

Sample usage:<br>
`kdv cert create -s /certs/server.ks -c /certs/client.ks -x myserverpass -p myclientpass -o`