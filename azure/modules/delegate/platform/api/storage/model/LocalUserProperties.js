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
import PermissionScope from './PermissionScope';
import SshPublicKey from './SshPublicKey';

/**
 * The LocalUserProperties model module.
 * @module model/LocalUserProperties
 * @version 2023-01-01
 */
class LocalUserProperties {
    /**
     * Constructs a new <code>LocalUserProperties</code>.
     * The Storage Account Local User properties.
     * @alias module:model/LocalUserProperties
     */
    constructor() { 
        
        LocalUserProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocalUserProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalUserProperties} obj Optional instance to populate.
     * @return {module:model/LocalUserProperties} The populated <code>LocalUserProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocalUserProperties();

            if (data.hasOwnProperty('permissionScopes')) {
                obj['permissionScopes'] = ApiClient.convertToType(data['permissionScopes'], [PermissionScope]);
            }
            if (data.hasOwnProperty('homeDirectory')) {
                obj['homeDirectory'] = ApiClient.convertToType(data['homeDirectory'], 'String');
            }
            if (data.hasOwnProperty('sshAuthorizedKeys')) {
                obj['sshAuthorizedKeys'] = ApiClient.convertToType(data['sshAuthorizedKeys'], [SshPublicKey]);
            }
            if (data.hasOwnProperty('sid')) {
                obj['sid'] = ApiClient.convertToType(data['sid'], 'String');
            }
            if (data.hasOwnProperty('hasSharedKey')) {
                obj['hasSharedKey'] = ApiClient.convertToType(data['hasSharedKey'], 'Boolean');
            }
            if (data.hasOwnProperty('hasSshKey')) {
                obj['hasSshKey'] = ApiClient.convertToType(data['hasSshKey'], 'Boolean');
            }
            if (data.hasOwnProperty('hasSshPassword')) {
                obj['hasSshPassword'] = ApiClient.convertToType(data['hasSshPassword'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocalUserProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocalUserProperties</code>.
     */
    static validateJSON(data) {
        if (data['permissionScopes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['permissionScopes'])) {
                throw new Error("Expected the field `permissionScopes` to be an array in the JSON data but got " + data['permissionScopes']);
            }
            // validate the optional field `permissionScopes` (array)
            for (const item of data['permissionScopes']) {
                PermissionScope.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['homeDirectory'] && !(typeof data['homeDirectory'] === 'string' || data['homeDirectory'] instanceof String)) {
            throw new Error("Expected the field `homeDirectory` to be a primitive type in the JSON string but got " + data['homeDirectory']);
        }
        if (data['sshAuthorizedKeys']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sshAuthorizedKeys'])) {
                throw new Error("Expected the field `sshAuthorizedKeys` to be an array in the JSON data but got " + data['sshAuthorizedKeys']);
            }
            // validate the optional field `sshAuthorizedKeys` (array)
            for (const item of data['sshAuthorizedKeys']) {
                SshPublicKey.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['sid'] && !(typeof data['sid'] === 'string' || data['sid'] instanceof String)) {
            throw new Error("Expected the field `sid` to be a primitive type in the JSON string but got " + data['sid']);
        }

        return true;
    }


}



/**
 * The permission scopes of the local user.
 * @member {Array.<module:model/PermissionScope>} permissionScopes
 */
LocalUserProperties.prototype['permissionScopes'] = undefined;

/**
 * Optional, local user home directory.
 * @member {String} homeDirectory
 */
LocalUserProperties.prototype['homeDirectory'] = undefined;

/**
 * Optional, local user ssh authorized keys for SFTP.
 * @member {Array.<module:model/SshPublicKey>} sshAuthorizedKeys
 */
LocalUserProperties.prototype['sshAuthorizedKeys'] = undefined;

/**
 * A unique Security Identifier that is generated by the server.
 * @member {String} sid
 */
LocalUserProperties.prototype['sid'] = undefined;

/**
 * Indicates whether shared key exists. Set it to false to remove existing shared key.
 * @member {Boolean} hasSharedKey
 */
LocalUserProperties.prototype['hasSharedKey'] = undefined;

/**
 * Indicates whether ssh key exists. Set it to false to remove existing SSH key.
 * @member {Boolean} hasSshKey
 */
LocalUserProperties.prototype['hasSshKey'] = undefined;

/**
 * Indicates whether ssh password exists. Set it to false to remove existing SSH password.
 * @member {Boolean} hasSshPassword
 */
LocalUserProperties.prototype['hasSshPassword'] = undefined;






export default LocalUserProperties;

