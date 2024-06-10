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
 * The KeytabInformation model module.
 * @module model/KeytabInformation
 * @version 2023-01-15-preview
 */
class KeytabInformation {
    /**
     * Constructs a new <code>KeytabInformation</code>.
     * Keytab used for authenticate with Active Directory.
     * @alias module:model/KeytabInformation
     */
    constructor() { 
        
        KeytabInformation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KeytabInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeytabInformation} obj Optional instance to populate.
     * @return {module:model/KeytabInformation} The populated <code>KeytabInformation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeytabInformation();

            if (data.hasOwnProperty('keytab')) {
                obj['keytab'] = ApiClient.convertToType(data['keytab'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KeytabInformation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KeytabInformation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['keytab'] && !(typeof data['keytab'] === 'string' || data['keytab'] instanceof String)) {
            throw new Error("Expected the field `keytab` to be a primitive type in the JSON string but got " + data['keytab']);
        }

        return true;
    }


}



/**
 * A base64-encoded keytab.
 * @member {String} keytab
 */
KeytabInformation.prototype['keytab'] = undefined;






export default KeytabInformation;

