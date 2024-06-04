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
import PrivateEndpointConnection from './PrivateEndpointConnection';

/**
 * The PrivateEndpointConnectionListResult model module.
 * @module model/PrivateEndpointConnectionListResult
 * @version 2023-01-01
 */
class PrivateEndpointConnectionListResult {
    /**
     * Constructs a new <code>PrivateEndpointConnectionListResult</code>.
     * List of private endpoint connection associated with the specified storage account
     * @alias module:model/PrivateEndpointConnectionListResult
     */
    constructor() { 
        
        PrivateEndpointConnectionListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PrivateEndpointConnectionListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrivateEndpointConnectionListResult} obj Optional instance to populate.
     * @return {module:model/PrivateEndpointConnectionListResult} The populated <code>PrivateEndpointConnectionListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrivateEndpointConnectionListResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [PrivateEndpointConnection]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrivateEndpointConnectionListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrivateEndpointConnectionListResult</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                PrivateEndpointConnection.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Array of private endpoint connections
 * @member {Array.<module:model/PrivateEndpointConnection>} value
 */
PrivateEndpointConnectionListResult.prototype['value'] = undefined;






export default PrivateEndpointConnectionListResult;
