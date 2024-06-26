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
import SecretObject from './SecretObject';

/**
 * The CustomRegistryCredentials model module.
 * @module model/CustomRegistryCredentials
 * @version 2019-06-01-preview
 */
class CustomRegistryCredentials {
    /**
     * Constructs a new <code>CustomRegistryCredentials</code>.
     * Describes the credentials that will be used to access a custom registry during a run.
     * @alias module:model/CustomRegistryCredentials
     */
    constructor() { 
        
        CustomRegistryCredentials.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomRegistryCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomRegistryCredentials} obj Optional instance to populate.
     * @return {module:model/CustomRegistryCredentials} The populated <code>CustomRegistryCredentials</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomRegistryCredentials();

            if (data.hasOwnProperty('userName')) {
                obj['userName'] = SecretObject.constructFromObject(data['userName']);
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = SecretObject.constructFromObject(data['password']);
            }
            if (data.hasOwnProperty('identity')) {
                obj['identity'] = ApiClient.convertToType(data['identity'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomRegistryCredentials</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomRegistryCredentials</code>.
     */
    static validateJSON(data) {
        // validate the optional field `userName`
        if (data['userName']) { // data not null
          SecretObject.validateJSON(data['userName']);
        }
        // validate the optional field `password`
        if (data['password']) { // data not null
          SecretObject.validateJSON(data['password']);
        }
        // ensure the json data is a string
        if (data['identity'] && !(typeof data['identity'] === 'string' || data['identity'] instanceof String)) {
            throw new Error("Expected the field `identity` to be a primitive type in the JSON string but got " + data['identity']);
        }

        return true;
    }


}



/**
 * @member {module:model/SecretObject} userName
 */
CustomRegistryCredentials.prototype['userName'] = undefined;

/**
 * @member {module:model/SecretObject} password
 */
CustomRegistryCredentials.prototype['password'] = undefined;

/**
 * Indicates the managed identity assigned to the custom credential. If a user-assigned identity  this value is the Client ID. If a system-assigned identity, the value will be `system`. In  the case of a system-assigned identity, the Client ID will be determined by the runner. This  identity may be used to authenticate to key vault to retrieve credentials or it may be the only   source of authentication used for accessing the registry.
 * @member {String} identity
 */
CustomRegistryCredentials.prototype['identity'] = undefined;






export default CustomRegistryCredentials;

