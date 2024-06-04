/**
 * StorageManagementClient
 * The Azure Storage Management API.
 *
 * The version of the OpenAPI document: 2023-01-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../../BaseApiClient";
import EncryptionScope from '../model/EncryptionScope';
import EncryptionScopeListResult from '../model/EncryptionScopeListResult';
import ErrorResponse from '../model/ErrorResponse';

/**
* EncryptionScopes service.
* @module api/EncryptionScopesApi
* @version 2023-01-01
*/
export default class EncryptionScopesApi {

    /**
    * Constructs a new EncryptionScopesApi. 
    * @alias module:api/EncryptionScopesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the encryptionScopesGet operation.
     * @callback module:api/EncryptionScopesApi~encryptionScopesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EncryptionScope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the properties for the specified encryption scope.
     * @param {String} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
     * @param {String} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {String} encryptionScopeName The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     * @param {module:api/EncryptionScopesApi~encryptionScopesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EncryptionScope}
     */
    encryptionScopesGet(resourceGroupName, accountName, apiVersion, subscriptionId, encryptionScopeName, callback) {
      let postBody = null;
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling encryptionScopesGet");
      }
      // verify the required parameter 'accountName' is set
      if (accountName === undefined || accountName === null) {
        throw new Error("Missing the required parameter 'accountName' when calling encryptionScopesGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling encryptionScopesGet");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling encryptionScopesGet");
      }
      // verify the required parameter 'encryptionScopeName' is set
      if (encryptionScopeName === undefined || encryptionScopeName === null) {
        throw new Error("Missing the required parameter 'encryptionScopeName' when calling encryptionScopesGet");
      }

      let pathParams = {
        'resourceGroupName': resourceGroupName,
        'accountName': accountName,
        'subscriptionId': subscriptionId,
        'encryptionScopeName': encryptionScopeName
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['azure_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EncryptionScope;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the encryptionScopesList operation.
     * @callback module:api/EncryptionScopesApi~encryptionScopesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EncryptionScopeListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all the encryption scopes available under the specified storage account.
     * @param {String} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
     * @param {String} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {Object} opts Optional parameters
     * @param {Number} [maxpagesize] Optional, specifies the maximum number of encryption scopes that will be included in the list response.
     * @param {String} [filter] Optional. When specified, only encryption scope names starting with the filter will be listed.
     * @param {module:model/String} [include] Optional, when specified, will list encryption scopes with the specific state. Defaults to All
     * @param {module:api/EncryptionScopesApi~encryptionScopesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EncryptionScopeListResult}
     */
    encryptionScopesList(resourceGroupName, accountName, apiVersion, subscriptionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling encryptionScopesList");
      }
      // verify the required parameter 'accountName' is set
      if (accountName === undefined || accountName === null) {
        throw new Error("Missing the required parameter 'accountName' when calling encryptionScopesList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling encryptionScopesList");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling encryptionScopesList");
      }

      let pathParams = {
        'resourceGroupName': resourceGroupName,
        'accountName': accountName,
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        'api-version': apiVersion,
        '$maxpagesize': opts['maxpagesize'],
        '$filter': opts['filter'],
        '$include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['azure_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EncryptionScopeListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the encryptionScopesPatch operation.
     * @callback module:api/EncryptionScopesApi~encryptionScopesPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EncryptionScope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update encryption scope properties as specified in the request body. Update fails if the specified encryption scope does not already exist.
     * @param {String} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
     * @param {String} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {String} encryptionScopeName The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     * @param {module:model/EncryptionScope} encryptionScope Encryption scope properties to be used for the update.
     * @param {module:api/EncryptionScopesApi~encryptionScopesPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EncryptionScope}
     */
    encryptionScopesPatch(resourceGroupName, accountName, apiVersion, subscriptionId, encryptionScopeName, encryptionScope, callback) {
      let postBody = encryptionScope;
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling encryptionScopesPatch");
      }
      // verify the required parameter 'accountName' is set
      if (accountName === undefined || accountName === null) {
        throw new Error("Missing the required parameter 'accountName' when calling encryptionScopesPatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling encryptionScopesPatch");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling encryptionScopesPatch");
      }
      // verify the required parameter 'encryptionScopeName' is set
      if (encryptionScopeName === undefined || encryptionScopeName === null) {
        throw new Error("Missing the required parameter 'encryptionScopeName' when calling encryptionScopesPatch");
      }
      // verify the required parameter 'encryptionScope' is set
      if (encryptionScope === undefined || encryptionScope === null) {
        throw new Error("Missing the required parameter 'encryptionScope' when calling encryptionScopesPatch");
      }

      let pathParams = {
        'resourceGroupName': resourceGroupName,
        'accountName': accountName,
        'subscriptionId': subscriptionId,
        'encryptionScopeName': encryptionScopeName
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['azure_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EncryptionScope;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the encryptionScopesPut operation.
     * @callback module:api/EncryptionScopesApi~encryptionScopesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EncryptionScope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Synchronously creates or updates an encryption scope under the specified storage account. If an encryption scope is already created and a subsequent request is issued with different properties, the encryption scope properties will be updated per the specified request.
     * @param {String} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
     * @param {String} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {String} encryptionScopeName The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     * @param {module:model/EncryptionScope} encryptionScope Encryption scope properties to be used for the create or update.
     * @param {module:api/EncryptionScopesApi~encryptionScopesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EncryptionScope}
     */
    encryptionScopesPut(resourceGroupName, accountName, apiVersion, subscriptionId, encryptionScopeName, encryptionScope, callback) {
      let postBody = encryptionScope;
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling encryptionScopesPut");
      }
      // verify the required parameter 'accountName' is set
      if (accountName === undefined || accountName === null) {
        throw new Error("Missing the required parameter 'accountName' when calling encryptionScopesPut");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling encryptionScopesPut");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling encryptionScopesPut");
      }
      // verify the required parameter 'encryptionScopeName' is set
      if (encryptionScopeName === undefined || encryptionScopeName === null) {
        throw new Error("Missing the required parameter 'encryptionScopeName' when calling encryptionScopesPut");
      }
      // verify the required parameter 'encryptionScope' is set
      if (encryptionScope === undefined || encryptionScope === null) {
        throw new Error("Missing the required parameter 'encryptionScope' when calling encryptionScopesPut");
      }

      let pathParams = {
        'resourceGroupName': resourceGroupName,
        'accountName': accountName,
        'subscriptionId': subscriptionId,
        'encryptionScopeName': encryptionScopeName
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['azure_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EncryptionScope;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
