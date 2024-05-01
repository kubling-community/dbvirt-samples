import { fetchDeployments } from "/platforms/kubernetes/deployment";

print('Query received:\n' + queryFilter.yaml);
resultSet.dataFormat("JSON")

if (queryFilter.table === "DEPLOYMENTS") {
    fetchDeployments();
}