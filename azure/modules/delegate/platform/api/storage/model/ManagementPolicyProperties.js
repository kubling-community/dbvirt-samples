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
import ManagementPolicySchema from './ManagementPolicySchema';

/**
 * The ManagementPolicyProperties model module.
 * @module model/ManagementPolicyProperties
 * @version 2023-01-01
 */
class ManagementPolicyProperties {
    /**
     * Constructs a new <code>ManagementPolicyProperties</code>.
     * The Storage Account ManagementPolicy properties.
     * @alias module:model/ManagementPolicyProperties
     * @param policy {module:model/ManagementPolicySchema} 
     */
    constructor(policy) { 
        
        ManagementPolicyProperties.initialize(this, policy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, policy) { 
        obj['policy'] = policy;
    }

    /**
     * Constructs a <code>ManagementPolicyProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ManagementPolicyProperties} obj Optional instance to populate.
     * @return {module:model/ManagementPolicyProperties} The populated <code>ManagementPolicyProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagementPolicyProperties();

            if (data.hasOwnProperty('lastModifiedTime')) {
                obj['lastModifiedTime'] = ApiClient.convertToType(data['lastModifiedTime'], 'Date');
            }
            if (data.hasOwnProperty('policy')) {
                obj['policy'] = ManagementPolicySchema.constructFromObject(data['policy']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ManagementPolicyProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ManagementPolicyProperties</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ManagementPolicyProperties.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `policy`
        if (data['policy']) { // data not null
          ManagementPolicySchema.validateJSON(data['policy']);
        }

        return true;
    }


}

ManagementPolicyProperties.RequiredProperties = ["policy"];

/**
 * Returns the date and time the ManagementPolicies was last modified.
 * @member {Date} lastModifiedTime
 */
ManagementPolicyProperties.prototype['lastModifiedTime'] = undefined;

/**
 * @member {module:model/ManagementPolicySchema} policy
 */
ManagementPolicyProperties.prototype['policy'] = undefined;






export default ManagementPolicyProperties;

