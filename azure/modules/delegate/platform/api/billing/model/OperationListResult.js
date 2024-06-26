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
import Operation from './Operation';

/**
 * The OperationListResult model module.
 * @module model/OperationListResult
 * @version 2020-05-01
 */
class OperationListResult {
    /**
     * Constructs a new <code>OperationListResult</code>.
     * The list of billing operations and a URL link to get the next set of results.
     * @alias module:model/OperationListResult
     */
    constructor() { 
        
        OperationListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OperationListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationListResult} obj Optional instance to populate.
     * @return {module:model/OperationListResult} The populated <code>OperationListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationListResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [Operation]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OperationListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OperationListResult</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                Operation.validateJSON(item);
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
 * The list of billing operations supported by the Microsoft.Billing resource provider.
 * @member {Array.<module:model/Operation>} value
 */
OperationListResult.prototype['value'] = undefined;

/**
 * URL to get the next set of operation list results if there are any.
 * @member {String} nextLink
 */
OperationListResult.prototype['nextLink'] = undefined;






export default OperationListResult;

