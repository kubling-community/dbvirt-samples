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
import KeyVaultProperties from './KeyVaultProperties';

/**
 * The EncryptionProperties model module.
 * @module model/EncryptionProperties
 * @version 2023-01-15-preview
 */
class EncryptionProperties {
    /**
     * Constructs a new <code>EncryptionProperties</code>.
     * Configuration of key for data encryption
     * @alias module:model/EncryptionProperties
     */
    constructor() { 
        
        EncryptionProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EncryptionProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptionProperties} obj Optional instance to populate.
     * @return {module:model/EncryptionProperties} The populated <code>EncryptionProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionProperties();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('keyVaultProperties')) {
                obj['keyVaultProperties'] = KeyVaultProperties.constructFromObject(data['keyVaultProperties']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EncryptionProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EncryptionProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `keyVaultProperties`
        if (data['keyVaultProperties']) { // data not null
          KeyVaultProperties.validateJSON(data['keyVaultProperties']);
        }

        return true;
    }


}



/**
 * Indicates whether or not the encryption is enabled for container registry.
 * @member {module:model/EncryptionProperties.StatusEnum} status
 */
EncryptionProperties.prototype['status'] = undefined;

/**
 * @member {module:model/KeyVaultProperties} keyVaultProperties
 */
EncryptionProperties.prototype['keyVaultProperties'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
EncryptionProperties['StatusEnum'] = {

    /**
     * value: "enabled"
     * @const
     */
    "enabled": "enabled",

    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"
};



export default EncryptionProperties;
