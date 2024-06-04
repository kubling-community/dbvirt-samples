
// 'global' is a thread-safe in-memory KeyValue store, which is always injected into every JS context.

// 'helper' object contains useful functions which are compiled statically along with the Engine's core,
// meaning that execution time is much faster than any function executed inside a JS context
// helper.dt() returns and object to work with DT and TZ. Default TZ is UTC
global.put("token", helper.encryptString("my_secret_token_" + helper.dt().nowSeconds()));

// 'initResult' allows to control the Engine's startup flow, by information whether the required initialization steps
// were successful. In case they were not, the Engine will stop execution and will exit.
initResult.initialized();

// in case of error just call 'initResult.error([message])'