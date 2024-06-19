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
 * The PipelineRunSourceProperties model module.
 * @module model/PipelineRunSourceProperties
 * @version 2019-06-01-preview
 */
class PipelineRunSourceProperties {
    /**
     * Constructs a new <code>PipelineRunSourceProperties</code>.
     * @alias module:model/PipelineRunSourceProperties
     */
    constructor() { 
        
        PipelineRunSourceProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineRunSourceProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineRunSourceProperties} obj Optional instance to populate.
     * @return {module:model/PipelineRunSourceProperties} The populated <code>PipelineRunSourceProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineRunSourceProperties();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineRunSourceProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineRunSourceProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The type of the source.
 * @member {module:model/PipelineRunSourceProperties.TypeEnum} type
 * @default 'AzureStorageBlob'
 */
PipelineRunSourceProperties.prototype['type'] = 'AzureStorageBlob';

/**
 * The name of the source.
 * @member {String} name
 */
PipelineRunSourceProperties.prototype['name'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PipelineRunSourceProperties['TypeEnum'] = {

    /**
     * value: "AzureStorageBlob"
     * @const
     */
    "AzureStorageBlob": "AzureStorageBlob"
};



export default PipelineRunSourceProperties;
