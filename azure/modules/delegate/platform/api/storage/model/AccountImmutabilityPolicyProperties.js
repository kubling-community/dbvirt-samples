/**
 * StorageManagementClient
 * The Azure Storage Management API.
 *
 * The version of the OpenAPI document: 2023-01-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../../BaseApiClient";

/**
 * The AccountImmutabilityPolicyProperties model module.
 * @module model/AccountImmutabilityPolicyProperties
 * @version 2023-01-01
 */
class AccountImmutabilityPolicyProperties {
    /**
     * Constructs a new <code>AccountImmutabilityPolicyProperties</code>.
     * This defines account-level immutability policy properties.
     * @alias module:model/AccountImmutabilityPolicyProperties
     */
    constructor() { 
        
        AccountImmutabilityPolicyProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountImmutabilityPolicyProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountImmutabilityPolicyProperties} obj Optional instance to populate.
     * @return {module:model/AccountImmutabilityPolicyProperties} The populated <code>AccountImmutabilityPolicyProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountImmutabilityPolicyProperties();

            if (data.hasOwnProperty('immutabilityPeriodSinceCreationInDays')) {
                obj['immutabilityPeriodSinceCreationInDays'] = ApiClient.convertToType(data['immutabilityPeriodSinceCreationInDays'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('allowProtectedAppendWrites')) {
                obj['allowProtectedAppendWrites'] = ApiClient.convertToType(data['allowProtectedAppendWrites'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountImmutabilityPolicyProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountImmutabilityPolicyProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }

        return true;
    }


}



/**
 * The immutability period for the blobs in the container since the policy creation, in days.
 * @member {Number} immutabilityPeriodSinceCreationInDays
 */
AccountImmutabilityPolicyProperties.prototype['immutabilityPeriodSinceCreationInDays'] = undefined;

/**
 * The ImmutabilityPolicy state defines the mode of the policy. Disabled state disables the policy, Unlocked state allows increase and decrease of immutability retention time and also allows toggling allowProtectedAppendWrites property, Locked state only allows the increase of the immutability retention time. A policy can only be created in a Disabled or Unlocked state and can be toggled between the two states. Only a policy in an Unlocked state can transition to a Locked state which cannot be reverted.
 * @member {module:model/AccountImmutabilityPolicyProperties.StateEnum} state
 */
AccountImmutabilityPolicyProperties.prototype['state'] = undefined;

/**
 * This property can only be changed for disabled and unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted.
 * @member {Boolean} allowProtectedAppendWrites
 */
AccountImmutabilityPolicyProperties.prototype['allowProtectedAppendWrites'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
AccountImmutabilityPolicyProperties['StateEnum'] = {

    /**
     * value: "Unlocked"
     * @const
     */
    "Unlocked": "Unlocked",

    /**
     * value: "Locked"
     * @const
     */
    "Locked": "Locked",

    /**
     * value: "Disabled"
     * @const
     */
    "Disabled": "Disabled"
};



export default AccountImmutabilityPolicyProperties;
