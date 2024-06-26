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
import OperationListResult from '../model/OperationListResult';
import RegistryNameCheckRequest from '../model/RegistryNameCheckRequest';
import RegistryNameStatus from '../model/RegistryNameStatus';

/**
* Operation service.
* @module api/OperationApi
* @version 2019-06-01-preview
*/
export default class OperationApi {

    /**
    * Constructs a new OperationApi. 
    * @alias module:api/OperationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the operationsList operation.
     * @callback module:api/OperationApi~operationsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all of the available Azure Container Registry REST API operations.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {module:api/OperationApi~operationsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationListResult}
     */
    operationsList(apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling operationsList");
      }

      let pathParams = {
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
      let returnType = OperationListResult;
      return this.apiClient.callApi(
        '/providers/Microsoft.ContainerRegistry/operations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registriesCheckNameAvailability operation.
     * @callback module:api/OperationApi~registriesCheckNameAvailabilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegistryNameStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Checks whether the container registry name is available for use. The name must contain only alphanumeric characters, be globally unique, and between 5 and 50 characters in length.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription. The value must be an UUID.
     * @param {module:model/RegistryNameCheckRequest} registryNameCheckRequest The object containing information for the availability request.
     * @param {module:api/OperationApi~registriesCheckNameAvailabilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RegistryNameStatus}
     */
    registriesCheckNameAvailability(apiVersion, subscriptionId, registryNameCheckRequest, callback) {
      let postBody = registryNameCheckRequest;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling registriesCheckNameAvailability");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling registriesCheckNameAvailability");
      }
      // verify the required parameter 'registryNameCheckRequest' is set
      if (registryNameCheckRequest === undefined || registryNameCheckRequest === null) {
        throw new Error("Missing the required parameter 'registryNameCheckRequest' when calling registriesCheckNameAvailability");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
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
      let returnType = RegistryNameStatus;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/providers/Microsoft.ContainerRegistry/checkNameAvailability', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
