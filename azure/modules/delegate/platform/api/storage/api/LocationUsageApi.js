/**
 * StorageManagementClient
 * The Azure Storage Management API.
 *
 * The version of the OpenAPI document: 2023-01-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../../BaseApiClient";
import UsageListResult from '../model/UsageListResult';

/**
* LocationUsage service.
* @module api/LocationUsageApi
* @version 2023-01-01
*/
export default class LocationUsageApi {

    /**
    * Constructs a new LocationUsageApi. 
    * @alias module:api/LocationUsageApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the usagesListByLocation operation.
     * @callback module:api/LocationUsageApi~usagesListByLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsageListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the current usage count and the limit for the resources of the location under the subscription.
     * @param {String} apiVersion The API version to use for this operation.
     * @param {String} subscriptionId The ID of the target subscription.
     * @param {String} location The location of the Azure Storage resource.
     * @param {module:api/LocationUsageApi~usagesListByLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsageListResult}
     */
    usagesListByLocation(apiVersion, subscriptionId, location, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling usagesListByLocation");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling usagesListByLocation");
      }
      // verify the required parameter 'location' is set
      if (location === undefined || location === null) {
        throw new Error("Missing the required parameter 'location' when calling usagesListByLocation");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'location': location
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
      let returnType = UsageListResult;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/usages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}