import { updateGitHubRepo } from "/platforms/github/github_repo";

print('Update operation received on TABLE: ' + updateOperation.table);

var docPos = 0;
updateOperation.differences.forEach(function(diffResult) {

    if (!diffResult.modified.isEmpty()) {
        print(diffResult.modified.stringify());
        print('DOC >>> ' + updateOperation.jsonList.array()[docPos]);
        print('MOD >>> ' + diffResult.modified.array()[0]);
        print('JSONPath >>> ' + diffResult.modified.array()[0] + ' RETURNED ' +
            helper.jsonPath().read(updateOperation.jsonList.array()[docPos], diffResult.modified.array()[0]).stringify());
    }

    if (!diffResult.removed.isEmpty())
        print('REMOVED >>> ' + diffResult.removed.stringify());

    if (!diffResult.untouched.isEmpty())
        print('UNTOUCHED >>> ' + diffResult.untouched.stringify());

    docPos++;
});

if (updateOperation.table === "CODE_REPO") {
    updateGitHubRepo();
}