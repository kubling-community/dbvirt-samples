import { generateAzureToken } from "../platform/api/TokenGenerator";

var deltaMinutes = (global.get("azure_api_client_token_exp") - helper.dt().nowSeconds()) / 60;

print(global.get("azure_api_client_token_exp"));
print(helper.dt().nowSeconds());
print("Delta minutes " + deltaMinutes);

try {    
    if (deltaMinutes <= 8) generateAzureToken();
} catch (e) {
    initResult.error(e.message);
}