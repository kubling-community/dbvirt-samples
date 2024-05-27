function(args) {
    print("Arguments " + args.componentId + ", " + args.vdb);
    var result = DBEngine.executeQuery(args.vdb, "SELECT name FROM app_db.COMPONENT WHERE id = '"+args.componentId+"'");
    if (result.count === 0)
        throw new Error("Invalid component ID");
    print("Returning " + result.rows.array()[0].name);
    return result.rows.array()[0].name;
}