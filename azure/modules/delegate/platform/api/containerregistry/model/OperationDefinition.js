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
import OperationDisplayDefinition from './OperationDisplayDefinition';
import OperationPropertiesDefinition from './OperationPropertiesDefinition';

/**
 * The OperationDefinition model module.
 * @module model/OperationDefinition
 * @version 2019-06-01-preview
 */
class OperationDefinition {
    /**
     * Constructs a new <code>OperationDefinition</code>.
     * The definition of a container registry operation.
     * @alias module:model/OperationDefinition
     */
    constructor() { 
        
        OperationDefinition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OperationDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationDefinition} obj Optional instance to populate.
     * @return {module:model/OperationDefinition} The populated <code>OperationDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationDefinition();

            if (data.hasOwnProperty('origin')) {
                obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('display')) {
                obj['display'] = OperationDisplayDefinition.constructFromObject(data['display']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = OperationPropertiesDefinition.constructFromObject(data['properties']);
            }
            if (data.hasOwnProperty('isDataAction')) {
                obj['isDataAction'] = ApiClient.convertToType(data['isDataAction'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OperationDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OperationDefinition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['origin'] && !(typeof data['origin'] === 'string' || data['origin'] instanceof String)) {
            throw new Error("Expected the field `origin` to be a primitive type in the JSON string but got " + data['origin']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `display`
        if (data['display']) { // data not null
          OperationDisplayDefinition.validateJSON(data['display']);
        }
        // validate the optional field `properties`
        if (data['properties']) { // data not null
          OperationPropertiesDefinition.validateJSON(data['properties']);
        }

        return true;
    }


}



/**
 * The origin information of the container registry operation.
 * @member {String} origin
 */
OperationDefinition.prototype['origin'] = undefined;

/**
 * Operation name: {provider}/{resource}/{operation}.
 * @member {String} name
 */
OperationDefinition.prototype['name'] = undefined;

/**
 * @member {module:model/OperationDisplayDefinition} display
 */
OperationDefinition.prototype['display'] = undefined;

/**
 * @member {module:model/OperationPropertiesDefinition} properties
 */
OperationDefinition.prototype['properties'] = undefined;

/**
 * This property indicates if the operation is an action or a data action  ref: https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions#management-and-data-operations
 * @member {Boolean} isDataAction
 */
OperationDefinition.prototype['isDataAction'] = undefined;






export default OperationDefinition;
