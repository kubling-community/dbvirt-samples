var tests = {
    testCodeRepo: function() {
        try {
            var result = DBTest.executeQuery("SELECT * from CODE_REPO WHERE org = 'octocat'");
            // result is a list of rows
            assert.equals(2, result.size(), "testCodeRepo.rs.size");        
            // __colSize is an internal member that returns the number of informed columns, even though it is avaiable in all rows, number
            // will never differ
            assert.equals(12, result.getFirst().__colSize, "testCodeRepo.col.size");
            // fields can be accesses as regular members
            assert.equals("3qeDnTSgNw2RpYEe0CaRcyNdRs3060106467010", result.get(0).identifier, "testCodeRepo.r1.identifier");
            assert.equals("ou5bglaKF9iCsRgvPJqx3484494085010", result.get(1).identifier, "testCodeRepo.r2.identifier");
            assert.equals("https://github.com/octocat/Hello-World", result.get(0).html_url, "testCodeRepo.r1.html_url");
            assert.equals("https://github.com/octocat/Kubling", result.get(1).html_url, "testCodeRepo.r2.html_url");
    
            var owner = JSON.parse(result.get(0).owner);
            assert.equals("MDQ6VXNlcjE=", owner.node_id, "testCodeRepo.owner.node_id");
    
            testReport.reportSuccess();
        } catch (e) {
            testReport.reportError(e.message);
        }
    },
    testCodeRepoNoResult: function() {
        try {
            var result = DBTest.executeQuery("SELECT * from CODE_REPO WHERE org = 'octocat1'");
            assert.equals(0, result.size(), "testCodeRepoNoResult.size");
            testReport.reportSuccess();
        } catch (e) {
            testReport.reportError(e.message);
        }
    }
};

Object.values(tests)
  .filter(f => typeof f === 'function' )
  .forEach(f => f());