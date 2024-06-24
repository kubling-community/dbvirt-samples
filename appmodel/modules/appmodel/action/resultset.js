import { fetchGitHubRepos } from "../platforms/github/github_repo";

print('Query received:\n' + queryFilter.json);

if (queryFilter.table === "CODE_REPO") {
    fetchGitHubRepos();
}

resultSet.dataFormat("JSON");