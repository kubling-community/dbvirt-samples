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
import EnrollmentAccountProperties from './EnrollmentAccountProperties';
import Resource from './Resource';

/**
 * The EnrollmentAccount model module.
 * @module model/EnrollmentAccount
 * @version 2020-05-01
 */
class EnrollmentAccount {
    /**
     * Constructs a new <code>EnrollmentAccount</code>.
     * An enrollment account.
     * @alias module:model/EnrollmentAccount
     * @implements module:model/Resource
     */
    constructor() { 
        Resource.initialize(this);
        EnrollmentAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnrollmentAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnrollmentAccount} obj Optional instance to populate.
     * @return {module:model/EnrollmentAccount} The populated <code>EnrollmentAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnrollmentAccount();
            Resource.constructFromObject(data, obj);

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = EnrollmentAccountProperties.constructFromObject(data['properties']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnrollmentAccount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnrollmentAccount</code>.
     */
    static validateJSON(data) {
        // validate the optional field `properties`
        if (data['properties']) { // data not null
          EnrollmentAccountProperties.validateJSON(data['properties']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {module:model/EnrollmentAccountProperties} properties
 */
EnrollmentAccount.prototype['properties'] = undefined;

/**
 * Resource Id.
 * @member {String} id
 */
EnrollmentAccount.prototype['id'] = undefined;

/**
 * Resource name.
 * @member {String} name
 */
EnrollmentAccount.prototype['name'] = undefined;

/**
 * Resource type.
 * @member {String} type
 */
EnrollmentAccount.prototype['type'] = undefined;


// Implement Resource interface:
/**
 * Resource Id.
 * @member {String} id
 */
Resource.prototype['id'] = undefined;
/**
 * Resource name.
 * @member {String} name
 */
Resource.prototype['name'] = undefined;
/**
 * Resource type.
 * @member {String} type
 */
Resource.prototype['type'] = undefined;




export default EnrollmentAccount;

