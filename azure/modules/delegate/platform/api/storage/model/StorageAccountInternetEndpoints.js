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

/**
 * The StorageAccountInternetEndpoints model module.
 * @module model/StorageAccountInternetEndpoints
 * @version 2023-01-01
 */
class StorageAccountInternetEndpoints {
    /**
     * Constructs a new <code>StorageAccountInternetEndpoints</code>.
     * The URIs that are used to perform a retrieval of a public blob, file, web or dfs object via a internet routing endpoint.
     * @alias module:model/StorageAccountInternetEndpoints
     */
    constructor() { 
        
        StorageAccountInternetEndpoints.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageAccountInternetEndpoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StorageAccountInternetEndpoints} obj Optional instance to populate.
     * @return {module:model/StorageAccountInternetEndpoints} The populated <code>StorageAccountInternetEndpoints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageAccountInternetEndpoints();

            if (data.hasOwnProperty('blob')) {
                obj['blob'] = ApiClient.convertToType(data['blob'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('web')) {
                obj['web'] = ApiClient.convertToType(data['web'], 'String');
            }
            if (data.hasOwnProperty('dfs')) {
                obj['dfs'] = ApiClient.convertToType(data['dfs'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageAccountInternetEndpoints</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageAccountInternetEndpoints</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['blob'] && !(typeof data['blob'] === 'string' || data['blob'] instanceof String)) {
            throw new Error("Expected the field `blob` to be a primitive type in the JSON string but got " + data['blob']);
        }
        // ensure the json data is a string
        if (data['file'] && !(typeof data['file'] === 'string' || data['file'] instanceof String)) {
            throw new Error("Expected the field `file` to be a primitive type in the JSON string but got " + data['file']);
        }
        // ensure the json data is a string
        if (data['web'] && !(typeof data['web'] === 'string' || data['web'] instanceof String)) {
            throw new Error("Expected the field `web` to be a primitive type in the JSON string but got " + data['web']);
        }
        // ensure the json data is a string
        if (data['dfs'] && !(typeof data['dfs'] === 'string' || data['dfs'] instanceof String)) {
            throw new Error("Expected the field `dfs` to be a primitive type in the JSON string but got " + data['dfs']);
        }

        return true;
    }


}



/**
 * Gets the blob endpoint.
 * @member {String} blob
 */
StorageAccountInternetEndpoints.prototype['blob'] = undefined;

/**
 * Gets the file endpoint.
 * @member {String} file
 */
StorageAccountInternetEndpoints.prototype['file'] = undefined;

/**
 * Gets the web endpoint.
 * @member {String} web
 */
StorageAccountInternetEndpoints.prototype['web'] = undefined;

/**
 * Gets the dfs endpoint.
 * @member {String} dfs
 */
StorageAccountInternetEndpoints.prototype['dfs'] = undefined;






export default StorageAccountInternetEndpoints;
