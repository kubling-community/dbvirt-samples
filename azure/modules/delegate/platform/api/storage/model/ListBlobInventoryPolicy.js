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
import BlobInventoryPolicy from './BlobInventoryPolicy';

/**
 * The ListBlobInventoryPolicy model module.
 * @module model/ListBlobInventoryPolicy
 * @version 2023-01-01
 */
class ListBlobInventoryPolicy {
    /**
     * Constructs a new <code>ListBlobInventoryPolicy</code>.
     * List of blob inventory policies returned.
     * @alias module:model/ListBlobInventoryPolicy
     */
    constructor() { 
        
        ListBlobInventoryPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListBlobInventoryPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBlobInventoryPolicy} obj Optional instance to populate.
     * @return {module:model/ListBlobInventoryPolicy} The populated <code>ListBlobInventoryPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListBlobInventoryPolicy();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [BlobInventoryPolicy]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListBlobInventoryPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListBlobInventoryPolicy</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                BlobInventoryPolicy.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * List of blob inventory policies.
 * @member {Array.<module:model/BlobInventoryPolicy>} value
 */
ListBlobInventoryPolicy.prototype['value'] = undefined;






export default ListBlobInventoryPolicy;

