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
import IdentityProperties from './IdentityProperties';
import TaskPropertiesUpdateParameters from './TaskPropertiesUpdateParameters';

/**
 * The TaskUpdateParameters model module.
 * @module model/TaskUpdateParameters
 * @version 2019-06-01-preview
 */
class TaskUpdateParameters {
    /**
     * Constructs a new <code>TaskUpdateParameters</code>.
     * The parameters for updating a task.
     * @alias module:model/TaskUpdateParameters
     */
    constructor() { 
        
        TaskUpdateParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskUpdateParameters} obj Optional instance to populate.
     * @return {module:model/TaskUpdateParameters} The populated <code>TaskUpdateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskUpdateParameters();

            if (data.hasOwnProperty('identity')) {
                obj['identity'] = IdentityProperties.constructFromObject(data['identity']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = TaskPropertiesUpdateParameters.constructFromObject(data['properties']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TaskUpdateParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaskUpdateParameters</code>.
     */
    static validateJSON(data) {
        // validate the optional field `identity`
        if (data['identity']) { // data not null
          IdentityProperties.validateJSON(data['identity']);
        }
        // validate the optional field `properties`
        if (data['properties']) { // data not null
          TaskPropertiesUpdateParameters.validateJSON(data['properties']);
        }

        return true;
    }


}



/**
 * @member {module:model/IdentityProperties} identity
 */
TaskUpdateParameters.prototype['identity'] = undefined;

/**
 * @member {module:model/TaskPropertiesUpdateParameters} properties
 */
TaskUpdateParameters.prototype['properties'] = undefined;

/**
 * The ARM resource tags.
 * @member {Object.<String, String>} tags
 */
TaskUpdateParameters.prototype['tags'] = undefined;






export default TaskUpdateParameters;

