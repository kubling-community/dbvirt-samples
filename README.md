# dbvirt-samples

[![Kubling license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

Kubling Data Source Virtualization (or DBVirt) is a virtual-schemafull database engine that delegates the data fetch and feeding to custom Javascript modules, meaning better flexibility by removing dependencies on vendor-provided connectors.

DBVirt follows CI/CD and DevOps principles, that is, the engine loads definition and configurations dynamically from a released bundle file which,
in turn, can define other dependencies as JavaScript modules.

## Organization of the samples
| Directory         | Goal                                                                                                                                                                                                                      |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| minimal           | A really simple example in which we create a Virtual Database with a single virtual entity.                                                                                                                               |
| RBAC              | Similar to the minimal example but with a really small custom authentication/authorization script.                                                                                                                        |
| initializer (WIP) | Explores how to use initialization script and scheduler                                                                                                                                                                   |
| endpoints (WIP)   | In this sample we will expose some endpoints to chain operations (actions) and to query data                                                                                                                              |
| azure (WIP)       | A ConfigMap example for those creating `DBVirt` instances from the Azure Marketplace.                                                                                                                                     |
| appmodel (WIP)    | This is the most advanced example in which we build a Data Model for a company that has multiple applications and wants to create provisioning workflows and abstract developers from the underlying system's complexity. |

### Organization of each sample
| Directory/File  | Goal                                                                                                                                                                                |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| descriptor      | Contains the main bundle that will be loaded during engine initialization.                                                                                                          |
| modules         | Contains the JavaScript modules the descriptor specifies                                                                                                                            |
| app-config.yaml | The only non-dynamic configuration file that the Engine reads during initialization which specifies some Engine configurations and, more important, VDB descriptor bundle location  |

## Configuration Yaml files
Yaml files are always parsed as templates, in this sample project we will use basic expressions delimited by `{{ ··· }}` that will be mostly replaced by environment variables and loaded variables injected in the template context.
More advanced use cases will be added as this project grows.

## How to interact with the engine
Once your instance is running and configured, the easiest way to interact with it is by connecting using [PostgresSQL](https://www.postgresql.org/docs/current/protocol-message-formats.html)
client since, by default, `DBVirt` listens to connections using this protocol on port `35432`.

Just run `psql -h <IP/HOSTNAME> -p 35432 -U <USERNAME> -d <VDB>`

## Debug JS Actions
By default, `DBVirt` does not print out any internal log message to the console, leaving it clean for scripts.
In case you need to add debug messages, just `print("My debug message");` from any script and get container's logs printed in the `stdout`.