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
import SyncProperties from './SyncProperties';

/**
 * The ParentProperties model module.
 * @module model/ParentProperties
 * @version 2019-06-01-preview
 */
class ParentProperties {
    /**
     * Constructs a new <code>ParentProperties</code>.
     * The properties of the connected registry parent.
     * @alias module:model/ParentProperties
     * @param syncProperties {module:model/SyncProperties} 
     */
    constructor(syncProperties) { 
        
        ParentProperties.initialize(this, syncProperties);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, syncProperties) { 
        obj['syncProperties'] = syncProperties;
    }

    /**
     * Constructs a <code>ParentProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParentProperties} obj Optional instance to populate.
     * @return {module:model/ParentProperties} The populated <code>ParentProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParentProperties();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('syncProperties')) {
                obj['syncProperties'] = SyncProperties.constructFromObject(data['syncProperties']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ParentProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ParentProperties</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ParentProperties.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `syncProperties`
        if (data['syncProperties']) { // data not null
          SyncProperties.validateJSON(data['syncProperties']);
        }

        return true;
    }


}

ParentProperties.RequiredProperties = ["syncProperties"];

/**
 * The resource ID of the parent to which the connected registry will be associated.
 * @member {String} id
 */
ParentProperties.prototype['id'] = undefined;

/**
 * @member {module:model/SyncProperties} syncProperties
 */
ParentProperties.prototype['syncProperties'] = undefined;






export default ParentProperties;
