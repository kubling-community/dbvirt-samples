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
 * The EnrollmentPolicies model module.
 * @module model/EnrollmentPolicies
 * @version 2020-05-01
 */
class EnrollmentPolicies {
    /**
     * Constructs a new <code>EnrollmentPolicies</code>.
     * The policies for Enterprise Agreement enrollments.
     * @alias module:model/EnrollmentPolicies
     */
    constructor() { 
        
        EnrollmentPolicies.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnrollmentPolicies</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnrollmentPolicies} obj Optional instance to populate.
     * @return {module:model/EnrollmentPolicies} The populated <code>EnrollmentPolicies</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnrollmentPolicies();

            if (data.hasOwnProperty('accountOwnerViewCharges')) {
                obj['accountOwnerViewCharges'] = ApiClient.convertToType(data['accountOwnerViewCharges'], 'Boolean');
            }
            if (data.hasOwnProperty('departmentAdminViewCharges')) {
                obj['departmentAdminViewCharges'] = ApiClient.convertToType(data['departmentAdminViewCharges'], 'Boolean');
            }
            if (data.hasOwnProperty('marketplaceEnabled')) {
                obj['marketplaceEnabled'] = ApiClient.convertToType(data['marketplaceEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('reservedInstancesEnabled')) {
                obj['reservedInstancesEnabled'] = ApiClient.convertToType(data['reservedInstancesEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnrollmentPolicies</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnrollmentPolicies</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The policy that controls whether Account Owners can view charges.
 * @member {Boolean} accountOwnerViewCharges
 */
EnrollmentPolicies.prototype['accountOwnerViewCharges'] = undefined;

/**
 * The policy that controls whether Department Administrators can view charges.
 * @member {Boolean} departmentAdminViewCharges
 */
EnrollmentPolicies.prototype['departmentAdminViewCharges'] = undefined;

/**
 * The policy that controls whether Azure marketplace purchases are allowed in the enrollment.
 * @member {Boolean} marketplaceEnabled
 */
EnrollmentPolicies.prototype['marketplaceEnabled'] = undefined;

/**
 * The policy that controls whether Azure reservation purchases are allowed in the enrollment.
 * @member {Boolean} reservedInstancesEnabled
 */
EnrollmentPolicies.prototype['reservedInstancesEnabled'] = undefined;






export default EnrollmentPolicies;

