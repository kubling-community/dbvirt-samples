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
import SqlServerInstance from '../model/SqlServerInstance';
import SqlServerInstanceListResult from '../model/SqlServerInstanceListResult';
import SqlServerInstanceUpdate from '../model/SqlServerInstanceUpdate';

/**
* SqlServerInstances service.
* @module api/SqlServerInstancesApi
* @version 2023-01-15-preview
*/
export default class SqlServerInstancesApi {

    /**
    * Constructs a new SqlServerInstancesApi. 
    * @alias module:api/SqlServerInstancesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the sqlServerInstancesCreate operation.
     * @callback module:api/SqlServerInstancesApi~sqlServerInstancesCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlServerInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates or replaces a SQL Server Instance resource
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlServerInstanceName Name of SQL Server Instance
     * @param {String} apiVersion The API version to use for the request
     * @param {module:model/SqlServerInstance} sqlServerInstance The SQL Server Instance to be created or updated.
     * @param {module:api/SqlServerInstancesApi~sqlServerInstancesCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SqlServerInstance}
     */
    sqlServerInstancesCreate(subscriptionId, resourceGroupName, sqlServerInstanceName, apiVersion, sqlServerInstance, callback) {
      let postBody = sqlServerInstance;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerInstancesCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling sqlServerInstancesCreate");
      }
      // verify the required parameter 'sqlServerInstanceName' is set
      if (sqlServerInstanceName === undefined || sqlServerInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlServerInstanceName' when calling sqlServerInstancesCreate");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerInstancesCreate");
      }
      // verify the required parameter 'sqlServerInstance' is set
      if (sqlServerInstance === undefined || sqlServerInstance === null) {
        throw new Error("Missing the required parameter 'sqlServerInstance' when calling sqlServerInstancesCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlServerInstanceName': sqlServerInstanceName
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
      let returnType = SqlServerInstance;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sqlServerInstancesDelete operation.
     * @callback module:api/SqlServerInstancesApi~sqlServerInstancesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a SQL Server Instance resource
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlServerInstanceName Name of SQL Server Instance
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/SqlServerInstancesApi~sqlServerInstancesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sqlServerInstancesDelete(subscriptionId, resourceGroupName, sqlServerInstanceName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerInstancesDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling sqlServerInstancesDelete");
      }
      // verify the required parameter 'sqlServerInstanceName' is set
      if (sqlServerInstanceName === undefined || sqlServerInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlServerInstanceName' when calling sqlServerInstancesDelete");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerInstancesDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlServerInstanceName': sqlServerInstanceName
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
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sqlServerInstancesGet operation.
     * @callback module:api/SqlServerInstancesApi~sqlServerInstancesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlServerInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a SQL Server Instance resource
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlServerInstanceName Name of SQL Server Instance
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/SqlServerInstancesApi~sqlServerInstancesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SqlServerInstance}
     */
    sqlServerInstancesGet(subscriptionId, resourceGroupName, sqlServerInstanceName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerInstancesGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling sqlServerInstancesGet");
      }
      // verify the required parameter 'sqlServerInstanceName' is set
      if (sqlServerInstanceName === undefined || sqlServerInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlServerInstanceName' when calling sqlServerInstancesGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerInstancesGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlServerInstanceName': sqlServerInstanceName
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
      let returnType = SqlServerInstance;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sqlServerInstancesList operation.
     * @callback module:api/SqlServerInstancesApi~sqlServerInstancesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlServerInstanceListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List sqlServerInstance resources in the subscription
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/SqlServerInstancesApi~sqlServerInstancesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SqlServerInstanceListResult}
     */
    sqlServerInstancesList(subscriptionId, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerInstancesList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerInstancesList");
      }

      let pathParams = {
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
      let returnType = SqlServerInstanceListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/providers/Microsoft.AzureArcData/sqlServerInstances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sqlServerInstancesListByResourceGroup operation.
     * @callback module:api/SqlServerInstancesApi~sqlServerInstancesListByResourceGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlServerInstanceListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List sqlServerInstance resources in the resource group
     * Gets all sqlServerInstances in a resource group.
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/SqlServerInstancesApi~sqlServerInstancesListByResourceGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SqlServerInstanceListResult}
     */
    sqlServerInstancesListByResourceGroup(subscriptionId, resourceGroupName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerInstancesListByResourceGroup");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling sqlServerInstancesListByResourceGroup");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerInstancesListByResourceGroup");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName
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
      let returnType = SqlServerInstanceListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sqlServerInstancesUpdate operation.
     * @callback module:api/SqlServerInstancesApi~sqlServerInstancesUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlServerInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a SQL Server Instance resource
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlServerInstanceName Name of SQL Server Instance
     * @param {String} apiVersion The API version to use for the request
     * @param {module:model/SqlServerInstanceUpdate} sqlServerInstanceUpdate The SQL Server Instance.
     * @param {module:api/SqlServerInstancesApi~sqlServerInstancesUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SqlServerInstance}
     */
    sqlServerInstancesUpdate(subscriptionId, resourceGroupName, sqlServerInstanceName, apiVersion, sqlServerInstanceUpdate, callback) {
      let postBody = sqlServerInstanceUpdate;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerInstancesUpdate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling sqlServerInstancesUpdate");
      }
      // verify the required parameter 'sqlServerInstanceName' is set
      if (sqlServerInstanceName === undefined || sqlServerInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlServerInstanceName' when calling sqlServerInstancesUpdate");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerInstancesUpdate");
      }
      // verify the required parameter 'sqlServerInstanceUpdate' is set
      if (sqlServerInstanceUpdate === undefined || sqlServerInstanceUpdate === null) {
        throw new Error("Missing the required parameter 'sqlServerInstanceUpdate' when calling sqlServerInstancesUpdate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlServerInstanceName': sqlServerInstanceName
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
      let returnType = SqlServerInstance;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
