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

/**
 * The ReservationSkuProperty model module.
 * @module model/ReservationSkuProperty
 * @version 2020-05-01
 */
class ReservationSkuProperty {
    /**
     * Constructs a new <code>ReservationSkuProperty</code>.
     * The property of reservation sku object.
     * @alias module:model/ReservationSkuProperty
     */
    constructor() { 
        
        ReservationSkuProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReservationSkuProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservationSkuProperty} obj Optional instance to populate.
     * @return {module:model/ReservationSkuProperty} The populated <code>ReservationSkuProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReservationSkuProperty();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReservationSkuProperty</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReservationSkuProperty</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The name of the reservation sku.
 * @member {String} name
 */
ReservationSkuProperty.prototype['name'] = undefined;






export default ReservationSkuProperty;

