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
import EncryptionProperty from './EncryptionProperty';
import NetworkRuleSet from './NetworkRuleSet';
import Policies from './Policies';

/**
 * The RegistryPropertiesUpdateParameters model module.
 * @module model/RegistryPropertiesUpdateParameters
 * @version 2019-06-01-preview
 */
class RegistryPropertiesUpdateParameters {
    /**
     * Constructs a new <code>RegistryPropertiesUpdateParameters</code>.
     * The parameters for updating the properties of a container registry.
     * @alias module:model/RegistryPropertiesUpdateParameters
     */
    constructor() { 
        
        RegistryPropertiesUpdateParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegistryPropertiesUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryPropertiesUpdateParameters} obj Optional instance to populate.
     * @return {module:model/RegistryPropertiesUpdateParameters} The populated <code>RegistryPropertiesUpdateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegistryPropertiesUpdateParameters();

            if (data.hasOwnProperty('adminUserEnabled')) {
                obj['adminUserEnabled'] = ApiClient.convertToType(data['adminUserEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('networkRuleSet')) {
                obj['networkRuleSet'] = NetworkRuleSet.constructFromObject(data['networkRuleSet']);
            }
            if (data.hasOwnProperty('policies')) {
                obj['policies'] = Policies.constructFromObject(data['policies']);
            }
            if (data.hasOwnProperty('encryption')) {
                obj['encryption'] = EncryptionProperty.constructFromObject(data['encryption']);
            }
            if (data.hasOwnProperty('dataEndpointEnabled')) {
                obj['dataEndpointEnabled'] = ApiClient.convertToType(data['dataEndpointEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('publicNetworkAccess')) {
                obj['publicNetworkAccess'] = ApiClient.convertToType(data['publicNetworkAccess'], 'String');
            }
            if (data.hasOwnProperty('networkRuleBypassOptions')) {
                obj['networkRuleBypassOptions'] = ApiClient.convertToType(data['networkRuleBypassOptions'], 'String');
            }
            if (data.hasOwnProperty('anonymousPullEnabled')) {
                obj['anonymousPullEnabled'] = ApiClient.convertToType(data['anonymousPullEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('metadataSearch')) {
                obj['metadataSearch'] = ApiClient.convertToType(data['metadataSearch'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RegistryPropertiesUpdateParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RegistryPropertiesUpdateParameters</code>.
     */
    static validateJSON(data) {
        // validate the optional field `networkRuleSet`
        if (data['networkRuleSet']) { // data not null
          NetworkRuleSet.validateJSON(data['networkRuleSet']);
        }
        // validate the optional field `policies`
        if (data['policies']) { // data not null
          Policies.validateJSON(data['policies']);
        }
        // validate the optional field `encryption`
        if (data['encryption']) { // data not null
          EncryptionProperty.validateJSON(data['encryption']);
        }
        // ensure the json data is a string
        if (data['publicNetworkAccess'] && !(typeof data['publicNetworkAccess'] === 'string' || data['publicNetworkAccess'] instanceof String)) {
            throw new Error("Expected the field `publicNetworkAccess` to be a primitive type in the JSON string but got " + data['publicNetworkAccess']);
        }
        // ensure the json data is a string
        if (data['networkRuleBypassOptions'] && !(typeof data['networkRuleBypassOptions'] === 'string' || data['networkRuleBypassOptions'] instanceof String)) {
            throw new Error("Expected the field `networkRuleBypassOptions` to be a primitive type in the JSON string but got " + data['networkRuleBypassOptions']);
        }
        // ensure the json data is a string
        if (data['metadataSearch'] && !(typeof data['metadataSearch'] === 'string' || data['metadataSearch'] instanceof String)) {
            throw new Error("Expected the field `metadataSearch` to be a primitive type in the JSON string but got " + data['metadataSearch']);
        }

        return true;
    }


}



/**
 * The value that indicates whether the admin user is enabled.
 * @member {Boolean} adminUserEnabled
 */
RegistryPropertiesUpdateParameters.prototype['adminUserEnabled'] = undefined;

/**
 * @member {module:model/NetworkRuleSet} networkRuleSet
 */
RegistryPropertiesUpdateParameters.prototype['networkRuleSet'] = undefined;

/**
 * @member {module:model/Policies} policies
 */
RegistryPropertiesUpdateParameters.prototype['policies'] = undefined;

/**
 * @member {module:model/EncryptionProperty} encryption
 */
RegistryPropertiesUpdateParameters.prototype['encryption'] = undefined;

/**
 * Enable a single data endpoint per region for serving data.
 * @member {Boolean} dataEndpointEnabled
 */
RegistryPropertiesUpdateParameters.prototype['dataEndpointEnabled'] = undefined;

/**
 * Whether or not public network access is allowed for the container registry.
 * @member {module:model/RegistryPropertiesUpdateParameters.PublicNetworkAccessEnum} publicNetworkAccess
 */
RegistryPropertiesUpdateParameters.prototype['publicNetworkAccess'] = undefined;

/**
 * Whether to allow trusted Azure services to access a network restricted registry.
 * @member {module:model/RegistryPropertiesUpdateParameters.NetworkRuleBypassOptionsEnum} networkRuleBypassOptions
 * @default 'AzureServices'
 */
RegistryPropertiesUpdateParameters.prototype['networkRuleBypassOptions'] = 'AzureServices';

/**
 * Enables registry-wide pull from unauthenticated clients.
 * @member {Boolean} anonymousPullEnabled
 */
RegistryPropertiesUpdateParameters.prototype['anonymousPullEnabled'] = undefined;

/**
 * Determines whether registry artifacts are indexed for metadata search.
 * @member {module:model/RegistryPropertiesUpdateParameters.MetadataSearchEnum} metadataSearch
 * @default 'Disabled'
 */
RegistryPropertiesUpdateParameters.prototype['metadataSearch'] = 'Disabled';





/**
 * Allowed values for the <code>publicNetworkAccess</code> property.
 * @enum {String}
 * @readonly
 */
RegistryPropertiesUpdateParameters['PublicNetworkAccessEnum'] = {

    /**
     * value: "Enabled"
     * @const
     */
    "Enabled": "Enabled",

    /**
     * value: "Disabled"
     * @const
     */
    "Disabled": "Disabled"
};


/**
 * Allowed values for the <code>networkRuleBypassOptions</code> property.
 * @enum {String}
 * @readonly
 */
RegistryPropertiesUpdateParameters['NetworkRuleBypassOptionsEnum'] = {

    /**
     * value: "AzureServices"
     * @const
     */
    "AzureServices": "AzureServices",

    /**
     * value: "None"
     * @const
     */
    "None": "None"
};


/**
 * Allowed values for the <code>metadataSearch</code> property.
 * @enum {String}
 * @readonly
 */
RegistryPropertiesUpdateParameters['MetadataSearchEnum'] = {

    /**
     * value: "Enabled"
     * @const
     */
    "Enabled": "Enabled",

    /**
     * value: "Disabled"
     * @const
     */
    "Disabled": "Disabled"
};



export default RegistryPropertiesUpdateParameters;

