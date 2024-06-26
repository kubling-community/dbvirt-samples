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
 * The LeaseContainerResponse model module.
 * @module model/LeaseContainerResponse
 * @version 2023-01-01
 */
class LeaseContainerResponse {
    /**
     * Constructs a new <code>LeaseContainerResponse</code>.
     * Lease Container response schema.
     * @alias module:model/LeaseContainerResponse
     */
    constructor() { 
        
        LeaseContainerResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeaseContainerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaseContainerResponse} obj Optional instance to populate.
     * @return {module:model/LeaseContainerResponse} The populated <code>LeaseContainerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaseContainerResponse();

            if (data.hasOwnProperty('leaseId')) {
                obj['leaseId'] = ApiClient.convertToType(data['leaseId'], 'String');
            }
            if (data.hasOwnProperty('leaseTimeSeconds')) {
                obj['leaseTimeSeconds'] = ApiClient.convertToType(data['leaseTimeSeconds'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LeaseContainerResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeaseContainerResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['leaseId'] && !(typeof data['leaseId'] === 'string' || data['leaseId'] instanceof String)) {
            throw new Error("Expected the field `leaseId` to be a primitive type in the JSON string but got " + data['leaseId']);
        }
        // ensure the json data is a string
        if (data['leaseTimeSeconds'] && !(typeof data['leaseTimeSeconds'] === 'string' || data['leaseTimeSeconds'] instanceof String)) {
            throw new Error("Expected the field `leaseTimeSeconds` to be a primitive type in the JSON string but got " + data['leaseTimeSeconds']);
        }

        return true;
    }


}



/**
 * Returned unique lease ID that must be included with any request to delete the container, or to renew, change, or release the lease.
 * @member {String} leaseId
 */
LeaseContainerResponse.prototype['leaseId'] = undefined;

/**
 * Approximate time remaining in the lease period, in seconds.
 * @member {String} leaseTimeSeconds
 */
LeaseContainerResponse.prototype['leaseTimeSeconds'] = undefined;






export default LeaseContainerResponse;

