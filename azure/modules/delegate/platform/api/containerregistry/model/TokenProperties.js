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
import TokenCredentialsProperties from './TokenCredentialsProperties';

/**
 * The TokenProperties model module.
 * @module model/TokenProperties
 * @version 2019-06-01-preview
 */
class TokenProperties {
    /**
     * Constructs a new <code>TokenProperties</code>.
     * The properties of a token.
     * @alias module:model/TokenProperties
     */
    constructor() { 
        
        TokenProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenProperties} obj Optional instance to populate.
     * @return {module:model/TokenProperties} The populated <code>TokenProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenProperties();

            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('provisioningState')) {
                obj['provisioningState'] = ApiClient.convertToType(data['provisioningState'], 'String');
            }
            if (data.hasOwnProperty('scopeMapId')) {
                obj['scopeMapId'] = ApiClient.convertToType(data['scopeMapId'], 'String');
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = TokenCredentialsProperties.constructFromObject(data['credentials']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['provisioningState'] && !(typeof data['provisioningState'] === 'string' || data['provisioningState'] instanceof String)) {
            throw new Error("Expected the field `provisioningState` to be a primitive type in the JSON string but got " + data['provisioningState']);
        }
        // ensure the json data is a string
        if (data['scopeMapId'] && !(typeof data['scopeMapId'] === 'string' || data['scopeMapId'] instanceof String)) {
            throw new Error("Expected the field `scopeMapId` to be a primitive type in the JSON string but got " + data['scopeMapId']);
        }
        // validate the optional field `credentials`
        if (data['credentials']) { // data not null
          TokenCredentialsProperties.validateJSON(data['credentials']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * The creation date of scope map.
 * @member {Date} creationDate
 */
TokenProperties.prototype['creationDate'] = undefined;

/**
 * Provisioning state of the resource.
 * @member {module:model/TokenProperties.ProvisioningStateEnum} provisioningState
 */
TokenProperties.prototype['provisioningState'] = undefined;

/**
 * The resource ID of the scope map to which the token will be associated with.
 * @member {String} scopeMapId
 */
TokenProperties.prototype['scopeMapId'] = undefined;

/**
 * @member {module:model/TokenCredentialsProperties} credentials
 */
TokenProperties.prototype['credentials'] = undefined;

/**
 * The status of the token example enabled or disabled.
 * @member {module:model/TokenProperties.StatusEnum} status
 */
TokenProperties.prototype['status'] = undefined;





/**
 * Allowed values for the <code>provisioningState</code> property.
 * @enum {String}
 * @readonly
 */
TokenProperties['ProvisioningStateEnum'] = {

    /**
     * value: "Creating"
     * @const
     */
    "Creating": "Creating",

    /**
     * value: "Updating"
     * @const
     */
    "Updating": "Updating",

    /**
     * value: "Deleting"
     * @const
     */
    "Deleting": "Deleting",

    /**
     * value: "Succeeded"
     * @const
     */
    "Succeeded": "Succeeded",

    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed",

    /**
     * value: "Canceled"
     * @const
     */
    "Canceled": "Canceled"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TokenProperties['StatusEnum'] = {

    /**
     * value: "enabled"
     * @const
     */
    "enabled": "enabled",

    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"
};



export default TokenProperties;

