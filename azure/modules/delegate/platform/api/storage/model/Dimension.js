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
 * The Dimension model module.
 * @module model/Dimension
 * @version 2023-01-01
 */
class Dimension {
    /**
     * Constructs a new <code>Dimension</code>.
     * Dimension of blobs, possibly be blob type or access tier.
     * @alias module:model/Dimension
     */
    constructor() { 
        
        Dimension.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Dimension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dimension} obj Optional instance to populate.
     * @return {module:model/Dimension} The populated <code>Dimension</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dimension();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Dimension</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Dimension</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }

        return true;
    }


}



/**
 * Display name of dimension.
 * @member {String} name
 */
Dimension.prototype['name'] = undefined;

/**
 * Display name of dimension.
 * @member {String} displayName
 */
Dimension.prototype['displayName'] = undefined;






export default Dimension;

