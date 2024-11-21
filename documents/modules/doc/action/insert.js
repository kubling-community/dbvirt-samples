import { createDeployments } from "../platforms/kubernetes/deployment";

logger.debug('Insert operation received on TABLE: ' + insertOperation.table);

if (insertOperation.table === "DEPLOYMENTS") {
    createDeployments();
}