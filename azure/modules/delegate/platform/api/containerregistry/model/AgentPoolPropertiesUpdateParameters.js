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
 * The AgentPoolPropertiesUpdateParameters model module.
 * @module model/AgentPoolPropertiesUpdateParameters
 * @version 2019-06-01-preview
 */
class AgentPoolPropertiesUpdateParameters {
    /**
     * Constructs a new <code>AgentPoolPropertiesUpdateParameters</code>.
     * @alias module:model/AgentPoolPropertiesUpdateParameters
     */
    constructor() { 
        
        AgentPoolPropertiesUpdateParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AgentPoolPropertiesUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentPoolPropertiesUpdateParameters} obj Optional instance to populate.
     * @return {module:model/AgentPoolPropertiesUpdateParameters} The populated <code>AgentPoolPropertiesUpdateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentPoolPropertiesUpdateParameters();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AgentPoolPropertiesUpdateParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AgentPoolPropertiesUpdateParameters</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The count of agent machine
 * @member {Number} count
 */
AgentPoolPropertiesUpdateParameters.prototype['count'] = undefined;






export default AgentPoolPropertiesUpdateParameters;

