import RegistriesApi from "../../../../platform/api/containerregistry/api/RegistriesApi";
import { isNotUndefinedOrNull } from "../../../../utils/utils"

var serversApi = new RegistriesApi(contextVars.apiClient);
serversApi.registriesList("2017-03-01", contextVars.AZ_SUBSCRIPTION_ID,
    (err, data, code) => {
        if (isNotUndefinedOrNull(err)) throw new Error(err);
        for (let sa of data.value) {
            resultSet.addRow(JSON.stringify(sa));
        }
    }
);