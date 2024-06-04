import { generateAzureToken } from "../platform/api/TokenGenerator";

var deltaMinutes = (global.get("azure_api_client_token_exp") - helper.dt().nowSeconds()) / 60;
print("Delta minutes " + deltaMinutes);

if (deltaMinutes <= 8) generateAzureToken();