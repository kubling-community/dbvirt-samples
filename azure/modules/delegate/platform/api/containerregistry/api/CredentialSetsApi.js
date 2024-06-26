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
import CredentialSet from '../model/CredentialSet';
import CredentialSetListResult from '../model/CredentialSetListResult';
import CredentialSetUpdateParameters from '../model/CredentialSetUpdateParameters';
import ErrorResponse from '../model/ErrorResponse';

/**
* CredentialSets service.
* @module api/CredentialSetsApi
* @version 2019-06-01-preview
*/
export default class CredentialSetsApi {

    /**
    * Constructs a new CredentialSetsApi. 
    * @alias module:api/CredentialSetsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the credentialSetsCreate operation.
     * @callback module:api/CredentialSetsApi~credentialSetsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a credential set for a container registry with the specified parameters.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} credentialSetName The name of the credential set.
     * @param {module:model/CredentialSet} credentialSet The parameters for creating a credential set.
     * @param {module:api/CredentialSetsApi~credentialSetsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CredentialSet}
     */
    credentialSetsCreate(apiVersion, subscriptionId, resourceGroupName, registryName, credentialSetName, credentialSet, callback) {
      let postBody = credentialSet;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling credentialSetsCreate");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling credentialSetsCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling credentialSetsCreate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling credentialSetsCreate");
      }
      // verify the required parameter 'credentialSetName' is set
      if (credentialSetName === undefined || credentialSetName === null) {
        throw new Error("Missing the required parameter 'credentialSetName' when calling credentialSetsCreate");
      }
      // verify the required parameter 'credentialSet' is set
      if (credentialSet === undefined || credentialSet === null) {
        throw new Error("Missing the required parameter 'credentialSet' when calling credentialSetsCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'credentialSetName': credentialSetName
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
      let returnType = CredentialSet;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the credentialSetsDelete operation.
     * @callback module:api/CredentialSetsApi~credentialSetsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a credential set from a container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} credentialSetName The name of the credential set.
     * @param {module:api/CredentialSetsApi~credentialSetsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    credentialSetsDelete(apiVersion, subscriptionId, resourceGroupName, registryName, credentialSetName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling credentialSetsDelete");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling credentialSetsDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling credentialSetsDelete");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling credentialSetsDelete");
      }
      // verify the required parameter 'credentialSetName' is set
      if (credentialSetName === undefined || credentialSetName === null) {
        throw new Error("Missing the required parameter 'credentialSetName' when calling credentialSetsDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'credentialSetName': credentialSetName
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
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the credentialSetsGet operation.
     * @callback module:api/CredentialSetsApi~credentialSetsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the properties of the specified credential set resource.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} credentialSetName The name of the credential set.
     * @param {module:api/CredentialSetsApi~credentialSetsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CredentialSet}
     */
    credentialSetsGet(apiVersion, subscriptionId, resourceGroupName, registryName, credentialSetName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling credentialSetsGet");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling credentialSetsGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling credentialSetsGet");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling credentialSetsGet");
      }
      // verify the required parameter 'credentialSetName' is set
      if (credentialSetName === undefined || credentialSetName === null) {
        throw new Error("Missing the required parameter 'credentialSetName' when calling credentialSetsGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'credentialSetName': credentialSetName
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
      let returnType = CredentialSet;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the credentialSetsList operation.
     * @callback module:api/CredentialSetsApi~credentialSetsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialSetListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all credential set resources for the specified container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {module:api/CredentialSetsApi~credentialSetsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CredentialSetListResult}
     */
    credentialSetsList(apiVersion, subscriptionId, resourceGroupName, registryName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling credentialSetsList");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling credentialSetsList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling credentialSetsList");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling credentialSetsList");
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
      let returnType = CredentialSetListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the credentialSetsUpdate operation.
     * @callback module:api/CredentialSetsApi~credentialSetsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a credential set for a container registry with the specified parameters.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} credentialSetName The name of the credential set.
     * @param {module:model/CredentialSetUpdateParameters} credentialSetUpdateParameters The parameters for updating a credential set.
     * @param {module:api/CredentialSetsApi~credentialSetsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CredentialSet}
     */
    credentialSetsUpdate(apiVersion, subscriptionId, resourceGroupName, registryName, credentialSetName, credentialSetUpdateParameters, callback) {
      let postBody = credentialSetUpdateParameters;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling credentialSetsUpdate");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling credentialSetsUpdate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling credentialSetsUpdate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling credentialSetsUpdate");
      }
      // verify the required parameter 'credentialSetName' is set
      if (credentialSetName === undefined || credentialSetName === null) {
        throw new Error("Missing the required parameter 'credentialSetName' when calling credentialSetsUpdate");
      }
      // verify the required parameter 'credentialSetUpdateParameters' is set
      if (credentialSetUpdateParameters === undefined || credentialSetUpdateParameters === null) {
        throw new Error("Missing the required parameter 'credentialSetUpdateParameters' when calling credentialSetsUpdate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'credentialSetName': credentialSetName
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
      let returnType = CredentialSet;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
