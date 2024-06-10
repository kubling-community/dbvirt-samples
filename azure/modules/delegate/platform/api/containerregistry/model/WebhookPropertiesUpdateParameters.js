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

/**
 * The WebhookPropertiesUpdateParameters model module.
 * @module model/WebhookPropertiesUpdateParameters
 * @version 2019-06-01-preview
 */
class WebhookPropertiesUpdateParameters {
    /**
     * Constructs a new <code>WebhookPropertiesUpdateParameters</code>.
     * The parameters for updating the properties of a webhook.
     * @alias module:model/WebhookPropertiesUpdateParameters
     */
    constructor() { 
        
        WebhookPropertiesUpdateParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookPropertiesUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookPropertiesUpdateParameters} obj Optional instance to populate.
     * @return {module:model/WebhookPropertiesUpdateParameters} The populated <code>WebhookPropertiesUpdateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookPropertiesUpdateParameters();

            if (data.hasOwnProperty('serviceUri')) {
                obj['serviceUri'] = ApiClient.convertToType(data['serviceUri'], 'String');
            }
            if (data.hasOwnProperty('customHeaders')) {
                obj['customHeaders'] = ApiClient.convertToType(data['customHeaders'], {'String': 'String'});
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookPropertiesUpdateParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookPropertiesUpdateParameters</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['serviceUri'] && !(typeof data['serviceUri'] === 'string' || data['serviceUri'] instanceof String)) {
            throw new Error("Expected the field `serviceUri` to be a primitive type in the JSON string but got " + data['serviceUri']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['scope'] && !(typeof data['scope'] === 'string' || data['scope'] instanceof String)) {
            throw new Error("Expected the field `scope` to be a primitive type in the JSON string but got " + data['scope']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['actions'])) {
            throw new Error("Expected the field `actions` to be an array in the JSON data but got " + data['actions']);
        }

        return true;
    }


}



/**
 * The service URI for the webhook to post notifications.
 * @member {String} serviceUri
 */
WebhookPropertiesUpdateParameters.prototype['serviceUri'] = undefined;

/**
 * Custom headers that will be added to the webhook notifications.
 * @member {Object.<String, String>} customHeaders
 */
WebhookPropertiesUpdateParameters.prototype['customHeaders'] = undefined;

/**
 * The status of the webhook at the time the operation was called.
 * @member {module:model/WebhookPropertiesUpdateParameters.StatusEnum} status
 */
WebhookPropertiesUpdateParameters.prototype['status'] = undefined;

/**
 * The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
 * @member {String} scope
 */
WebhookPropertiesUpdateParameters.prototype['scope'] = undefined;

/**
 * The list of actions that trigger the webhook to post notifications.
 * @member {Array.<module:model/WebhookPropertiesUpdateParameters.ActionsEnum>} actions
 */
WebhookPropertiesUpdateParameters.prototype['actions'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
WebhookPropertiesUpdateParameters['StatusEnum'] = {

    /**
     * value: "enabled"
     * @const
     */
    "enabled": "enabled",

    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"
};


/**
 * Allowed values for the <code>actions</code> property.
 * @enum {String}
 * @readonly
 */
WebhookPropertiesUpdateParameters['ActionsEnum'] = {

    /**
     * value: "push"
     * @const
     */
    "push": "push",

    /**
     * value: "delete"
     * @const
     */
    "delete": "delete",

    /**
     * value: "quarantine"
     * @const
     */
    "quarantine": "quarantine",

    /**
     * value: "chart_push"
     * @const
     */
    "chart_push": "chart_push",

    /**
     * value: "chart_delete"
     * @const
     */
    "chart_delete": "chart_delete"
};



export default WebhookPropertiesUpdateParameters;

