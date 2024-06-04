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
 * The KeyCreationTime model module.
 * @module model/KeyCreationTime
 * @version 2023-01-01
 */
class KeyCreationTime {
    /**
     * Constructs a new <code>KeyCreationTime</code>.
     * Storage account keys creation time.
     * @alias module:model/KeyCreationTime
     */
    constructor() { 
        
        KeyCreationTime.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KeyCreationTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyCreationTime} obj Optional instance to populate.
     * @return {module:model/KeyCreationTime} The populated <code>KeyCreationTime</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyCreationTime();

            if (data.hasOwnProperty('key1')) {
                obj['key1'] = ApiClient.convertToType(data['key1'], 'Date');
            }
            if (data.hasOwnProperty('key2')) {
                obj['key2'] = ApiClient.convertToType(data['key2'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KeyCreationTime</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KeyCreationTime</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Date} key1
 */
KeyCreationTime.prototype['key1'] = undefined;

/**
 * @member {Date} key2
 */
KeyCreationTime.prototype['key2'] = undefined;






export default KeyCreationTime;

