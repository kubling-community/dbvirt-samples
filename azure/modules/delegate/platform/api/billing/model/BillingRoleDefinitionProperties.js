/**
 * BillingManagementClient
 * Billing client provides access to billing resources for Azure subscriptions.
 *
 * The version of the OpenAPI document: 2020-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../../BaseApiClient";
import BillingPermissionsProperties from './BillingPermissionsProperties';

/**
 * The BillingRoleDefinitionProperties model module.
 * @module model/BillingRoleDefinitionProperties
 * @version 2020-05-01
 */
class BillingRoleDefinitionProperties {
    /**
     * Constructs a new <code>BillingRoleDefinitionProperties</code>.
     * The properties of the a role definition.
     * @alias module:model/BillingRoleDefinitionProperties
     */
    constructor() { 
        
        BillingRoleDefinitionProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingRoleDefinitionProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingRoleDefinitionProperties} obj Optional instance to populate.
     * @return {module:model/BillingRoleDefinitionProperties} The populated <code>BillingRoleDefinitionProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingRoleDefinitionProperties();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [BillingPermissionsProperties]);
            }
            if (data.hasOwnProperty('roleName')) {
                obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingRoleDefinitionProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingRoleDefinitionProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['permissions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['permissions'])) {
                throw new Error("Expected the field `permissions` to be an array in the JSON data but got " + data['permissions']);
            }
            // validate the optional field `permissions` (array)
            for (const item of data['permissions']) {
                BillingPermissionsProperties.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['roleName'] && !(typeof data['roleName'] === 'string' || data['roleName'] instanceof String)) {
            throw new Error("Expected the field `roleName` to be a primitive type in the JSON string but got " + data['roleName']);
        }

        return true;
    }


}



/**
 * The role description
 * @member {String} description
 */
BillingRoleDefinitionProperties.prototype['description'] = undefined;

/**
 * The billingPermissions the role has
 * @member {Array.<module:model/BillingPermissionsProperties>} permissions
 */
BillingRoleDefinitionProperties.prototype['permissions'] = undefined;

/**
 * The name of the role
 * @member {String} roleName
 */
BillingRoleDefinitionProperties.prototype['roleName'] = undefined;






export default BillingRoleDefinitionProperties;
