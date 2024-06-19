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
 * The AgentProperties model module.
 * @module model/AgentProperties
 * @version 2019-06-01-preview
 */
class AgentProperties {
    /**
     * Constructs a new <code>AgentProperties</code>.
     * The properties that determine the run agent configuration.
     * @alias module:model/AgentProperties
     */
    constructor() { 
        
        AgentProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AgentProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentProperties} obj Optional instance to populate.
     * @return {module:model/AgentProperties} The populated <code>AgentProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentProperties();

            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AgentProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgentProperties</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The CPU configuration in terms of number of cores required for the run.
 * @member {Number} cpu
 */
AgentProperties.prototype['cpu'] = undefined;






export default AgentProperties;
