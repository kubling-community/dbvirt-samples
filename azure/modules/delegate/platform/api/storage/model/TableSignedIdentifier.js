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
import TableAccessPolicy from './TableAccessPolicy';

/**
 * The TableSignedIdentifier model module.
 * @module model/TableSignedIdentifier
 * @version 2023-01-01
 */
class TableSignedIdentifier {
    /**
     * Constructs a new <code>TableSignedIdentifier</code>.
     * Object to set Table Access Policy.
     * @alias module:model/TableSignedIdentifier
     * @param id {String} unique-64-character-value of the stored access policy.
     */
    constructor(id) { 
        
        TableSignedIdentifier.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>TableSignedIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TableSignedIdentifier} obj Optional instance to populate.
     * @return {module:model/TableSignedIdentifier} The populated <code>TableSignedIdentifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TableSignedIdentifier();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('accessPolicy')) {
                obj['accessPolicy'] = TableAccessPolicy.constructFromObject(data['accessPolicy']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TableSignedIdentifier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TableSignedIdentifier</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TableSignedIdentifier.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `accessPolicy`
        if (data['accessPolicy']) { // data not null
          TableAccessPolicy.validateJSON(data['accessPolicy']);
        }

        return true;
    }


}

TableSignedIdentifier.RequiredProperties = ["id"];

/**
 * unique-64-character-value of the stored access policy.
 * @member {String} id
 */
TableSignedIdentifier.prototype['id'] = undefined;

/**
 * @member {module:model/TableAccessPolicy} accessPolicy
 */
TableSignedIdentifier.prototype['accessPolicy'] = undefined;






export default TableSignedIdentifier;

