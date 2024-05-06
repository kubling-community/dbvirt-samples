# dbvirt-samples

[![Kubling license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

Kubling Data Source Virtualization (or DBVirt) is a virtual-schemafull database engine that delegates the data fetch and feeding to custom Javascript modules, meaning better flexibility by removing dependencies on vendor-provided connectors.

DBVirt follows CI/CD and DevOps principles, that is, the engine loads definition and configurations dynamically from a released bundle file which,
in turn, can define other dependencies as JavaScript modules.

## Motivation
While working on a platform for containerized workloads, we realized that the proliferation of tools would bring a lot of complexity to our platform's model
if we wanted to support them all.
<br/>
One of the first challenges we encountered is that those tools name things differently, even though most of them are based originally in Kubernetes.
That lead us to start designing an abstraction layer which also involves a minimal definition of certain common concepts, like `DEPLOYMENT` or `STORAGE VOLUME`.


Conclusion was interesting: we found out that the intersection of definitions from multiple tools is a set a common properties that, fortunately, represent
the dynamic part of the workload scheduling process and resource creation, whereas the tool-specific parts were mostly associated to properties defined in provisioning scripts
which are occasionally changed.
<br/>
That was good news because minimizing the definition of `DEPLOYMENT` would imply the loss of flexibility and could compromise the adaptability when providing services
to teams that require capacity for running workloads.

Kubling DBVirt then acts as a fully-consistent CRUD translation layer, allowing to define "simplified" entities whose meaning should not be associated to any specific implementation, with the
ability to deal with any tool's complexity using custom JavaScript code.
Besides, those minimized entities could be the result of a combination of other entities, that is, when querying `DEPLOYMENT`s the result we see is an aggregation of deployments
fetched from, for example, Kubernetes on-prem, AKS and Docker containers running in VMs.


## Organization of the samples
| Directory             | Goal                                                                                                                                                                                                                      |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| minimal               | A really simple example in which we create a Virtual Database with a single virtual entity.                                                                                                                               |
| RBAC                  | Similar to the minimal example but with a really small custom authentication/authorization script.                                                                                                                        |
| initializer/scheduler | Explores how to use initialization script and scheduler                                                                                                                                                                   |
| documents             | Learn how to deal with complex nested documents, and how to decide whether DBVirt can help.                                                                                                                               |
| endpoints             | In this sample we will expose some endpoints to chain operations (actions) and to query data.                                                                                                                             |
| azure (WIP)           | A ConfigMap example for those creating `DBVirt` instances from the Azure Marketplace.                                                                                                                                     |
| appmodel (WIP)        | This is the most advanced example in which we build a Data Model for a company that has multiple applications and wants to create provisioning workflows and abstract developers from the underlying system's complexity. |

### Organization of each sample
| Directory/File  |                                                                                                                                                                                     |
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
