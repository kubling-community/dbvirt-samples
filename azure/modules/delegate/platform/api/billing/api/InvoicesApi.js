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
import DownloadUrl from '../model/DownloadUrl';
import ErrorResponse from '../model/ErrorResponse';
import Invoice from '../model/Invoice';
import InvoiceListResult from '../model/InvoiceListResult';

/**
* Invoices service.
* @module api/InvoicesApi
* @version 2020-05-01
*/
export default class InvoicesApi {

    /**
    * Constructs a new InvoicesApi. 
    * @alias module:api/InvoicesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the invoicesDownloadBillingSubscriptionInvoice operation.
     * @callback module:api/InvoicesApi~invoicesDownloadBillingSubscriptionInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DownloadUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a URL to download an invoice.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} subscriptionId The ID that uniquely identifies an Azure subscription.
     * @param {String} invoiceName The ID that uniquely identifies an invoice.
     * @param {String} downloadToken Download token with document source and document ID.
     * @param {module:api/InvoicesApi~invoicesDownloadBillingSubscriptionInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DownloadUrl}
     */
    invoicesDownloadBillingSubscriptionInvoice(apiVersion, subscriptionId, invoiceName, downloadToken, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling invoicesDownloadBillingSubscriptionInvoice");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling invoicesDownloadBillingSubscriptionInvoice");
      }
      // verify the required parameter 'invoiceName' is set
      if (invoiceName === undefined || invoiceName === null) {
        throw new Error("Missing the required parameter 'invoiceName' when calling invoicesDownloadBillingSubscriptionInvoice");
      }
      // verify the required parameter 'downloadToken' is set
      if (downloadToken === undefined || downloadToken === null) {
        throw new Error("Missing the required parameter 'downloadToken' when calling invoicesDownloadBillingSubscriptionInvoice");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'invoiceName': invoiceName
      };
      let queryParams = {
        'api-version': apiVersion,
        'downloadToken': downloadToken
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['azure_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DownloadUrl;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/invoices/{invoiceName}/download', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoicesDownloadInvoice operation.
     * @callback module:api/InvoicesApi~invoicesDownloadInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DownloadUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a URL to download an invoice. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {String} invoiceName The ID that uniquely identifies an invoice.
     * @param {String} downloadToken Download token with document source and document ID.
     * @param {module:api/InvoicesApi~invoicesDownloadInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DownloadUrl}
     */
    invoicesDownloadInvoice(apiVersion, billingAccountName, invoiceName, downloadToken, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling invoicesDownloadInvoice");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling invoicesDownloadInvoice");
      }
      // verify the required parameter 'invoiceName' is set
      if (invoiceName === undefined || invoiceName === null) {
        throw new Error("Missing the required parameter 'invoiceName' when calling invoicesDownloadInvoice");
      }
      // verify the required parameter 'downloadToken' is set
      if (downloadToken === undefined || downloadToken === null) {
        throw new Error("Missing the required parameter 'downloadToken' when calling invoicesDownloadInvoice");
      }

      let pathParams = {
        'billingAccountName': billingAccountName,
        'invoiceName': invoiceName
      };
      let queryParams = {
        'api-version': apiVersion,
        'downloadToken': downloadToken
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['azure_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DownloadUrl;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/download', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoicesDownloadMultipleBillingProfileInvoices operation.
     * @callback module:api/InvoicesApi~invoicesDownloadMultipleBillingProfileInvoicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DownloadUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a URL to download multiple invoice documents (invoice pdf, tax receipts, credit notes) as a zip file. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {Array.<String>} requestBody An array of download urls for individual documents
     * @param {module:api/InvoicesApi~invoicesDownloadMultipleBillingProfileInvoicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DownloadUrl}
     */
    invoicesDownloadMultipleBillingProfileInvoices(apiVersion, billingAccountName, requestBody, callback) {
      let postBody = requestBody;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling invoicesDownloadMultipleBillingProfileInvoices");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling invoicesDownloadMultipleBillingProfileInvoices");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling invoicesDownloadMultipleBillingProfileInvoices");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DownloadUrl;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/downloadDocuments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoicesDownloadMultipleBillingSubscriptionInvoices operation.
     * @callback module:api/InvoicesApi~invoicesDownloadMultipleBillingSubscriptionInvoicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DownloadUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a URL to download multiple invoice documents (invoice pdf, tax receipts, credit notes) as a zip file.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} subscriptionId The ID that uniquely identifies an Azure subscription.
     * @param {Array.<String>} requestBody An array of download urls for individual documents
     * @param {module:api/InvoicesApi~invoicesDownloadMultipleBillingSubscriptionInvoicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DownloadUrl}
     */
    invoicesDownloadMultipleBillingSubscriptionInvoices(apiVersion, subscriptionId, requestBody, callback) {
      let postBody = requestBody;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling invoicesDownloadMultipleBillingSubscriptionInvoices");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling invoicesDownloadMultipleBillingSubscriptionInvoices");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling invoicesDownloadMultipleBillingSubscriptionInvoices");
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
      let returnType = DownloadUrl;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/downloadDocuments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoicesGet operation.
     * @callback module:api/InvoicesApi~invoicesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Invoice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets an invoice by billing account name and ID. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {String} invoiceName The ID that uniquely identifies an invoice.
     * @param {module:api/InvoicesApi~invoicesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Invoice}
     */
    invoicesGet(apiVersion, billingAccountName, invoiceName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling invoicesGet");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling invoicesGet");
      }
      // verify the required parameter 'invoiceName' is set
      if (invoiceName === undefined || invoiceName === null) {
        throw new Error("Missing the required parameter 'invoiceName' when calling invoicesGet");
      }

      let pathParams = {
        'billingAccountName': billingAccountName,
        'invoiceName': invoiceName
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
      let returnType = Invoice;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoicesGetById operation.
     * @callback module:api/InvoicesApi~invoicesGetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Invoice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets an invoice by ID. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} invoiceName The ID that uniquely identifies an invoice.
     * @param {module:api/InvoicesApi~invoicesGetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Invoice}
     */
    invoicesGetById(apiVersion, invoiceName, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling invoicesGetById");
      }
      // verify the required parameter 'invoiceName' is set
      if (invoiceName === undefined || invoiceName === null) {
        throw new Error("Missing the required parameter 'invoiceName' when calling invoicesGetById");
      }

      let pathParams = {
        'invoiceName': invoiceName
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
      let returnType = Invoice;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/default/invoices/{invoiceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoicesGetBySubscriptionAndInvoiceId operation.
     * @callback module:api/InvoicesApi~invoicesGetBySubscriptionAndInvoiceIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Invoice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets an invoice by subscription ID and invoice ID.
     * @param {String} subscriptionId The ID that uniquely identifies an Azure subscription.
     * @param {String} invoiceName The ID that uniquely identifies an invoice.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {module:api/InvoicesApi~invoicesGetBySubscriptionAndInvoiceIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Invoice}
     */
    invoicesGetBySubscriptionAndInvoiceId(subscriptionId, invoiceName, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling invoicesGetBySubscriptionAndInvoiceId");
      }
      // verify the required parameter 'invoiceName' is set
      if (invoiceName === undefined || invoiceName === null) {
        throw new Error("Missing the required parameter 'invoiceName' when calling invoicesGetBySubscriptionAndInvoiceId");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling invoicesGetBySubscriptionAndInvoiceId");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'invoiceName': invoiceName
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
      let returnType = Invoice;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/invoices/{invoiceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoicesListByBillingAccount operation.
     * @callback module:api/InvoicesApi~invoicesListByBillingAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists the invoices for a billing account for a given start date and end date. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {String} periodStartDate The start date to fetch the invoices. The date should be specified in MM-DD-YYYY format.
     * @param {String} periodEndDate The end date to fetch the invoices. The date should be specified in MM-DD-YYYY format.
     * @param {module:api/InvoicesApi~invoicesListByBillingAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceListResult}
     */
    invoicesListByBillingAccount(apiVersion, billingAccountName, periodStartDate, periodEndDate, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling invoicesListByBillingAccount");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling invoicesListByBillingAccount");
      }
      // verify the required parameter 'periodStartDate' is set
      if (periodStartDate === undefined || periodStartDate === null) {
        throw new Error("Missing the required parameter 'periodStartDate' when calling invoicesListByBillingAccount");
      }
      // verify the required parameter 'periodEndDate' is set
      if (periodEndDate === undefined || periodEndDate === null) {
        throw new Error("Missing the required parameter 'periodEndDate' when calling invoicesListByBillingAccount");
      }

      let pathParams = {
        'billingAccountName': billingAccountName
      };
      let queryParams = {
        'api-version': apiVersion,
        'periodStartDate': periodStartDate,
        'periodEndDate': periodEndDate
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['azure_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InvoiceListResult;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoicesListByBillingProfile operation.
     * @callback module:api/InvoicesApi~invoicesListByBillingProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists the invoices for a billing profile for a given start date and end date. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {String} billingAccountName The ID that uniquely identifies a billing account.
     * @param {String} billingProfileName The ID that uniquely identifies a billing profile.
     * @param {String} periodStartDate The start date to fetch the invoices. The date should be specified in MM-DD-YYYY format.
     * @param {String} periodEndDate The end date to fetch the invoices. The date should be specified in MM-DD-YYYY format.
     * @param {module:api/InvoicesApi~invoicesListByBillingProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceListResult}
     */
    invoicesListByBillingProfile(apiVersion, billingAccountName, billingProfileName, periodStartDate, periodEndDate, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling invoicesListByBillingProfile");
      }
      // verify the required parameter 'billingAccountName' is set
      if (billingAccountName === undefined || billingAccountName === null) {
        throw new Error("Missing the required parameter 'billingAccountName' when calling invoicesListByBillingProfile");
      }
      // verify the required parameter 'billingProfileName' is set
      if (billingProfileName === undefined || billingProfileName === null) {
        throw new Error("Missing the required parameter 'billingProfileName' when calling invoicesListByBillingProfile");
      }
      // verify the required parameter 'periodStartDate' is set
      if (periodStartDate === undefined || periodStartDate === null) {
        throw new Error("Missing the required parameter 'periodStartDate' when calling invoicesListByBillingProfile");
      }
      // verify the required parameter 'periodEndDate' is set
      if (periodEndDate === undefined || periodEndDate === null) {
        throw new Error("Missing the required parameter 'periodEndDate' when calling invoicesListByBillingProfile");
      }

      let pathParams = {
        'billingAccountName': billingAccountName,
        'billingProfileName': billingProfileName
      };
      let queryParams = {
        'api-version': apiVersion,
        'periodStartDate': periodStartDate,
        'periodEndDate': periodEndDate
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['azure_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InvoiceListResult;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invoicesListByBillingSubscription operation.
     * @callback module:api/InvoicesApi~invoicesListByBillingSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceListResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists the invoices for a subscription.
     * @param {String} subscriptionId The ID that uniquely identifies an Azure subscription.
     * @param {String} periodStartDate Invoice period start date.
     * @param {String} periodEndDate Invoice period end date.
     * @param {String} apiVersion Version of the API to be used with the client request. The current version is 2018-03-01-preview.
     * @param {module:api/InvoicesApi~invoicesListByBillingSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceListResult}
     */
    invoicesListByBillingSubscription(subscriptionId, periodStartDate, periodEndDate, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling invoicesListByBillingSubscription");
      }
      // verify the required parameter 'periodStartDate' is set
      if (periodStartDate === undefined || periodStartDate === null) {
        throw new Error("Missing the required parameter 'periodStartDate' when calling invoicesListByBillingSubscription");
      }
      // verify the required parameter 'periodEndDate' is set
      if (periodEndDate === undefined || periodEndDate === null) {
        throw new Error("Missing the required parameter 'periodEndDate' when calling invoicesListByBillingSubscription");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling invoicesListByBillingSubscription");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        'periodStartDate': periodStartDate,
        'periodEndDate': periodEndDate,
        'api-version': apiVersion
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['azure_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InvoiceListResult;
      return this.apiClient.callApi(
        '/providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/invoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
