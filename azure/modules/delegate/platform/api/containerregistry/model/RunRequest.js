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
 * The RunRequest model module.
 * @module model/RunRequest
 * @version 2019-06-01-preview
 */
class RunRequest {
    /**
     * Constructs a new <code>RunRequest</code>.
     * The request parameters for scheduling a run.
     * @alias module:model/RunRequest
     * @param type {String} The type of the run request.
     */
    constructor(type) { 
        
        RunRequest.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RunRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunRequest} obj Optional instance to populate.
     * @return {module:model/RunRequest} The populated <code>RunRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunRequest();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('isArchiveEnabled')) {
                obj['isArchiveEnabled'] = ApiClient.convertToType(data['isArchiveEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('agentPoolName')) {
                obj['agentPoolName'] = ApiClient.convertToType(data['agentPoolName'], 'String');
            }
            if (data.hasOwnProperty('logTemplate')) {
                obj['logTemplate'] = ApiClient.convertToType(data['logTemplate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RunRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RunRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['agentPoolName'] && !(typeof data['agentPoolName'] === 'string' || data['agentPoolName'] instanceof String)) {
            throw new Error("Expected the field `agentPoolName` to be a primitive type in the JSON string but got " + data['agentPoolName']);
        }
        // ensure the json data is a string
        if (data['logTemplate'] && !(typeof data['logTemplate'] === 'string' || data['logTemplate'] instanceof String)) {
            throw new Error("Expected the field `logTemplate` to be a primitive type in the JSON string but got " + data['logTemplate']);
        }

        return true;
    }


}

RunRequest.RequiredProperties = ["type"];

/**
 * The type of the run request.
 * @member {String} type
 */
RunRequest.prototype['type'] = undefined;

/**
 * The value that indicates whether archiving is enabled for the run or not.
 * @member {Boolean} isArchiveEnabled
 * @default false
 */
RunRequest.prototype['isArchiveEnabled'] = false;

/**
 * The dedicated agent pool for the run.
 * @member {String} agentPoolName
 */
RunRequest.prototype['agentPoolName'] = undefined;

/**
 * The template that describes the repository and tag information for run log artifact.
 * @member {String} logTemplate
 */
RunRequest.prototype['logTemplate'] = undefined;






export default RunRequest;
