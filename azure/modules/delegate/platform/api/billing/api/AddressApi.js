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
import AddressDetails from '../model/AddressDetails';
import ErrorResponse from '../model/ErrorResponse';
import ValidateAddressResponse from '../model/ValidateAddressResponse';

/**
* Address service.
* @module api/AddressApi
* @version 2020-05-01
*/
export default class AddressApi {

    /**
    * Constructs a new AddressApi. 
    * @alias module:api/AddressApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addressValidate operation.
     * @callback module:api/AddressApi~addressValidateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidateAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validates an address. Use the operation to validate an address before using it as soldTo or a billTo address.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {module:model/AddressDetails} addressDetails 
     * @param {module:api/AddressApi~addressValidateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidateAddressResponse}
     */
    addressValidate(apiVersion, addressDetails, callback) {
      let postBody = addressDetails;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling addressValidate");
      }
      // verify the required parameter 'addressDetails' is set
      if (addressDetails === undefined || addressDetails === null) {
        throw new Error("Missing the required parameter 'addressDetails' when calling addressValidate");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ValidateAddressResponse;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/validateAddress', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
