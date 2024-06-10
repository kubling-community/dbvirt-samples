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
import K8sActiveDirectoryConnector from './K8sActiveDirectoryConnector';

/**
 * The K8sActiveDirectory model module.
 * @module model/K8sActiveDirectory
 * @version 2023-01-15-preview
 */
class K8sActiveDirectory {
    /**
     * Constructs a new <code>K8sActiveDirectory</code>.
     * The kubernetes active directory information.
     * @alias module:model/K8sActiveDirectory
     */
    constructor() { 
        
        K8sActiveDirectory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>K8sActiveDirectory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/K8sActiveDirectory} obj Optional instance to populate.
     * @return {module:model/K8sActiveDirectory} The populated <code>K8sActiveDirectory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new K8sActiveDirectory();

            if (data.hasOwnProperty('connector')) {
                obj['connector'] = K8sActiveDirectoryConnector.constructFromObject(data['connector']);
            }
            if (data.hasOwnProperty('accountName')) {
                obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
            }
            if (data.hasOwnProperty('keytabSecret')) {
                obj['keytabSecret'] = ApiClient.convertToType(data['keytabSecret'], 'String');
            }
            if (data.hasOwnProperty('encryptionTypes')) {
                obj['encryptionTypes'] = ApiClient.convertToType(data['encryptionTypes'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>K8sActiveDirectory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>K8sActiveDirectory</code>.
     */
    static validateJSON(data) {
        // validate the optional field `connector`
        if (data['connector']) { // data not null
          K8sActiveDirectoryConnector.validateJSON(data['connector']);
        }
        // ensure the json data is a string
        if (data['accountName'] && !(typeof data['accountName'] === 'string' || data['accountName'] instanceof String)) {
            throw new Error("Expected the field `accountName` to be a primitive type in the JSON string but got " + data['accountName']);
        }
        // ensure the json data is a string
        if (data['keytabSecret'] && !(typeof data['keytabSecret'] === 'string' || data['keytabSecret'] instanceof String)) {
            throw new Error("Expected the field `keytabSecret` to be a primitive type in the JSON string but got " + data['keytabSecret']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['encryptionTypes'])) {
            throw new Error("Expected the field `encryptionTypes` to be an array in the JSON data but got " + data['encryptionTypes']);
        }

        return true;
    }


}



/**
 * @member {module:model/K8sActiveDirectoryConnector} connector
 */
K8sActiveDirectory.prototype['connector'] = undefined;

/**
 * Account name for AAD
 * @member {String} accountName
 */
K8sActiveDirectory.prototype['accountName'] = undefined;

/**
 * Keytab secret used to authenticate with Active Directory.
 * @member {String} keytabSecret
 */
K8sActiveDirectory.prototype['keytabSecret'] = undefined;

/**
 * An array of encryption types
 * @member {Array.<String>} encryptionTypes
 */
K8sActiveDirectory.prototype['encryptionTypes'] = undefined;






export default K8sActiveDirectory;

