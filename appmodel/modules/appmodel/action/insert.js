import { createGitHubRepo } from "/platforms/github/github_repo";

print('Insert operation received on TABLE: ' + insertOperation.table);
print('Values: ' + insertOperation.fieldValues.stringify());

if (insertOperation.table === "CODE_REPO") {
    createGitHubRepo();
}