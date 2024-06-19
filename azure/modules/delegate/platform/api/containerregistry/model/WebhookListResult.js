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
import Webhook from './Webhook';

/**
 * The WebhookListResult model module.
 * @module model/WebhookListResult
 * @version 2019-06-01-preview
 */
class WebhookListResult {
    /**
     * Constructs a new <code>WebhookListResult</code>.
     * The result of a request to list webhooks for a container registry.
     * @alias module:model/WebhookListResult
     */
    constructor() { 
        
        WebhookListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookListResult} obj Optional instance to populate.
     * @return {module:model/WebhookListResult} The populated <code>WebhookListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookListResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [Webhook]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookListResult</code>.
     */
    static validateJSON(data) {
        if (data['value']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['value'])) {
                throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
            }
            // validate the optional field `value` (array)
            for (const item of data['value']) {
                Webhook.validateJSON(item);
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
 * The list of webhooks. Since this list may be incomplete, the nextLink field should be used to request the next list of webhooks.
 * @member {Array.<module:model/Webhook>} value
 */
WebhookListResult.prototype['value'] = undefined;

/**
 * The URI that can be used to request the next list of webhooks.
 * @member {String} nextLink
 */
WebhookListResult.prototype['nextLink'] = undefined;






export default WebhookListResult;
