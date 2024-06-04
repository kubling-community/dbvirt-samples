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
import TableSignedIdentifier from './TableSignedIdentifier';

/**
 * The TableProperties model module.
 * @module model/TableProperties
 * @version 2023-01-01
 */
class TableProperties {
    /**
     * Constructs a new <code>TableProperties</code>.
     * @alias module:model/TableProperties
     */
    constructor() { 
        
        TableProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TableProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TableProperties} obj Optional instance to populate.
     * @return {module:model/TableProperties} The populated <code>TableProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TableProperties();

            if (data.hasOwnProperty('tableName')) {
                obj['tableName'] = ApiClient.convertToType(data['tableName'], 'String');
            }
            if (data.hasOwnProperty('signedIdentifiers')) {
                obj['signedIdentifiers'] = ApiClient.convertToType(data['signedIdentifiers'], [TableSignedIdentifier]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TableProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TableProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tableName'] && !(typeof data['tableName'] === 'string' || data['tableName'] instanceof String)) {
            throw new Error("Expected the field `tableName` to be a primitive type in the JSON string but got " + data['tableName']);
        }
        if (data['signedIdentifiers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['signedIdentifiers'])) {
                throw new Error("Expected the field `signedIdentifiers` to be an array in the JSON data but got " + data['signedIdentifiers']);
            }
            // validate the optional field `signedIdentifiers` (array)
            for (const item of data['signedIdentifiers']) {
                TableSignedIdentifier.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Table name under the specified account
 * @member {String} tableName
 */
TableProperties.prototype['tableName'] = undefined;

/**
 * List of stored access policies specified on the table.
 * @member {Array.<module:model/TableSignedIdentifier>} signedIdentifiers
 */
TableProperties.prototype['signedIdentifiers'] = undefined;






export default TableProperties;
