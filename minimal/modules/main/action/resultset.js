// Import path is relative to the root of the module
import { fetchDeployments } from "/fetch/kubling_deployment";

// queryFilter is automatically injected into the execution context, one of its properties is 'table' which contains
// the table name of the query.

print('Query received:\n' + queryFilter.yaml);

/*
    resultSet is also injected into the context and is the object that the engine will use to answer the query.
    It is a collection of rows, in this case each row is a json document. All row's documents must have the same schema.
*/
if (queryFilter.table === "KUBLING_DEPLOYMENT") {
    fetchDeployments().forEach(function(element) {
        resultSet.addRow(JSON.stringify(element))
    });
} else if (queryFilter.table === "NESTED_OBJECT") {
    resultSet.addRow(JSON.stringify({
        "my": {
            "field": "my_val",
            "nested": {
                "field": "my_nested_val"
            }
        }
    }));
}

/*
    When the engine receives the resultSet, it automatically generates fields by separating nested objects with double
    underscore '__', for example:
    "mykey": {
        "field1": "val",
        "field2": "val"
    }
    will be flatten into the following fields (or columns): mykey__field1, mykey__field2
*/
resultSet.dataFormat("JSON")