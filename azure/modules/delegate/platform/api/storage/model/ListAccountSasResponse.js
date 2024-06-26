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
 * The ListAccountSasResponse model module.
 * @module model/ListAccountSasResponse
 * @version 2023-01-01
 */
class ListAccountSasResponse {
    /**
     * Constructs a new <code>ListAccountSasResponse</code>.
     * The List SAS credentials operation response.
     * @alias module:model/ListAccountSasResponse
     */
    constructor() { 
        
        ListAccountSasResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAccountSasResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAccountSasResponse} obj Optional instance to populate.
     * @return {module:model/ListAccountSasResponse} The populated <code>ListAccountSasResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAccountSasResponse();

            if (data.hasOwnProperty('accountSasToken')) {
                obj['accountSasToken'] = ApiClient.convertToType(data['accountSasToken'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListAccountSasResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAccountSasResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['accountSasToken'] && !(typeof data['accountSasToken'] === 'string' || data['accountSasToken'] instanceof String)) {
            throw new Error("Expected the field `accountSasToken` to be a primitive type in the JSON string but got " + data['accountSasToken']);
        }

        return true;
    }


}



/**
 * List SAS credentials of storage account.
 * @member {String} accountSasToken
 */
ListAccountSasResponse.prototype['accountSasToken'] = undefined;






export default ListAccountSasResponse;

