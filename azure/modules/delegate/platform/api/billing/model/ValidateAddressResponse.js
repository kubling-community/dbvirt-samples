/**
 * BillingManagementClient
 * Billing client provides access to billing resources for Azure subscriptions.
 *
 * The version of the OpenAPI document: 2020-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../../BaseApiClient";
import AddressDetails from './AddressDetails';
import AddressValidationStatus from './AddressValidationStatus';

/**
 * The ValidateAddressResponse model module.
 * @module model/ValidateAddressResponse
 * @version 2020-05-01
 */
class ValidateAddressResponse {
    /**
     * Constructs a new <code>ValidateAddressResponse</code>.
     * Result of the address validation
     * @alias module:model/ValidateAddressResponse
     */
    constructor() { 
        
        ValidateAddressResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidateAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateAddressResponse} obj Optional instance to populate.
     * @return {module:model/ValidateAddressResponse} The populated <code>ValidateAddressResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidateAddressResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = AddressValidationStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('suggestedAddresses')) {
                obj['suggestedAddresses'] = ApiClient.convertToType(data['suggestedAddresses'], [AddressDetails]);
            }
            if (data.hasOwnProperty('validationMessage')) {
                obj['validationMessage'] = ApiClient.convertToType(data['validationMessage'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidateAddressResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidateAddressResponse</code>.
     */
    static validateJSON(data) {
        if (data['suggestedAddresses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['suggestedAddresses'])) {
                throw new Error("Expected the field `suggestedAddresses` to be an array in the JSON data but got " + data['suggestedAddresses']);
            }
            // validate the optional field `suggestedAddresses` (array)
            for (const item of data['suggestedAddresses']) {
                AddressDetails.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['validationMessage'] && !(typeof data['validationMessage'] === 'string' || data['validationMessage'] instanceof String)) {
            throw new Error("Expected the field `validationMessage` to be a primitive type in the JSON string but got " + data['validationMessage']);
        }

        return true;
    }


}



/**
 * @member {module:model/AddressValidationStatus} status
 */
ValidateAddressResponse.prototype['status'] = undefined;

/**
 * The list of suggested addresses.
 * @member {Array.<module:model/AddressDetails>} suggestedAddresses
 */
ValidateAddressResponse.prototype['suggestedAddresses'] = undefined;

/**
 * Validation error message.
 * @member {String} validationMessage
 */
ValidateAddressResponse.prototype['validationMessage'] = undefined;






export default ValidateAddressResponse;

