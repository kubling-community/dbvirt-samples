/**
 * AzureArcDataManagementClient
 * The AzureArcData management API provides a RESTful set of web APIs to manage Azure Data Services on Azure Arc Resources.
 *
 * The version of the OpenAPI document: 2023-01-15-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OperationDisplay model module.
 * @module model/OperationDisplay
 * @version 2023-01-15-preview
 */
class OperationDisplay {
    /**
     * Constructs a new <code>OperationDisplay</code>.
     * Display metadata associated with the operation.
     * @alias module:model/OperationDisplay
     * @param provider {String} The localized friendly form of the resource provider name.
     * @param resource {String} The localized friendly form of the resource type related to this action/operation.
     * @param operation {String} The localized friendly name for the operation.
     * @param description {String} The localized friendly description for the operation.
     */
    constructor(provider, resource, operation, description) { 
        
        OperationDisplay.initialize(this, provider, resource, operation, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, provider, resource, operation, description) { 
        obj['provider'] = provider;
        obj['resource'] = resource;
        obj['operation'] = operation;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>OperationDisplay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationDisplay} obj Optional instance to populate.
     * @return {module:model/OperationDisplay} The populated <code>OperationDisplay</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationDisplay();

            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OperationDisplay</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OperationDisplay</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OperationDisplay.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
            throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
        }
        // ensure the json data is a string
        if (data['resource'] && !(typeof data['resource'] === 'string' || data['resource'] instanceof String)) {
            throw new Error("Expected the field `resource` to be a primitive type in the JSON string but got " + data['resource']);
        }
        // ensure the json data is a string
        if (data['operation'] && !(typeof data['operation'] === 'string' || data['operation'] instanceof String)) {
            throw new Error("Expected the field `operation` to be a primitive type in the JSON string but got " + data['operation']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

OperationDisplay.RequiredProperties = ["provider", "resource", "operation", "description"];

/**
 * The localized friendly form of the resource provider name.
 * @member {String} provider
 */
OperationDisplay.prototype['provider'] = undefined;

/**
 * The localized friendly form of the resource type related to this action/operation.
 * @member {String} resource
 */
OperationDisplay.prototype['resource'] = undefined;

/**
 * The localized friendly name for the operation.
 * @member {String} operation
 */
OperationDisplay.prototype['operation'] = undefined;

/**
 * The localized friendly description for the operation.
 * @member {String} description
 */
OperationDisplay.prototype['description'] = undefined;






export default OperationDisplay;

