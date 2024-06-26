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
import SourceProperties from './SourceProperties';

/**
 * The SourceTrigger model module.
 * @module model/SourceTrigger
 * @version 2019-06-01-preview
 */
class SourceTrigger {
    /**
     * Constructs a new <code>SourceTrigger</code>.
     * The properties of a source based trigger.
     * @alias module:model/SourceTrigger
     * @param sourceRepository {module:model/SourceProperties} 
     * @param sourceTriggerEvents {Array.<module:model/SourceTrigger.SourceTriggerEventsEnum>} The source event corresponding to the trigger.
     * @param name {String} The name of the trigger.
     */
    constructor(sourceRepository, sourceTriggerEvents, name) { 
        
        SourceTrigger.initialize(this, sourceRepository, sourceTriggerEvents, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceRepository, sourceTriggerEvents, name) { 
        obj['sourceRepository'] = sourceRepository;
        obj['sourceTriggerEvents'] = sourceTriggerEvents;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>SourceTrigger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceTrigger} obj Optional instance to populate.
     * @return {module:model/SourceTrigger} The populated <code>SourceTrigger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceTrigger();

            if (data.hasOwnProperty('sourceRepository')) {
                obj['sourceRepository'] = SourceProperties.constructFromObject(data['sourceRepository']);
            }
            if (data.hasOwnProperty('sourceTriggerEvents')) {
                obj['sourceTriggerEvents'] = ApiClient.convertToType(data['sourceTriggerEvents'], ['String']);
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
     * Validates the JSON data with respect to <code>SourceTrigger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SourceTrigger</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SourceTrigger.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `sourceRepository`
        if (data['sourceRepository']) { // data not null
          SourceProperties.validateJSON(data['sourceRepository']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sourceTriggerEvents'])) {
            throw new Error("Expected the field `sourceTriggerEvents` to be an array in the JSON data but got " + data['sourceTriggerEvents']);
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

SourceTrigger.RequiredProperties = ["sourceRepository", "sourceTriggerEvents", "name"];

/**
 * @member {module:model/SourceProperties} sourceRepository
 */
SourceTrigger.prototype['sourceRepository'] = undefined;

/**
 * The source event corresponding to the trigger.
 * @member {Array.<module:model/SourceTrigger.SourceTriggerEventsEnum>} sourceTriggerEvents
 */
SourceTrigger.prototype['sourceTriggerEvents'] = undefined;

/**
 * The current status of trigger.
 * @member {module:model/SourceTrigger.StatusEnum} status
 * @default 'Enabled'
 */
SourceTrigger.prototype['status'] = 'Enabled';

/**
 * The name of the trigger.
 * @member {String} name
 */
SourceTrigger.prototype['name'] = undefined;





/**
 * Allowed values for the <code>sourceTriggerEvents</code> property.
 * @enum {String}
 * @readonly
 */
SourceTrigger['SourceTriggerEventsEnum'] = {

    /**
     * value: "commit"
     * @const
     */
    "commit": "commit",

    /**
     * value: "pullrequest"
     * @const
     */
    "pullrequest": "pullrequest"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SourceTrigger['StatusEnum'] = {

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



export default SourceTrigger;

