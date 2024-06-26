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
import ErrorResponse from '../model/ErrorResponse';
import OperationListResult from '../model/OperationListResult';

/**
* Operations service.
* @module api/OperationsApi
* @version 2023-01-15-preview
*/
export default class OperationsApi {

    /**
    * Constructs a new OperationsApi. 
    * @alias module:api/OperationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the operationsList operation.
     * @callback module:api/OperationsApi~operationsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all of the available Azure Data Services on Azure Arc API operations.
     * @param {String} apiVersion The API version to use for the request
     * @param {module:api/OperationsApi~operationsListCallback} callback The callback function, accepting three arguments: error, data, response
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
        '/providers/Microsoft.AzureArcData/operations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
