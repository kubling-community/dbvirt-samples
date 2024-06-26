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
 * The Source model module.
 * @module model/Source
 * @version 2019-06-01-preview
 */
class Source {
    /**
     * Constructs a new <code>Source</code>.
     * The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
     * @alias module:model/Source
     */
    constructor() { 
        
        Source.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Source} obj Optional instance to populate.
     * @return {module:model/Source} The populated <code>Source</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Source();

            if (data.hasOwnProperty('addr')) {
                obj['addr'] = ApiClient.convertToType(data['addr'], 'String');
            }
            if (data.hasOwnProperty('instanceID')) {
                obj['instanceID'] = ApiClient.convertToType(data['instanceID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Source</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Source</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['addr'] && !(typeof data['addr'] === 'string' || data['addr'] instanceof String)) {
            throw new Error("Expected the field `addr` to be a primitive type in the JSON string but got " + data['addr']);
        }
        // ensure the json data is a string
        if (data['instanceID'] && !(typeof data['instanceID'] === 'string' || data['instanceID'] instanceof String)) {
            throw new Error("Expected the field `instanceID` to be a primitive type in the JSON string but got " + data['instanceID']);
        }

        return true;
    }


}



/**
 * The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port.
 * @member {String} addr
 */
Source.prototype['addr'] = undefined;

/**
 * The running instance of an application. Changes after each restart.
 * @member {String} instanceID
 */
Source.prototype['instanceID'] = undefined;






export default Source;

