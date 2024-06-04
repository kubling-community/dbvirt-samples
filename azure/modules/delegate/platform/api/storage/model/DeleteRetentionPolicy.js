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
 * The DeleteRetentionPolicy model module.
 * @module model/DeleteRetentionPolicy
 * @version 2023-01-01
 */
class DeleteRetentionPolicy {
    /**
     * Constructs a new <code>DeleteRetentionPolicy</code>.
     * The service properties for soft delete.
     * @alias module:model/DeleteRetentionPolicy
     */
    constructor() { 
        
        DeleteRetentionPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteRetentionPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteRetentionPolicy} obj Optional instance to populate.
     * @return {module:model/DeleteRetentionPolicy} The populated <code>DeleteRetentionPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteRetentionPolicy();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('days')) {
                obj['days'] = ApiClient.convertToType(data['days'], 'Number');
            }
            if (data.hasOwnProperty('allowPermanentDelete')) {
                obj['allowPermanentDelete'] = ApiClient.convertToType(data['allowPermanentDelete'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteRetentionPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteRetentionPolicy</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Indicates whether DeleteRetentionPolicy is enabled.
 * @member {Boolean} enabled
 */
DeleteRetentionPolicy.prototype['enabled'] = undefined;

/**
 * Indicates the number of days that the deleted item should be retained. The minimum specified value can be 1 and the maximum value can be 365.
 * @member {Number} days
 */
DeleteRetentionPolicy.prototype['days'] = undefined;

/**
 * This property when set to true allows deletion of the soft deleted blob versions and snapshots. This property cannot be used blob restore policy. This property only applies to blob service and does not apply to containers or file share.
 * @member {Boolean} allowPermanentDelete
 */
DeleteRetentionPolicy.prototype['allowPermanentDelete'] = undefined;






export default DeleteRetentionPolicy;

