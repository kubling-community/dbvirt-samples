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
import PrivateEndpointServiceConnectionStatus from './PrivateEndpointServiceConnectionStatus';

/**
 * The PrivateLinkServiceConnectionState model module.
 * @module model/PrivateLinkServiceConnectionState
 * @version 2023-01-01
 */
class PrivateLinkServiceConnectionState {
    /**
     * Constructs a new <code>PrivateLinkServiceConnectionState</code>.
     * A collection of information about the state of the connection between service consumer and provider.
     * @alias module:model/PrivateLinkServiceConnectionState
     */
    constructor() { 
        
        PrivateLinkServiceConnectionState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PrivateLinkServiceConnectionState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrivateLinkServiceConnectionState} obj Optional instance to populate.
     * @return {module:model/PrivateLinkServiceConnectionState} The populated <code>PrivateLinkServiceConnectionState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrivateLinkServiceConnectionState();

            if (data.hasOwnProperty('status')) {
                obj['status'] = PrivateEndpointServiceConnectionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('actionRequired')) {
                obj['actionRequired'] = ApiClient.convertToType(data['actionRequired'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrivateLinkServiceConnectionState</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrivateLinkServiceConnectionState</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['actionRequired'] && !(typeof data['actionRequired'] === 'string' || data['actionRequired'] instanceof String)) {
            throw new Error("Expected the field `actionRequired` to be a primitive type in the JSON string but got " + data['actionRequired']);
        }

        return true;
    }


}



/**
 * @member {module:model/PrivateEndpointServiceConnectionStatus} status
 */
PrivateLinkServiceConnectionState.prototype['status'] = undefined;

/**
 * The reason for approval/rejection of the connection.
 * @member {String} description
 */
PrivateLinkServiceConnectionState.prototype['description'] = undefined;

/**
 * A message indicating if changes on the service provider require any updates on the consumer.
 * @member {String} actionRequired
 */
PrivateLinkServiceConnectionState.prototype['actionRequired'] = undefined;






export default PrivateLinkServiceConnectionState;

