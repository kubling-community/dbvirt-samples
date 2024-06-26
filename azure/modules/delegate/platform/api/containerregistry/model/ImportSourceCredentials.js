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
 * The ImportSourceCredentials model module.
 * @module model/ImportSourceCredentials
 * @version 2019-06-01-preview
 */
class ImportSourceCredentials {
    /**
     * Constructs a new <code>ImportSourceCredentials</code>.
     * @alias module:model/ImportSourceCredentials
     * @param password {String} The password used to authenticate with the source registry.
     */
    constructor(password) { 
        
        ImportSourceCredentials.initialize(this, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, password) { 
        obj['password'] = password;
    }

    /**
     * Constructs a <code>ImportSourceCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportSourceCredentials} obj Optional instance to populate.
     * @return {module:model/ImportSourceCredentials} The populated <code>ImportSourceCredentials</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportSourceCredentials();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImportSourceCredentials</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImportSourceCredentials</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ImportSourceCredentials.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

ImportSourceCredentials.RequiredProperties = ["password"];

/**
 * The username to authenticate with the source registry.
 * @member {String} username
 */
ImportSourceCredentials.prototype['username'] = undefined;

/**
 * The password used to authenticate with the source registry.
 * @member {String} password
 */
ImportSourceCredentials.prototype['password'] = undefined;






export default ImportSourceCredentials;

