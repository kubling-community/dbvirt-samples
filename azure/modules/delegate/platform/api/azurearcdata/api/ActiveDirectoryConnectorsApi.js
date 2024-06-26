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
import ActiveDirectoryConnectorListResult from '../model/ActiveDirectoryConnectorListResult';
import ActiveDirectoryConnectorResource from '../model/ActiveDirectoryConnectorResource';
import ErrorResponse from '../model/ErrorResponse';

/**
* ActiveDirectoryConnectors service.
* @module api/ActiveDirectoryConnectorsApi
* @version 2023-01-15-preview
*/
export default class ActiveDirectoryConnectorsApi {

    /**
    * Constructs a new ActiveDirectoryConnectorsApi. 
    * @alias module:api/ActiveDirectoryConnectorsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the activeDirectoryConnectorsCreate operation.
     * @callback module:api/ActiveDirectoryConnectorsApi~activeDirectoryConnectorsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveDirectoryConnectorResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates or replaces an Active Directory connector resource.
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} dataControllerName The name of the data controller
     * @param {String} activeDirectoryConnectorName The name of the Active Directory connector instance
     * @param {String} apiVersion The API version to use for the request
     * @param {module:model/ActiveDirectoryConnectorResource} activeDirectoryConnectorResource desc
     * @param {module:api/ActiveDirectoryConnectorsApi~activeDirectoryConnectorsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveDirectoryConnectorResource}
     */
    activeDirectoryConnectorsCreate(subscriptionId, resourceGroupName, dataControllerName, activeDirectoryConnectorName, apiVersion, activeDirectoryConnectorResource, callback) {
      let postBody = activeDirectoryConnectorResource;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling activeDirectoryConnectorsCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling activeDirectoryConnectorsCreate");
      }
      // verify the required parameter 'dataControllerName' is set
      if (dataControllerName === undefined || dataControllerName === null) {
        throw new Error("Missing the required parameter 'dataControllerName' when calling activeDirectoryConnectorsCreate");
      }
      // verify the required parameter 'activeDirectoryConnectorName' is set
      if (activeDirectoryConnectorName === undefined || activeDirectoryConnectorName === null) {
        throw new Error("Missing the required parameter 'activeDirectoryConnectorName' when calling activeDirectoryConnectorsCreate");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling activeDirectoryConnectorsCreate");
      }
      // verify the required parameter 'activeDirectoryConnectorResource' is set
      if (activeDirectoryConnectorResource === undefined || activeDirectoryConnectorResource === null) {
        throw new Error("Missing the required parameter 'activeDirectoryConnectorResource' when calling activeDirectoryConnectorsCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'dataControllerName': dataControllerName,
        'activeDirectoryConnectorName': activeDirectoryConnectorName
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
      let returnType = ActiveDirectoryConnectorResource;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors/{activeDirectoryConnectorName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the activeDirectoryConnectorsDelete operation.
     * @callback module:api/ActiveDirectoryConnectorsApi~activeDirectoryConnectorsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an Active Directory connector resource
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} dataControllerName The name of the data controller
     * @param {String} activeDirectoryConnectorName The name of the Active Directory connector instance
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/ActiveDirectoryConnectorsApi~activeDirectoryConnectorsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    activeDirectoryConnectorsDelete(subscriptionId, resourceGroupName, dataControllerName, activeDirectoryConnectorName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling activeDirectoryConnectorsDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling activeDirectoryConnectorsDelete");
      }
      // verify the required parameter 'dataControllerName' is set
      if (dataControllerName === undefined || dataControllerName === null) {
        throw new Error("Missing the required parameter 'dataControllerName' when calling activeDirectoryConnectorsDelete");
      }
      // verify the required parameter 'activeDirectoryConnectorName' is set
      if (activeDirectoryConnectorName === undefined || activeDirectoryConnectorName === null) {
        throw new Error("Missing the required parameter 'activeDirectoryConnectorName' when calling activeDirectoryConnectorsDelete");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling activeDirectoryConnectorsDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'dataControllerName': dataControllerName,
        'activeDirectoryConnectorName': activeDirectoryConnectorName
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
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors/{activeDirectoryConnectorName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the activeDirectoryConnectorsGet operation.
     * @callback module:api/ActiveDirectoryConnectorsApi~activeDirectoryConnectorsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveDirectoryConnectorResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves an Active Directory connector resource
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} dataControllerName The name of the data controller
     * @param {String} activeDirectoryConnectorName The name of the Active Directory connector instance
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/ActiveDirectoryConnectorsApi~activeDirectoryConnectorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveDirectoryConnectorResource}
     */
    activeDirectoryConnectorsGet(subscriptionId, resourceGroupName, dataControllerName, activeDirectoryConnectorName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling activeDirectoryConnectorsGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling activeDirectoryConnectorsGet");
      }
      // verify the required parameter 'dataControllerName' is set
      if (dataControllerName === undefined || dataControllerName === null) {
        throw new Error("Missing the required parameter 'dataControllerName' when calling activeDirectoryConnectorsGet");
      }
      // verify the required parameter 'activeDirectoryConnectorName' is set
      if (activeDirectoryConnectorName === undefined || activeDirectoryConnectorName === null) {
        throw new Error("Missing the required parameter 'activeDirectoryConnectorName' when calling activeDirectoryConnectorsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling activeDirectoryConnectorsGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'dataControllerName': dataControllerName,
        'activeDirectoryConnectorName': activeDirectoryConnectorName
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
      let returnType = ActiveDirectoryConnectorResource;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors/{activeDirectoryConnectorName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the activeDirectoryConnectorsList operation.
     * @callback module:api/ActiveDirectoryConnectorsApi~activeDirectoryConnectorsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveDirectoryConnectorListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the active directory connectors associated with the given data controller.
     * @param {String} subscriptionId The ID of the Azure subscription
     * @param {String} resourceGroupName The name of the Azure resource group
     * @param {String} dataControllerName The name of the data controller
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/ActiveDirectoryConnectorsApi~activeDirectoryConnectorsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveDirectoryConnectorListResult}
     */
    activeDirectoryConnectorsList(subscriptionId, resourceGroupName, dataControllerName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling activeDirectoryConnectorsList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling activeDirectoryConnectorsList");
      }
      // verify the required parameter 'dataControllerName' is set
      if (dataControllerName === undefined || dataControllerName === null) {
        throw new Error("Missing the required parameter 'dataControllerName' when calling activeDirectoryConnectorsList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling activeDirectoryConnectorsList");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'dataControllerName': dataControllerName
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
      let returnType = ActiveDirectoryConnectorListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
