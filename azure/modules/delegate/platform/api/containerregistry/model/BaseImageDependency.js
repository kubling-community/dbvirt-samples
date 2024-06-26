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
 * The BaseImageDependency model module.
 * @module model/BaseImageDependency
 * @version 2019-06-01-preview
 */
class BaseImageDependency {
    /**
     * Constructs a new <code>BaseImageDependency</code>.
     * Properties that describe a base image dependency.
     * @alias module:model/BaseImageDependency
     */
    constructor() { 
        
        BaseImageDependency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseImageDependency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseImageDependency} obj Optional instance to populate.
     * @return {module:model/BaseImageDependency} The populated <code>BaseImageDependency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseImageDependency();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('registry')) {
                obj['registry'] = ApiClient.convertToType(data['registry'], 'String');
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = ApiClient.convertToType(data['repository'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('digest')) {
                obj['digest'] = ApiClient.convertToType(data['digest'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseImageDependency</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseImageDependency</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['registry'] && !(typeof data['registry'] === 'string' || data['registry'] instanceof String)) {
            throw new Error("Expected the field `registry` to be a primitive type in the JSON string but got " + data['registry']);
        }
        // ensure the json data is a string
        if (data['repository'] && !(typeof data['repository'] === 'string' || data['repository'] instanceof String)) {
            throw new Error("Expected the field `repository` to be a primitive type in the JSON string but got " + data['repository']);
        }
        // ensure the json data is a string
        if (data['tag'] && !(typeof data['tag'] === 'string' || data['tag'] instanceof String)) {
            throw new Error("Expected the field `tag` to be a primitive type in the JSON string but got " + data['tag']);
        }
        // ensure the json data is a string
        if (data['digest'] && !(typeof data['digest'] === 'string' || data['digest'] instanceof String)) {
            throw new Error("Expected the field `digest` to be a primitive type in the JSON string but got " + data['digest']);
        }

        return true;
    }


}



/**
 * The type of the base image dependency.
 * @member {module:model/BaseImageDependency.TypeEnum} type
 */
BaseImageDependency.prototype['type'] = undefined;

/**
 * The registry login server.
 * @member {String} registry
 */
BaseImageDependency.prototype['registry'] = undefined;

/**
 * The repository name.
 * @member {String} repository
 */
BaseImageDependency.prototype['repository'] = undefined;

/**
 * The tag name.
 * @member {String} tag
 */
BaseImageDependency.prototype['tag'] = undefined;

/**
 * The sha256-based digest of the image manifest.
 * @member {String} digest
 */
BaseImageDependency.prototype['digest'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BaseImageDependency['TypeEnum'] = {

    /**
     * value: "BuildTime"
     * @const
     */
    "BuildTime": "BuildTime",

    /**
     * value: "RunTime"
     * @const
     */
    "RunTime": "RunTime"
};



export default BaseImageDependency;

