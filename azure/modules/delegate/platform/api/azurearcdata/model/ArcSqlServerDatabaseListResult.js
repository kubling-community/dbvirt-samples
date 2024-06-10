/**
 * AzureArcDataManagementClient
 * The AzureArcData management API provides a RESTful set of web APIs to manage Azure Data Services on Azure Arc Resources.
 *
 * The version of the OpenAPI document: 2023-01-15-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SqlServerDatabaseResource from './SqlServerDatabaseResource';

/**
 * The ArcSqlServerDatabaseListResult model module.
 * @module model/ArcSqlServerDatabaseListResult
 * @version 2023-01-15-preview
 */
class ArcSqlServerDatabaseListResult {
    /**
     * Constructs a new <code>ArcSqlServerDatabaseListResult</code>.
     * A list of Arc Sql Server database.
     * @alias module:model/ArcSqlServerDatabaseListResult
     */
    constructor() { 
        
        ArcSqlServerDatabaseListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArcSqlServerDatabaseListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcSqlServerDatabaseListResult} obj Optional instance to populate.
     * @return {module:model/ArcSqlServerDatabaseListResult} The populated <code>ArcSqlServerDatabaseListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcSqlServerDatabaseListResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [SqlServerDatabaseResource]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArcSqlServerDatabaseListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArcSqlServerDatabaseListResult</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                SqlServerDatabaseResource.validateJSON(item);
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
 * Array of  Arc Sql Server database.
 * @member {Array.<module:model/SqlServerDatabaseResource>} value
 */
ArcSqlServerDatabaseListResult.prototype['value'] = undefined;

/**
 * Link to retrieve next page of results.
 * @member {String} nextLink
 */
ArcSqlServerDatabaseListResult.prototype['nextLink'] = undefined;






export default ArcSqlServerDatabaseListResult;

