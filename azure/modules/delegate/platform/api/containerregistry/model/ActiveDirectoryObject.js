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
 * The ActiveDirectoryObject model module.
 * @module model/ActiveDirectoryObject
 * @version 2019-06-01-preview
 */
class ActiveDirectoryObject {
    /**
     * Constructs a new <code>ActiveDirectoryObject</code>.
     * The Active Directory Object that will be used for authenticating the token of a container registry.
     * @alias module:model/ActiveDirectoryObject
     */
    constructor() { 
        
        ActiveDirectoryObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActiveDirectoryObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActiveDirectoryObject} obj Optional instance to populate.
     * @return {module:model/ActiveDirectoryObject} The populated <code>ActiveDirectoryObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActiveDirectoryObject();

            if (data.hasOwnProperty('objectId')) {
                obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActiveDirectoryObject</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActiveDirectoryObject</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['objectId'] && !(typeof data['objectId'] === 'string' || data['objectId'] instanceof String)) {
            throw new Error("Expected the field `objectId` to be a primitive type in the JSON string but got " + data['objectId']);
        }
        // ensure the json data is a string
        if (data['tenantId'] && !(typeof data['tenantId'] === 'string' || data['tenantId'] instanceof String)) {
            throw new Error("Expected the field `tenantId` to be a primitive type in the JSON string but got " + data['tenantId']);
        }

        return true;
    }


}



/**
 * The user/group/application object ID for Active Directory Object that will be used for authenticating the token of a container registry.
 * @member {String} objectId
 */
ActiveDirectoryObject.prototype['objectId'] = undefined;

/**
 * The tenant ID of user/group/application object Active Directory Object that will be used for authenticating the token of a container registry.
 * @member {String} tenantId
 */
ActiveDirectoryObject.prototype['tenantId'] = undefined;






export default ActiveDirectoryObject;

