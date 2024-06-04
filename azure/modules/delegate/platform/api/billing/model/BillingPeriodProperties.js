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
 * The BillingPeriodProperties model module.
 * @module model/BillingPeriodProperties
 * @version 2020-05-01
 */
class BillingPeriodProperties {
    /**
     * Constructs a new <code>BillingPeriodProperties</code>.
     * The properties of the billing period.
     * @alias module:model/BillingPeriodProperties
     */
    constructor() { 
        
        BillingPeriodProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingPeriodProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingPeriodProperties} obj Optional instance to populate.
     * @return {module:model/BillingPeriodProperties} The populated <code>BillingPeriodProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingPeriodProperties();

            if (data.hasOwnProperty('billingPeriodStartDate')) {
                obj['billingPeriodStartDate'] = ApiClient.convertToType(data['billingPeriodStartDate'], 'Date');
            }
            if (data.hasOwnProperty('billingPeriodEndDate')) {
                obj['billingPeriodEndDate'] = ApiClient.convertToType(data['billingPeriodEndDate'], 'Date');
            }
            if (data.hasOwnProperty('invoiceIds')) {
                obj['invoiceIds'] = ApiClient.convertToType(data['invoiceIds'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingPeriodProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingPeriodProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['invoiceIds'])) {
            throw new Error("Expected the field `invoiceIds` to be an array in the JSON data but got " + data['invoiceIds']);
        }

        return true;
    }


}



/**
 * The start of the date range covered by the billing period.
 * @member {Date} billingPeriodStartDate
 */
BillingPeriodProperties.prototype['billingPeriodStartDate'] = undefined;

/**
 * The end of the date range covered by the billing period.
 * @member {Date} billingPeriodEndDate
 */
BillingPeriodProperties.prototype['billingPeriodEndDate'] = undefined;

/**
 * Array of invoice ids that associated with.
 * @member {Array.<String>} invoiceIds
 */
BillingPeriodProperties.prototype['invoiceIds'] = undefined;






export default BillingPeriodProperties;
