

if (queryFilter.table === "MY_TOKEN") {
    resultSet.addRow(JSON.stringify({
        "token": {
            "inMem": global.get("token"),
            "decrypted":  helper.decryptString(global.get("token"))
        }
    }));
}
resultSet.dataFormat("JSON")