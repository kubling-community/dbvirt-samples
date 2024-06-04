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
 * The DateAfterModification model module.
 * @module model/DateAfterModification
 * @version 2023-01-01
 */
class DateAfterModification {
    /**
     * Constructs a new <code>DateAfterModification</code>.
     * Object to define the base blob action conditions. Properties daysAfterModificationGreaterThan, daysAfterLastAccessTimeGreaterThan and daysAfterCreationGreaterThan are mutually exclusive. The daysAfterLastTierChangeGreaterThan property is only applicable for tierToArchive actions which requires daysAfterModificationGreaterThan to be set, also it cannot be used in conjunction with daysAfterLastAccessTimeGreaterThan or daysAfterCreationGreaterThan.
     * @alias module:model/DateAfterModification
     */
    constructor() { 
        
        DateAfterModification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DateAfterModification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DateAfterModification} obj Optional instance to populate.
     * @return {module:model/DateAfterModification} The populated <code>DateAfterModification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DateAfterModification();

            if (data.hasOwnProperty('daysAfterModificationGreaterThan')) {
                obj['daysAfterModificationGreaterThan'] = ApiClient.convertToType(data['daysAfterModificationGreaterThan'], 'Number');
            }
            if (data.hasOwnProperty('daysAfterLastAccessTimeGreaterThan')) {
                obj['daysAfterLastAccessTimeGreaterThan'] = ApiClient.convertToType(data['daysAfterLastAccessTimeGreaterThan'], 'Number');
            }
            if (data.hasOwnProperty('daysAfterLastTierChangeGreaterThan')) {
                obj['daysAfterLastTierChangeGreaterThan'] = ApiClient.convertToType(data['daysAfterLastTierChangeGreaterThan'], 'Number');
            }
            if (data.hasOwnProperty('daysAfterCreationGreaterThan')) {
                obj['daysAfterCreationGreaterThan'] = ApiClient.convertToType(data['daysAfterCreationGreaterThan'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DateAfterModification</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DateAfterModification</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Value indicating the age in days after last modification
 * @member {Number} daysAfterModificationGreaterThan
 */
DateAfterModification.prototype['daysAfterModificationGreaterThan'] = undefined;

/**
 * Value indicating the age in days after last blob access. This property can only be used in conjunction with last access time tracking policy
 * @member {Number} daysAfterLastAccessTimeGreaterThan
 */
DateAfterModification.prototype['daysAfterLastAccessTimeGreaterThan'] = undefined;

/**
 * Value indicating the age in days after last blob tier change time. This property is only applicable for tierToArchive actions and requires daysAfterModificationGreaterThan to be set for baseBlobs based actions. The blob will be archived if both the conditions are satisfied.
 * @member {Number} daysAfterLastTierChangeGreaterThan
 */
DateAfterModification.prototype['daysAfterLastTierChangeGreaterThan'] = undefined;

/**
 * Value indicating the age in days after blob creation.
 * @member {Number} daysAfterCreationGreaterThan
 */
DateAfterModification.prototype['daysAfterCreationGreaterThan'] = undefined;






export default DateAfterModification;

