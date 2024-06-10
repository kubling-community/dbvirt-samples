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
import ArchiveProperties from './ArchiveProperties';
import ProxyResource from './ProxyResource';
import SystemData from './SystemData';

/**
 * The Archive model module.
 * @module model/Archive
 * @version 2019-06-01-preview
 */
class Archive {
    /**
     * Constructs a new <code>Archive</code>.
     * An object that represents a archive for a container registry.
     * @alias module:model/Archive
     * @implements module:model/ProxyResource
     */
    constructor() { 
        ProxyResource.initialize(this);
        Archive.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Archive</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Archive} obj Optional instance to populate.
     * @return {module:model/Archive} The populated <code>Archive</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Archive();
            ProxyResource.constructFromObject(data, obj);

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ArchiveProperties.constructFromObject(data['properties']);
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
     * Validates the JSON data with respect to <code>Archive</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Archive</code>.
     */
    static validateJSON(data) {
        // validate the optional field `properties`
        if (data['properties']) { // data not null
          ArchiveProperties.validateJSON(data['properties']);
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



/**
 * @member {module:model/ArchiveProperties} properties
 */
Archive.prototype['properties'] = undefined;

/**
 * Fully qualified resource ID for the resource. E.g. \"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}\"
 * @member {String} id
 */
Archive.prototype['id'] = undefined;

/**
 * The name of the resource
 * @member {String} name
 */
Archive.prototype['name'] = undefined;

/**
 * The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"
 * @member {String} type
 */
Archive.prototype['type'] = undefined;

/**
 * @member {module:model/SystemData} systemData
 */
Archive.prototype['systemData'] = undefined;


// Implement ProxyResource interface:
/**
 * Fully qualified resource ID for the resource. E.g. \"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}\"
 * @member {String} id
 */
ProxyResource.prototype['id'] = undefined;
/**
 * The name of the resource
 * @member {String} name
 */
ProxyResource.prototype['name'] = undefined;
/**
 * The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"
 * @member {String} type
 */
ProxyResource.prototype['type'] = undefined;
/**
 * @member {module:model/SystemData} systemData
 */
ProxyResource.prototype['systemData'] = undefined;




export default Archive;

