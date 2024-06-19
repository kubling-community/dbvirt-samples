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
import UserIdentityProperties from './UserIdentityProperties';

/**
 * The IdentityProperties model module.
 * @module model/IdentityProperties
 * @version 2019-06-01-preview
 */
class IdentityProperties {
    /**
     * Constructs a new <code>IdentityProperties</code>.
     * Managed identity for the resource.
     * @alias module:model/IdentityProperties
     */
    constructor() { 
        
        IdentityProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdentityProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityProperties} obj Optional instance to populate.
     * @return {module:model/IdentityProperties} The populated <code>IdentityProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentityProperties();

            if (data.hasOwnProperty('principalId')) {
                obj['principalId'] = ApiClient.convertToType(data['principalId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('userAssignedIdentities')) {
                obj['userAssignedIdentities'] = ApiClient.convertToType(data['userAssignedIdentities'], {'String': UserIdentityProperties});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IdentityProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IdentityProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['principalId'] && !(typeof data['principalId'] === 'string' || data['principalId'] instanceof String)) {
            throw new Error("Expected the field `principalId` to be a primitive type in the JSON string but got " + data['principalId']);
        }
        // ensure the json data is a string
        if (data['tenantId'] && !(typeof data['tenantId'] === 'string' || data['tenantId'] instanceof String)) {
            throw new Error("Expected the field `tenantId` to be a primitive type in the JSON string but got " + data['tenantId']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * The principal ID of resource identity.
 * @member {String} principalId
 */
IdentityProperties.prototype['principalId'] = undefined;

/**
 * The tenant ID of resource.
 * @member {String} tenantId
 */
IdentityProperties.prototype['tenantId'] = undefined;

/**
 * The identity type.
 * @member {module:model/IdentityProperties.TypeEnum} type
 */
IdentityProperties.prototype['type'] = undefined;

/**
 * The list of user identities associated with the resource. The user identity   dictionary key references will be ARM resource ids in the form:   '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/      providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
 * @member {Object.<String, module:model/UserIdentityProperties>} userAssignedIdentities
 */
IdentityProperties.prototype['userAssignedIdentities'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IdentityProperties['TypeEnum'] = {

    /**
     * value: "SystemAssigned"
     * @const
     */
    "SystemAssigned": "SystemAssigned",

    /**
     * value: "UserAssigned"
     * @const
     */
    "UserAssigned": "UserAssigned",

    /**
     * value: "SystemAssigned, UserAssigned"
     * @const
     */
    "SystemAssigned, UserAssigned": "SystemAssigned, UserAssigned",

    /**
     * value: "None"
     * @const
     */
    "None": "None"
};



export default IdentityProperties;
