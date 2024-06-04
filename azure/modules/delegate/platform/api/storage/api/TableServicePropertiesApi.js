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
import ListTableServices from '../model/ListTableServices';
import TableServiceProperties from '../model/TableServiceProperties';

/**
* TableServiceProperties service.
* @module api/TableServicePropertiesApi
* @version 2023-01-01
*/
export default class TableServicePropertiesApi {

    /**
    * Constructs a new TableServicePropertiesApi. 
    * @alias module:api/TableServicePropertiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the tableServicesGetServiceProperties operation.
     * @callback module:api/TableServicePropertiesApi~tableServicesGetServicePropertiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableServiceProperties} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the properties of a storage account’s Table service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
     * @param {String} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
     * @param {String} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {module:model/String} tableServiceName The name of the Table Service within the specified storage account. Table Service Name must be 'default'
     * @param {module:api/TableServicePropertiesApi~tableServicesGetServicePropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableServiceProperties}
     */
    tableServicesGetServiceProperties(resourceGroupName, accountName, apiVersion, subscriptionId, tableServiceName, callback) {
      let postBody = null;
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling tableServicesGetServiceProperties");
      }
      // verify the required parameter 'accountName' is set
      if (accountName === undefined || accountName === null) {
        throw new Error("Missing the required parameter 'accountName' when calling tableServicesGetServiceProperties");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling tableServicesGetServiceProperties");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling tableServicesGetServiceProperties");
      }
      // verify the required parameter 'tableServiceName' is set
      if (tableServiceName === undefined || tableServiceName === null) {
        throw new Error("Missing the required parameter 'tableServiceName' when calling tableServicesGetServiceProperties");
      }

      let pathParams = {
        'resourceGroupName': resourceGroupName,
        'accountName': accountName,
        'subscriptionId': subscriptionId,
        'tableServiceName': tableServiceName
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
      let returnType = TableServiceProperties;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/{tableServiceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tableServicesList operation.
     * @callback module:api/TableServicePropertiesApi~tableServicesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListTableServices} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all table services for the storage account.
     * @param {String} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
     * @param {String} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {module:api/TableServicePropertiesApi~tableServicesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListTableServices}
     */
    tableServicesList(resourceGroupName, accountName, apiVersion, subscriptionId, callback) {
      let postBody = null;
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling tableServicesList");
      }
      // verify the required parameter 'accountName' is set
      if (accountName === undefined || accountName === null) {
        throw new Error("Missing the required parameter 'accountName' when calling tableServicesList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling tableServicesList");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling tableServicesList");
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
      let returnType = ListTableServices;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tableServicesSetServiceProperties operation.
     * @callback module:api/TableServicePropertiesApi~tableServicesSetServicePropertiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableServiceProperties} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets the properties of a storage account’s Table service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules. 
     * @param {String} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
     * @param {String} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {module:model/String} tableServiceName The name of the Table Service within the specified storage account. Table Service Name must be 'default'
     * @param {module:model/TableServiceProperties} tableServiceProperties The properties of a storage account’s Table service, only properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules can be specified.
     * @param {module:api/TableServicePropertiesApi~tableServicesSetServicePropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableServiceProperties}
     */
    tableServicesSetServiceProperties(resourceGroupName, accountName, apiVersion, subscriptionId, tableServiceName, tableServiceProperties, callback) {
      let postBody = tableServiceProperties;
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling tableServicesSetServiceProperties");
      }
      // verify the required parameter 'accountName' is set
      if (accountName === undefined || accountName === null) {
        throw new Error("Missing the required parameter 'accountName' when calling tableServicesSetServiceProperties");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling tableServicesSetServiceProperties");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling tableServicesSetServiceProperties");
      }
      // verify the required parameter 'tableServiceName' is set
      if (tableServiceName === undefined || tableServiceName === null) {
        throw new Error("Missing the required parameter 'tableServiceName' when calling tableServicesSetServiceProperties");
      }
      // verify the required parameter 'tableServiceProperties' is set
      if (tableServiceProperties === undefined || tableServiceProperties === null) {
        throw new Error("Missing the required parameter 'tableServiceProperties' when calling tableServicesSetServiceProperties");
      }

      let pathParams = {
        'resourceGroupName': resourceGroupName,
        'accountName': accountName,
        'subscriptionId': subscriptionId,
        'tableServiceName': tableServiceName
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
      let returnType = TableServiceProperties;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/{tableServiceName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
