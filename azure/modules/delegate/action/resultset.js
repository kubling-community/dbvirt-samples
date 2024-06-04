import ApiClient from "../platform/api/BaseApiClient";
import StorageAccountsApi from "../platform/api/storage/api/StorageAccountsApi";
import { isNotUndefinedOrNull } from '../utils/utils';

print('Query received:\n' + queryFilter.json);

var client = new ApiClient();
client.authentications = {
    'azure_auth': {
        type: 'oauth2',
        accessToken: global.get("azure_api_client_token")
    }
}

if (queryFilter.table === "STORAGE_ACCOUNT") {
    
    var storageApi = new StorageAccountsApi(client);
    storageApi.storageAccountsList(contextVars.AZ_API_VERSION, contextVars.AZ_SUBSCRIPTION_ID, 
        (err, data, code) => {
            if (isNotUndefinedOrNull(err)) throw new Error(err);
            for (let sa of data.value) {
                resultSet.addRow(JSON.stringify(sa));
            }
        }
    );    

}

resultSet.dataFormat("JSON");