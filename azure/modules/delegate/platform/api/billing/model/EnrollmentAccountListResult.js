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
import EnrollmentAccountSummary from './EnrollmentAccountSummary';

/**
 * The EnrollmentAccountListResult model module.
 * @module model/EnrollmentAccountListResult
 * @version 2020-05-01
 */
class EnrollmentAccountListResult {
    /**
     * Constructs a new <code>EnrollmentAccountListResult</code>.
     * Result of listing enrollment accounts.
     * @alias module:model/EnrollmentAccountListResult
     */
    constructor() { 
        
        EnrollmentAccountListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnrollmentAccountListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnrollmentAccountListResult} obj Optional instance to populate.
     * @return {module:model/EnrollmentAccountListResult} The populated <code>EnrollmentAccountListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnrollmentAccountListResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [EnrollmentAccountSummary]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnrollmentAccountListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnrollmentAccountListResult</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                EnrollmentAccountSummary.validateJSON(item);
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
 * The list of enrollment accounts.
 * @member {Array.<module:model/EnrollmentAccountSummary>} value
 */
EnrollmentAccountListResult.prototype['value'] = undefined;

/**
 * The link (url) to the next page of results.
 * @member {String} nextLink
 */
EnrollmentAccountListResult.prototype['nextLink'] = undefined;






export default EnrollmentAccountListResult;

