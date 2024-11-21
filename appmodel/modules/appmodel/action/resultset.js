import { fetchGitHubRepos } from "../platforms/github/github_repo";

logger.debug('APP_MODEL.rs', 'Query received:\n' + queryFilter.json);

if (queryFilter.table === "CODE_REPO") {
    fetchGitHubRepos();
}

resultSet.dataFormat("JSON");