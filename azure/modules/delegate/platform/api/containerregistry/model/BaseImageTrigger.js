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
 * The BaseImageTrigger model module.
 * @module model/BaseImageTrigger
 * @version 2019-06-01-preview
 */
class BaseImageTrigger {
    /**
     * Constructs a new <code>BaseImageTrigger</code>.
     * The trigger based on base image dependency.
     * @alias module:model/BaseImageTrigger
     * @param baseImageTriggerType {module:model/BaseImageTrigger.BaseImageTriggerTypeEnum} The type of the auto trigger for base image dependency updates.
     * @param name {String} The name of the trigger.
     */
    constructor(baseImageTriggerType, name) { 
        
        BaseImageTrigger.initialize(this, baseImageTriggerType, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, baseImageTriggerType, name) { 
        obj['baseImageTriggerType'] = baseImageTriggerType;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>BaseImageTrigger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseImageTrigger} obj Optional instance to populate.
     * @return {module:model/BaseImageTrigger} The populated <code>BaseImageTrigger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseImageTrigger();

            if (data.hasOwnProperty('baseImageTriggerType')) {
                obj['baseImageTriggerType'] = ApiClient.convertToType(data['baseImageTriggerType'], 'String');
            }
            if (data.hasOwnProperty('updateTriggerEndpoint')) {
                obj['updateTriggerEndpoint'] = ApiClient.convertToType(data['updateTriggerEndpoint'], 'String');
            }
            if (data.hasOwnProperty('updateTriggerPayloadType')) {
                obj['updateTriggerPayloadType'] = ApiClient.convertToType(data['updateTriggerPayloadType'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseImageTrigger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseImageTrigger</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BaseImageTrigger.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['baseImageTriggerType'] && !(typeof data['baseImageTriggerType'] === 'string' || data['baseImageTriggerType'] instanceof String)) {
            throw new Error("Expected the field `baseImageTriggerType` to be a primitive type in the JSON string but got " + data['baseImageTriggerType']);
        }
        // ensure the json data is a string
        if (data['updateTriggerEndpoint'] && !(typeof data['updateTriggerEndpoint'] === 'string' || data['updateTriggerEndpoint'] instanceof String)) {
            throw new Error("Expected the field `updateTriggerEndpoint` to be a primitive type in the JSON string but got " + data['updateTriggerEndpoint']);
        }
        // ensure the json data is a string
        if (data['updateTriggerPayloadType'] && !(typeof data['updateTriggerPayloadType'] === 'string' || data['updateTriggerPayloadType'] instanceof String)) {
            throw new Error("Expected the field `updateTriggerPayloadType` to be a primitive type in the JSON string but got " + data['updateTriggerPayloadType']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

BaseImageTrigger.RequiredProperties = ["baseImageTriggerType", "name"];

/**
 * The type of the auto trigger for base image dependency updates.
 * @member {module:model/BaseImageTrigger.BaseImageTriggerTypeEnum} baseImageTriggerType
 */
BaseImageTrigger.prototype['baseImageTriggerType'] = undefined;

/**
 * The endpoint URL for receiving update triggers.
 * @member {String} updateTriggerEndpoint
 */
BaseImageTrigger.prototype['updateTriggerEndpoint'] = undefined;

/**
 * Type of Payload body for Base image update triggers.
 * @member {module:model/BaseImageTrigger.UpdateTriggerPayloadTypeEnum} updateTriggerPayloadType
 */
BaseImageTrigger.prototype['updateTriggerPayloadType'] = undefined;

/**
 * The current status of trigger.
 * @member {module:model/BaseImageTrigger.StatusEnum} status
 * @default 'Enabled'
 */
BaseImageTrigger.prototype['status'] = 'Enabled';

/**
 * The name of the trigger.
 * @member {String} name
 */
BaseImageTrigger.prototype['name'] = undefined;





/**
 * Allowed values for the <code>baseImageTriggerType</code> property.
 * @enum {String}
 * @readonly
 */
BaseImageTrigger['BaseImageTriggerTypeEnum'] = {

    /**
     * value: "All"
     * @const
     */
    "All": "All",

    /**
     * value: "Runtime"
     * @const
     */
    "Runtime": "Runtime"
};


/**
 * Allowed values for the <code>updateTriggerPayloadType</code> property.
 * @enum {String}
 * @readonly
 */
BaseImageTrigger['UpdateTriggerPayloadTypeEnum'] = {

    /**
     * value: "Default"
     * @const
     */
    "Default": "Default",

    /**
     * value: "Token"
     * @const
     */
    "Token": "Token"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
BaseImageTrigger['StatusEnum'] = {

    /**
     * value: "Disabled"
     * @const
     */
    "Disabled": "Disabled",

    /**
     * value: "Enabled"
     * @const
     */
    "Enabled": "Enabled"
};



export default BaseImageTrigger;

