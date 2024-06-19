import { deleteGitHubRepo } from "../platforms/github/github_repo";

print('Delete operation received on TABLE: ' + deleteOperation.table);

if (deleteOperation.table === "CODE_REPO") {
    deleteGitHubRepo();
}
