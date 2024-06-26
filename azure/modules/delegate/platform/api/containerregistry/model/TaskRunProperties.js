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
import Run from './Run';
import RunRequest from './RunRequest';

/**
 * The TaskRunProperties model module.
 * @module model/TaskRunProperties
 * @version 2019-06-01-preview
 */
class TaskRunProperties {
    /**
     * Constructs a new <code>TaskRunProperties</code>.
     * The properties of task run.
     * @alias module:model/TaskRunProperties
     */
    constructor() { 
        
        TaskRunProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskRunProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskRunProperties} obj Optional instance to populate.
     * @return {module:model/TaskRunProperties} The populated <code>TaskRunProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskRunProperties();

            if (data.hasOwnProperty('provisioningState')) {
                obj['provisioningState'] = ApiClient.convertToType(data['provisioningState'], 'String');
            }
            if (data.hasOwnProperty('runRequest')) {
                obj['runRequest'] = RunRequest.constructFromObject(data['runRequest']);
            }
            if (data.hasOwnProperty('runResult')) {
                obj['runResult'] = Run.constructFromObject(data['runResult']);
            }
            if (data.hasOwnProperty('forceUpdateTag')) {
                obj['forceUpdateTag'] = ApiClient.convertToType(data['forceUpdateTag'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TaskRunProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaskRunProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['provisioningState'] && !(typeof data['provisioningState'] === 'string' || data['provisioningState'] instanceof String)) {
            throw new Error("Expected the field `provisioningState` to be a primitive type in the JSON string but got " + data['provisioningState']);
        }
        // validate the optional field `runRequest`
        if (data['runRequest']) { // data not null
          RunRequest.validateJSON(data['runRequest']);
        }
        // validate the optional field `runResult`
        if (data['runResult']) { // data not null
          Run.validateJSON(data['runResult']);
        }
        // ensure the json data is a string
        if (data['forceUpdateTag'] && !(typeof data['forceUpdateTag'] === 'string' || data['forceUpdateTag'] instanceof String)) {
            throw new Error("Expected the field `forceUpdateTag` to be a primitive type in the JSON string but got " + data['forceUpdateTag']);
        }

        return true;
    }


}



/**
 * The provisioning state of this task run
 * @member {module:model/TaskRunProperties.ProvisioningStateEnum} provisioningState
 */
TaskRunProperties.prototype['provisioningState'] = undefined;

/**
 * @member {module:model/RunRequest} runRequest
 */
TaskRunProperties.prototype['runRequest'] = undefined;

/**
 * @member {module:model/Run} runResult
 */
TaskRunProperties.prototype['runResult'] = undefined;

/**
 * How the run should be forced to rerun even if the run request configuration has not changed
 * @member {String} forceUpdateTag
 */
TaskRunProperties.prototype['forceUpdateTag'] = undefined;





/**
 * Allowed values for the <code>provisioningState</code> property.
 * @enum {String}
 * @readonly
 */
TaskRunProperties['ProvisioningStateEnum'] = {

    /**
     * value: "Creating"
     * @const
     */
    "Creating": "Creating",

    /**
     * value: "Updating"
     * @const
     */
    "Updating": "Updating",

    /**
     * value: "Deleting"
     * @const
     */
    "Deleting": "Deleting",

    /**
     * value: "Succeeded"
     * @const
     */
    "Succeeded": "Succeeded",

    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed",

    /**
     * value: "Canceled"
     * @const
     */
    "Canceled": "Canceled"
};



export default TaskRunProperties;

