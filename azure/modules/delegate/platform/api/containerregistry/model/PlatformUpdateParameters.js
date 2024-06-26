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
 * The PlatformUpdateParameters model module.
 * @module model/PlatformUpdateParameters
 * @version 2019-06-01-preview
 */
class PlatformUpdateParameters {
    /**
     * Constructs a new <code>PlatformUpdateParameters</code>.
     * The properties for updating the platform configuration.
     * @alias module:model/PlatformUpdateParameters
     */
    constructor() { 
        
        PlatformUpdateParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlatformUpdateParameters} obj Optional instance to populate.
     * @return {module:model/PlatformUpdateParameters} The populated <code>PlatformUpdateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformUpdateParameters();

            if (data.hasOwnProperty('os')) {
                obj['os'] = ApiClient.convertToType(data['os'], 'String');
            }
            if (data.hasOwnProperty('architecture')) {
                obj['architecture'] = ApiClient.convertToType(data['architecture'], 'String');
            }
            if (data.hasOwnProperty('variant')) {
                obj['variant'] = ApiClient.convertToType(data['variant'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PlatformUpdateParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PlatformUpdateParameters</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['os'] && !(typeof data['os'] === 'string' || data['os'] instanceof String)) {
            throw new Error("Expected the field `os` to be a primitive type in the JSON string but got " + data['os']);
        }
        // ensure the json data is a string
        if (data['architecture'] && !(typeof data['architecture'] === 'string' || data['architecture'] instanceof String)) {
            throw new Error("Expected the field `architecture` to be a primitive type in the JSON string but got " + data['architecture']);
        }
        // ensure the json data is a string
        if (data['variant'] && !(typeof data['variant'] === 'string' || data['variant'] instanceof String)) {
            throw new Error("Expected the field `variant` to be a primitive type in the JSON string but got " + data['variant']);
        }

        return true;
    }


}



/**
 * The operating system type required for the run.
 * @member {module:model/PlatformUpdateParameters.OsEnum} os
 */
PlatformUpdateParameters.prototype['os'] = undefined;

/**
 * The OS architecture.
 * @member {module:model/PlatformUpdateParameters.ArchitectureEnum} architecture
 */
PlatformUpdateParameters.prototype['architecture'] = undefined;

/**
 * Variant of the CPU.
 * @member {module:model/PlatformUpdateParameters.VariantEnum} variant
 */
PlatformUpdateParameters.prototype['variant'] = undefined;





/**
 * Allowed values for the <code>os</code> property.
 * @enum {String}
 * @readonly
 */
PlatformUpdateParameters['OsEnum'] = {

    /**
     * value: "Windows"
     * @const
     */
    "Windows": "Windows",

    /**
     * value: "Linux"
     * @const
     */
    "Linux": "Linux"
};


/**
 * Allowed values for the <code>architecture</code> property.
 * @enum {String}
 * @readonly
 */
PlatformUpdateParameters['ArchitectureEnum'] = {

    /**
     * value: "amd64"
     * @const
     */
    "amd64": "amd64",

    /**
     * value: "x86"
     * @const
     */
    "x86": "x86",

    /**
     * value: "386"
     * @const
     */
    "386": "386",

    /**
     * value: "arm"
     * @const
     */
    "arm": "arm",

    /**
     * value: "arm64"
     * @const
     */
    "arm64": "arm64"
};


/**
 * Allowed values for the <code>variant</code> property.
 * @enum {String}
 * @readonly
 */
PlatformUpdateParameters['VariantEnum'] = {

    /**
     * value: "v6"
     * @const
     */
    "v6": "v6",

    /**
     * value: "v7"
     * @const
     */
    "v7": "v7",

    /**
     * value: "v8"
     * @const
     */
    "v8": "v8"
};



export default PlatformUpdateParameters;

