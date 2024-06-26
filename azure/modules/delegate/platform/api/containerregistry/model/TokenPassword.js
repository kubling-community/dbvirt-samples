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
 * The TokenPassword model module.
 * @module model/TokenPassword
 * @version 2019-06-01-preview
 */
class TokenPassword {
    /**
     * Constructs a new <code>TokenPassword</code>.
     * The password that will be used for authenticating the token of a container registry.
     * @alias module:model/TokenPassword
     */
    constructor() { 
        
        TokenPassword.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenPassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenPassword} obj Optional instance to populate.
     * @return {module:model/TokenPassword} The populated <code>TokenPassword</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenPassword();

            if (data.hasOwnProperty('creationTime')) {
                obj['creationTime'] = ApiClient.convertToType(data['creationTime'], 'Date');
            }
            if (data.hasOwnProperty('expiry')) {
                obj['expiry'] = ApiClient.convertToType(data['expiry'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenPassword</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenPassword</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * The creation datetime of the password.
 * @member {Date} creationTime
 */
TokenPassword.prototype['creationTime'] = undefined;

/**
 * The expiry datetime of the password.
 * @member {Date} expiry
 */
TokenPassword.prototype['expiry'] = undefined;

/**
 * The password name \"password1\" or \"password2\"
 * @member {module:model/TokenPassword.NameEnum} name
 */
TokenPassword.prototype['name'] = undefined;

/**
 * The password value.
 * @member {String} value
 */
TokenPassword.prototype['value'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
TokenPassword['NameEnum'] = {

    /**
     * value: "password1"
     * @const
     */
    "password1": "password1",

    /**
     * value: "password2"
     * @const
     */
    "password2": "password2"
};



export default TokenPassword;

