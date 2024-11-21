import { deleteGitHubRepo } from "../platforms/github/github_repo";

logger.debug('APP_MODEL.delete', 'Delete operation received on TABLE: ' + deleteOperation.table);

if (deleteOperation.table === "CODE_REPO") {
    deleteGitHubRepo();
}
