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
import Amount from './Amount';

/**
 * The AvailableBalanceProperties model module.
 * @module model/AvailableBalanceProperties
 * @version 2020-05-01
 */
class AvailableBalanceProperties {
    /**
     * Constructs a new <code>AvailableBalanceProperties</code>.
     * The properties of available balance.
     * @alias module:model/AvailableBalanceProperties
     */
    constructor() { 
        
        AvailableBalanceProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AvailableBalanceProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableBalanceProperties} obj Optional instance to populate.
     * @return {module:model/AvailableBalanceProperties} The populated <code>AvailableBalanceProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AvailableBalanceProperties();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = Amount.constructFromObject(data['amount']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AvailableBalanceProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AvailableBalanceProperties</code>.
     */
    static validateJSON(data) {
        // validate the optional field `amount`
        if (data['amount']) { // data not null
          Amount.validateJSON(data['amount']);
        }

        return true;
    }


}



/**
 * @member {module:model/Amount} amount
 */
AvailableBalanceProperties.prototype['amount'] = undefined;






export default AvailableBalanceProperties;

