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
import KeyVaultProperties from './KeyVaultProperties';

/**
 * The EncryptionProperty model module.
 * @module model/EncryptionProperty
 * @version 2019-06-01-preview
 */
class EncryptionProperty {
    /**
     * Constructs a new <code>EncryptionProperty</code>.
     * @alias module:model/EncryptionProperty
     */
    constructor() { 
        
        EncryptionProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EncryptionProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptionProperty} obj Optional instance to populate.
     * @return {module:model/EncryptionProperty} The populated <code>EncryptionProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionProperty();

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
     * Validates the JSON data with respect to <code>EncryptionProperty</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EncryptionProperty</code>.
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
 * @member {module:model/EncryptionProperty.StatusEnum} status
 */
EncryptionProperty.prototype['status'] = undefined;

/**
 * @member {module:model/KeyVaultProperties} keyVaultProperties
 */
EncryptionProperty.prototype['keyVaultProperties'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
EncryptionProperty['StatusEnum'] = {

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



export default EncryptionProperty;

