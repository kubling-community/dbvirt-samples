import { updateDeployments } from "../platforms/kubernetes/deployment";

print('Update operation received on TABLE: ' + updateOperation.table);

var docPos = 0;
updateOperation.differences.forEach(function(diffResult) {

    if (!diffResult.modified.isEmpty()) {
        logger.debug(diffResult.modified.stringify());
        logger.debug('DOC >>> ' + updateOperation.jsonList.array()[docPos]);
        logger.debug('MOD >>> ' + diffResult.modified.array()[0]);
        logger.debug('JSONPath >>> ' + diffResult.modified.array()[0] + ' RETURNED ' +
            helper.jsonPath().read(updateOperation.jsonList.array()[docPos], diffResult.modified.array()[0]).stringify());
    }

    if (!diffResult.removed.isEmpty())
        logger.debug('REMOVED >>> ' + diffResult.removed.stringify());

    if (!diffResult.untouched.isEmpty())
        logger.debug('UNTOUCHED >>> ' + diffResult.untouched.stringify());

    docPos++;
});

if (updateOperation.table === "DEPLOYMENTS") {
    updateDeployments();
}