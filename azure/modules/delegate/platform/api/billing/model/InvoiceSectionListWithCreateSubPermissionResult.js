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
import InvoiceSectionWithCreateSubPermission from './InvoiceSectionWithCreateSubPermission';

/**
 * The InvoiceSectionListWithCreateSubPermissionResult model module.
 * @module model/InvoiceSectionListWithCreateSubPermissionResult
 * @version 2020-05-01
 */
class InvoiceSectionListWithCreateSubPermissionResult {
    /**
     * Constructs a new <code>InvoiceSectionListWithCreateSubPermissionResult</code>.
     * The list of invoice section properties with create subscription permission.
     * @alias module:model/InvoiceSectionListWithCreateSubPermissionResult
     */
    constructor() { 
        
        InvoiceSectionListWithCreateSubPermissionResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceSectionListWithCreateSubPermissionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceSectionListWithCreateSubPermissionResult} obj Optional instance to populate.
     * @return {module:model/InvoiceSectionListWithCreateSubPermissionResult} The populated <code>InvoiceSectionListWithCreateSubPermissionResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceSectionListWithCreateSubPermissionResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [InvoiceSectionWithCreateSubPermission]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceSectionListWithCreateSubPermissionResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceSectionListWithCreateSubPermissionResult</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                InvoiceSectionWithCreateSubPermission.validateJSON(item);
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
 * The list of invoice section properties with create subscription permission.
 * @member {Array.<module:model/InvoiceSectionWithCreateSubPermission>} value
 */
InvoiceSectionListWithCreateSubPermissionResult.prototype['value'] = undefined;

/**
 * The link (url) to the next page of results.
 * @member {String} nextLink
 */
InvoiceSectionListWithCreateSubPermissionResult.prototype['nextLink'] = undefined;






export default InvoiceSectionListWithCreateSubPermissionResult;

