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

/**
 * The RebillDetails model module.
 * @module model/RebillDetails
 * @version 2020-05-01
 */
class RebillDetails {
    /**
     * Constructs a new <code>RebillDetails</code>.
     * The rebill details of an invoice.
     * @alias module:model/RebillDetails
     */
    constructor() { 
        
        RebillDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RebillDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RebillDetails} obj Optional instance to populate.
     * @return {module:model/RebillDetails} The populated <code>RebillDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RebillDetails();

            if (data.hasOwnProperty('creditNoteDocumentId')) {
                obj['creditNoteDocumentId'] = ApiClient.convertToType(data['creditNoteDocumentId'], 'String');
            }
            if (data.hasOwnProperty('invoiceDocumentId')) {
                obj['invoiceDocumentId'] = ApiClient.convertToType(data['invoiceDocumentId'], 'String');
            }
            if (data.hasOwnProperty('rebillDetails')) {
                obj['rebillDetails'] = ApiClient.convertToType(data['rebillDetails'], {'String': RebillDetails});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RebillDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RebillDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['creditNoteDocumentId'] && !(typeof data['creditNoteDocumentId'] === 'string' || data['creditNoteDocumentId'] instanceof String)) {
            throw new Error("Expected the field `creditNoteDocumentId` to be a primitive type in the JSON string but got " + data['creditNoteDocumentId']);
        }
        // ensure the json data is a string
        if (data['invoiceDocumentId'] && !(typeof data['invoiceDocumentId'] === 'string' || data['invoiceDocumentId'] instanceof String)) {
            throw new Error("Expected the field `invoiceDocumentId` to be a primitive type in the JSON string but got " + data['invoiceDocumentId']);
        }

        return true;
    }


}



/**
 * The ID of credit note.
 * @member {String} creditNoteDocumentId
 */
RebillDetails.prototype['creditNoteDocumentId'] = undefined;

/**
 * The ID of invoice.
 * @member {String} invoiceDocumentId
 */
RebillDetails.prototype['invoiceDocumentId'] = undefined;

/**
 * Rebill details for an invoice.
 * @member {Object.<String, module:model/RebillDetails>} rebillDetails
 */
RebillDetails.prototype['rebillDetails'] = undefined;






export default RebillDetails;

