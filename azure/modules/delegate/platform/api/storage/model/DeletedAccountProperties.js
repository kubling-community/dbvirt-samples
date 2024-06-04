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
 * The DeletedAccountProperties model module.
 * @module model/DeletedAccountProperties
 * @version 2023-01-01
 */
class DeletedAccountProperties {
    /**
     * Constructs a new <code>DeletedAccountProperties</code>.
     * Attributes of a deleted storage account.
     * @alias module:model/DeletedAccountProperties
     */
    constructor() { 
        
        DeletedAccountProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeletedAccountProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeletedAccountProperties} obj Optional instance to populate.
     * @return {module:model/DeletedAccountProperties} The populated <code>DeletedAccountProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeletedAccountProperties();

            if (data.hasOwnProperty('storageAccountResourceId')) {
                obj['storageAccountResourceId'] = ApiClient.convertToType(data['storageAccountResourceId'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('restoreReference')) {
                obj['restoreReference'] = ApiClient.convertToType(data['restoreReference'], 'String');
            }
            if (data.hasOwnProperty('creationTime')) {
                obj['creationTime'] = ApiClient.convertToType(data['creationTime'], 'String');
            }
            if (data.hasOwnProperty('deletionTime')) {
                obj['deletionTime'] = ApiClient.convertToType(data['deletionTime'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeletedAccountProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeletedAccountProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['storageAccountResourceId'] && !(typeof data['storageAccountResourceId'] === 'string' || data['storageAccountResourceId'] instanceof String)) {
            throw new Error("Expected the field `storageAccountResourceId` to be a primitive type in the JSON string but got " + data['storageAccountResourceId']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is a string
        if (data['restoreReference'] && !(typeof data['restoreReference'] === 'string' || data['restoreReference'] instanceof String)) {
            throw new Error("Expected the field `restoreReference` to be a primitive type in the JSON string but got " + data['restoreReference']);
        }
        // ensure the json data is a string
        if (data['creationTime'] && !(typeof data['creationTime'] === 'string' || data['creationTime'] instanceof String)) {
            throw new Error("Expected the field `creationTime` to be a primitive type in the JSON string but got " + data['creationTime']);
        }
        // ensure the json data is a string
        if (data['deletionTime'] && !(typeof data['deletionTime'] === 'string' || data['deletionTime'] instanceof String)) {
            throw new Error("Expected the field `deletionTime` to be a primitive type in the JSON string but got " + data['deletionTime']);
        }

        return true;
    }


}



/**
 * Full resource id of the original storage account.
 * @member {String} storageAccountResourceId
 */
DeletedAccountProperties.prototype['storageAccountResourceId'] = undefined;

/**
 * Location of the deleted account.
 * @member {String} location
 */
DeletedAccountProperties.prototype['location'] = undefined;

/**
 * Can be used to attempt recovering this deleted account via PutStorageAccount API.
 * @member {String} restoreReference
 */
DeletedAccountProperties.prototype['restoreReference'] = undefined;

/**
 * Creation time of the deleted account.
 * @member {String} creationTime
 */
DeletedAccountProperties.prototype['creationTime'] = undefined;

/**
 * Deletion time of the deleted account.
 * @member {String} deletionTime
 */
DeletedAccountProperties.prototype['deletionTime'] = undefined;






export default DeletedAccountProperties;
