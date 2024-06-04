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
import EncryptionIdentity from './EncryptionIdentity';
import EncryptionServices from './EncryptionServices';
import KeyVaultProperties from './KeyVaultProperties';

/**
 * The Encryption model module.
 * @module model/Encryption
 * @version 2023-01-01
 */
class Encryption {
    /**
     * Constructs a new <code>Encryption</code>.
     * The encryption settings on the storage account.
     * @alias module:model/Encryption
     */
    constructor() { 
        
        Encryption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Encryption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Encryption} obj Optional instance to populate.
     * @return {module:model/Encryption} The populated <code>Encryption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Encryption();

            if (data.hasOwnProperty('services')) {
                obj['services'] = EncryptionServices.constructFromObject(data['services']);
            }
            if (data.hasOwnProperty('keySource')) {
                obj['keySource'] = ApiClient.convertToType(data['keySource'], 'String');
            }
            if (data.hasOwnProperty('requireInfrastructureEncryption')) {
                obj['requireInfrastructureEncryption'] = ApiClient.convertToType(data['requireInfrastructureEncryption'], 'Boolean');
            }
            if (data.hasOwnProperty('keyvaultproperties')) {
                obj['keyvaultproperties'] = KeyVaultProperties.constructFromObject(data['keyvaultproperties']);
            }
            if (data.hasOwnProperty('identity')) {
                obj['identity'] = EncryptionIdentity.constructFromObject(data['identity']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Encryption</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Encryption</code>.
     */
    static validateJSON(data) {
        // validate the optional field `services`
        if (data['services']) { // data not null
          EncryptionServices.validateJSON(data['services']);
        }
        // ensure the json data is a string
        if (data['keySource'] && !(typeof data['keySource'] === 'string' || data['keySource'] instanceof String)) {
            throw new Error("Expected the field `keySource` to be a primitive type in the JSON string but got " + data['keySource']);
        }
        // validate the optional field `keyvaultproperties`
        if (data['keyvaultproperties']) { // data not null
          KeyVaultProperties.validateJSON(data['keyvaultproperties']);
        }
        // validate the optional field `identity`
        if (data['identity']) { // data not null
          EncryptionIdentity.validateJSON(data['identity']);
        }

        return true;
    }


}



/**
 * @member {module:model/EncryptionServices} services
 */
Encryption.prototype['services'] = undefined;

/**
 * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
 * @member {module:model/Encryption.KeySourceEnum} keySource
 * @default 'Microsoft.Storage'
 */
Encryption.prototype['keySource'] = 'Microsoft.Storage';

/**
 * A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
 * @member {Boolean} requireInfrastructureEncryption
 */
Encryption.prototype['requireInfrastructureEncryption'] = undefined;

/**
 * @member {module:model/KeyVaultProperties} keyvaultproperties
 */
Encryption.prototype['keyvaultproperties'] = undefined;

/**
 * @member {module:model/EncryptionIdentity} identity
 */
Encryption.prototype['identity'] = undefined;





/**
 * Allowed values for the <code>keySource</code> property.
 * @enum {String}
 * @readonly
 */
Encryption['KeySourceEnum'] = {

    /**
     * value: "Microsoft.Storage"
     * @const
     */
    "Storage": "Microsoft.Storage",

    /**
     * value: "Microsoft.Keyvault"
     * @const
     */
    "Keyvault": "Microsoft.Keyvault"
};



export default Encryption;

