import ApiClient from "../../../../platform/api/azurearcdata/ApiClient";

var client = new ApiClient();
client.authentications = {
    'azure_auth': {
        type: 'oauth2',
        accessToken: global.get("azure_api_client_token")
    }
}

contextVars.apiClient = client;

if (queryFilter.table === "PSQL_SERVER") {
    executeJS.eval('action/rs/azure/arc/psql_server');
}

