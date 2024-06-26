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
 * The CheckNameAvailabilityResult model module.
 * @module model/CheckNameAvailabilityResult
 * @version 2023-01-01
 */
class CheckNameAvailabilityResult {
    /**
     * Constructs a new <code>CheckNameAvailabilityResult</code>.
     * The CheckNameAvailability operation response.
     * @alias module:model/CheckNameAvailabilityResult
     */
    constructor() { 
        
        CheckNameAvailabilityResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckNameAvailabilityResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckNameAvailabilityResult} obj Optional instance to populate.
     * @return {module:model/CheckNameAvailabilityResult} The populated <code>CheckNameAvailabilityResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckNameAvailabilityResult();

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
     * Validates the JSON data with respect to <code>CheckNameAvailabilityResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckNameAvailabilityResult</code>.
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
 * Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used.
 * @member {Boolean} nameAvailable
 */
CheckNameAvailabilityResult.prototype['nameAvailable'] = undefined;

/**
 * Gets the reason that a storage account name could not be used. The Reason element is only returned if NameAvailable is false.
 * @member {module:model/CheckNameAvailabilityResult.ReasonEnum} reason
 */
CheckNameAvailabilityResult.prototype['reason'] = undefined;

/**
 * Gets an error message explaining the Reason value in more detail.
 * @member {String} message
 */
CheckNameAvailabilityResult.prototype['message'] = undefined;





/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
CheckNameAvailabilityResult['ReasonEnum'] = {

    /**
     * value: "AccountNameInvalid"
     * @const
     */
    "AccountNameInvalid": "AccountNameInvalid",

    /**
     * value: "AlreadyExists"
     * @const
     */
    "AlreadyExists": "AlreadyExists"
};



export default CheckNameAvailabilityResult;

