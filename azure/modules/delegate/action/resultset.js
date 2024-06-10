import { handleAzureArcDataQuery } from "../platform/api/azurearcdata/AzureArcDataDelegate";
import { handleAzurecontainerRegistry } from "../platform/api/containerregistry/AzureContainerRegistryDelegate";
import { handleStorageQuery } from "../platform/api/storage/StorageAPIDelegate";

print('Query received:\n' + queryFilter.json);

if (queryFilter.table.startsWith("STORAGE_")) {
    handleStorageQuery();
} else if (queryFilter.table.startsWith("PSQL_")) {
    handleAzureArcDataQuery();
} else if (queryFilter.table.startsWith("CONTAINER_REGISTRY")) {
    handleAzurecontainerRegistry();
}
resultSet.dataFormat("JSON");