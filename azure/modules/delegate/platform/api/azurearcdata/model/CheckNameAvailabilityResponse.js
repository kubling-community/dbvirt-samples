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

/**
 * The CheckNameAvailabilityResponse model module.
 * @module model/CheckNameAvailabilityResponse
 * @version 2023-01-15-preview
 */
class CheckNameAvailabilityResponse {
    /**
     * Constructs a new <code>CheckNameAvailabilityResponse</code>.
     * The check availability result.
     * @alias module:model/CheckNameAvailabilityResponse
     */
    constructor() { 
        
        CheckNameAvailabilityResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckNameAvailabilityResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckNameAvailabilityResponse} obj Optional instance to populate.
     * @return {module:model/CheckNameAvailabilityResponse} The populated <code>CheckNameAvailabilityResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckNameAvailabilityResponse();

            if (data.hasOwnProperty('nameAvailable')) {
                obj['nameAvailable'] = ApiClient.convertToType(data['nameAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckNameAvailabilityResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckNameAvailabilityResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * Indicates if the resource name is available.
 * @member {Boolean} nameAvailable
 */
CheckNameAvailabilityResponse.prototype['nameAvailable'] = undefined;

/**
 * The reason why the given name is not available.
 * @member {module:model/CheckNameAvailabilityResponse.ReasonEnum} reason
 */
CheckNameAvailabilityResponse.prototype['reason'] = undefined;

/**
 * Detailed reason why the given name is available.
 * @member {String} message
 */
CheckNameAvailabilityResponse.prototype['message'] = undefined;





/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
CheckNameAvailabilityResponse['ReasonEnum'] = {

    /**
     * value: "Invalid"
     * @const
     */
    "Invalid": "Invalid",

    /**
     * value: "AlreadyExists"
     * @const
     */
    "AlreadyExists": "AlreadyExists"
};



export default CheckNameAvailabilityResponse;

