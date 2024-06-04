/**
 * StorageManagementClient
 * The Azure Storage Management API.
 *
 * The version of the OpenAPI document: 2023-01-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../../BaseApiClient";
import AzureEntityResource from './AzureEntityResource';
import ContainerProperties from './ContainerProperties';

/**
 * The ListContainerItem model module.
 * @module model/ListContainerItem
 * @version 2023-01-01
 */
class ListContainerItem {
    /**
     * Constructs a new <code>ListContainerItem</code>.
     * The blob container properties be listed out.
     * @alias module:model/ListContainerItem
     * @implements module:model/AzureEntityResource
     */
    constructor() { 
        AzureEntityResource.initialize(this);
        ListContainerItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListContainerItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListContainerItem} obj Optional instance to populate.
     * @return {module:model/ListContainerItem} The populated <code>ListContainerItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListContainerItem();
            AzureEntityResource.constructFromObject(data, obj);

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ContainerProperties.constructFromObject(data['properties']);
            }
            if (data.hasOwnProperty('etag')) {
                obj['etag'] = ApiClient.convertToType(data['etag'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListContainerItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListContainerItem</code>.
     */
    static validateJSON(data) {
        // validate the optional field `properties`
        if (data['properties']) { // data not null
          ContainerProperties.validateJSON(data['properties']);
        }
        // ensure the json data is a string
        if (data['etag'] && !(typeof data['etag'] === 'string' || data['etag'] instanceof String)) {
            throw new Error("Expected the field `etag` to be a primitive type in the JSON string but got " + data['etag']);
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

        return true;
    }


}



/**
 * @member {module:model/ContainerProperties} properties
 */
ListContainerItem.prototype['properties'] = undefined;

/**
 * Resource Etag.
 * @member {String} etag
 */
ListContainerItem.prototype['etag'] = undefined;

/**
 * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
 * @member {String} id
 */
ListContainerItem.prototype['id'] = undefined;

/**
 * The name of the resource
 * @member {String} name
 */
ListContainerItem.prototype['name'] = undefined;

/**
 * The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"
 * @member {String} type
 */
ListContainerItem.prototype['type'] = undefined;


// Implement AzureEntityResource interface:
/**
 * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
 * @member {String} id
 */
AzureEntityResource.prototype['id'] = undefined;
/**
 * The name of the resource
 * @member {String} name
 */
AzureEntityResource.prototype['name'] = undefined;
/**
 * The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"
 * @member {String} type
 */
AzureEntityResource.prototype['type'] = undefined;




export default ListContainerItem;

