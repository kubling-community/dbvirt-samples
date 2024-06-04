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
import BillingProfileProperties from './BillingProfileProperties';
import Resource from './Resource';

/**
 * The BillingProfile model module.
 * @module model/BillingProfile
 * @version 2020-05-01
 */
class BillingProfile {
    /**
     * Constructs a new <code>BillingProfile</code>.
     * A billing profile.
     * @alias module:model/BillingProfile
     * @implements module:model/Resource
     */
    constructor() { 
        Resource.initialize(this);
        BillingProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingProfile} obj Optional instance to populate.
     * @return {module:model/BillingProfile} The populated <code>BillingProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingProfile();
            Resource.constructFromObject(data, obj);

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = BillingProfileProperties.constructFromObject(data['properties']);
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
     * Validates the JSON data with respect to <code>BillingProfile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingProfile</code>.
     */
    static validateJSON(data) {
        // validate the optional field `properties`
        if (data['properties']) { // data not null
          BillingProfileProperties.validateJSON(data['properties']);
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
 * @member {module:model/BillingProfileProperties} properties
 */
BillingProfile.prototype['properties'] = undefined;

/**
 * Resource Id.
 * @member {String} id
 */
BillingProfile.prototype['id'] = undefined;

/**
 * Resource name.
 * @member {String} name
 */
BillingProfile.prototype['name'] = undefined;

/**
 * Resource type.
 * @member {String} type
 */
BillingProfile.prototype['type'] = undefined;


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




export default BillingProfile;

