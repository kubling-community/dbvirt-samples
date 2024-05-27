import { isArrayEmpty, getFieldValue, isUndefinedOrNull, isNotUndefinedOrNull, incrementBasedOnAPIResponseOrFail } from "/utils/utils";

export function fetchGitHubRepos() {

    let qFilter = JSON.parse(queryFilter.json);
    const organizations = qFilter.filters.map((f) => extractFilterField(f, "org")).filter(x => x);
    const names = qFilter.filters.map((f) => extractFilterField(f, "name")).filter(x => x);
    if (isArrayEmpty(organizations))
                throw new Error("You must specify at least one organization.");
    if (isArrayEmpty(names)) {
        for (let result of getReposByOrg(organizations)) {
            if (!isArrayEmpty(result)) {
                for (let tuple of result) {
                    resultSet.addRow(JSON.stringify(tuple));
                }
            }
        }
    } else {
        for (let org of organizations) {
            print(org);
            getReposByName(org, names).forEach((resultByName) => {
                resultSet.addRow(JSON.stringify(resultByName));
            });
        }
    }
}

function extractFilterField(filter, fieldName) {
    if (filter.field === fieldName)
        return filter.value.toString();
    else
        return null;
}

function getReposByOrg(organizations) {
    var results = new Array();
    for (let org of organizations) {
        results.push(invokeGitHubReposApiGet(org));
    }
    return results;
}

function getReposByName(owner, names) {
    var results = new Array();
    for (let name of names) {
        results.push(invokeGitHubReposApiGetByName(owner, name));
    }
    results = results.filter(x => isNotUndefinedOrNull(x));
    return results;
}

function invokeGitHubReposApiGet(org) {

    let req = {
        "url": `${contextVars.gitHubURL}/orgs/${org}/repos`,
        "method": "GET",
        "headers": {
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "Authorization": `Bearer ${contextVars.gitHubPAT}`
        }
    }

    // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
    let resp = httpCli.exec(req);
    if (resp.statusCode !== 200) return null;
    // GitHub returns always a list
    let docs = JSON.parse(resp.content);

    // Org is not returned by GitHub, since it is somehow implicit in the request, therefore we add it into the doc.
    docs = docs.map(d => addOrg(d, org));
    print("DOCS >> " + JSON.stringify(docs));
    return docs;

}

function invokeGitHubReposApiGetByName(owner, name) {

    let req = {
        "url": `${contextVars.gitHubURL}/repos/${owner}/${name}`,
        "method": "GET",
        "headers": {
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "Authorization": `Bearer ${contextVars.gitHubPAT}`
        }
    }

    try {
        let resp = httpCli.exec(req);
        if (resp.statusCode !== 200) return null;
        return addOrg(JSON.parse(resp.content), owner);
    } catch (error) {
        throw new Error(error);
    }


}

function addOrg(doc, org) {
  doc.org = org;
  return doc;
}

function invokeGitHubRepoApiGet(repoName) {

    let req = {
        "url": `${contextVars.gitHubURL}/repos/${contextVars.gitHubOrg}/${repoName}`,
        "method": "GET",
        "headers": {
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "Authorization": `Bearer ${contextVars.gitHubPAT}`
        }
    }

    // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
    try {
        let resp = httpCli.exec(req);
        if (resp.statusCode !== 200) return [];
        return JSON.parse(resp.content);
    } catch (error) {
        return [];
    }

}

function transformToEntity(repo) {
    if (isUndefinedOrNull(repo.name)) return null;
    print(JSON.stringify(repo.owner));
    return {
        "org": contextVars.gitHubOrg,
        "id": repo.id,
        "node_id": repo.node_id,
        "name": repo.name,
        "full_name": repo.full_name,
        "url": repo.html_url,
        "description": repo.description,
        "private": repo.private,
        "visibility": repo.visibility,
        "owner": JSON.stringify(repo.owner)
    }
}

export function createGitHubRepo() {

     for (let d of insertOperation.jsonList) {

        var doc = JSON.parse(d);

        let repoData = {
            "org": doc.org,
            "name": doc.name,
            "homepage": "https://github.com",
            "description": doc.description,
            "private": true
        }

        let req = {
            "url": `${contextVars.gitHubURL}/orgs/${doc.org}/repos`,
            "method": "POST",
            "headers": {
                "Accept": "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
                "Authorization": `Bearer ${contextVars.gitHubPAT}`
            },
            "body": JSON.stringify(repoData)
        }

        incrementBasedOnAPIResponseOrFail(httpCli.exec(req));

    }
}

export function updateGitHubRepo() {

    var docPos = 0;
    updateOperation.jsonList.forEach(function(doc) {
        let newDoc = JSONPath.excludeNonListedFields(doc, updateOperation.differences.array()[docPos].modified.stringify());

        let fullDoc = JSON.parse(doc);
        let repoData = JSON.parse(newDoc);

        repoData.org = fullDoc.org;
        repoData.name = fullDoc.name;

        print("New Doc >>\n" + JSON.stringify(repoData));

        let req = {
           "url": `${contextVars.gitHubURL}/repos/${repoData.org}/${repoData.name}`,
           "method": "PATCH",
           "headers": {
               "Accept": "application/vnd.github+json",
               "X-GitHub-Api-Version": "2022-11-28",
               "Authorization": `Bearer ${contextVars.gitHubPAT}`
           },
           "body": JSON.stringify(repoData)
        }

        incrementBasedOnAPIResponseOrFail(httpCli.exec(req));

        docPos++;
    });

}

export function deleteGitHubRepo() {

    for (let d of deleteOperation.jsonList) {
        var doc = JSON.parse(d);
        let req = {
            "url": `${contextVars.gitHubURL}/repos/${doc.org}/${doc.name}`,
            "method": "DELETE",
            "headers": {
                "Accept": "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
                "Authorization": `Bearer ${contextVars.gitHubPAT}`
            }
        }
        // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#delete-a-repository
        let response = httpCli.exec(req);
        if (response.statusCode !== 204)
                throw new Error(`Error deleting GitHub repository: ${response.statusCode} ${response.content}`);
        affectedRows.increment();

    }

}