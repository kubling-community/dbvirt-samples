import { isNotUndefinedOrNull } from "../../../utils/utils";
import ApiClient from "./StorageApiClient";
import StorageAccountsApi from "./api/StorageAccountsApi";

export function handleStorageQuery() {

    var client = new ApiClient();
    client.authentications = {
        'azure_auth': {
            type: 'oauth2',
            accessToken: global.get("azure_api_client_token")
        }
    }

    if (queryFilter.table === "STORAGE_ACCOUNT") {
        var storageApi = new StorageAccountsApi(client);
        let init = helper.dt().nowMillis();
        print("INIT >>> " + init);
        storageApi.storageAccountsList(contextVars.AZ_API_VERSION, contextVars.AZ_SUBSCRIPTION_ID, 
            (err, data, code) => {
                if (isNotUndefinedOrNull(err)) throw new Error(err);
                let end = helper.dt().nowMillis();
                print("END >>> " + end);
                print("TOOK >>> " + (end - init) + " ms");
                for (let sa of data.value) {
                    resultSet.addRow(JSON.stringify(sa));
                }
            }
        );
    }
}