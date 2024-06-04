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
import ListQueueProperties from './ListQueueProperties';
import Resource from './Resource';

/**
 * The ListQueue model module.
 * @module model/ListQueue
 * @version 2023-01-01
 */
class ListQueue {
    /**
     * Constructs a new <code>ListQueue</code>.
     * @alias module:model/ListQueue
     * @implements module:model/Resource
     */
    constructor() { 
        Resource.initialize(this);
        ListQueue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListQueue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListQueue} obj Optional instance to populate.
     * @return {module:model/ListQueue} The populated <code>ListQueue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListQueue();
            Resource.constructFromObject(data, obj);

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ListQueueProperties.constructFromObject(data['properties']);
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
     * Validates the JSON data with respect to <code>ListQueue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListQueue</code>.
     */
    static validateJSON(data) {
        // validate the optional field `properties`
        if (data['properties']) { // data not null
          ListQueueProperties.validateJSON(data['properties']);
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
 * @member {module:model/ListQueueProperties} properties
 */
ListQueue.prototype['properties'] = undefined;

/**
 * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
 * @member {String} id
 */
ListQueue.prototype['id'] = undefined;

/**
 * The name of the resource
 * @member {String} name
 */
ListQueue.prototype['name'] = undefined;

/**
 * The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"
 * @member {String} type
 */
ListQueue.prototype['type'] = undefined;


// Implement Resource interface:
/**
 * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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




export default ListQueue;

