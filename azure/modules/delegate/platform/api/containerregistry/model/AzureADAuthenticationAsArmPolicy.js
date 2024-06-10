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
 * The AzureADAuthenticationAsArmPolicy model module.
 * @module model/AzureADAuthenticationAsArmPolicy
 * @version 2019-06-01-preview
 */
class AzureADAuthenticationAsArmPolicy {
    /**
     * Constructs a new <code>AzureADAuthenticationAsArmPolicy</code>.
     * The policy for using ARM audience token for a container registry.
     * @alias module:model/AzureADAuthenticationAsArmPolicy
     */
    constructor() { 
        
        AzureADAuthenticationAsArmPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AzureADAuthenticationAsArmPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AzureADAuthenticationAsArmPolicy} obj Optional instance to populate.
     * @return {module:model/AzureADAuthenticationAsArmPolicy} The populated <code>AzureADAuthenticationAsArmPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AzureADAuthenticationAsArmPolicy();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AzureADAuthenticationAsArmPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AzureADAuthenticationAsArmPolicy</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * The value that indicates whether the policy is enabled or not.
 * @member {module:model/AzureADAuthenticationAsArmPolicy.StatusEnum} status
 * @default 'enabled'
 */
AzureADAuthenticationAsArmPolicy.prototype['status'] = 'enabled';





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
AzureADAuthenticationAsArmPolicy['StatusEnum'] = {

    /**
     * value: "enabled"
     * @const
     */
    "enabled": "enabled",

    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"
};



export default AzureADAuthenticationAsArmPolicy;

