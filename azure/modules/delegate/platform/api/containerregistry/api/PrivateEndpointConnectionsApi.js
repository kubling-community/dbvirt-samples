/**
 * ContainerRegistryManagementClient
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2019-06-01-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import PrivateEndpointConnection from '../model/PrivateEndpointConnection';
import PrivateEndpointConnectionListResult from '../model/PrivateEndpointConnectionListResult';

/**
* PrivateEndpointConnections service.
* @module api/PrivateEndpointConnectionsApi
* @version 2019-06-01-preview
*/
export default class PrivateEndpointConnectionsApi {

    /**
    * Constructs a new PrivateEndpointConnectionsApi. 
    * @alias module:api/PrivateEndpointConnectionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the privateEndpointConnectionsCreateOrUpdate operation.
     * @callback module:api/PrivateEndpointConnectionsApi~privateEndpointConnectionsCreateOrUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrivateEndpointConnection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the state of specified private endpoint connection associated with the container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} privateEndpointConnectionName The name of the private endpoint connection.
     * @param {module:model/PrivateEndpointConnection} privateEndpointConnection The parameters for creating a private endpoint connection.
     * @param {module:api/PrivateEndpointConnectionsApi~privateEndpointConnectionsCreateOrUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrivateEndpointConnection}
     */
    privateEndpointConnectionsCreateOrUpdate(apiVersion, subscriptionId, resourceGroupName, registryName, privateEndpointConnectionName, privateEndpointConnection, callback) {
      let postBody = privateEndpointConnection;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling privateEndpointConnectionsCreateOrUpdate");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling privateEndpointConnectionsCreateOrUpdate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling privateEndpointConnectionsCreateOrUpdate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling privateEndpointConnectionsCreateOrUpdate");
      }
      // verify the required parameter 'privateEndpointConnectionName' is set
      if (privateEndpointConnectionName === undefined || privateEndpointConnectionName === null) {
        throw new Error("Missing the required parameter 'privateEndpointConnectionName' when calling privateEndpointConnectionsCreateOrUpdate");
      }
      // verify the required parameter 'privateEndpointConnection' is set
      if (privateEndpointConnection === undefined || privateEndpointConnection === null) {
        throw new Error("Missing the required parameter 'privateEndpointConnection' when calling privateEndpointConnectionsCreateOrUpdate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'privateEndpointConnectionName': privateEndpointConnectionName
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
      let returnType = PrivateEndpointConnection;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/privateEndpointConnections/{privateEndpointConnectionName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the privateEndpointConnectionsDelete operation.
     * @callback module:api/PrivateEndpointConnectionsApi~privateEndpointConnectionsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified private endpoint connection associated with the container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} privateEndpointConnectionName The name of the private endpoint connection.
     * @param {module:api/PrivateEndpointConnectionsApi~privateEndpointConnectionsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    privateEndpointConnectionsDelete(apiVersion, subscriptionId, resourceGroupName, registryName, privateEndpointConnectionName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling privateEndpointConnectionsDelete");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling privateEndpointConnectionsDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling privateEndpointConnectionsDelete");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling privateEndpointConnectionsDelete");
      }
      // verify the required parameter 'privateEndpointConnectionName' is set
      if (privateEndpointConnectionName === undefined || privateEndpointConnectionName === null) {
        throw new Error("Missing the required parameter 'privateEndpointConnectionName' when calling privateEndpointConnectionsDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'privateEndpointConnectionName': privateEndpointConnectionName
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/privateEndpointConnections/{privateEndpointConnectionName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the privateEndpointConnectionsGet operation.
     * @callback module:api/PrivateEndpointConnectionsApi~privateEndpointConnectionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrivateEndpointConnection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the specified private endpoint connection associated with the container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} privateEndpointConnectionName The name of the private endpoint connection.
     * @param {module:api/PrivateEndpointConnectionsApi~privateEndpointConnectionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrivateEndpointConnection}
     */
    privateEndpointConnectionsGet(apiVersion, subscriptionId, resourceGroupName, registryName, privateEndpointConnectionName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling privateEndpointConnectionsGet");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling privateEndpointConnectionsGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling privateEndpointConnectionsGet");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling privateEndpointConnectionsGet");
      }
      // verify the required parameter 'privateEndpointConnectionName' is set
      if (privateEndpointConnectionName === undefined || privateEndpointConnectionName === null) {
        throw new Error("Missing the required parameter 'privateEndpointConnectionName' when calling privateEndpointConnectionsGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'privateEndpointConnectionName': privateEndpointConnectionName
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
      let returnType = PrivateEndpointConnection;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/privateEndpointConnections/{privateEndpointConnectionName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the privateEndpointConnectionsList operation.
     * @callback module:api/PrivateEndpointConnectionsApi~privateEndpointConnectionsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrivateEndpointConnectionListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all private endpoint connections in a container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {module:api/PrivateEndpointConnectionsApi~privateEndpointConnectionsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrivateEndpointConnectionListResult}
     */
    privateEndpointConnectionsList(apiVersion, subscriptionId, resourceGroupName, registryName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling privateEndpointConnectionsList");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling privateEndpointConnectionsList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling privateEndpointConnectionsList");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling privateEndpointConnectionsList");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName
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
      let returnType = PrivateEndpointConnectionListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/privateEndpointConnections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
