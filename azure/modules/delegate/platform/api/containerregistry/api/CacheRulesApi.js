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
import CacheRule from '../model/CacheRule';
import CacheRuleUpdateParameters from '../model/CacheRuleUpdateParameters';
import CacheRulesListResult from '../model/CacheRulesListResult';
import ErrorResponse from '../model/ErrorResponse';

/**
* CacheRules service.
* @module api/CacheRulesApi
* @version 2019-06-01-preview
*/
export default class CacheRulesApi {

    /**
    * Constructs a new CacheRulesApi. 
    * @alias module:api/CacheRulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cacheRulesCreate operation.
     * @callback module:api/CacheRulesApi~cacheRulesCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CacheRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a cache rule for a container registry with the specified parameters.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} cacheRuleName The name of the cache rule.
     * @param {module:model/CacheRule} cacheRule The parameters for creating a cache rule.
     * @param {module:api/CacheRulesApi~cacheRulesCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CacheRule}
     */
    cacheRulesCreate(apiVersion, subscriptionId, resourceGroupName, registryName, cacheRuleName, cacheRule, callback) {
      let postBody = cacheRule;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling cacheRulesCreate");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling cacheRulesCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling cacheRulesCreate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling cacheRulesCreate");
      }
      // verify the required parameter 'cacheRuleName' is set
      if (cacheRuleName === undefined || cacheRuleName === null) {
        throw new Error("Missing the required parameter 'cacheRuleName' when calling cacheRulesCreate");
      }
      // verify the required parameter 'cacheRule' is set
      if (cacheRule === undefined || cacheRule === null) {
        throw new Error("Missing the required parameter 'cacheRule' when calling cacheRulesCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'cacheRuleName': cacheRuleName
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
      let returnType = CacheRule;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/cacheRules/{cacheRuleName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cacheRulesDelete operation.
     * @callback module:api/CacheRulesApi~cacheRulesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cache rule resource from a container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} cacheRuleName The name of the cache rule.
     * @param {module:api/CacheRulesApi~cacheRulesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    cacheRulesDelete(apiVersion, subscriptionId, resourceGroupName, registryName, cacheRuleName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling cacheRulesDelete");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling cacheRulesDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling cacheRulesDelete");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling cacheRulesDelete");
      }
      // verify the required parameter 'cacheRuleName' is set
      if (cacheRuleName === undefined || cacheRuleName === null) {
        throw new Error("Missing the required parameter 'cacheRuleName' when calling cacheRulesDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'cacheRuleName': cacheRuleName
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
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/cacheRules/{cacheRuleName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cacheRulesGet operation.
     * @callback module:api/CacheRulesApi~cacheRulesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CacheRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the properties of the specified cache rule resource.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} cacheRuleName The name of the cache rule.
     * @param {module:api/CacheRulesApi~cacheRulesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CacheRule}
     */
    cacheRulesGet(apiVersion, subscriptionId, resourceGroupName, registryName, cacheRuleName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling cacheRulesGet");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling cacheRulesGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling cacheRulesGet");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling cacheRulesGet");
      }
      // verify the required parameter 'cacheRuleName' is set
      if (cacheRuleName === undefined || cacheRuleName === null) {
        throw new Error("Missing the required parameter 'cacheRuleName' when calling cacheRulesGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'cacheRuleName': cacheRuleName
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
      let returnType = CacheRule;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/cacheRules/{cacheRuleName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cacheRulesList operation.
     * @callback module:api/CacheRulesApi~cacheRulesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CacheRulesListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all cache rule resources for the specified container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {module:api/CacheRulesApi~cacheRulesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CacheRulesListResult}
     */
    cacheRulesList(apiVersion, subscriptionId, resourceGroupName, registryName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling cacheRulesList");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling cacheRulesList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling cacheRulesList");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling cacheRulesList");
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
      let returnType = CacheRulesListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/cacheRules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cacheRulesUpdate operation.
     * @callback module:api/CacheRulesApi~cacheRulesUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CacheRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cache rule for a container registry with the specified parameters.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} cacheRuleName The name of the cache rule.
     * @param {module:model/CacheRuleUpdateParameters} cacheRuleUpdateParameters The parameters for updating a cache rule.
     * @param {module:api/CacheRulesApi~cacheRulesUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CacheRule}
     */
    cacheRulesUpdate(apiVersion, subscriptionId, resourceGroupName, registryName, cacheRuleName, cacheRuleUpdateParameters, callback) {
      let postBody = cacheRuleUpdateParameters;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling cacheRulesUpdate");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling cacheRulesUpdate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling cacheRulesUpdate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling cacheRulesUpdate");
      }
      // verify the required parameter 'cacheRuleName' is set
      if (cacheRuleName === undefined || cacheRuleName === null) {
        throw new Error("Missing the required parameter 'cacheRuleName' when calling cacheRulesUpdate");
      }
      // verify the required parameter 'cacheRuleUpdateParameters' is set
      if (cacheRuleUpdateParameters === undefined || cacheRuleUpdateParameters === null) {
        throw new Error("Missing the required parameter 'cacheRuleUpdateParameters' when calling cacheRulesUpdate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'cacheRuleName': cacheRuleName
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
      let returnType = CacheRule;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/cacheRules/{cacheRuleName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}