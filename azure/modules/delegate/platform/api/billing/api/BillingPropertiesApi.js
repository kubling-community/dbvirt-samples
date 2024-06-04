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
import BillingProperty from '../model/BillingProperty';
import ErrorResponse from '../model/ErrorResponse';

/**
* BillingProperties service.
* @module api/BillingPropertiesApi
* @version 2020-05-01
*/
export default class BillingPropertiesApi {

    /**
    * Constructs a new BillingPropertiesApi. 
    * @alias module:api/BillingPropertiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the billingPropertyGet operation.
     * @callback module:api/BillingPropertiesApi~billingPropertyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the billing properties for a subscription. This operation is not supported for billing accounts with agreement type Enterprise Agreement.
     * @param {String} subscriptionId The ID that uniquely identifies an Azure subscription.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {module:api/BillingPropertiesApi~billingPropertyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingProperty}
     */
    billingPropertyGet(subscriptionId, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling billingPropertyGet");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling billingPropertyGet");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BillingProperty;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingProperty/default', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingPropertyUpdate operation.
     * @callback module:api/BillingPropertiesApi~billingPropertyUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the billing property of a subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     * @param {String} subscriptionId The ID that uniquely identifies an Azure subscription.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {module:model/BillingProperty} billingProperty Request parameters that are provided to the update billing property operation.
     * @param {module:api/BillingPropertiesApi~billingPropertyUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingProperty}
     */
    billingPropertyUpdate(subscriptionId, apiVersion, billingProperty, callback) {
      let postBody = billingProperty;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling billingPropertyUpdate");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling billingPropertyUpdate");
      }
      // verify the required parameter 'billingProperty' is set
      if (billingProperty === undefined || billingProperty === null) {
        throw new Error("Missing the required parameter 'billingProperty' when calling billingPropertyUpdate");
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
      let returnType = BillingProperty;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingProperty/default', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
