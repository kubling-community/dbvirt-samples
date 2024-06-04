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

/**
 * The Restriction model module.
 * @module model/Restriction
 * @version 2023-01-01
 */
class Restriction {
    /**
     * Constructs a new <code>Restriction</code>.
     * The restriction because of which SKU cannot be used.
     * @alias module:model/Restriction
     */
    constructor() { 
        
        Restriction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Restriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Restriction} obj Optional instance to populate.
     * @return {module:model/Restriction} The populated <code>Restriction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Restriction();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
            if (data.hasOwnProperty('reasonCode')) {
                obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Restriction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Restriction</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['values'])) {
            throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
        }
        // ensure the json data is a string
        if (data['reasonCode'] && !(typeof data['reasonCode'] === 'string' || data['reasonCode'] instanceof String)) {
            throw new Error("Expected the field `reasonCode` to be a primitive type in the JSON string but got " + data['reasonCode']);
        }

        return true;
    }


}



/**
 * The type of restrictions. As of now only possible value for this is location.
 * @member {String} type
 */
Restriction.prototype['type'] = undefined;

/**
 * The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.
 * @member {Array.<String>} values
 */
Restriction.prototype['values'] = undefined;

/**
 * The reason for the restriction. As of now this can be \"QuotaId\" or \"NotAvailableForSubscription\". Quota Id is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. The \"NotAvailableForSubscription\" is related to capacity at DC.
 * @member {module:model/Restriction.ReasonCodeEnum} reasonCode
 */
Restriction.prototype['reasonCode'] = undefined;





/**
 * Allowed values for the <code>reasonCode</code> property.
 * @enum {String}
 * @readonly
 */
Restriction['ReasonCodeEnum'] = {

    /**
     * value: "QuotaId"
     * @const
     */
    "QuotaId": "QuotaId",

    /**
     * value: "NotAvailableForSubscription"
     * @const
     */
    "NotAvailableForSubscription": "NotAvailableForSubscription"
};



export default Restriction;
