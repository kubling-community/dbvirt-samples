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
import DeletedAccount from './DeletedAccount';

/**
 * The DeletedAccountListResult model module.
 * @module model/DeletedAccountListResult
 * @version 2023-01-01
 */
class DeletedAccountListResult {
    /**
     * Constructs a new <code>DeletedAccountListResult</code>.
     * The response from the List Deleted Accounts operation.
     * @alias module:model/DeletedAccountListResult
     */
    constructor() { 
        
        DeletedAccountListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeletedAccountListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeletedAccountListResult} obj Optional instance to populate.
     * @return {module:model/DeletedAccountListResult} The populated <code>DeletedAccountListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeletedAccountListResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [DeletedAccount]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeletedAccountListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeletedAccountListResult</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                DeletedAccount.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['nextLink'] && !(typeof data['nextLink'] === 'string' || data['nextLink'] instanceof String)) {
            throw new Error("Expected the field `nextLink` to be a primitive type in the JSON string but got " + data['nextLink']);
        }

        return true;
    }


}



/**
 * Gets the list of deleted accounts and their properties.
 * @member {Array.<module:model/DeletedAccount>} value
 */
DeletedAccountListResult.prototype['value'] = undefined;

/**
 * Request URL that can be used to query next page of deleted accounts. Returned when total number of requested deleted accounts exceed maximum page size.
 * @member {String} nextLink
 */
DeletedAccountListResult.prototype['nextLink'] = undefined;






export default DeletedAccountListResult;
