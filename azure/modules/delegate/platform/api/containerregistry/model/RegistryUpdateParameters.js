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
import IdentityProperties from './IdentityProperties';
import RegistryPropertiesUpdateParameters from './RegistryPropertiesUpdateParameters';
import Sku from './Sku';

/**
 * The RegistryUpdateParameters model module.
 * @module model/RegistryUpdateParameters
 * @version 2019-06-01-preview
 */
class RegistryUpdateParameters {
    /**
     * Constructs a new <code>RegistryUpdateParameters</code>.
     * The parameters for updating a container registry.
     * @alias module:model/RegistryUpdateParameters
     */
    constructor() { 
        
        RegistryUpdateParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegistryUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryUpdateParameters} obj Optional instance to populate.
     * @return {module:model/RegistryUpdateParameters} The populated <code>RegistryUpdateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegistryUpdateParameters();

            if (data.hasOwnProperty('identity')) {
                obj['identity'] = IdentityProperties.constructFromObject(data['identity']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = Sku.constructFromObject(data['sku']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = RegistryPropertiesUpdateParameters.constructFromObject(data['properties']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RegistryUpdateParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RegistryUpdateParameters</code>.
     */
    static validateJSON(data) {
        // validate the optional field `identity`
        if (data['identity']) { // data not null
          IdentityProperties.validateJSON(data['identity']);
        }
        // validate the optional field `sku`
        if (data['sku']) { // data not null
          Sku.validateJSON(data['sku']);
        }
        // validate the optional field `properties`
        if (data['properties']) { // data not null
          RegistryPropertiesUpdateParameters.validateJSON(data['properties']);
        }

        return true;
    }


}



/**
 * @member {module:model/IdentityProperties} identity
 */
RegistryUpdateParameters.prototype['identity'] = undefined;

/**
 * The tags for the container registry.
 * @member {Object.<String, String>} tags
 */
RegistryUpdateParameters.prototype['tags'] = undefined;

/**
 * @member {module:model/Sku} sku
 */
RegistryUpdateParameters.prototype['sku'] = undefined;

/**
 * @member {module:model/RegistryPropertiesUpdateParameters} properties
 */
RegistryUpdateParameters.prototype['properties'] = undefined;






export default RegistryUpdateParameters;
