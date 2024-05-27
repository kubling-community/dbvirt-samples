function(args) {
    return (DBEngine.executeQuery(
                args.vdb, `SELECT schema FROM k8s.NAMESPACE WHERE metadata__name = '${args.namespace}' AND schema = '${args.cluster}'`)
                .count !== 0);
}