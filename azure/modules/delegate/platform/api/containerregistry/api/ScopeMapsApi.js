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
import ErrorResponse from '../model/ErrorResponse';
import ScopeMap from '../model/ScopeMap';
import ScopeMapListResult from '../model/ScopeMapListResult';
import ScopeMapUpdateParameters from '../model/ScopeMapUpdateParameters';

/**
* ScopeMaps service.
* @module api/ScopeMapsApi
* @version 2019-06-01-preview
*/
export default class ScopeMapsApi {

    /**
    * Constructs a new ScopeMapsApi. 
    * @alias module:api/ScopeMapsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the scopeMapsCreate operation.
     * @callback module:api/ScopeMapsApi~scopeMapsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScopeMap} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a scope map for a container registry with the specified parameters.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} scopeMapName The name of the scope map.
     * @param {module:model/ScopeMap} scopeMap The parameters for creating a scope map.
     * @param {module:api/ScopeMapsApi~scopeMapsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScopeMap}
     */
    scopeMapsCreate(apiVersion, subscriptionId, resourceGroupName, registryName, scopeMapName, scopeMap, callback) {
      let postBody = scopeMap;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling scopeMapsCreate");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling scopeMapsCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling scopeMapsCreate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling scopeMapsCreate");
      }
      // verify the required parameter 'scopeMapName' is set
      if (scopeMapName === undefined || scopeMapName === null) {
        throw new Error("Missing the required parameter 'scopeMapName' when calling scopeMapsCreate");
      }
      // verify the required parameter 'scopeMap' is set
      if (scopeMap === undefined || scopeMap === null) {
        throw new Error("Missing the required parameter 'scopeMap' when calling scopeMapsCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'scopeMapName': scopeMapName
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
      let returnType = ScopeMap;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scopeMapsDelete operation.
     * @callback module:api/ScopeMapsApi~scopeMapsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a scope map from a container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} scopeMapName The name of the scope map.
     * @param {module:api/ScopeMapsApi~scopeMapsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    scopeMapsDelete(apiVersion, subscriptionId, resourceGroupName, registryName, scopeMapName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling scopeMapsDelete");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling scopeMapsDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling scopeMapsDelete");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling scopeMapsDelete");
      }
      // verify the required parameter 'scopeMapName' is set
      if (scopeMapName === undefined || scopeMapName === null) {
        throw new Error("Missing the required parameter 'scopeMapName' when calling scopeMapsDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'scopeMapName': scopeMapName
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
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scopeMapsGet operation.
     * @callback module:api/ScopeMapsApi~scopeMapsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScopeMap} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the properties of the specified scope map.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} scopeMapName The name of the scope map.
     * @param {module:api/ScopeMapsApi~scopeMapsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScopeMap}
     */
    scopeMapsGet(apiVersion, subscriptionId, resourceGroupName, registryName, scopeMapName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling scopeMapsGet");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling scopeMapsGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling scopeMapsGet");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling scopeMapsGet");
      }
      // verify the required parameter 'scopeMapName' is set
      if (scopeMapName === undefined || scopeMapName === null) {
        throw new Error("Missing the required parameter 'scopeMapName' when calling scopeMapsGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'scopeMapName': scopeMapName
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
      let returnType = ScopeMap;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scopeMapsList operation.
     * @callback module:api/ScopeMapsApi~scopeMapsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScopeMapListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all the scope maps for the specified container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {module:api/ScopeMapsApi~scopeMapsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScopeMapListResult}
     */
    scopeMapsList(apiVersion, subscriptionId, resourceGroupName, registryName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling scopeMapsList");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling scopeMapsList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling scopeMapsList");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling scopeMapsList");
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
      let returnType = ScopeMapListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scopeMapsUpdate operation.
     * @callback module:api/ScopeMapsApi~scopeMapsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScopeMap} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a scope map with the specified parameters.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} scopeMapName The name of the scope map.
     * @param {module:model/ScopeMapUpdateParameters} scopeMapUpdateParameters The parameters for updating a scope map.
     * @param {module:api/ScopeMapsApi~scopeMapsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScopeMap}
     */
    scopeMapsUpdate(apiVersion, subscriptionId, resourceGroupName, registryName, scopeMapName, scopeMapUpdateParameters, callback) {
      let postBody = scopeMapUpdateParameters;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling scopeMapsUpdate");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling scopeMapsUpdate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling scopeMapsUpdate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling scopeMapsUpdate");
      }
      // verify the required parameter 'scopeMapName' is set
      if (scopeMapName === undefined || scopeMapName === null) {
        throw new Error("Missing the required parameter 'scopeMapName' when calling scopeMapsUpdate");
      }
      // verify the required parameter 'scopeMapUpdateParameters' is set
      if (scopeMapUpdateParameters === undefined || scopeMapUpdateParameters === null) {
        throw new Error("Missing the required parameter 'scopeMapUpdateParameters' when calling scopeMapsUpdate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'scopeMapName': scopeMapName
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
      let returnType = ScopeMap;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
