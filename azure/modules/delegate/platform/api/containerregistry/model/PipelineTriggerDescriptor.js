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
import PipelineSourceTriggerDescriptor from './PipelineSourceTriggerDescriptor';

/**
 * The PipelineTriggerDescriptor model module.
 * @module model/PipelineTriggerDescriptor
 * @version 2019-06-01-preview
 */
class PipelineTriggerDescriptor {
    /**
     * Constructs a new <code>PipelineTriggerDescriptor</code>.
     * @alias module:model/PipelineTriggerDescriptor
     */
    constructor() { 
        
        PipelineTriggerDescriptor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineTriggerDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineTriggerDescriptor} obj Optional instance to populate.
     * @return {module:model/PipelineTriggerDescriptor} The populated <code>PipelineTriggerDescriptor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineTriggerDescriptor();

            if (data.hasOwnProperty('sourceTrigger')) {
                obj['sourceTrigger'] = PipelineSourceTriggerDescriptor.constructFromObject(data['sourceTrigger']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineTriggerDescriptor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineTriggerDescriptor</code>.
     */
    static validateJSON(data) {
        // validate the optional field `sourceTrigger`
        if (data['sourceTrigger']) { // data not null
          PipelineSourceTriggerDescriptor.validateJSON(data['sourceTrigger']);
        }

        return true;
    }


}



/**
 * @member {module:model/PipelineSourceTriggerDescriptor} sourceTrigger
 */
PipelineTriggerDescriptor.prototype['sourceTrigger'] = undefined;






export default PipelineTriggerDescriptor;

