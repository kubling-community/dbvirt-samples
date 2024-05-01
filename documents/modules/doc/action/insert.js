import { createDeployments } from "/platforms/kubernetes/deployment";

print('Insert operation received on TABLE: ' + insertOperation.table);

if (insertOperation.table === "DEPLOYMENTS") {
    createDeployments();
}