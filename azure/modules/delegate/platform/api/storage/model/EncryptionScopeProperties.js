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
import EncryptionScopeKeyVaultProperties from './EncryptionScopeKeyVaultProperties';

/**
 * The EncryptionScopeProperties model module.
 * @module model/EncryptionScopeProperties
 * @version 2023-01-01
 */
class EncryptionScopeProperties {
    /**
     * Constructs a new <code>EncryptionScopeProperties</code>.
     * Properties of the encryption scope.
     * @alias module:model/EncryptionScopeProperties
     */
    constructor() { 
        
        EncryptionScopeProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EncryptionScopeProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptionScopeProperties} obj Optional instance to populate.
     * @return {module:model/EncryptionScopeProperties} The populated <code>EncryptionScopeProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionScopeProperties();

            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('creationTime')) {
                obj['creationTime'] = ApiClient.convertToType(data['creationTime'], 'Date');
            }
            if (data.hasOwnProperty('lastModifiedTime')) {
                obj['lastModifiedTime'] = ApiClient.convertToType(data['lastModifiedTime'], 'Date');
            }
            if (data.hasOwnProperty('keyVaultProperties')) {
                obj['keyVaultProperties'] = EncryptionScopeKeyVaultProperties.constructFromObject(data['keyVaultProperties']);
            }
            if (data.hasOwnProperty('requireInfrastructureEncryption')) {
                obj['requireInfrastructureEncryption'] = ApiClient.convertToType(data['requireInfrastructureEncryption'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EncryptionScopeProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EncryptionScopeProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // validate the optional field `keyVaultProperties`
        if (data['keyVaultProperties']) { // data not null
          EncryptionScopeKeyVaultProperties.validateJSON(data['keyVaultProperties']);
        }

        return true;
    }


}



/**
 * The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault.
 * @member {module:model/EncryptionScopeProperties.SourceEnum} source
 */
EncryptionScopeProperties.prototype['source'] = undefined;

/**
 * The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled.
 * @member {module:model/EncryptionScopeProperties.StateEnum} state
 */
EncryptionScopeProperties.prototype['state'] = undefined;

/**
 * Gets the creation date and time of the encryption scope in UTC.
 * @member {Date} creationTime
 */
EncryptionScopeProperties.prototype['creationTime'] = undefined;

/**
 * Gets the last modification date and time of the encryption scope in UTC.
 * @member {Date} lastModifiedTime
 */
EncryptionScopeProperties.prototype['lastModifiedTime'] = undefined;

/**
 * @member {module:model/EncryptionScopeKeyVaultProperties} keyVaultProperties
 */
EncryptionScopeProperties.prototype['keyVaultProperties'] = undefined;

/**
 * A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
 * @member {Boolean} requireInfrastructureEncryption
 */
EncryptionScopeProperties.prototype['requireInfrastructureEncryption'] = undefined;





/**
 * Allowed values for the <code>source</code> property.
 * @enum {String}
 * @readonly
 */
EncryptionScopeProperties['SourceEnum'] = {

    /**
     * value: "Microsoft.Storage"
     * @const
     */
    "Storage": "Microsoft.Storage",

    /**
     * value: "Microsoft.KeyVault"
     * @const
     */
    "KeyVault": "Microsoft.KeyVault"
};


/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
EncryptionScopeProperties['StateEnum'] = {

    /**
     * value: "Enabled"
     * @const
     */
    "Enabled": "Enabled",

    /**
     * value: "Disabled"
     * @const
     */
    "Disabled": "Disabled"
};



export default EncryptionScopeProperties;

