import { isArrayEmpty, isNotUndefinedOrNull } from "../../../utils/utils";
import { validError } from "../azure_utils";
import ApiClient from "./ApiClient";
import SqlManagedInstancesApi from "./api/SqlManagedInstancesApi";

export function handleAzureArcDataQuery() {

    var client = new ApiClient();
    client.authentications = {
        'azure_auth': {
            type: 'oauth2',
            accessToken: global.get("azure_api_client_token")
        }
    }

    if (queryFilter.table === "PSQL_SERVER") {
        
        let qFilter = JSON.parse(queryFilter.json);
        const rg = qFilter.filters.filter((f) => f.field === "resourceGroup" && f.operation == "EQUAL");
        if (isArrayEmpty(rg))
            throw new Error("Resrouce group is required.");

        var serversApi = new SqlManagedInstancesApi(client);
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
    
    }
    
}