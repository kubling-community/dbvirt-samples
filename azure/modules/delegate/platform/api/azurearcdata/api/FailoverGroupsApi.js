/**
 * AzureArcDataManagementClient
 * The AzureArcData management API provides a RESTful set of web APIs to manage Azure Data Services on Azure Arc Resources.
 *
 * The version of the OpenAPI document: 2023-01-15-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import FailoverGroupListResult from '../model/FailoverGroupListResult';
import FailoverGroupResource from '../model/FailoverGroupResource';

/**
* FailoverGroups service.
* @module api/FailoverGroupsApi
* @version 2023-01-15-preview
*/
export default class FailoverGroupsApi {

    /**
    * Constructs a new FailoverGroupsApi. 
    * @alias module:api/FailoverGroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the failoverGroupsCreate operation.
     * @callback module:api/FailoverGroupsApi~failoverGroupsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FailoverGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates or replaces a failover group resource.
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlManagedInstanceName Name of SQL Managed Instance
     * @param {String} failoverGroupName The name of the Failover Group
     * @param {String} apiVersion The API version to use for the request
     * @param {module:model/FailoverGroupResource} failoverGroupResource desc
     * @param {module:api/FailoverGroupsApi~failoverGroupsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FailoverGroupResource}
     */
    failoverGroupsCreate(subscriptionId, resourceGroupName, sqlManagedInstanceName, failoverGroupName, apiVersion, failoverGroupResource, callback) {
      let postBody = failoverGroupResource;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling failoverGroupsCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling failoverGroupsCreate");
      }
      // verify the required parameter 'sqlManagedInstanceName' is set
      if (sqlManagedInstanceName === undefined || sqlManagedInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlManagedInstanceName' when calling failoverGroupsCreate");
      }
      // verify the required parameter 'failoverGroupName' is set
      if (failoverGroupName === undefined || failoverGroupName === null) {
        throw new Error("Missing the required parameter 'failoverGroupName' when calling failoverGroupsCreate");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling failoverGroupsCreate");
      }
      // verify the required parameter 'failoverGroupResource' is set
      if (failoverGroupResource === undefined || failoverGroupResource === null) {
        throw new Error("Missing the required parameter 'failoverGroupResource' when calling failoverGroupsCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlManagedInstanceName': sqlManagedInstanceName,
        'failoverGroupName': failoverGroupName
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
      let returnType = FailoverGroupResource;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}/failoverGroups/{failoverGroupName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the failoverGroupsDelete operation.
     * @callback module:api/FailoverGroupsApi~failoverGroupsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a failover group resource
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlManagedInstanceName Name of SQL Managed Instance
     * @param {String} failoverGroupName The name of the Failover Group
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/FailoverGroupsApi~failoverGroupsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    failoverGroupsDelete(subscriptionId, resourceGroupName, sqlManagedInstanceName, failoverGroupName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling failoverGroupsDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling failoverGroupsDelete");
      }
      // verify the required parameter 'sqlManagedInstanceName' is set
      if (sqlManagedInstanceName === undefined || sqlManagedInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlManagedInstanceName' when calling failoverGroupsDelete");
      }
      // verify the required parameter 'failoverGroupName' is set
      if (failoverGroupName === undefined || failoverGroupName === null) {
        throw new Error("Missing the required parameter 'failoverGroupName' when calling failoverGroupsDelete");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling failoverGroupsDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlManagedInstanceName': sqlManagedInstanceName,
        'failoverGroupName': failoverGroupName
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
      let returnType = null;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}/failoverGroups/{failoverGroupName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the failoverGroupsGet operation.
     * @callback module:api/FailoverGroupsApi~failoverGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FailoverGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a failover group resource
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlManagedInstanceName Name of SQL Managed Instance
     * @param {String} failoverGroupName The name of the Failover Group
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/FailoverGroupsApi~failoverGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FailoverGroupResource}
     */
    failoverGroupsGet(subscriptionId, resourceGroupName, sqlManagedInstanceName, failoverGroupName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling failoverGroupsGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling failoverGroupsGet");
      }
      // verify the required parameter 'sqlManagedInstanceName' is set
      if (sqlManagedInstanceName === undefined || sqlManagedInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlManagedInstanceName' when calling failoverGroupsGet");
      }
      // verify the required parameter 'failoverGroupName' is set
      if (failoverGroupName === undefined || failoverGroupName === null) {
        throw new Error("Missing the required parameter 'failoverGroupName' when calling failoverGroupsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling failoverGroupsGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlManagedInstanceName': sqlManagedInstanceName,
        'failoverGroupName': failoverGroupName
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
      let returnType = FailoverGroupResource;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}/failoverGroups/{failoverGroupName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the failoverGroupsList operation.
     * @callback module:api/FailoverGroupsApi~failoverGroupsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FailoverGroupListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the failover groups associated with the given sql managed instance.
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlManagedInstanceName Name of SQL Managed Instance
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/FailoverGroupsApi~failoverGroupsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FailoverGroupListResult}
     */
    failoverGroupsList(subscriptionId, resourceGroupName, sqlManagedInstanceName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling failoverGroupsList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling failoverGroupsList");
      }
      // verify the required parameter 'sqlManagedInstanceName' is set
      if (sqlManagedInstanceName === undefined || sqlManagedInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlManagedInstanceName' when calling failoverGroupsList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling failoverGroupsList");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlManagedInstanceName': sqlManagedInstanceName
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
      let returnType = FailoverGroupListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlManagedInstances/{sqlManagedInstanceName}/failoverGroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
