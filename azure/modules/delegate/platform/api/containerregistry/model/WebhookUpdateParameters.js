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
import WebhookPropertiesUpdateParameters from './WebhookPropertiesUpdateParameters';

/**
 * The WebhookUpdateParameters model module.
 * @module model/WebhookUpdateParameters
 * @version 2019-06-01-preview
 */
class WebhookUpdateParameters {
    /**
     * Constructs a new <code>WebhookUpdateParameters</code>.
     * The parameters for updating a webhook.
     * @alias module:model/WebhookUpdateParameters
     */
    constructor() { 
        
        WebhookUpdateParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookUpdateParameters} obj Optional instance to populate.
     * @return {module:model/WebhookUpdateParameters} The populated <code>WebhookUpdateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookUpdateParameters();

            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = WebhookPropertiesUpdateParameters.constructFromObject(data['properties']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookUpdateParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookUpdateParameters</code>.
     */
    static validateJSON(data) {
        // validate the optional field `properties`
        if (data['properties']) { // data not null
          WebhookPropertiesUpdateParameters.validateJSON(data['properties']);
        }

        return true;
    }


}



/**
 * The tags for the webhook.
 * @member {Object.<String, String>} tags
 */
WebhookUpdateParameters.prototype['tags'] = undefined;

/**
 * @member {module:model/WebhookPropertiesUpdateParameters} properties
 */
WebhookUpdateParameters.prototype['properties'] = undefined;






export default WebhookUpdateParameters;

