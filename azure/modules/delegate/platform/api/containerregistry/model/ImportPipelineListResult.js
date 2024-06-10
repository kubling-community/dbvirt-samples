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
import ImportPipeline from './ImportPipeline';

/**
 * The ImportPipelineListResult model module.
 * @module model/ImportPipelineListResult
 * @version 2019-06-01-preview
 */
class ImportPipelineListResult {
    /**
     * Constructs a new <code>ImportPipelineListResult</code>.
     * The result of a request to list import pipelines for a container registry.
     * @alias module:model/ImportPipelineListResult
     */
    constructor() { 
        
        ImportPipelineListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImportPipelineListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportPipelineListResult} obj Optional instance to populate.
     * @return {module:model/ImportPipelineListResult} The populated <code>ImportPipelineListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportPipelineListResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [ImportPipeline]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImportPipelineListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImportPipelineListResult</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                ImportPipeline.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['nextLink'] && !(typeof data['nextLink'] === 'string' || data['nextLink'] instanceof String)) {
            throw new Error("Expected the field `nextLink` to be a primitive type in the JSON string but got " + data['nextLink']);
        }

        return true;
    }


}



/**
 * The list of import pipelines. Since this list may be incomplete, the nextLink field should be used to request the next list of import pipelines.
 * @member {Array.<module:model/ImportPipeline>} value
 */
ImportPipelineListResult.prototype['value'] = undefined;

/**
 * The URI that can be used to request the next list of pipeline runs.
 * @member {String} nextLink
 */
ImportPipelineListResult.prototype['nextLink'] = undefined;






export default ImportPipelineListResult;

