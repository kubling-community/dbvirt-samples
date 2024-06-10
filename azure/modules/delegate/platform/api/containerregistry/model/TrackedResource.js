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
import Resource from './Resource';
import SystemData from './SystemData';

/**
 * The TrackedResource model module.
 * @module model/TrackedResource
 * @version 2019-06-01-preview
 */
class TrackedResource {
    /**
     * Constructs a new <code>TrackedResource</code>.
     * The resource model definition for an Azure Resource Manager tracked top level resource which has &#39;tags&#39; and a &#39;location&#39;
     * @alias module:model/TrackedResource
     * @implements module:model/Resource
     */
    constructor() { 
        Resource.initialize(this);
        TrackedResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['location'] = location;
    }

    /**
     * Constructs a <code>TrackedResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrackedResource} obj Optional instance to populate.
     * @return {module:model/TrackedResource} The populated <code>TrackedResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrackedResource();
            Resource.constructFromObject(data, obj);

            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('systemData')) {
                obj['systemData'] = SystemData.constructFromObject(data['systemData']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TrackedResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TrackedResource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TrackedResource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `systemData`
        if (data['systemData']) { // data not null
          SystemData.validateJSON(data['systemData']);
        }

        return true;
    }


}

TrackedResource.RequiredProperties = ["location"];

/**
 * Resource tags.
 * @member {Object.<String, String>} tags
 */
TrackedResource.prototype['tags'] = undefined;

/**
 * The geo-location where the resource lives
 * @member {String} location
 */
TrackedResource.prototype['location'] = undefined;

/**
 * Fully qualified resource ID for the resource. E.g. \"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}\"
 * @member {String} id
 */
TrackedResource.prototype['id'] = undefined;

/**
 * The name of the resource
 * @member {String} name
 */
TrackedResource.prototype['name'] = undefined;

/**
 * The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"
 * @member {String} type
 */
TrackedResource.prototype['type'] = undefined;

/**
 * @member {module:model/SystemData} systemData
 */
TrackedResource.prototype['systemData'] = undefined;


// Implement Resource interface:
/**
 * Fully qualified resource ID for the resource. E.g. \"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}\"
 * @member {String} id
 */
Resource.prototype['id'] = undefined;
/**
 * The name of the resource
 * @member {String} name
 */
Resource.prototype['name'] = undefined;
/**
 * The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"
 * @member {String} type
 */
Resource.prototype['type'] = undefined;
/**
 * @member {module:model/SystemData} systemData
 */
Resource.prototype['systemData'] = undefined;




export default TrackedResource;

