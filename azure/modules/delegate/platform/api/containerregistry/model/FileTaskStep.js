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
import BaseImageDependency from './BaseImageDependency';
import SetValue from './SetValue';
import TaskStepProperties from './TaskStepProperties';

/**
 * The FileTaskStep model module.
 * @module model/FileTaskStep
 * @version 2019-06-01-preview
 */
class FileTaskStep {
    /**
     * Constructs a new <code>FileTaskStep</code>.
     * The properties of a task step.
     * @alias module:model/FileTaskStep
     * @extends module:model/TaskStepProperties
     * @implements module:model/TaskStepProperties
     * @param type {module:model/FileTaskStep.TypeEnum} The type of the step.
     */
    constructor(type) { 
        TaskStepProperties.initialize(this, type);
        FileTaskStep.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['taskFilePath'] = taskFilePath;
    }

    /**
     * Constructs a <code>FileTaskStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileTaskStep} obj Optional instance to populate.
     * @return {module:model/FileTaskStep} The populated <code>FileTaskStep</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileTaskStep();
            TaskStepProperties.constructFromObject(data, obj);
            TaskStepProperties.constructFromObject(data, obj);

            if (data.hasOwnProperty('taskFilePath')) {
                obj['taskFilePath'] = ApiClient.convertToType(data['taskFilePath'], 'String');
            }
            if (data.hasOwnProperty('valuesFilePath')) {
                obj['valuesFilePath'] = ApiClient.convertToType(data['valuesFilePath'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [SetValue]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileTaskStep</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileTaskStep</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FileTaskStep.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['taskFilePath'] && !(typeof data['taskFilePath'] === 'string' || data['taskFilePath'] instanceof String)) {
            throw new Error("Expected the field `taskFilePath` to be a primitive type in the JSON string but got " + data['taskFilePath']);
        }
        // ensure the json data is a string
        if (data['valuesFilePath'] && !(typeof data['valuesFilePath'] === 'string' || data['valuesFilePath'] instanceof String)) {
            throw new Error("Expected the field `valuesFilePath` to be a primitive type in the JSON string but got " + data['valuesFilePath']);
        }
        if (data['values']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['values'])) {
                throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
            }
            // validate the optional field `values` (array)
            for (const item of data['values']) {
                SetValue.validateJSON(item);
            };
        }

        return true;
    }


}

FileTaskStep.RequiredProperties = ["taskFilePath", "type"];

/**
 * The task template/definition file path relative to the source context.
 * @member {String} taskFilePath
 */
FileTaskStep.prototype['taskFilePath'] = undefined;

/**
 * The task values/parameters file path relative to the source context.
 * @member {String} valuesFilePath
 */
FileTaskStep.prototype['valuesFilePath'] = undefined;

/**
 * The collection of overridable values that can be passed when running a task.
 * @member {Array.<module:model/SetValue>} values
 */
FileTaskStep.prototype['values'] = undefined;


// Implement TaskStepProperties interface:
/**
 * The type of the step.
 * @member {module:model/TaskStepProperties.TypeEnum} type
 */
TaskStepProperties.prototype['type'] = undefined;
/**
 * List of base image dependencies for a step.
 * @member {Array.<module:model/BaseImageDependency>} baseImageDependencies
 */
TaskStepProperties.prototype['baseImageDependencies'] = undefined;
/**
 * The URL(absolute or relative) of the source context for the task step.
 * @member {String} contextPath
 */
TaskStepProperties.prototype['contextPath'] = undefined;
/**
 * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
 * @member {String} contextAccessToken
 */
TaskStepProperties.prototype['contextAccessToken'] = undefined;




export default FileTaskStep;

