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
import SshPublicKey from './SshPublicKey';

/**
 * The LocalUserKeys model module.
 * @module model/LocalUserKeys
 * @version 2023-01-01
 */
class LocalUserKeys {
    /**
     * Constructs a new <code>LocalUserKeys</code>.
     * The Storage Account Local User keys.
     * @alias module:model/LocalUserKeys
     */
    constructor() { 
        
        LocalUserKeys.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocalUserKeys</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalUserKeys} obj Optional instance to populate.
     * @return {module:model/LocalUserKeys} The populated <code>LocalUserKeys</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocalUserKeys();

            if (data.hasOwnProperty('sshAuthorizedKeys')) {
                obj['sshAuthorizedKeys'] = ApiClient.convertToType(data['sshAuthorizedKeys'], [SshPublicKey]);
            }
            if (data.hasOwnProperty('sharedKey')) {
                obj['sharedKey'] = ApiClient.convertToType(data['sharedKey'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocalUserKeys</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocalUserKeys</code>.
     */
    static validateJSON(data) {
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
        if (data['sharedKey'] && !(typeof data['sharedKey'] === 'string' || data['sharedKey'] instanceof String)) {
            throw new Error("Expected the field `sharedKey` to be a primitive type in the JSON string but got " + data['sharedKey']);
        }

        return true;
    }


}



/**
 * Optional, local user ssh authorized keys for SFTP.
 * @member {Array.<module:model/SshPublicKey>} sshAuthorizedKeys
 */
LocalUserKeys.prototype['sshAuthorizedKeys'] = undefined;

/**
 * Auto generated by the server for SMB authentication.
 * @member {String} sharedKey
 */
LocalUserKeys.prototype['sharedKey'] = undefined;






export default LocalUserKeys;

