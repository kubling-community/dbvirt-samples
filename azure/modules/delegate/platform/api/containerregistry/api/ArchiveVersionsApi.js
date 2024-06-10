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
import ArchiveVersion from '../model/ArchiveVersion';
import ArchiveVersionListResult from '../model/ArchiveVersionListResult';
import ErrorResponse from '../model/ErrorResponse';

/**
* ArchiveVersions service.
* @module api/ArchiveVersionsApi
* @version 2019-06-01-preview
*/
export default class ArchiveVersionsApi {

    /**
    * Constructs a new ArchiveVersionsApi. 
    * @alias module:api/ArchiveVersionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the archiveVersionsCreate operation.
     * @callback module:api/ArchiveVersionsApi~archiveVersionsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArchiveVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a archive for a container registry with the specified parameters.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} packageType The type of the package resource.
     * @param {String} archiveName The name of the archive resource.
     * @param {String} archiveVersionName The name of the archive version resource.
     * @param {module:api/ArchiveVersionsApi~archiveVersionsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArchiveVersion}
     */
    archiveVersionsCreate(apiVersion, subscriptionId, resourceGroupName, registryName, packageType, archiveName, archiveVersionName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling archiveVersionsCreate");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling archiveVersionsCreate");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling archiveVersionsCreate");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling archiveVersionsCreate");
      }
      // verify the required parameter 'packageType' is set
      if (packageType === undefined || packageType === null) {
        throw new Error("Missing the required parameter 'packageType' when calling archiveVersionsCreate");
      }
      // verify the required parameter 'archiveName' is set
      if (archiveName === undefined || archiveName === null) {
        throw new Error("Missing the required parameter 'archiveName' when calling archiveVersionsCreate");
      }
      // verify the required parameter 'archiveVersionName' is set
      if (archiveVersionName === undefined || archiveVersionName === null) {
        throw new Error("Missing the required parameter 'archiveVersionName' when calling archiveVersionsCreate");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'packageType': packageType,
        'archiveName': archiveName,
        'archiveVersionName': archiveVersionName
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
      let returnType = ArchiveVersion;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/packages/{packageType}/archives/{archiveName}/versions/{archiveVersionName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the archiveVersionsDelete operation.
     * @callback module:api/ArchiveVersionsApi~archiveVersionsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a archive version from a container registry.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} packageType The type of the package resource.
     * @param {String} archiveName The name of the archive resource.
     * @param {String} archiveVersionName The name of the archive version resource.
     * @param {module:api/ArchiveVersionsApi~archiveVersionsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    archiveVersionsDelete(apiVersion, subscriptionId, resourceGroupName, registryName, packageType, archiveName, archiveVersionName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling archiveVersionsDelete");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling archiveVersionsDelete");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling archiveVersionsDelete");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling archiveVersionsDelete");
      }
      // verify the required parameter 'packageType' is set
      if (packageType === undefined || packageType === null) {
        throw new Error("Missing the required parameter 'packageType' when calling archiveVersionsDelete");
      }
      // verify the required parameter 'archiveName' is set
      if (archiveName === undefined || archiveName === null) {
        throw new Error("Missing the required parameter 'archiveName' when calling archiveVersionsDelete");
      }
      // verify the required parameter 'archiveVersionName' is set
      if (archiveVersionName === undefined || archiveVersionName === null) {
        throw new Error("Missing the required parameter 'archiveVersionName' when calling archiveVersionsDelete");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'packageType': packageType,
        'archiveName': archiveName,
        'archiveVersionName': archiveVersionName
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
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/packages/{packageType}/archives/{archiveName}/versions/{archiveVersionName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the archiveVersionsGet operation.
     * @callback module:api/ArchiveVersionsApi~archiveVersionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArchiveVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the properties of the archive version.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} packageType The type of the package resource.
     * @param {String} archiveName The name of the archive resource.
     * @param {String} archiveVersionName The name of the archive version resource.
     * @param {module:api/ArchiveVersionsApi~archiveVersionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArchiveVersion}
     */
    archiveVersionsGet(apiVersion, subscriptionId, resourceGroupName, registryName, packageType, archiveName, archiveVersionName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling archiveVersionsGet");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling archiveVersionsGet");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling archiveVersionsGet");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling archiveVersionsGet");
      }
      // verify the required parameter 'packageType' is set
      if (packageType === undefined || packageType === null) {
        throw new Error("Missing the required parameter 'packageType' when calling archiveVersionsGet");
      }
      // verify the required parameter 'archiveName' is set
      if (archiveName === undefined || archiveName === null) {
        throw new Error("Missing the required parameter 'archiveName' when calling archiveVersionsGet");
      }
      // verify the required parameter 'archiveVersionName' is set
      if (archiveVersionName === undefined || archiveVersionName === null) {
        throw new Error("Missing the required parameter 'archiveVersionName' when calling archiveVersionsGet");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'packageType': packageType,
        'archiveName': archiveName,
        'archiveVersionName': archiveVersionName
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
      let returnType = ArchiveVersion;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/packages/{packageType}/archives/{archiveName}/versions/{archiveVersionName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the archiveVersionsList operation.
     * @callback module:api/ArchiveVersionsApi~archiveVersionsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArchiveVersionListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all archive versions for the specified container registry, repository type and archive name.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {String} resourceGroupName The name of the resource group. The name is case insensitive.
     * @param {String} registryName The name of the container registry.
     * @param {String} packageType The type of the package resource.
     * @param {String} archiveName The name of the archive resource.
     * @param {module:api/ArchiveVersionsApi~archiveVersionsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArchiveVersionListResult}
     */
    archiveVersionsList(apiVersion, subscriptionId, resourceGroupName, registryName, packageType, archiveName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling archiveVersionsList");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling archiveVersionsList");
      }
      // verify the required parameter 'resourceGroupName' is set
      if (resourceGroupName === undefined || resourceGroupName === null) {
        throw new Error("Missing the required parameter 'resourceGroupName' when calling archiveVersionsList");
      }
      // verify the required parameter 'registryName' is set
      if (registryName === undefined || registryName === null) {
        throw new Error("Missing the required parameter 'registryName' when calling archiveVersionsList");
      }
      // verify the required parameter 'packageType' is set
      if (packageType === undefined || packageType === null) {
        throw new Error("Missing the required parameter 'packageType' when calling archiveVersionsList");
      }
      // verify the required parameter 'archiveName' is set
      if (archiveName === undefined || archiveName === null) {
        throw new Error("Missing the required parameter 'archiveName' when calling archiveVersionsList");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'resourceGroupName': resourceGroupName,
        'registryName': registryName,
        'packageType': packageType,
        'archiveName': archiveName
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
      let returnType = ArchiveVersionListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/packages/{packageType}/archives/{archiveName}/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
