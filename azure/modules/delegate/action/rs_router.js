print("Using dynamic ROUTING")
print('Query received:\n' + queryFilter.json);

if (queryFilter.table.startsWith("STORAGE_")) {
    executeJS.eval('action/rs/azure/storage/storage_route');
} else if (queryFilter.table.startsWith("PSQL_")) {
    executeJS.eval('action/rs/azure/arc/arc_route');
} else if (queryFilter.table.startsWith("CONTAINER_REGISTRY")) {
    executeJS.eval('action/rs/azure/registry/registry_route');
}
resultSet.dataFormat("JSON");