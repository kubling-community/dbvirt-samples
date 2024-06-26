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
import BillingRoleDefinition from '../model/BillingRoleDefinition';
import BillingRoleDefinitionListResult from '../model/BillingRoleDefinitionListResult';
import ErrorResponse from '../model/ErrorResponse';

/**
* BillingRoleDefinitions service.
* @module api/BillingRoleDefinitionsApi
* @version 2020-05-01
*/
export default class BillingRoleDefinitionsApi {

    /**
    * Constructs a new BillingRoleDefinitionsApi. 
    * @alias module:api/BillingRoleDefinitionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the billingRoleDefinitionsGetByBillingAccount operation.
     * @callback module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsGetByBillingAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingRoleDefinition} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the definition for a role on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {String} billingRoleDefinitionName The ID that uniquely identifies a role definition.
     * @param {module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsGetByBillingAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingRoleDefinition}
     */
    billingRoleDefinitionsGetByBillingAccount(apiVersion, billingAccountName, billingRoleDefinitionName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling billingRoleDefinitionsGetByBillingAccount");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling billingRoleDefinitionsGetByBillingAccount");
      }
      // verify the required parameter 'billingRoleDefinitionName' is set
      if (billingRoleDefinitionName === undefined || billingRoleDefinitionName === null) {
        throw new Error("Missing the required parameter 'billingRoleDefinitionName' when calling billingRoleDefinitionsGetByBillingAccount");
      }

      let pathParams = {
        'billingAccountName': billingAccountName,
        'billingRoleDefinitionName': billingRoleDefinitionName
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
      let returnType = BillingRoleDefinition;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions/{billingRoleDefinitionName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingRoleDefinitionsGetByBillingProfile operation.
     * @callback module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsGetByBillingProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingRoleDefinition} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the definition for a role on a billing profile. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {String} billingProfileName The ID that uniquely identifies a billing profile.
     * @param {String} billingRoleDefinitionName The ID that uniquely identifies a role definition.
     * @param {module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsGetByBillingProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingRoleDefinition}
     */
    billingRoleDefinitionsGetByBillingProfile(apiVersion, billingAccountName, billingProfileName, billingRoleDefinitionName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling billingRoleDefinitionsGetByBillingProfile");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling billingRoleDefinitionsGetByBillingProfile");
      }
      // verify the required parameter 'billingProfileName' is set
      if (billingProfileName === undefined || billingProfileName === null) {
        throw new Error("Missing the required parameter 'billingProfileName' when calling billingRoleDefinitionsGetByBillingProfile");
      }
      // verify the required parameter 'billingRoleDefinitionName' is set
      if (billingRoleDefinitionName === undefined || billingRoleDefinitionName === null) {
        throw new Error("Missing the required parameter 'billingRoleDefinitionName' when calling billingRoleDefinitionsGetByBillingProfile");
      }

      let pathParams = {
        'billingAccountName': billingAccountName,
        'billingProfileName': billingProfileName,
        'billingRoleDefinitionName': billingRoleDefinitionName
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
      let returnType = BillingRoleDefinition;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleDefinitions/{billingRoleDefinitionName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingRoleDefinitionsGetByInvoiceSection operation.
     * @callback module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsGetByInvoiceSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingRoleDefinition} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the definition for a role on an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {String} billingProfileName The ID that uniquely identifies a billing profile.
     * @param {String} invoiceSectionName The ID that uniquely identifies an invoice section.
     * @param {String} billingRoleDefinitionName The ID that uniquely identifies a role definition.
     * @param {module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsGetByInvoiceSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingRoleDefinition}
     */
    billingRoleDefinitionsGetByInvoiceSection(apiVersion, billingAccountName, billingProfileName, invoiceSectionName, billingRoleDefinitionName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling billingRoleDefinitionsGetByInvoiceSection");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling billingRoleDefinitionsGetByInvoiceSection");
      }
      // verify the required parameter 'billingProfileName' is set
      if (billingProfileName === undefined || billingProfileName === null) {
        throw new Error("Missing the required parameter 'billingProfileName' when calling billingRoleDefinitionsGetByInvoiceSection");
      }
      // verify the required parameter 'invoiceSectionName' is set
      if (invoiceSectionName === undefined || invoiceSectionName === null) {
        throw new Error("Missing the required parameter 'invoiceSectionName' when calling billingRoleDefinitionsGetByInvoiceSection");
      }
      // verify the required parameter 'billingRoleDefinitionName' is set
      if (billingRoleDefinitionName === undefined || billingRoleDefinitionName === null) {
        throw new Error("Missing the required parameter 'billingRoleDefinitionName' when calling billingRoleDefinitionsGetByInvoiceSection");
      }

      let pathParams = {
        'billingAccountName': billingAccountName,
        'billingProfileName': billingProfileName,
        'invoiceSectionName': invoiceSectionName,
        'billingRoleDefinitionName': billingRoleDefinitionName
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
      let returnType = BillingRoleDefinition;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleDefinitions/{billingRoleDefinitionName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingRoleDefinitionsListByBillingAccount operation.
     * @callback module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsListByBillingAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingRoleDefinitionListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists the role definitions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsListByBillingAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingRoleDefinitionListResult}
     */
    billingRoleDefinitionsListByBillingAccount(apiVersion, billingAccountName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling billingRoleDefinitionsListByBillingAccount");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling billingRoleDefinitionsListByBillingAccount");
      }

      let pathParams = {
        'billingAccountName': billingAccountName
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
      let returnType = BillingRoleDefinitionListResult;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingRoleDefinitionsListByBillingProfile operation.
     * @callback module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsListByBillingProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingRoleDefinitionListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists the role definitions for a billing profile. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {String} billingProfileName The ID that uniquely identifies a billing profile.
     * @param {module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsListByBillingProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingRoleDefinitionListResult}
     */
    billingRoleDefinitionsListByBillingProfile(apiVersion, billingAccountName, billingProfileName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling billingRoleDefinitionsListByBillingProfile");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling billingRoleDefinitionsListByBillingProfile");
      }
      // verify the required parameter 'billingProfileName' is set
      if (billingProfileName === undefined || billingProfileName === null) {
        throw new Error("Missing the required parameter 'billingProfileName' when calling billingRoleDefinitionsListByBillingProfile");
      }

      let pathParams = {
        'billingAccountName': billingAccountName,
        'billingProfileName': billingProfileName
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
      let returnType = BillingRoleDefinitionListResult;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleDefinitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingRoleDefinitionsListByInvoiceSection operation.
     * @callback module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsListByInvoiceSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingRoleDefinitionListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists the role definitions for an invoice section. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {String} billingProfileName The ID that uniquely identifies a billing profile.
     * @param {String} invoiceSectionName The ID that uniquely identifies an invoice section.
     * @param {module:api/BillingRoleDefinitionsApi~billingRoleDefinitionsListByInvoiceSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingRoleDefinitionListResult}
     */
    billingRoleDefinitionsListByInvoiceSection(apiVersion, billingAccountName, billingProfileName, invoiceSectionName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling billingRoleDefinitionsListByInvoiceSection");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling billingRoleDefinitionsListByInvoiceSection");
      }
      // verify the required parameter 'billingProfileName' is set
      if (billingProfileName === undefined || billingProfileName === null) {
        throw new Error("Missing the required parameter 'billingProfileName' when calling billingRoleDefinitionsListByInvoiceSection");
      }
      // verify the required parameter 'invoiceSectionName' is set
      if (invoiceSectionName === undefined || invoiceSectionName === null) {
        throw new Error("Missing the required parameter 'invoiceSectionName' when calling billingRoleDefinitionsListByInvoiceSection");
      }

      let pathParams = {
        'billingAccountName': billingAccountName,
        'billingProfileName': billingProfileName,
        'invoiceSectionName': invoiceSectionName
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
      let returnType = BillingRoleDefinitionListResult;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleDefinitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
