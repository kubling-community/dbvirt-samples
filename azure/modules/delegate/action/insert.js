import ApiClient from "../platform/api/BaseApiClient";
import StorageAccountsApi from "../platform/api/storage/api/StorageAccountsApi";
import Sku from "../platform/api/storage/model/Sku";
import StorageAccountCreateParameters from "../platform/api/storage/model/StorageAccountCreateParameters";
import StorageAccountPropertiesCreateParameters from "../platform/api/storage/model/StorageAccountPropertiesCreateParameters";
import { isNotUndefinedOrNull } from "../utils/utils";

print('Insert operation received on TABLE: ' + insertOperation.table);
print('Values: ' + insertOperation.fieldValues.stringify());

var client = new ApiClient();
client.authentications = {
    'azure_auth': {
        type: 'oauth2',
        accessToken: global.get("azure_api_client_token")
    }
}

if (insertOperation.table === "STORAGE_ACCOUNT") {

    var storageApi = new StorageAccountsApi(client);
    var newStorageAccount = JSON.parse(insertOperation.jsonList.getFirst());

    var sku = new Sku(newStorageAccount.sku.name);
    sku.tier = newStorageAccount.sku.tier;
    
    var p = new StorageAccountCreateParameters(sku, newStorageAccount.kind, newStorageAccount.location);

    var params = new StorageAccountPropertiesCreateParameters();
    params.accessTier = newStorageAccount.properties.accessTier;

    p.properties = params;

    storageApi.storageAccountsCreate(
        newStorageAccount.resourceGroup, 
        newStorageAccount.name,
        contextVars.AZ_API_VERSION,
        contextVars.AZ_SUBSCRIPTION_ID,
        p,
        (err, data, code) => {
            if (isNotUndefinedOrNull(err)) throw new Error(err);
            affectedRows.increment();
        });

}