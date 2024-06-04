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
 * The LeaseContainerRequest model module.
 * @module model/LeaseContainerRequest
 * @version 2023-01-01
 */
class LeaseContainerRequest {
    /**
     * Constructs a new <code>LeaseContainerRequest</code>.
     * Lease Container request schema.
     * @alias module:model/LeaseContainerRequest
     * @param action {module:model/LeaseContainerRequest.ActionEnum} Specifies the lease action. Can be one of the available actions.
     */
    constructor(action) { 
        
        LeaseContainerRequest.initialize(this, action);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action) { 
        obj['action'] = action;
    }

    /**
     * Constructs a <code>LeaseContainerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaseContainerRequest} obj Optional instance to populate.
     * @return {module:model/LeaseContainerRequest} The populated <code>LeaseContainerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaseContainerRequest();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('leaseId')) {
                obj['leaseId'] = ApiClient.convertToType(data['leaseId'], 'String');
            }
            if (data.hasOwnProperty('breakPeriod')) {
                obj['breakPeriod'] = ApiClient.convertToType(data['breakPeriod'], 'Number');
            }
            if (data.hasOwnProperty('leaseDuration')) {
                obj['leaseDuration'] = ApiClient.convertToType(data['leaseDuration'], 'Number');
            }
            if (data.hasOwnProperty('proposedLeaseId')) {
                obj['proposedLeaseId'] = ApiClient.convertToType(data['proposedLeaseId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LeaseContainerRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeaseContainerRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LeaseContainerRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // ensure the json data is a string
        if (data['leaseId'] && !(typeof data['leaseId'] === 'string' || data['leaseId'] instanceof String)) {
            throw new Error("Expected the field `leaseId` to be a primitive type in the JSON string but got " + data['leaseId']);
        }
        // ensure the json data is a string
        if (data['proposedLeaseId'] && !(typeof data['proposedLeaseId'] === 'string' || data['proposedLeaseId'] instanceof String)) {
            throw new Error("Expected the field `proposedLeaseId` to be a primitive type in the JSON string but got " + data['proposedLeaseId']);
        }

        return true;
    }


}

LeaseContainerRequest.RequiredProperties = ["action"];

/**
 * Specifies the lease action. Can be one of the available actions.
 * @member {module:model/LeaseContainerRequest.ActionEnum} action
 */
LeaseContainerRequest.prototype['action'] = undefined;

/**
 * Identifies the lease. Can be specified in any valid GUID string format.
 * @member {String} leaseId
 */
LeaseContainerRequest.prototype['leaseId'] = undefined;

/**
 * Optional. For a break action, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60.
 * @member {Number} breakPeriod
 */
LeaseContainerRequest.prototype['breakPeriod'] = undefined;

/**
 * Required for acquire. Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires.
 * @member {Number} leaseDuration
 */
LeaseContainerRequest.prototype['leaseDuration'] = undefined;

/**
 * Optional for acquire, required for change. Proposed lease ID, in a GUID string format.
 * @member {String} proposedLeaseId
 */
LeaseContainerRequest.prototype['proposedLeaseId'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
LeaseContainerRequest['ActionEnum'] = {

    /**
     * value: "Acquire"
     * @const
     */
    "Acquire": "Acquire",

    /**
     * value: "Renew"
     * @const
     */
    "Renew": "Renew",

    /**
     * value: "Change"
     * @const
     */
    "Change": "Change",

    /**
     * value: "Release"
     * @const
     */
    "Release": "Release",

    /**
     * value: "Break"
     * @const
     */
    "Break": "Break"
};



export default LeaseContainerRequest;
