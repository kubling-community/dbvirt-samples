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
import CustomRegistryCredentials from './CustomRegistryCredentials';
import SourceRegistryCredentials from './SourceRegistryCredentials';

/**
 * The Credentials model module.
 * @module model/Credentials
 * @version 2019-06-01-preview
 */
class Credentials {
    /**
     * Constructs a new <code>Credentials</code>.
     * The parameters that describes a set of credentials that will be used when a run is invoked.
     * @alias module:model/Credentials
     */
    constructor() { 
        
        Credentials.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Credentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Credentials} obj Optional instance to populate.
     * @return {module:model/Credentials} The populated <code>Credentials</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Credentials();

            if (data.hasOwnProperty('sourceRegistry')) {
                obj['sourceRegistry'] = SourceRegistryCredentials.constructFromObject(data['sourceRegistry']);
            }
            if (data.hasOwnProperty('customRegistries')) {
                obj['customRegistries'] = ApiClient.convertToType(data['customRegistries'], {'String': CustomRegistryCredentials});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Credentials</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Credentials</code>.
     */
    static validateJSON(data) {
        // validate the optional field `sourceRegistry`
        if (data['sourceRegistry']) { // data not null
          SourceRegistryCredentials.validateJSON(data['sourceRegistry']);
        }

        return true;
    }


}



/**
 * @member {module:model/SourceRegistryCredentials} sourceRegistry
 */
Credentials.prototype['sourceRegistry'] = undefined;

/**
 * Describes the credential parameters for accessing other custom registries. The key  for the dictionary item will be the registry login server (myregistry.azurecr.io) and  the value of the item will be the registry credentials for accessing the registry.
 * @member {Object.<String, module:model/CustomRegistryCredentials>} customRegistries
 */
Credentials.prototype['customRegistries'] = undefined;






export default Credentials;

