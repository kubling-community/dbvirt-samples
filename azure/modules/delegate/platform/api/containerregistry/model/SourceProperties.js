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
import AuthInfo from './AuthInfo';

/**
 * The SourceProperties model module.
 * @module model/SourceProperties
 * @version 2019-06-01-preview
 */
class SourceProperties {
    /**
     * Constructs a new <code>SourceProperties</code>.
     * The properties of the source code repository.
     * @alias module:model/SourceProperties
     * @param sourceControlType {module:model/SourceProperties.SourceControlTypeEnum} The type of source control service.
     * @param repositoryUrl {String} The full URL to the source code repository
     */
    constructor(sourceControlType, repositoryUrl) { 
        
        SourceProperties.initialize(this, sourceControlType, repositoryUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceControlType, repositoryUrl) { 
        obj['sourceControlType'] = sourceControlType;
        obj['repositoryUrl'] = repositoryUrl;
    }

    /**
     * Constructs a <code>SourceProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceProperties} obj Optional instance to populate.
     * @return {module:model/SourceProperties} The populated <code>SourceProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceProperties();

            if (data.hasOwnProperty('sourceControlType')) {
                obj['sourceControlType'] = ApiClient.convertToType(data['sourceControlType'], 'String');
            }
            if (data.hasOwnProperty('repositoryUrl')) {
                obj['repositoryUrl'] = ApiClient.convertToType(data['repositoryUrl'], 'String');
            }
            if (data.hasOwnProperty('branch')) {
                obj['branch'] = ApiClient.convertToType(data['branch'], 'String');
            }
            if (data.hasOwnProperty('sourceControlAuthProperties')) {
                obj['sourceControlAuthProperties'] = AuthInfo.constructFromObject(data['sourceControlAuthProperties']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SourceProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SourceProperties</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SourceProperties.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sourceControlType'] && !(typeof data['sourceControlType'] === 'string' || data['sourceControlType'] instanceof String)) {
            throw new Error("Expected the field `sourceControlType` to be a primitive type in the JSON string but got " + data['sourceControlType']);
        }
        // ensure the json data is a string
        if (data['repositoryUrl'] && !(typeof data['repositoryUrl'] === 'string' || data['repositoryUrl'] instanceof String)) {
            throw new Error("Expected the field `repositoryUrl` to be a primitive type in the JSON string but got " + data['repositoryUrl']);
        }
        // ensure the json data is a string
        if (data['branch'] && !(typeof data['branch'] === 'string' || data['branch'] instanceof String)) {
            throw new Error("Expected the field `branch` to be a primitive type in the JSON string but got " + data['branch']);
        }
        // validate the optional field `sourceControlAuthProperties`
        if (data['sourceControlAuthProperties']) { // data not null
          AuthInfo.validateJSON(data['sourceControlAuthProperties']);
        }

        return true;
    }


}

SourceProperties.RequiredProperties = ["sourceControlType", "repositoryUrl"];

/**
 * The type of source control service.
 * @member {module:model/SourceProperties.SourceControlTypeEnum} sourceControlType
 */
SourceProperties.prototype['sourceControlType'] = undefined;

/**
 * The full URL to the source code repository
 * @member {String} repositoryUrl
 */
SourceProperties.prototype['repositoryUrl'] = undefined;

/**
 * The branch name of the source code.
 * @member {String} branch
 */
SourceProperties.prototype['branch'] = undefined;

/**
 * @member {module:model/AuthInfo} sourceControlAuthProperties
 */
SourceProperties.prototype['sourceControlAuthProperties'] = undefined;





/**
 * Allowed values for the <code>sourceControlType</code> property.
 * @enum {String}
 * @readonly
 */
SourceProperties['SourceControlTypeEnum'] = {

    /**
     * value: "Github"
     * @const
     */
    "Github": "Github",

    /**
     * value: "VisualStudioTeamService"
     * @const
     */
    "VisualStudioTeamService": "VisualStudioTeamService"
};



export default SourceProperties;

