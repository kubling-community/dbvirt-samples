var tests = {
    testCodeRepo: function () {
        var result = DBTest.executeQuery("SELECT * from CODE_REPO WHERE org = 'octocat'");
        // result is a list of rows
        assert.equals(2, result.size(), "rs.size");
        // __colSize is an internal member that returns the number of informed columns, even though it is available in all rows, number
        // will never differ
        assert.equals(12, result.getFirst().__colSize, "col.size");
        // fields can be accesses as regular members
        assert.equals("3qeDnTSgNw2RpYEe0CaRcyNdRs3060106467010", result.get(0).identifier, "r1.identifier");
        assert.equals("ou5bglaKF9iCsRgvPJqx3484494085010", result.get(1).identifier, "r2.identifier");
        assert.equals("https://github.com/octocat/Hello-World", result.get(0).html_url, "r1.html_url");
        assert.equals("https://github.com/octocat/Kubling", result.get(1).html_url, "r2.html_url");

        var owner = JSON.parse(result.get(0).owner);
        assert.equals("MDQ6VXNlcjE=", owner.node_id, "owner.node_id");

    },
    testCodeRepoNoResult: function () {
        var result = DBTest.execute("SELECT * from CODE_REPO WHERE org = 'octocat1'");
        assert.equals(0, result.size(), "size");
    },
    testInsert: function () {
        assert.equals(1,
            DBTest.execute("INSERT INTO CODE_REPO (org, name, description, private) values ('octocat', 'test_repo', 'For testing', true)"),
            "count");
    },
    testUpdate: function () {
        assert.equals(2,
            DBTest.execute("UPDATE CODE_REPO SET description = 'new description' WHERE org = 'octocat'"),
            "count");
    },
    testDelete: function () {
        var count = DBTest.execute("DELETE FROM CODE_REPO WHERE org = 'octocat'");
        assert.equals(2, count, "count.org");
        count = DBTest.execute("DELETE FROM CODE_REPO WHERE identifier = '3qeDnTSgNw2RpYEe0CaRcyNdRs3060106467010'");
        assert.equals(1, count, "count.identifier");
    }
};

// We recommend following this approach/structure in your tests so you don't have to write code to informing testReport
Object.values(tests)
    .filter(f => typeof f === 'function')
    .forEach(f => {
        try {
            f();
            testReport.reportSuccess();
        } catch (e) {
            testReport.reportError(f.name + " : " + e.message);
        }
    });