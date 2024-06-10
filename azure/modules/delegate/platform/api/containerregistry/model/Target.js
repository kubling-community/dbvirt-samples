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
 * The Target model module.
 * @module model/Target
 * @version 2019-06-01-preview
 */
class Target {
    /**
     * Constructs a new <code>Target</code>.
     * The target of the event.
     * @alias module:model/Target
     */
    constructor() { 
        
        Target.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Target</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Target} obj Optional instance to populate.
     * @return {module:model/Target} The populated <code>Target</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Target();

            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('digest')) {
                obj['digest'] = ApiClient.convertToType(data['digest'], 'String');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = ApiClient.convertToType(data['repository'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Target</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Target</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['mediaType'] && !(typeof data['mediaType'] === 'string' || data['mediaType'] instanceof String)) {
            throw new Error("Expected the field `mediaType` to be a primitive type in the JSON string but got " + data['mediaType']);
        }
        // ensure the json data is a string
        if (data['digest'] && !(typeof data['digest'] === 'string' || data['digest'] instanceof String)) {
            throw new Error("Expected the field `digest` to be a primitive type in the JSON string but got " + data['digest']);
        }
        // ensure the json data is a string
        if (data['repository'] && !(typeof data['repository'] === 'string' || data['repository'] instanceof String)) {
            throw new Error("Expected the field `repository` to be a primitive type in the JSON string but got " + data['repository']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['tag'] && !(typeof data['tag'] === 'string' || data['tag'] instanceof String)) {
            throw new Error("Expected the field `tag` to be a primitive type in the JSON string but got " + data['tag']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }

        return true;
    }


}



/**
 * The MIME type of the referenced object.
 * @member {String} mediaType
 */
Target.prototype['mediaType'] = undefined;

/**
 * The number of bytes of the content. Same as Length field.
 * @member {Number} size
 */
Target.prototype['size'] = undefined;

/**
 * The digest of the content, as defined by the Registry V2 HTTP API Specification.
 * @member {String} digest
 */
Target.prototype['digest'] = undefined;

/**
 * The number of bytes of the content. Same as Size field.
 * @member {Number} length
 */
Target.prototype['length'] = undefined;

/**
 * The repository name.
 * @member {String} repository
 */
Target.prototype['repository'] = undefined;

/**
 * The direct URL to the content.
 * @member {String} url
 */
Target.prototype['url'] = undefined;

/**
 * The tag name.
 * @member {String} tag
 */
Target.prototype['tag'] = undefined;

/**
 * The name of the artifact.
 * @member {String} name
 */
Target.prototype['name'] = undefined;

/**
 * The version of the artifact.
 * @member {String} version
 */
Target.prototype['version'] = undefined;






export default Target;

