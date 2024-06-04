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
import Invoice from './Invoice';

/**
 * The InvoiceListResult model module.
 * @module model/InvoiceListResult
 * @version 2020-05-01
 */
class InvoiceListResult {
    /**
     * Constructs a new <code>InvoiceListResult</code>.
     * The list of invoices.
     * @alias module:model/InvoiceListResult
     */
    constructor() { 
        
        InvoiceListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceListResult} obj Optional instance to populate.
     * @return {module:model/InvoiceListResult} The populated <code>InvoiceListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceListResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [Invoice]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceListResult</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                Invoice.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['nextLink'] && !(typeof data['nextLink'] === 'string' || data['nextLink'] instanceof String)) {
            throw new Error("Expected the field `nextLink` to be a primitive type in the JSON string but got " + data['nextLink']);
        }

        return true;
    }


}



/**
 * The list of invoices.
 * @member {Array.<module:model/Invoice>} value
 */
InvoiceListResult.prototype['value'] = undefined;

/**
 * The link (url) to the next page of results.
 * @member {String} nextLink
 */
InvoiceListResult.prototype['nextLink'] = undefined;

/**
 * Total number of records.
 * @member {Number} totalCount
 */
InvoiceListResult.prototype['totalCount'] = undefined;






export default InvoiceListResult;

