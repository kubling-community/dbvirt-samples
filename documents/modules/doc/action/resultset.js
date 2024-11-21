import { fetchDeployments } from "../platforms/kubernetes/deployment";

logger.debug('Query received:\n' + queryFilter.yaml);
resultSet.dataFormat("JSON")

if (queryFilter.table === "DEPLOYMENTS") {
    fetchDeployments();
}