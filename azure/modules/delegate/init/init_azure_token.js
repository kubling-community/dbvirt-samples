import { generateAzureToken } from "../platform/api/TokenGenerator";

try {
    generateAzureToken();
    initResult.initialized();
} catch (e) {
    initResult.error(e.message);
}
