import { toJsonPathFieldName, toJsonPathFieldOperation } from "/utils/utils";

export function fetchDeployments() {

    var url = contextVars.kubernetes_api_url+"/apis/apps/v1/deployments";

    let qFilter = JSON.parse(queryFilter.json);
    const filters = qFilter.filters.map((f) => toJsonPath(f));
    var iteration = 0;
    for (let f of filters) {
        if (iteration === 0)
            url = url + "?fieldSelector=";
        else
            url = url + "%2C";
        url = url + f;
        iteration++;
    }

    const items = callAPI(
    {
        "url": url,
        "decodeUrl": false,
        "method": "GET"
    }).items;
    items.forEach(function(item) {
        resultSet.addRow(JSON.stringify(item))
    });

}

export function createDeployments() {

    insertOperation.jsonList.forEach(function(item) {
            print('Insert Document: ' + item);
            const jsonObj = JSON.parse(item);
            print(`${contextVars.kubernetes_api_url}/apis/apps/v1/namespaces/${jsonObj.metadata.namespace}/deployments`)
            callAPI(
            {
                "url": `${contextVars.kubernetes_api_url}/apis/apps/v1/namespaces/${jsonObj.metadata.namespace}/deployments`,
                "body": item,
                "decodeUrl": false,
                "method": "PUT"
            });
            affectedRows.increment();
    });

}

export function updateDeployments() {

    updateOperation.jsonList.forEach(function(item) {
            print('Update Document >>> ' + item);
            const jsonObj = JSON.parse(item);
            print(`Calling >>> ${contextVars.kubernetes_api_url}/apis/apps/v1/namespaces/${jsonObj.metadata.namespace}/deployments/${jsonObj.metadata.name}`)
            callAPI(
            {
                "url": `${contextVars.kubernetes_api_url}/apis/apps/v1/namespaces/${jsonObj.metadata.namespace}/deployments/${jsonObj.metadata.name}`,
                "body": item,
                "decodeUrl": false,
                "method": "PUT"
            });
            affectedRows.increment();
    });

}

function callAPI(req) {

    var response = httpCli.exec(req);
    if (response.statusCode !== 200 && response.statusCode !== 201)
        throw new Error(`Error calling Kubernetes API: ${response.statusCode} ${response.content}`);

    return JSON.parse(response.content);

}

function toJsonPath(filter) {
    return toJsonPathFieldName(filter.field) + toJsonPathFieldOperation(filter.operation) + filter.value;
}
