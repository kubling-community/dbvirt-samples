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
 * The OperationLogSpecificationDefinition model module.
 * @module model/OperationLogSpecificationDefinition
 * @version 2019-06-01-preview
 */
class OperationLogSpecificationDefinition {
    /**
     * Constructs a new <code>OperationLogSpecificationDefinition</code>.
     * The definition of Azure Monitoring log.
     * @alias module:model/OperationLogSpecificationDefinition
     */
    constructor() { 
        
        OperationLogSpecificationDefinition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OperationLogSpecificationDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationLogSpecificationDefinition} obj Optional instance to populate.
     * @return {module:model/OperationLogSpecificationDefinition} The populated <code>OperationLogSpecificationDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationLogSpecificationDefinition();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('blobDuration')) {
                obj['blobDuration'] = ApiClient.convertToType(data['blobDuration'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OperationLogSpecificationDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OperationLogSpecificationDefinition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['blobDuration'] && !(typeof data['blobDuration'] === 'string' || data['blobDuration'] instanceof String)) {
            throw new Error("Expected the field `blobDuration` to be a primitive type in the JSON string but got " + data['blobDuration']);
        }

        return true;
    }


}



/**
 * Log name.
 * @member {String} name
 */
OperationLogSpecificationDefinition.prototype['name'] = undefined;

/**
 * Log display name.
 * @member {String} displayName
 */
OperationLogSpecificationDefinition.prototype['displayName'] = undefined;

/**
 * Log blob duration.
 * @member {String} blobDuration
 */
OperationLogSpecificationDefinition.prototype['blobDuration'] = undefined;






export default OperationLogSpecificationDefinition;
