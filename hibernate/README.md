# Hibernate Sample

Goal
: In this sample project, you will get an idea of how to interact with `Kubling DBVirt` 
from a `SpringBoot` application using `JDBC` Driver
and Hibernate.

Difficulty
: Medium - Requires some basic JPA/Hibernate knowledge.

## How to test it
This sample uses the `appmodel` resources. [Follow instructions](../appmodel/README.md) before proceeding.
<br>
Once AppModel VDB is up and running, just run tests located in `test/com.kubling.sample.hibernate.repository`.

By default, tests use `unit-test` profile, assuming that `Kubling DBVirt` is running on `localhost` with no authentication
specified, in case your instance runs on a different address and/or you want to use `RBAC`, you can either inject environment
variables (`DB_X`) and repoint tests to the default profile, create a new profile with values or modify `unit-test`.