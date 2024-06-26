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
import RegistryPassword from './RegistryPassword';

/**
 * The RegistryListCredentialsResult model module.
 * @module model/RegistryListCredentialsResult
 * @version 2019-06-01-preview
 */
class RegistryListCredentialsResult {
    /**
     * Constructs a new <code>RegistryListCredentialsResult</code>.
     * The response from the ListCredentials operation.
     * @alias module:model/RegistryListCredentialsResult
     */
    constructor() { 
        
        RegistryListCredentialsResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegistryListCredentialsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryListCredentialsResult} obj Optional instance to populate.
     * @return {module:model/RegistryListCredentialsResult} The populated <code>RegistryListCredentialsResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegistryListCredentialsResult();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('passwords')) {
                obj['passwords'] = ApiClient.convertToType(data['passwords'], [RegistryPassword]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RegistryListCredentialsResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RegistryListCredentialsResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        if (data['passwords']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['passwords'])) {
                throw new Error("Expected the field `passwords` to be an array in the JSON data but got " + data['passwords']);
            }
            // validate the optional field `passwords` (array)
            for (const item of data['passwords']) {
                RegistryPassword.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The username for a container registry.
 * @member {String} username
 */
RegistryListCredentialsResult.prototype['username'] = undefined;

/**
 * The list of passwords for a container registry.
 * @member {Array.<module:model/RegistryPassword>} passwords
 */
RegistryListCredentialsResult.prototype['passwords'] = undefined;






export default RegistryListCredentialsResult;

