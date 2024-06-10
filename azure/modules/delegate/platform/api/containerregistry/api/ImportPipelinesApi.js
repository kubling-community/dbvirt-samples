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
import ImportPipeline from '../model/ImportPipeline';
import ImportPipelineListResult from '../model/ImportPipelineListResult';

/**
* ImportPipelines service.
* @module api/ImportPipelinesApi
* @version 2019-06-01-preview
*/
export default class ImportPipelinesApi {

    /**
    * Constructs a new ImportPipelinesApi. 
    * @alias module:api/ImportPipelinesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the importPipelinesCreate operation.
     * @callback module:api/ImportPipelinesApi~importPipelinesCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImportPipeline} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an import pipeline for a container registry with the specified parameters.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} importPipelineName The name of the import pipeline.
     * @param {module:model/ImportPipeline} importPipeline The parameters for creating an import pipeline.
     * @param {module:api/ImportPipelinesApi~importPipelinesCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImportPipeline}
     */
    importPipelinesCreate(apiVersion, subscriptionId, resourceGroupName, registryName, importPipelineName, importPipeline, callback) {
      let postBody = importPipeline;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling importPipelinesCreate");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling importPipelinesCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling importPipelinesCreate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling importPipelinesCreate");
      }
      // verify the required parameter 'importPipelineName' is set
      if (importPipelineName === undefined || importPipelineName === null) {
        throw new Error("Missing the required parameter 'importPipelineName' when calling importPipelinesCreate");
      }
      // verify the required parameter 'importPipeline' is set
      if (importPipeline === undefined || importPipeline === null) {
        throw new Error("Missing the required parameter 'importPipeline' when calling importPipelinesCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'importPipelineName': importPipelineName
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
      let returnType = ImportPipeline;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/importPipelines/{importPipelineName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importPipelinesDelete operation.
     * @callback module:api/ImportPipelinesApi~importPipelinesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an import pipeline from a container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} importPipelineName The name of the import pipeline.
     * @param {module:api/ImportPipelinesApi~importPipelinesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    importPipelinesDelete(apiVersion, subscriptionId, resourceGroupName, registryName, importPipelineName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling importPipelinesDelete");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling importPipelinesDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling importPipelinesDelete");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling importPipelinesDelete");
      }
      // verify the required parameter 'importPipelineName' is set
      if (importPipelineName === undefined || importPipelineName === null) {
        throw new Error("Missing the required parameter 'importPipelineName' when calling importPipelinesDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'importPipelineName': importPipelineName
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
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/importPipelines/{importPipelineName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importPipelinesGet operation.
     * @callback module:api/ImportPipelinesApi~importPipelinesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImportPipeline} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the properties of the import pipeline.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} importPipelineName The name of the import pipeline.
     * @param {module:api/ImportPipelinesApi~importPipelinesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImportPipeline}
     */
    importPipelinesGet(apiVersion, subscriptionId, resourceGroupName, registryName, importPipelineName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling importPipelinesGet");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling importPipelinesGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling importPipelinesGet");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling importPipelinesGet");
      }
      // verify the required parameter 'importPipelineName' is set
      if (importPipelineName === undefined || importPipelineName === null) {
        throw new Error("Missing the required parameter 'importPipelineName' when calling importPipelinesGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'importPipelineName': importPipelineName
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
      let returnType = ImportPipeline;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/importPipelines/{importPipelineName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importPipelinesList operation.
     * @callback module:api/ImportPipelinesApi~importPipelinesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImportPipelineListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all import pipelines for the specified container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {module:api/ImportPipelinesApi~importPipelinesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImportPipelineListResult}
     */
    importPipelinesList(apiVersion, subscriptionId, resourceGroupName, registryName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling importPipelinesList");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling importPipelinesList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling importPipelinesList");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling importPipelinesList");
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
      let returnType = ImportPipelineListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/importPipelines', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
