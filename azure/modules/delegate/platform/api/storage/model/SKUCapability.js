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
 * The SKUCapability model module.
 * @module model/SKUCapability
 * @version 2023-01-01
 */
class SKUCapability {
    /**
     * Constructs a new <code>SKUCapability</code>.
     * The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc.
     * @alias module:model/SKUCapability
     */
    constructor() { 
        
        SKUCapability.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SKUCapability</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SKUCapability} obj Optional instance to populate.
     * @return {module:model/SKUCapability} The populated <code>SKUCapability</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SKUCapability();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SKUCapability</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SKUCapability</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * The name of capability, The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc.
 * @member {String} name
 */
SKUCapability.prototype['name'] = undefined;

/**
 * A string value to indicate states of given capability. Possibly 'true' or 'false'.
 * @member {String} value
 */
SKUCapability.prototype['value'] = undefined;






export default SKUCapability;

