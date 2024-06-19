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
import ArcSqlServerDatabaseListResult from '../model/ArcSqlServerDatabaseListResult';
import ErrorResponse from '../model/ErrorResponse';
import SqlServerDatabaseResource from '../model/SqlServerDatabaseResource';
import SqlServerDatabaseUpdate from '../model/SqlServerDatabaseUpdate';

/**
* SqlServerDatabases service.
* @module api/SqlServerDatabasesApi
* @version 2023-01-15-preview
*/
export default class SqlServerDatabasesApi {

    /**
    * Constructs a new SqlServerDatabasesApi. 
    * @alias module:api/SqlServerDatabasesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the sqlServerDatabasesCreate operation.
     * @callback module:api/SqlServerDatabasesApi~sqlServerDatabasesCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlServerDatabaseResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates or replaces an Arc Sql Server Database.
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlServerInstanceName Name of SQL Server Instance
     * @param {String} databaseName Name of the database
     * @param {String} apiVersion The API version to use for the request
     * @param {module:model/SqlServerDatabaseResource} sqlServerDatabaseResource The request body for database resource.
     * @param {module:api/SqlServerDatabasesApi~sqlServerDatabasesCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SqlServerDatabaseResource}
     */
    sqlServerDatabasesCreate(subscriptionId, resourceGroupName, sqlServerInstanceName, databaseName, apiVersion, sqlServerDatabaseResource, callback) {
      let postBody = sqlServerDatabaseResource;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerDatabasesCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling sqlServerDatabasesCreate");
      }
      // verify the required parameter 'sqlServerInstanceName' is set
      if (sqlServerInstanceName === undefined || sqlServerInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlServerInstanceName' when calling sqlServerDatabasesCreate");
      }
      // verify the required parameter 'databaseName' is set
      if (databaseName === undefined || databaseName === null) {
        throw new Error("Missing the required parameter 'databaseName' when calling sqlServerDatabasesCreate");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerDatabasesCreate");
      }
      // verify the required parameter 'sqlServerDatabaseResource' is set
      if (sqlServerDatabaseResource === undefined || sqlServerDatabaseResource === null) {
        throw new Error("Missing the required parameter 'sqlServerDatabaseResource' when calling sqlServerDatabasesCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlServerInstanceName': sqlServerInstanceName,
        'databaseName': databaseName
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
      let returnType = SqlServerDatabaseResource;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/databases/{databaseName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sqlServerDatabasesDelete operation.
     * @callback module:api/SqlServerDatabasesApi~sqlServerDatabasesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an Arc Sql Server database resource.
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlServerInstanceName Name of SQL Server Instance
     * @param {String} databaseName Name of the database
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/SqlServerDatabasesApi~sqlServerDatabasesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sqlServerDatabasesDelete(subscriptionId, resourceGroupName, sqlServerInstanceName, databaseName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerDatabasesDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling sqlServerDatabasesDelete");
      }
      // verify the required parameter 'sqlServerInstanceName' is set
      if (sqlServerInstanceName === undefined || sqlServerInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlServerInstanceName' when calling sqlServerDatabasesDelete");
      }
      // verify the required parameter 'databaseName' is set
      if (databaseName === undefined || databaseName === null) {
        throw new Error("Missing the required parameter 'databaseName' when calling sqlServerDatabasesDelete");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerDatabasesDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlServerInstanceName': sqlServerInstanceName,
        'databaseName': databaseName
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
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/databases/{databaseName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sqlServerDatabasesGet operation.
     * @callback module:api/SqlServerDatabasesApi~sqlServerDatabasesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlServerDatabaseResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves an Arc Sql Server database.
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlServerInstanceName Name of SQL Server Instance
     * @param {String} databaseName Name of the database
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/SqlServerDatabasesApi~sqlServerDatabasesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SqlServerDatabaseResource}
     */
    sqlServerDatabasesGet(subscriptionId, resourceGroupName, sqlServerInstanceName, databaseName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerDatabasesGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling sqlServerDatabasesGet");
      }
      // verify the required parameter 'sqlServerInstanceName' is set
      if (sqlServerInstanceName === undefined || sqlServerInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlServerInstanceName' when calling sqlServerDatabasesGet");
      }
      // verify the required parameter 'databaseName' is set
      if (databaseName === undefined || databaseName === null) {
        throw new Error("Missing the required parameter 'databaseName' when calling sqlServerDatabasesGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerDatabasesGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlServerInstanceName': sqlServerInstanceName,
        'databaseName': databaseName
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
      let returnType = SqlServerDatabaseResource;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/databases/{databaseName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sqlServerDatabasesList operation.
     * @callback module:api/SqlServerDatabasesApi~sqlServerDatabasesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArcSqlServerDatabaseListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the databases associated with the given Arc Sql Server.
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlServerInstanceName Name of SQL Server Instance
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/SqlServerDatabasesApi~sqlServerDatabasesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArcSqlServerDatabaseListResult}
     */
    sqlServerDatabasesList(subscriptionId, resourceGroupName, sqlServerInstanceName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerDatabasesList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling sqlServerDatabasesList");
      }
      // verify the required parameter 'sqlServerInstanceName' is set
      if (sqlServerInstanceName === undefined || sqlServerInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlServerInstanceName' when calling sqlServerDatabasesList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerDatabasesList");
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
      let returnType = ArcSqlServerDatabaseListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/databases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sqlServerDatabasesUpdate operation.
     * @callback module:api/SqlServerDatabasesApi~sqlServerDatabasesUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SqlServerDatabaseResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an existing database.
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} sqlServerInstanceName Name of SQL Server Instance
     * @param {String} databaseName Name of the database
     * @param {String} apiVersion The API version to use for the request
     * @param {module:model/SqlServerDatabaseUpdate} sqlServerDatabaseUpdate The requested database resource state.
     * @param {module:api/SqlServerDatabasesApi~sqlServerDatabasesUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SqlServerDatabaseResource}
     */
    sqlServerDatabasesUpdate(subscriptionId, resourceGroupName, sqlServerInstanceName, databaseName, apiVersion, sqlServerDatabaseUpdate, callback) {
      let postBody = sqlServerDatabaseUpdate;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling sqlServerDatabasesUpdate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling sqlServerDatabasesUpdate");
      }
      // verify the required parameter 'sqlServerInstanceName' is set
      if (sqlServerInstanceName === undefined || sqlServerInstanceName === null) {
        throw new Error("Missing the required parameter 'sqlServerInstanceName' when calling sqlServerDatabasesUpdate");
      }
      // verify the required parameter 'databaseName' is set
      if (databaseName === undefined || databaseName === null) {
        throw new Error("Missing the required parameter 'databaseName' when calling sqlServerDatabasesUpdate");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling sqlServerDatabasesUpdate");
      }
      // verify the required parameter 'sqlServerDatabaseUpdate' is set
      if (sqlServerDatabaseUpdate === undefined || sqlServerDatabaseUpdate === null) {
        throw new Error("Missing the required parameter 'sqlServerDatabaseUpdate' when calling sqlServerDatabasesUpdate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'sqlServerInstanceName': sqlServerInstanceName,
        'databaseName': databaseName
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
      let returnType = SqlServerDatabaseResource;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}/databases/{databaseName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}