// we just replace the current token
global.put("token", helper.encryptString("my_secret_token_" + datetime.currentTimeSeconds()));