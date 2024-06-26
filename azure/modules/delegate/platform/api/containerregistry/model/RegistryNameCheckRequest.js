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

/**
 * The RegistryNameCheckRequest model module.
 * @module model/RegistryNameCheckRequest
 * @version 2019-06-01-preview
 */
class RegistryNameCheckRequest {
    /**
     * Constructs a new <code>RegistryNameCheckRequest</code>.
     * A request to check whether a container registry name is available.
     * @alias module:model/RegistryNameCheckRequest
     * @param name {String} The name of the container registry.
     * @param type {module:model/RegistryNameCheckRequest.TypeEnum} The resource type of the container registry. This field must be set to 'Microsoft.ContainerRegistry/registries'.
     */
    constructor(name, type) { 
        
        RegistryNameCheckRequest.initialize(this, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type) { 
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RegistryNameCheckRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryNameCheckRequest} obj Optional instance to populate.
     * @return {module:model/RegistryNameCheckRequest} The populated <code>RegistryNameCheckRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegistryNameCheckRequest();

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
     * Validates the JSON data with respect to <code>RegistryNameCheckRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RegistryNameCheckRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RegistryNameCheckRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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

RegistryNameCheckRequest.RequiredProperties = ["name", "type"];

/**
 * The name of the container registry.
 * @member {String} name
 */
RegistryNameCheckRequest.prototype['name'] = undefined;

/**
 * The resource type of the container registry. This field must be set to 'Microsoft.ContainerRegistry/registries'.
 * @member {module:model/RegistryNameCheckRequest.TypeEnum} type
 */
RegistryNameCheckRequest.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RegistryNameCheckRequest['TypeEnum'] = {

    /**
     * value: "Microsoft.ContainerRegistry/registries"
     * @const
     */
    "Microsoft.ContainerRegistry/registries": "Microsoft.ContainerRegistry/registries"
};



export default RegistryNameCheckRequest;

