/**
 * ContainerRegistryManagementClient
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2019-06-01-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ErrorAdditionalInfo model module.
 * @module model/ErrorAdditionalInfo
 * @version 2019-06-01-preview
 */
class ErrorAdditionalInfo {
    /**
     * Constructs a new <code>ErrorAdditionalInfo</code>.
     * The resource management error additional info.
     * @alias module:model/ErrorAdditionalInfo
     */
    constructor() { 
        
        ErrorAdditionalInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorAdditionalInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorAdditionalInfo} obj Optional instance to populate.
     * @return {module:model/ErrorAdditionalInfo} The populated <code>ErrorAdditionalInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorAdditionalInfo();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorAdditionalInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorAdditionalInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * The additional info type.
 * @member {String} type
 */
ErrorAdditionalInfo.prototype['type'] = undefined;

/**
 * The additional info.
 * @member {Object} info
 */
ErrorAdditionalInfo.prototype['info'] = undefined;






export default ErrorAdditionalInfo;

