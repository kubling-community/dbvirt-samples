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
import Amount from './Amount';
import Document from './Document';
import PaymentProperties from './PaymentProperties';
import RebillDetails from './RebillDetails';

/**
 * The InvoiceProperties model module.
 * @module model/InvoiceProperties
 * @version 2020-05-01
 */
class InvoiceProperties {
    /**
     * Constructs a new <code>InvoiceProperties</code>.
     * The properties of the invoice.
     * @alias module:model/InvoiceProperties
     */
    constructor() { 
        
        InvoiceProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceProperties} obj Optional instance to populate.
     * @return {module:model/InvoiceProperties} The populated <code>InvoiceProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceProperties();

            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('invoiceDate')) {
                obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('amountDue')) {
                obj['amountDue'] = Amount.constructFromObject(data['amountDue']);
            }
            if (data.hasOwnProperty('azurePrepaymentApplied')) {
                obj['azurePrepaymentApplied'] = Amount.constructFromObject(data['azurePrepaymentApplied']);
            }
            if (data.hasOwnProperty('billedAmount')) {
                obj['billedAmount'] = Amount.constructFromObject(data['billedAmount']);
            }
            if (data.hasOwnProperty('creditAmount')) {
                obj['creditAmount'] = Amount.constructFromObject(data['creditAmount']);
            }
            if (data.hasOwnProperty('freeAzureCreditApplied')) {
                obj['freeAzureCreditApplied'] = Amount.constructFromObject(data['freeAzureCreditApplied']);
            }
            if (data.hasOwnProperty('subTotal')) {
                obj['subTotal'] = Amount.constructFromObject(data['subTotal']);
            }
            if (data.hasOwnProperty('taxAmount')) {
                obj['taxAmount'] = Amount.constructFromObject(data['taxAmount']);
            }
            if (data.hasOwnProperty('totalAmount')) {
                obj['totalAmount'] = Amount.constructFromObject(data['totalAmount']);
            }
            if (data.hasOwnProperty('invoicePeriodStartDate')) {
                obj['invoicePeriodStartDate'] = ApiClient.convertToType(data['invoicePeriodStartDate'], 'Date');
            }
            if (data.hasOwnProperty('invoicePeriodEndDate')) {
                obj['invoicePeriodEndDate'] = ApiClient.convertToType(data['invoicePeriodEndDate'], 'Date');
            }
            if (data.hasOwnProperty('invoiceType')) {
                obj['invoiceType'] = ApiClient.convertToType(data['invoiceType'], 'String');
            }
            if (data.hasOwnProperty('isMonthlyInvoice')) {
                obj['isMonthlyInvoice'] = ApiClient.convertToType(data['isMonthlyInvoice'], 'Boolean');
            }
            if (data.hasOwnProperty('billingProfileId')) {
                obj['billingProfileId'] = ApiClient.convertToType(data['billingProfileId'], 'String');
            }
            if (data.hasOwnProperty('billingProfileDisplayName')) {
                obj['billingProfileDisplayName'] = ApiClient.convertToType(data['billingProfileDisplayName'], 'String');
            }
            if (data.hasOwnProperty('purchaseOrderNumber')) {
                obj['purchaseOrderNumber'] = ApiClient.convertToType(data['purchaseOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], [Document]);
            }
            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], [PaymentProperties]);
            }
            if (data.hasOwnProperty('rebillDetails')) {
                obj['rebillDetails'] = ApiClient.convertToType(data['rebillDetails'], {'String': RebillDetails});
            }
            if (data.hasOwnProperty('documentType')) {
                obj['documentType'] = ApiClient.convertToType(data['documentType'], 'String');
            }
            if (data.hasOwnProperty('billedDocumentId')) {
                obj['billedDocumentId'] = ApiClient.convertToType(data['billedDocumentId'], 'String');
            }
            if (data.hasOwnProperty('creditForDocumentId')) {
                obj['creditForDocumentId'] = ApiClient.convertToType(data['creditForDocumentId'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `amountDue`
        if (data['amountDue']) { // data not null
          Amount.validateJSON(data['amountDue']);
        }
        // validate the optional field `azurePrepaymentApplied`
        if (data['azurePrepaymentApplied']) { // data not null
          Amount.validateJSON(data['azurePrepaymentApplied']);
        }
        // validate the optional field `billedAmount`
        if (data['billedAmount']) { // data not null
          Amount.validateJSON(data['billedAmount']);
        }
        // validate the optional field `creditAmount`
        if (data['creditAmount']) { // data not null
          Amount.validateJSON(data['creditAmount']);
        }
        // validate the optional field `freeAzureCreditApplied`
        if (data['freeAzureCreditApplied']) { // data not null
          Amount.validateJSON(data['freeAzureCreditApplied']);
        }
        // validate the optional field `subTotal`
        if (data['subTotal']) { // data not null
          Amount.validateJSON(data['subTotal']);
        }
        // validate the optional field `taxAmount`
        if (data['taxAmount']) { // data not null
          Amount.validateJSON(data['taxAmount']);
        }
        // validate the optional field `totalAmount`
        if (data['totalAmount']) { // data not null
          Amount.validateJSON(data['totalAmount']);
        }
        // ensure the json data is a string
        if (data['invoiceType'] && !(typeof data['invoiceType'] === 'string' || data['invoiceType'] instanceof String)) {
            throw new Error("Expected the field `invoiceType` to be a primitive type in the JSON string but got " + data['invoiceType']);
        }
        // ensure the json data is a string
        if (data['billingProfileId'] && !(typeof data['billingProfileId'] === 'string' || data['billingProfileId'] instanceof String)) {
            throw new Error("Expected the field `billingProfileId` to be a primitive type in the JSON string but got " + data['billingProfileId']);
        }
        // ensure the json data is a string
        if (data['billingProfileDisplayName'] && !(typeof data['billingProfileDisplayName'] === 'string' || data['billingProfileDisplayName'] instanceof String)) {
            throw new Error("Expected the field `billingProfileDisplayName` to be a primitive type in the JSON string but got " + data['billingProfileDisplayName']);
        }
        // ensure the json data is a string
        if (data['purchaseOrderNumber'] && !(typeof data['purchaseOrderNumber'] === 'string' || data['purchaseOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `purchaseOrderNumber` to be a primitive type in the JSON string but got " + data['purchaseOrderNumber']);
        }
        if (data['documents']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['documents'])) {
                throw new Error("Expected the field `documents` to be an array in the JSON data but got " + data['documents']);
            }
            // validate the optional field `documents` (array)
            for (const item of data['documents']) {
                Document.validateJSON(item);
            };
        }
        if (data['payments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['payments'])) {
                throw new Error("Expected the field `payments` to be an array in the JSON data but got " + data['payments']);
            }
            // validate the optional field `payments` (array)
            for (const item of data['payments']) {
                PaymentProperties.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['documentType'] && !(typeof data['documentType'] === 'string' || data['documentType'] instanceof String)) {
            throw new Error("Expected the field `documentType` to be a primitive type in the JSON string but got " + data['documentType']);
        }
        // ensure the json data is a string
        if (data['billedDocumentId'] && !(typeof data['billedDocumentId'] === 'string' || data['billedDocumentId'] instanceof String)) {
            throw new Error("Expected the field `billedDocumentId` to be a primitive type in the JSON string but got " + data['billedDocumentId']);
        }
        // ensure the json data is a string
        if (data['creditForDocumentId'] && !(typeof data['creditForDocumentId'] === 'string' || data['creditForDocumentId'] instanceof String)) {
            throw new Error("Expected the field `creditForDocumentId` to be a primitive type in the JSON string but got " + data['creditForDocumentId']);
        }
        // ensure the json data is a string
        if (data['subscriptionId'] && !(typeof data['subscriptionId'] === 'string' || data['subscriptionId'] instanceof String)) {
            throw new Error("Expected the field `subscriptionId` to be a primitive type in the JSON string but got " + data['subscriptionId']);
        }

        return true;
    }


}



/**
 * The due date for the invoice.
 * @member {Date} dueDate
 */
InvoiceProperties.prototype['dueDate'] = undefined;

/**
 * The date when the invoice was generated.
 * @member {Date} invoiceDate
 */
InvoiceProperties.prototype['invoiceDate'] = undefined;

/**
 * The current status of the invoice.
 * @member {module:model/InvoiceProperties.StatusEnum} status
 */
InvoiceProperties.prototype['status'] = undefined;

/**
 * @member {module:model/Amount} amountDue
 */
InvoiceProperties.prototype['amountDue'] = undefined;

/**
 * @member {module:model/Amount} azurePrepaymentApplied
 */
InvoiceProperties.prototype['azurePrepaymentApplied'] = undefined;

/**
 * @member {module:model/Amount} billedAmount
 */
InvoiceProperties.prototype['billedAmount'] = undefined;

/**
 * @member {module:model/Amount} creditAmount
 */
InvoiceProperties.prototype['creditAmount'] = undefined;

/**
 * @member {module:model/Amount} freeAzureCreditApplied
 */
InvoiceProperties.prototype['freeAzureCreditApplied'] = undefined;

/**
 * @member {module:model/Amount} subTotal
 */
InvoiceProperties.prototype['subTotal'] = undefined;

/**
 * @member {module:model/Amount} taxAmount
 */
InvoiceProperties.prototype['taxAmount'] = undefined;

/**
 * @member {module:model/Amount} totalAmount
 */
InvoiceProperties.prototype['totalAmount'] = undefined;

/**
 * The start date of the billing period for which the invoice is generated.
 * @member {Date} invoicePeriodStartDate
 */
InvoiceProperties.prototype['invoicePeriodStartDate'] = undefined;

/**
 * The end date of the billing period for which the invoice is generated.
 * @member {Date} invoicePeriodEndDate
 */
InvoiceProperties.prototype['invoicePeriodEndDate'] = undefined;

/**
 * Invoice type.
 * @member {module:model/InvoiceProperties.InvoiceTypeEnum} invoiceType
 */
InvoiceProperties.prototype['invoiceType'] = undefined;

/**
 * Specifies if the invoice is generated as part of monthly invoicing cycle or not. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
 * @member {Boolean} isMonthlyInvoice
 */
InvoiceProperties.prototype['isMonthlyInvoice'] = undefined;

/**
 * The ID of the billing profile for which the invoice is generated.
 * @member {String} billingProfileId
 */
InvoiceProperties.prototype['billingProfileId'] = undefined;

/**
 * The name of the billing profile for which the invoice is generated.
 * @member {String} billingProfileDisplayName
 */
InvoiceProperties.prototype['billingProfileDisplayName'] = undefined;

/**
 * An optional purchase order number for the invoice.
 * @member {String} purchaseOrderNumber
 */
InvoiceProperties.prototype['purchaseOrderNumber'] = undefined;

/**
 * List of documents available to download such as invoice and tax receipt.
 * @member {Array.<module:model/Document>} documents
 */
InvoiceProperties.prototype['documents'] = undefined;

/**
 * List of payments.
 * @member {Array.<module:model/PaymentProperties>} payments
 */
InvoiceProperties.prototype['payments'] = undefined;

/**
 * Rebill details for an invoice.
 * @member {Object.<String, module:model/RebillDetails>} rebillDetails
 */
InvoiceProperties.prototype['rebillDetails'] = undefined;

/**
 * The type of the document.
 * @member {module:model/InvoiceProperties.DocumentTypeEnum} documentType
 */
InvoiceProperties.prototype['documentType'] = undefined;

/**
 * The Id of the active invoice which is originally billed after this invoice was voided. This field is applicable to the void invoices only.
 * @member {String} billedDocumentId
 */
InvoiceProperties.prototype['billedDocumentId'] = undefined;

/**
 * The Id of the invoice which got voided and this credit note was issued as a result. This field is applicable to the credit notes only.
 * @member {String} creditForDocumentId
 */
InvoiceProperties.prototype['creditForDocumentId'] = undefined;

/**
 * The ID of the subscription for which the invoice is generated.
 * @member {String} subscriptionId
 */
InvoiceProperties.prototype['subscriptionId'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InvoiceProperties['StatusEnum'] = {

    /**
     * value: "Due"
     * @const
     */
    "Due": "Due",

    /**
     * value: "OverDue"
     * @const
     */
    "OverDue": "OverDue",

    /**
     * value: "Paid"
     * @const
     */
    "Paid": "Paid",

    /**
     * value: "Void"
     * @const
     */
    "Void": "Void"
};


/**
 * Allowed values for the <code>invoiceType</code> property.
 * @enum {String}
 * @readonly
 */
InvoiceProperties['InvoiceTypeEnum'] = {

    /**
     * value: "AzureService"
     * @const
     */
    "AzureService": "AzureService",

    /**
     * value: "AzureMarketplace"
     * @const
     */
    "AzureMarketplace": "AzureMarketplace",

    /**
     * value: "AzureSupport"
     * @const
     */
    "AzureSupport": "AzureSupport"
};


/**
 * Allowed values for the <code>documentType</code> property.
 * @enum {String}
 * @readonly
 */
InvoiceProperties['DocumentTypeEnum'] = {

    /**
     * value: "Invoice"
     * @const
     */
    "Invoice": "Invoice",

    /**
     * value: "CreditNote"
     * @const
     */
    "CreditNote": "CreditNote"
};



export default InvoiceProperties;
