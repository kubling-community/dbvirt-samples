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
import TaskRun from '../model/TaskRun';
import TaskRunListResult from '../model/TaskRunListResult';
import TaskRunUpdateParameters from '../model/TaskRunUpdateParameters';

/**
* TaskRuns service.
* @module api/TaskRunsApi
* @version 2019-06-01-preview
*/
export default class TaskRunsApi {

    /**
    * Constructs a new TaskRunsApi. 
    * @alias module:api/TaskRunsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the taskRunsCreate operation.
     * @callback module:api/TaskRunsApi~taskRunsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a task run for a container registry with the specified parameters.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} taskRunName The name of the task run.
     * @param {module:model/TaskRun} taskRun The parameters of a run that needs to scheduled.
     * @param {module:api/TaskRunsApi~taskRunsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskRun}
     */
    taskRunsCreate(subscriptionId, resourceGroupName, registryName, apiVersion, taskRunName, taskRun, callback) {
      let postBody = taskRun;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling taskRunsCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling taskRunsCreate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling taskRunsCreate");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling taskRunsCreate");
      }
      // verify the required parameter 'taskRunName' is set
      if (taskRunName === undefined || taskRunName === null) {
        throw new Error("Missing the required parameter 'taskRunName' when calling taskRunsCreate");
      }
      // verify the required parameter 'taskRun' is set
      if (taskRun === undefined || taskRun === null) {
        throw new Error("Missing the required parameter 'taskRun' when calling taskRunsCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'taskRunName': taskRunName
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
      let returnType = TaskRun;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the taskRunsDelete operation.
     * @callback module:api/TaskRunsApi~taskRunsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a specified task run resource.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} taskRunName The name of the task run.
     * @param {module:api/TaskRunsApi~taskRunsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    taskRunsDelete(subscriptionId, resourceGroupName, registryName, apiVersion, taskRunName, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling taskRunsDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling taskRunsDelete");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling taskRunsDelete");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling taskRunsDelete");
      }
      // verify the required parameter 'taskRunName' is set
      if (taskRunName === undefined || taskRunName === null) {
        throw new Error("Missing the required parameter 'taskRunName' when calling taskRunsDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'taskRunName': taskRunName
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
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the taskRunsGet operation.
     * @callback module:api/TaskRunsApi~taskRunsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the detailed information for a given task run.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} taskRunName The name of the task run.
     * @param {module:api/TaskRunsApi~taskRunsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskRun}
     */
    taskRunsGet(subscriptionId, resourceGroupName, registryName, apiVersion, taskRunName, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling taskRunsGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling taskRunsGet");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling taskRunsGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling taskRunsGet");
      }
      // verify the required parameter 'taskRunName' is set
      if (taskRunName === undefined || taskRunName === null) {
        throw new Error("Missing the required parameter 'taskRunName' when calling taskRunsGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'taskRunName': taskRunName
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
      let returnType = TaskRun;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the taskRunsGetDetails operation.
     * @callback module:api/TaskRunsApi~taskRunsGetDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the detailed information for a given task run that includes all secrets.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} taskRunName The name of the task run.
     * @param {module:api/TaskRunsApi~taskRunsGetDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskRun}
     */
    taskRunsGetDetails(subscriptionId, resourceGroupName, registryName, apiVersion, taskRunName, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling taskRunsGetDetails");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling taskRunsGetDetails");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling taskRunsGetDetails");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling taskRunsGetDetails");
      }
      // verify the required parameter 'taskRunName' is set
      if (taskRunName === undefined || taskRunName === null) {
        throw new Error("Missing the required parameter 'taskRunName' when calling taskRunsGetDetails");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'taskRunName': taskRunName
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
      let returnType = TaskRun;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}/listDetails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the taskRunsList operation.
     * @callback module:api/TaskRunsApi~taskRunsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRunListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all the task runs for a specified container registry.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {module:api/TaskRunsApi~taskRunsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskRunListResult}
     */
    taskRunsList(subscriptionId, resourceGroupName, registryName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling taskRunsList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling taskRunsList");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling taskRunsList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling taskRunsList");
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
      let returnType = TaskRunListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the taskRunsUpdate operation.
     * @callback module:api/TaskRunsApi~taskRunsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a task run with the specified parameters.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} taskRunName The name of the task run.
     * @param {module:model/TaskRunUpdateParameters} taskRunUpdateParameters The parameters for updating a task run.
     * @param {module:api/TaskRunsApi~taskRunsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskRun}
     */
    taskRunsUpdate(subscriptionId, resourceGroupName, registryName, apiVersion, taskRunName, taskRunUpdateParameters, callback) {
      let postBody = taskRunUpdateParameters;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling taskRunsUpdate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling taskRunsUpdate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling taskRunsUpdate");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling taskRunsUpdate");
      }
      // verify the required parameter 'taskRunName' is set
      if (taskRunName === undefined || taskRunName === null) {
        throw new Error("Missing the required parameter 'taskRunName' when calling taskRunsUpdate");
      }
      // verify the required parameter 'taskRunUpdateParameters' is set
      if (taskRunUpdateParameters === undefined || taskRunUpdateParameters === null) {
        throw new Error("Missing the required parameter 'taskRunUpdateParameters' when calling taskRunsUpdate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'taskRunName': taskRunName
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
      let returnType = TaskRun;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/taskRuns/{taskRunName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}