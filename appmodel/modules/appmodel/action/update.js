import { updateGitHubRepo } from "../platforms/github/github_repo";

const ctx = 'APP_MODEL.update';

logger.debug(ctx, 'Update operation received on TABLE: ' + updateOperation.table);

var docPos = 0;
updateOperation.differences.forEach(function(diffResult) {

    if (!diffResult.modified.isEmpty()) {
        logger.debug(ctx, diffResult.modified.stringify());
        logger.debug(ctx, 'DOC >>> ' + updateOperation.jsonList.array()[docPos]);
        logger.debug(ctx, 'MOD >>> ' + diffResult.modified.array()[0]);
        logger.debug(ctx, 'JSONPath >>> ' + diffResult.modified.array()[0] + ' RETURNED ' +
            helper.jsonPath().read(updateOperation.jsonList.array()[docPos], diffResult.modified.array()[0]).stringify());
    }

    if (!diffResult.removed.isEmpty())
        logger.debug(ctx, 'REMOVED >>> ' + diffResult.removed.stringify());

    if (!diffResult.untouched.isEmpty())
        logger.debug(ctx, 'UNTOUCHED >>> ' + diffResult.untouched.stringify());

    docPos++;
});

if (updateOperation.table === "CODE_REPO") {
    updateGitHubRepo();
}