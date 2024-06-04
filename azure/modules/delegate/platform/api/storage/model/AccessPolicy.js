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
 * The AccessPolicy model module.
 * @module model/AccessPolicy
 * @version 2023-01-01
 */
class AccessPolicy {
    /**
     * Constructs a new <code>AccessPolicy</code>.
     * @alias module:model/AccessPolicy
     */
    constructor() { 
        
        AccessPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccessPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessPolicy} obj Optional instance to populate.
     * @return {module:model/AccessPolicy} The populated <code>AccessPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccessPolicy();

            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('expiryTime')) {
                obj['expiryTime'] = ApiClient.convertToType(data['expiryTime'], 'Date');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccessPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccessPolicy</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
        }

        return true;
    }


}



/**
 * Start time of the access policy
 * @member {Date} startTime
 */
AccessPolicy.prototype['startTime'] = undefined;

/**
 * Expiry time of the access policy
 * @member {Date} expiryTime
 */
AccessPolicy.prototype['expiryTime'] = undefined;

/**
 * List of abbreviated permissions.
 * @member {String} permission
 */
AccessPolicy.prototype['permission'] = undefined;






export default AccessPolicy;
