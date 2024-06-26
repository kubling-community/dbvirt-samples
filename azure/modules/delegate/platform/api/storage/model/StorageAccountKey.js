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
 * The StorageAccountKey model module.
 * @module model/StorageAccountKey
 * @version 2023-01-01
 */
class StorageAccountKey {
    /**
     * Constructs a new <code>StorageAccountKey</code>.
     * An access key for the storage account.
     * @alias module:model/StorageAccountKey
     */
    constructor() { 
        
        StorageAccountKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageAccountKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StorageAccountKey} obj Optional instance to populate.
     * @return {module:model/StorageAccountKey} The populated <code>StorageAccountKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageAccountKey();

            if (data.hasOwnProperty('keyName')) {
                obj['keyName'] = ApiClient.convertToType(data['keyName'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], 'String');
            }
            if (data.hasOwnProperty('creationTime')) {
                obj['creationTime'] = ApiClient.convertToType(data['creationTime'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageAccountKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageAccountKey</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['keyName'] && !(typeof data['keyName'] === 'string' || data['keyName'] instanceof String)) {
            throw new Error("Expected the field `keyName` to be a primitive type in the JSON string but got " + data['keyName']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['permissions'] && !(typeof data['permissions'] === 'string' || data['permissions'] instanceof String)) {
            throw new Error("Expected the field `permissions` to be a primitive type in the JSON string but got " + data['permissions']);
        }

        return true;
    }


}



/**
 * Name of the key.
 * @member {String} keyName
 */
StorageAccountKey.prototype['keyName'] = undefined;

/**
 * Base 64-encoded value of the key.
 * @member {String} value
 */
StorageAccountKey.prototype['value'] = undefined;

/**
 * Permissions for the key -- read-only or full permissions.
 * @member {module:model/StorageAccountKey.PermissionsEnum} permissions
 */
StorageAccountKey.prototype['permissions'] = undefined;

/**
 * Creation time of the key, in round trip date format.
 * @member {Date} creationTime
 */
StorageAccountKey.prototype['creationTime'] = undefined;





/**
 * Allowed values for the <code>permissions</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountKey['PermissionsEnum'] = {

    /**
     * value: "Read"
     * @const
     */
    "Read": "Read",

    /**
     * value: "Full"
     * @const
     */
    "Full": "Full"
};



export default StorageAccountKey;

