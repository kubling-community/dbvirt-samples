import { createGitHubRepo } from "../platforms/github/github_repo";

logger.debug('APP_MODEL.insert', 'Insert operation received on TABLE: ' + insertOperation.table);
logger.debug('APP_MODEL.insert', 'Values: ' + insertOperation.fieldValues.stringify());

if (insertOperation.table === "CODE_REPO") {
    createGitHubRepo();
}