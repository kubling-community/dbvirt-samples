/**
 * BillingManagementClient
 * Billing client provides access to billing resources for Azure subscriptions.
 *
 * The version of the OpenAPI document: 2020-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../../BaseApiClient";
import OperationListResult from '../model/OperationListResult';
import OperationsErrorResponse from '../model/OperationsErrorResponse';

/**
* Operations service.
* @module api/OperationsApi
* @version 2020-05-01
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
     * Lists the available billing REST API operations.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
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
        '/providers/Microsoft.Billing/operations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
