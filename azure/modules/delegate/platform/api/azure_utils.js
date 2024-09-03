import { isNotUndefinedOrNull, removeEnclosingDoubleQuote } from "../../utils/utils";

// This is an interesting check really common when dealing with APIs.
// Azure API, for example, returns an error when the Resource Group does not exist, however, from the SQL viewpoint, that should
// not be an error but an empty array instead
export function validError(err) {
    if (!helper.isValidJson(err)) return false;
    const jsonError = JSON.parse(helper.unescapeJson(removeEnclosingDoubleQuote(err)));
    if (isNotUndefinedOrNull(jsonError.error) && isNotUndefinedOrNull(jsonError.error.code)) {
        const code = jsonError.error.code;
        if (code === "ResourceGroupNotFound")
            return true;
    }
    return false;
}