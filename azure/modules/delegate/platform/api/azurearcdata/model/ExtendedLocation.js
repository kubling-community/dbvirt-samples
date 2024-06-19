/**
 * AzureArcDataManagementClient
 * The AzureArcData management API provides a RESTful set of web APIs to manage Azure Data Services on Azure Arc Resources.
 *
 * The version of the OpenAPI document: 2023-01-15-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ExtendedLocationType from './ExtendedLocationType';

/**
 * The ExtendedLocation model module.
 * @module model/ExtendedLocation
 * @version 2023-01-15-preview
 */
class ExtendedLocation {
    /**
     * Constructs a new <code>ExtendedLocation</code>.
     * The complex type of the extended location.
     * @alias module:model/ExtendedLocation
     */
    constructor() { 
        
        ExtendedLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExtendedLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtendedLocation} obj Optional instance to populate.
     * @return {module:model/ExtendedLocation} The populated <code>ExtendedLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtendedLocation();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ExtendedLocationType.constructFromObject(data['type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExtendedLocation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExtendedLocation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The name of the extended location.
 * @member {String} name
 */
ExtendedLocation.prototype['name'] = undefined;

/**
 * @member {module:model/ExtendedLocationType} type
 */
ExtendedLocation.prototype['type'] = undefined;






export default ExtendedLocation;
