/**
 * ContainerRegistryManagementClient
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2019-06-01-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PrivateLinkResource from './PrivateLinkResource';

/**
 * The PrivateLinkResourceListResult model module.
 * @module model/PrivateLinkResourceListResult
 * @version 2019-06-01-preview
 */
class PrivateLinkResourceListResult {
    /**
     * Constructs a new <code>PrivateLinkResourceListResult</code>.
     * The result of a request to list private link resources for a container registry.
     * @alias module:model/PrivateLinkResourceListResult
     */
    constructor() { 
        
        PrivateLinkResourceListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PrivateLinkResourceListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrivateLinkResourceListResult} obj Optional instance to populate.
     * @return {module:model/PrivateLinkResourceListResult} The populated <code>PrivateLinkResourceListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrivateLinkResourceListResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [PrivateLinkResource]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrivateLinkResourceListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrivateLinkResourceListResult</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                PrivateLinkResource.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['nextLink'] && !(typeof data['nextLink'] === 'string' || data['nextLink'] instanceof String)) {
            throw new Error("Expected the field `nextLink` to be a primitive type in the JSON string but got " + data['nextLink']);
        }

        return true;
    }


}



/**
 * The list of private link resources. Since this list may be incomplete, the nextLink field should be used to request the next list of private link resources.
 * @member {Array.<module:model/PrivateLinkResource>} value
 */
PrivateLinkResourceListResult.prototype['value'] = undefined;

/**
 * The URI that can be used to request the next list of private link resources.
 * @member {String} nextLink
 */
PrivateLinkResourceListResult.prototype['nextLink'] = undefined;






export default PrivateLinkResourceListResult;

