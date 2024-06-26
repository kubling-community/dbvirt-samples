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
 * The ImmutableStorageWithVersioning model module.
 * @module model/ImmutableStorageWithVersioning
 * @version 2023-01-01
 */
class ImmutableStorageWithVersioning {
    /**
     * Constructs a new <code>ImmutableStorageWithVersioning</code>.
     * Object level immutability properties of the container.
     * @alias module:model/ImmutableStorageWithVersioning
     */
    constructor() { 
        
        ImmutableStorageWithVersioning.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImmutableStorageWithVersioning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImmutableStorageWithVersioning} obj Optional instance to populate.
     * @return {module:model/ImmutableStorageWithVersioning} The populated <code>ImmutableStorageWithVersioning</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImmutableStorageWithVersioning();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('timeStamp')) {
                obj['timeStamp'] = ApiClient.convertToType(data['timeStamp'], 'Date');
            }
            if (data.hasOwnProperty('migrationState')) {
                obj['migrationState'] = ApiClient.convertToType(data['migrationState'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImmutableStorageWithVersioning</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImmutableStorageWithVersioning</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['migrationState'] && !(typeof data['migrationState'] === 'string' || data['migrationState'] instanceof String)) {
            throw new Error("Expected the field `migrationState` to be a primitive type in the JSON string but got " + data['migrationState']);
        }

        return true;
    }


}



/**
 * This is an immutable property, when set to true it enables object level immutability at the container level.
 * @member {Boolean} enabled
 */
ImmutableStorageWithVersioning.prototype['enabled'] = undefined;

/**
 * Returns the date and time the object level immutability was enabled.
 * @member {Date} timeStamp
 */
ImmutableStorageWithVersioning.prototype['timeStamp'] = undefined;

/**
 * This property denotes the container level immutability to object level immutability migration state.
 * @member {module:model/ImmutableStorageWithVersioning.MigrationStateEnum} migrationState
 */
ImmutableStorageWithVersioning.prototype['migrationState'] = undefined;





/**
 * Allowed values for the <code>migrationState</code> property.
 * @enum {String}
 * @readonly
 */
ImmutableStorageWithVersioning['MigrationStateEnum'] = {

    /**
     * value: "InProgress"
     * @const
     */
    "InProgress": "InProgress",

    /**
     * value: "Completed"
     * @const
     */
    "Completed": "Completed"
};



export default ImmutableStorageWithVersioning;

