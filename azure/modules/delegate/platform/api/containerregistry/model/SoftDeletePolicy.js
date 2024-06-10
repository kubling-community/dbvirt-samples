/**
 * ContainerRegistryManagementClient
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2019-06-01-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SoftDeletePolicy model module.
 * @module model/SoftDeletePolicy
 * @version 2019-06-01-preview
 */
class SoftDeletePolicy {
    /**
     * Constructs a new <code>SoftDeletePolicy</code>.
     * The soft delete policy for a container registry
     * @alias module:model/SoftDeletePolicy
     */
    constructor() { 
        
        SoftDeletePolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SoftDeletePolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SoftDeletePolicy} obj Optional instance to populate.
     * @return {module:model/SoftDeletePolicy} The populated <code>SoftDeletePolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SoftDeletePolicy();

            if (data.hasOwnProperty('retentionDays')) {
                obj['retentionDays'] = ApiClient.convertToType(data['retentionDays'], 'Number');
            }
            if (data.hasOwnProperty('lastUpdatedTime')) {
                obj['lastUpdatedTime'] = ApiClient.convertToType(data['lastUpdatedTime'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SoftDeletePolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SoftDeletePolicy</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * The number of days after which a soft-deleted item is permanently deleted.
 * @member {Number} retentionDays
 * @default 7
 */
SoftDeletePolicy.prototype['retentionDays'] = 7;

/**
 * The timestamp when the policy was last updated.
 * @member {Date} lastUpdatedTime
 */
SoftDeletePolicy.prototype['lastUpdatedTime'] = undefined;

/**
 * The value that indicates whether the policy is enabled or not.
 * @member {module:model/SoftDeletePolicy.StatusEnum} status
 * @default 'disabled'
 */
SoftDeletePolicy.prototype['status'] = 'disabled';





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SoftDeletePolicy['StatusEnum'] = {

    /**
     * value: "enabled"
     * @const
     */
    "enabled": "enabled",

    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"
};



export default SoftDeletePolicy;

