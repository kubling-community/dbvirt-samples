/**
 * AzureArcDataManagementClient
 * The AzureArcData management API provides a RESTful set of web APIs to manage Azure Data Services on Azure Arc Resources.
 *
 * The version of the OpenAPI document: 2023-01-15-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BasicLoginInformation model module.
 * @module model/BasicLoginInformation
 * @version 2023-01-15-preview
 */
class BasicLoginInformation {
    /**
     * Constructs a new <code>BasicLoginInformation</code>.
     * Username and password for basic login authentication.
     * @alias module:model/BasicLoginInformation
     */
    constructor() { 
        
        BasicLoginInformation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicLoginInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicLoginInformation} obj Optional instance to populate.
     * @return {module:model/BasicLoginInformation} The populated <code>BasicLoginInformation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicLoginInformation();

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
     * Validates the JSON data with respect to <code>BasicLoginInformation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BasicLoginInformation</code>.
     */
    static validateJSON(data) {
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



/**
 * Login username.
 * @member {String} username
 */
BasicLoginInformation.prototype['username'] = undefined;

/**
 * Login password.
 * @member {String} password
 */
BasicLoginInformation.prototype['password'] = undefined;






export default BasicLoginInformation;

