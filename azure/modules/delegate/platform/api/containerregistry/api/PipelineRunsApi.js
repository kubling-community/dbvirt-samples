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
import PipelineRun from '../model/PipelineRun';
import PipelineRunListResult from '../model/PipelineRunListResult';

/**
* PipelineRuns service.
* @module api/PipelineRunsApi
* @version 2019-06-01-preview
*/
export default class PipelineRunsApi {

    /**
    * Constructs a new PipelineRunsApi. 
    * @alias module:api/PipelineRunsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the pipelineRunsCreate operation.
     * @callback module:api/PipelineRunsApi~pipelineRunsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a pipeline run for a container registry with the specified parameters
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} pipelineRunName The name of the pipeline run.
     * @param {module:model/PipelineRun} pipelineRun The parameters for creating a pipeline run.
     * @param {module:api/PipelineRunsApi~pipelineRunsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineRun}
     */
    pipelineRunsCreate(apiVersion, subscriptionId, resourceGroupName, registryName, pipelineRunName, pipelineRun, callback) {
      let postBody = pipelineRun;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling pipelineRunsCreate");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling pipelineRunsCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling pipelineRunsCreate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling pipelineRunsCreate");
      }
      // verify the required parameter 'pipelineRunName' is set
      if (pipelineRunName === undefined || pipelineRunName === null) {
        throw new Error("Missing the required parameter 'pipelineRunName' when calling pipelineRunsCreate");
      }
      // verify the required parameter 'pipelineRun' is set
      if (pipelineRun === undefined || pipelineRun === null) {
        throw new Error("Missing the required parameter 'pipelineRun' when calling pipelineRunsCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'pipelineRunName': pipelineRunName
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
      let returnType = PipelineRun;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/pipelineRuns/{pipelineRunName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the pipelineRunsDelete operation.
     * @callback module:api/PipelineRunsApi~pipelineRunsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a pipeline run from a container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} pipelineRunName The name of the pipeline run.
     * @param {module:api/PipelineRunsApi~pipelineRunsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    pipelineRunsDelete(apiVersion, subscriptionId, resourceGroupName, registryName, pipelineRunName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling pipelineRunsDelete");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling pipelineRunsDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling pipelineRunsDelete");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling pipelineRunsDelete");
      }
      // verify the required parameter 'pipelineRunName' is set
      if (pipelineRunName === undefined || pipelineRunName === null) {
        throw new Error("Missing the required parameter 'pipelineRunName' when calling pipelineRunsDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'pipelineRunName': pipelineRunName
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
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/pipelineRuns/{pipelineRunName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the pipelineRunsGet operation.
     * @callback module:api/PipelineRunsApi~pipelineRunsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the detailed information for a given pipeline run.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} pipelineRunName The name of the pipeline run.
     * @param {module:api/PipelineRunsApi~pipelineRunsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineRun}
     */
    pipelineRunsGet(apiVersion, subscriptionId, resourceGroupName, registryName, pipelineRunName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling pipelineRunsGet");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling pipelineRunsGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling pipelineRunsGet");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling pipelineRunsGet");
      }
      // verify the required parameter 'pipelineRunName' is set
      if (pipelineRunName === undefined || pipelineRunName === null) {
        throw new Error("Missing the required parameter 'pipelineRunName' when calling pipelineRunsGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'pipelineRunName': pipelineRunName
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
      let returnType = PipelineRun;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/pipelineRuns/{pipelineRunName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the pipelineRunsList operation.
     * @callback module:api/PipelineRunsApi~pipelineRunsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineRunListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all the pipeline runs for the specified container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {module:api/PipelineRunsApi~pipelineRunsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineRunListResult}
     */
    pipelineRunsList(apiVersion, subscriptionId, resourceGroupName, registryName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling pipelineRunsList");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling pipelineRunsList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling pipelineRunsList");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling pipelineRunsList");
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
      let returnType = PipelineRunListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/pipelineRuns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}