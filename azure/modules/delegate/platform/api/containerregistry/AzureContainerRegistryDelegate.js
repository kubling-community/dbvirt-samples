import { isNotUndefinedOrNull } from "../../../utils/utils";
import ApiClient from "../BaseApiClient";
import RegistriesApi from "./api/RegistriesApi";

export function handleAzurecontainerRegistry() {

    var client = new ApiClient();
    client.authentications = {
        'azure_auth': {
            type: 'oauth2',
            accessToken: global.get("azure_api_client_token")
        }
    }

    if (queryFilter.table === "CONTAINER_REGISTRY") {
    
        var serversApi = new RegistriesApi(client);
        serversApi.registriesList("2017-03-01", contextVars.AZ_SUBSCRIPTION_ID,
            (err, data, code) => {
                if (isNotUndefinedOrNull(err)) throw new Error(err);
                for (let sa of data.value) {
                    resultSet.addRow(JSON.stringify(sa));
                }
            }
        );    
    
    }
    
}