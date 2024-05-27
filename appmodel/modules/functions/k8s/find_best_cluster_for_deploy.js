// This function returns the SCHEMA name of the "best" Kubernetes cluster where to schedule the workload.
// The approach is really simple and only valid to showcase a more complex flow like this, in which multiple sources of the same
// kind are involved in operations (actions or even queries)
function(args) {

    // If there was a previous deployment of this particular component, we keep using the same cluster
    var result = DBEngine.executeQuery(
        args.vdb,
        `SELECT deployment_identifier FROM app_db.COMPONENT_DEPLOYMENT_JOIN WHERE component_id = '${args.componentId}' AND environment = '${args.env}'`);

    if (result.count === 0) {
        // We determine how many clusters are registered using tags...
        const tables = DBEngine.getTableNamesByTags(args.vdb, null, ["kubernetes", "deployment"]);
        if (tables.isEmpty())
            throw new Error("No tables found tagged with: kubernetes;deployment");
        const index = Math.floor(Math.random() * (tables.size() - 1 + 1) + 1);
        print(index);
        print(tables.get(index - 1));
        return tables.get(index - 1).substring(0, tables.get(index - 1).indexOf("."));

    } else {

        // We need an additional query to determine the cluster<>schema
        result = DBEngine.executeQuery(
                args.vdb,
                `SELECT schema FROM k8s.DEPLOYMENT where identifier = '${result.getFirst().deployment_identifier}'`);

        print(result.count);
        return result.getFirst().schema;
    }
}