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
 * The EnrollmentAccountSummaryProperties model module.
 * @module model/EnrollmentAccountSummaryProperties
 * @version 2020-05-01
 */
class EnrollmentAccountSummaryProperties {
    /**
     * Constructs a new <code>EnrollmentAccountSummaryProperties</code>.
     * The properties of the enrollment account.
     * @alias module:model/EnrollmentAccountSummaryProperties
     */
    constructor() { 
        
        EnrollmentAccountSummaryProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnrollmentAccountSummaryProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnrollmentAccountSummaryProperties} obj Optional instance to populate.
     * @return {module:model/EnrollmentAccountSummaryProperties} The populated <code>EnrollmentAccountSummaryProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnrollmentAccountSummaryProperties();

            if (data.hasOwnProperty('principalName')) {
                obj['principalName'] = ApiClient.convertToType(data['principalName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnrollmentAccountSummaryProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnrollmentAccountSummaryProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['principalName'] && !(typeof data['principalName'] === 'string' || data['principalName'] instanceof String)) {
            throw new Error("Expected the field `principalName` to be a primitive type in the JSON string but got " + data['principalName']);
        }

        return true;
    }


}



/**
 * The account owner's principal name.
 * @member {String} principalName
 */
EnrollmentAccountSummaryProperties.prototype['principalName'] = undefined;






export default EnrollmentAccountSummaryProperties;

