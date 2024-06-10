import StorageAccountsApi from "../../../../platform/api/storage/api/StorageAccountsApi";
import { isNotUndefinedOrNull } from "../../../../utils/utils"

var storageApi = new StorageAccountsApi(contextVars.apiClient);
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