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
import ImportSource from './ImportSource';

/**
 * The ImportImageParameters model module.
 * @module model/ImportImageParameters
 * @version 2019-06-01-preview
 */
class ImportImageParameters {
    /**
     * Constructs a new <code>ImportImageParameters</code>.
     * @alias module:model/ImportImageParameters
     * @param source {module:model/ImportSource} 
     */
    constructor(source) { 
        
        ImportImageParameters.initialize(this, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source) { 
        obj['source'] = source;
    }

    /**
     * Constructs a <code>ImportImageParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportImageParameters} obj Optional instance to populate.
     * @return {module:model/ImportImageParameters} The populated <code>ImportImageParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportImageParameters();

            if (data.hasOwnProperty('source')) {
                obj['source'] = ImportSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('targetTags')) {
                obj['targetTags'] = ApiClient.convertToType(data['targetTags'], ['String']);
            }
            if (data.hasOwnProperty('untaggedTargetRepositories')) {
                obj['untaggedTargetRepositories'] = ApiClient.convertToType(data['untaggedTargetRepositories'], ['String']);
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImportImageParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImportImageParameters</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ImportImageParameters.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          ImportSource.validateJSON(data['source']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['targetTags'])) {
            throw new Error("Expected the field `targetTags` to be an array in the JSON data but got " + data['targetTags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['untaggedTargetRepositories'])) {
            throw new Error("Expected the field `untaggedTargetRepositories` to be an array in the JSON data but got " + data['untaggedTargetRepositories']);
        }
        // ensure the json data is a string
        if (data['mode'] && !(typeof data['mode'] === 'string' || data['mode'] instanceof String)) {
            throw new Error("Expected the field `mode` to be a primitive type in the JSON string but got " + data['mode']);
        }

        return true;
    }


}

ImportImageParameters.RequiredProperties = ["source"];

/**
 * @member {module:model/ImportSource} source
 */
ImportImageParameters.prototype['source'] = undefined;

/**
 * List of strings of the form repo[:tag]. When tag is omitted the source will be used (or 'latest' if source tag is also omitted).
 * @member {Array.<String>} targetTags
 */
ImportImageParameters.prototype['targetTags'] = undefined;

/**
 * List of strings of repository names to do a manifest only copy. No tag will be created.
 * @member {Array.<String>} untaggedTargetRepositories
 */
ImportImageParameters.prototype['untaggedTargetRepositories'] = undefined;

/**
 * When Force, any existing target tags will be overwritten. When NoForce, any existing target tags will fail the operation before any copying begins.
 * @member {module:model/ImportImageParameters.ModeEnum} mode
 * @default 'NoForce'
 */
ImportImageParameters.prototype['mode'] = 'NoForce';





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
ImportImageParameters['ModeEnum'] = {

    /**
     * value: "NoForce"
     * @const
     */
    "NoForce": "NoForce",

    /**
     * value: "Force"
     * @const
     */
    "Force": "Force"
};



export default ImportImageParameters;

