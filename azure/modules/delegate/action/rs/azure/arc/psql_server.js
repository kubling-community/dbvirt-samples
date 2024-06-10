import SqlManagedInstancesApi from "../../../../platform/api/azurearcdata/api/SqlManagedInstancesApi";
import { isArrayEmpty, isNotUndefinedOrNull } from "../../../../utils/utils"

let qFilter = JSON.parse(queryFilter.json);
const rg = qFilter.filters.filter((f) => f.field === "resourceGroup" && f.operation == "EQUAL");
if (isArrayEmpty(rg))
    throw new Error("Resrouce group is required.");

var serversApi = new SqlManagedInstancesApi(contextVars.apiClient);
serversApi.sqlManagedInstancesListByResourceGroup(contextVars.AZ_SUBSCRIPTION_ID, rg[0].value, "2023-01-15-preview",
    (err, data, code) => {
        if (isNotUndefinedOrNull(err)) {
            if (!validError(err)) throw new Error(err);
        } else {
            for (let sa of data.value) {
                resultSet.addRow(JSON.stringify(sa));
            }
        }
    }
);