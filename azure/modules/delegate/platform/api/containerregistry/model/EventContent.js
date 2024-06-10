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
import Actor from './Actor';
import Request from './Request';
import Source from './Source';
import Target from './Target';

/**
 * The EventContent model module.
 * @module model/EventContent
 * @version 2019-06-01-preview
 */
class EventContent {
    /**
     * Constructs a new <code>EventContent</code>.
     * The content of the event request message.
     * @alias module:model/EventContent
     */
    constructor() { 
        
        EventContent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventContent} obj Optional instance to populate.
     * @return {module:model/EventContent} The populated <code>EventContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventContent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = Target.constructFromObject(data['target']);
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = Request.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('actor')) {
                obj['actor'] = Actor.constructFromObject(data['actor']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = Source.constructFromObject(data['source']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventContent</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // validate the optional field `target`
        if (data['target']) { // data not null
          Target.validateJSON(data['target']);
        }
        // validate the optional field `request`
        if (data['request']) { // data not null
          Request.validateJSON(data['request']);
        }
        // validate the optional field `actor`
        if (data['actor']) { // data not null
          Actor.validateJSON(data['actor']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          Source.validateJSON(data['source']);
        }

        return true;
    }


}



/**
 * The event ID.
 * @member {String} id
 */
EventContent.prototype['id'] = undefined;

/**
 * The time at which the event occurred.
 * @member {Date} timestamp
 */
EventContent.prototype['timestamp'] = undefined;

/**
 * The action that encompasses the provided event.
 * @member {String} action
 */
EventContent.prototype['action'] = undefined;

/**
 * @member {module:model/Target} target
 */
EventContent.prototype['target'] = undefined;

/**
 * @member {module:model/Request} request
 */
EventContent.prototype['request'] = undefined;

/**
 * @member {module:model/Actor} actor
 */
EventContent.prototype['actor'] = undefined;

/**
 * @member {module:model/Source} source
 */
EventContent.prototype['source'] = undefined;






export default EventContent;

