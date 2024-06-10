export function generateAzureToken() {
    var tokenRequest = {
        "url": `https://login.microsoftonline.com/${contextVars.AZ_TENANT_ID}/oauth2/v2.0/token`,
        "method": "POST",
        "form": {
            "scope": "https://management.azure.com/.default",
            "client_id": contextVars.AZ_CLIENT_ID,
            "client_secret": contextVars.AZ_CLIENT_SECRET,
            "grant_type": "client_credentials"
        }
    }
    
    print(JSON.stringify(tokenRequest));
    let resp = httpCli.exec(tokenRequest);
    if (resp.statusCode >= 400) {
        throw new Error(resp.content);
    } else {
        let tk = JSON.parse(resp.content);
        var expirationInstant = helper.dt().fromMillisToSeconds(helper.dt().nowPlusSeconds(tk.expires_in));
        global.put("azure_api_client_token", tk.access_token);
        global.put("azure_api_client_token_exp", expirationInstant);
    }
}