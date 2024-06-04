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
 * The CustomerPolicyProperties model module.
 * @module model/CustomerPolicyProperties
 * @version 2020-05-01
 */
class CustomerPolicyProperties {
    /**
     * Constructs a new <code>CustomerPolicyProperties</code>.
     * The properties of a customer&#39;s policy.
     * @alias module:model/CustomerPolicyProperties
     */
    constructor() { 
        
        CustomerPolicyProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerPolicyProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerPolicyProperties} obj Optional instance to populate.
     * @return {module:model/CustomerPolicyProperties} The populated <code>CustomerPolicyProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerPolicyProperties();

            if (data.hasOwnProperty('viewCharges')) {
                obj['viewCharges'] = ApiClient.convertToType(data['viewCharges'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomerPolicyProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomerPolicyProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['viewCharges'] && !(typeof data['viewCharges'] === 'string' || data['viewCharges'] instanceof String)) {
            throw new Error("Expected the field `viewCharges` to be a primitive type in the JSON string but got " + data['viewCharges']);
        }

        return true;
    }


}



/**
 * The policy that controls whether the users in customer's organization can view charges at pay-as-you-go prices.
 * @member {module:model/CustomerPolicyProperties.ViewChargesEnum} viewCharges
 */
CustomerPolicyProperties.prototype['viewCharges'] = undefined;





/**
 * Allowed values for the <code>viewCharges</code> property.
 * @enum {String}
 * @readonly
 */
CustomerPolicyProperties['ViewChargesEnum'] = {

    /**
     * value: "Allowed"
     * @const
     */
    "Allowed": "Allowed",

    /**
     * value: "NotAllowed"
     * @const
     */
    "NotAllowed": "NotAllowed"
};



export default CustomerPolicyProperties;

