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
import CloudError from '../model/CloudError';
import FileServiceItems from '../model/FileServiceItems';
import FileServiceProperties from '../model/FileServiceProperties';

/**
* FileService service.
* @module api/FileServiceApi
* @version 2023-01-01
*/
export default class FileServiceApi {

    /**
    * Constructs a new FileServiceApi. 
    * @alias module:api/FileServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the fileServicesGetServiceProperties operation.
     * @callback module:api/FileServiceApi~fileServicesGetServicePropertiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileServiceProperties} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
     * @param {String} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
     * @param {String} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {module:model/String} fileServicesName The name of the file Service within the specified storage account. File Service Name must be \"default\"
     * @param {module:api/FileServiceApi~fileServicesGetServicePropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileServiceProperties}
     */
    fileServicesGetServiceProperties(resourceGroupName, accountName, apiVersion, subscriptionId, fileServicesName, callback) {
      let postBody = null;
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling fileServicesGetServiceProperties");
      }
      // verify the required parameter 'accountName' is set
      if (accountName === undefined || accountName === null) {
        throw new Error("Missing the required parameter 'accountName' when calling fileServicesGetServiceProperties");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling fileServicesGetServiceProperties");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling fileServicesGetServiceProperties");
      }
      // verify the required parameter 'fileServicesName' is set
      if (fileServicesName === undefined || fileServicesName === null) {
        throw new Error("Missing the required parameter 'fileServicesName' when calling fileServicesGetServiceProperties");
      }

      let pathParams = {
        'resourceGroupName': resourceGroupName,
        'accountName': accountName,
        'subscriptionId': subscriptionId,
        'FileServicesName': fileServicesName
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
      let returnType = FileServiceProperties;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/{FileServicesName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fileServicesList operation.
     * @callback module:api/FileServiceApi~fileServicesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileServiceItems} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all file services in storage accounts
     * @param {String} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
     * @param {String} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {module:api/FileServiceApi~fileServicesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileServiceItems}
     */
    fileServicesList(resourceGroupName, accountName, apiVersion, subscriptionId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling fileServicesList");
      }
      // verify the required parameter 'accountName' is set
      if (accountName === undefined || accountName === null) {
        throw new Error("Missing the required parameter 'accountName' when calling fileServicesList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling fileServicesList");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling fileServicesList");
      }

      let pathParams = {
        'resourceGroupName': resourceGroupName,
        'accountName': accountName,
        'subscriptionId': subscriptionId
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
      let returnType = FileServiceItems;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fileServicesSetServiceProperties operation.
     * @callback module:api/FileServiceApi~fileServicesSetServicePropertiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileServiceProperties} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules. 
     * @param {String} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
     * @param {String} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {module:model/String} fileServicesName The name of the file Service within the specified storage account. File Service Name must be \"default\"
     * @param {module:model/FileServiceProperties} fileServiceProperties The properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
     * @param {module:api/FileServiceApi~fileServicesSetServicePropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileServiceProperties}
     */
    fileServicesSetServiceProperties(resourceGroupName, accountName, apiVersion, subscriptionId, fileServicesName, fileServiceProperties, callback) {
      let postBody = fileServiceProperties;
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling fileServicesSetServiceProperties");
      }
      // verify the required parameter 'accountName' is set
      if (accountName === undefined || accountName === null) {
        throw new Error("Missing the required parameter 'accountName' when calling fileServicesSetServiceProperties");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling fileServicesSetServiceProperties");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling fileServicesSetServiceProperties");
      }
      // verify the required parameter 'fileServicesName' is set
      if (fileServicesName === undefined || fileServicesName === null) {
        throw new Error("Missing the required parameter 'fileServicesName' when calling fileServicesSetServiceProperties");
      }
      // verify the required parameter 'fileServiceProperties' is set
      if (fileServiceProperties === undefined || fileServiceProperties === null) {
        throw new Error("Missing the required parameter 'fileServiceProperties' when calling fileServicesSetServiceProperties");
      }

      let pathParams = {
        'resourceGroupName': resourceGroupName,
        'accountName': accountName,
        'subscriptionId': subscriptionId,
        'FileServicesName': fileServicesName
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
      let returnType = FileServiceProperties;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/{FileServicesName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
