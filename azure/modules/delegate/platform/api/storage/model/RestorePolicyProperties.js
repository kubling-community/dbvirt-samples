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
 * The RestorePolicyProperties model module.
 * @module model/RestorePolicyProperties
 * @version 2023-01-01
 */
class RestorePolicyProperties {
    /**
     * Constructs a new <code>RestorePolicyProperties</code>.
     * The blob service properties for blob restore policy
     * @alias module:model/RestorePolicyProperties
     * @param enabled {Boolean} Blob restore is enabled if set to true.
     */
    constructor(enabled) { 
        
        RestorePolicyProperties.initialize(this, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled) { 
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>RestorePolicyProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestorePolicyProperties} obj Optional instance to populate.
     * @return {module:model/RestorePolicyProperties} The populated <code>RestorePolicyProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestorePolicyProperties();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('days')) {
                obj['days'] = ApiClient.convertToType(data['days'], 'Number');
            }
            if (data.hasOwnProperty('lastEnabledTime')) {
                obj['lastEnabledTime'] = ApiClient.convertToType(data['lastEnabledTime'], 'Date');
            }
            if (data.hasOwnProperty('minRestoreTime')) {
                obj['minRestoreTime'] = ApiClient.convertToType(data['minRestoreTime'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestorePolicyProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestorePolicyProperties</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RestorePolicyProperties.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

RestorePolicyProperties.RequiredProperties = ["enabled"];

/**
 * Blob restore is enabled if set to true.
 * @member {Boolean} enabled
 */
RestorePolicyProperties.prototype['enabled'] = undefined;

/**
 * how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days.
 * @member {Number} days
 */
RestorePolicyProperties.prototype['days'] = undefined;

/**
 * Deprecated in favor of minRestoreTime property.
 * @member {Date} lastEnabledTime
 */
RestorePolicyProperties.prototype['lastEnabledTime'] = undefined;

/**
 * Returns the minimum date and time that the restore can be started.
 * @member {Date} minRestoreTime
 */
RestorePolicyProperties.prototype['minRestoreTime'] = undefined;






export default RestorePolicyProperties;

