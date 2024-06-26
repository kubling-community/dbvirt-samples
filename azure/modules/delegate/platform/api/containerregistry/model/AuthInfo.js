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
 * The AuthInfo model module.
 * @module model/AuthInfo
 * @version 2019-06-01-preview
 */
class AuthInfo {
    /**
     * Constructs a new <code>AuthInfo</code>.
     * The authorization properties for accessing the source code repository.
     * @alias module:model/AuthInfo
     * @param tokenType {module:model/AuthInfo.TokenTypeEnum} The type of Auth token.
     * @param token {String} The access token used to access the source control provider.
     */
    constructor(tokenType, token) { 
        
        AuthInfo.initialize(this, tokenType, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenType, token) { 
        obj['tokenType'] = tokenType;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>AuthInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthInfo} obj Optional instance to populate.
     * @return {module:model/AuthInfo} The populated <code>AuthInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthInfo();

            if (data.hasOwnProperty('tokenType')) {
                obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('refreshToken')) {
                obj['refreshToken'] = ApiClient.convertToType(data['refreshToken'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('expiresIn')) {
                obj['expiresIn'] = ApiClient.convertToType(data['expiresIn'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tokenType'] && !(typeof data['tokenType'] === 'string' || data['tokenType'] instanceof String)) {
            throw new Error("Expected the field `tokenType` to be a primitive type in the JSON string but got " + data['tokenType']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['refreshToken'] && !(typeof data['refreshToken'] === 'string' || data['refreshToken'] instanceof String)) {
            throw new Error("Expected the field `refreshToken` to be a primitive type in the JSON string but got " + data['refreshToken']);
        }
        // ensure the json data is a string
        if (data['scope'] && !(typeof data['scope'] === 'string' || data['scope'] instanceof String)) {
            throw new Error("Expected the field `scope` to be a primitive type in the JSON string but got " + data['scope']);
        }

        return true;
    }


}

AuthInfo.RequiredProperties = ["tokenType", "token"];

/**
 * The type of Auth token.
 * @member {module:model/AuthInfo.TokenTypeEnum} tokenType
 */
AuthInfo.prototype['tokenType'] = undefined;

/**
 * The access token used to access the source control provider.
 * @member {String} token
 */
AuthInfo.prototype['token'] = undefined;

/**
 * The refresh token used to refresh the access token.
 * @member {String} refreshToken
 */
AuthInfo.prototype['refreshToken'] = undefined;

/**
 * The scope of the access token.
 * @member {String} scope
 */
AuthInfo.prototype['scope'] = undefined;

/**
 * Time in seconds that the token remains valid
 * @member {Number} expiresIn
 */
AuthInfo.prototype['expiresIn'] = undefined;





/**
 * Allowed values for the <code>tokenType</code> property.
 * @enum {String}
 * @readonly
 */
AuthInfo['TokenTypeEnum'] = {

    /**
     * value: "PAT"
     * @const
     */
    "PAT": "PAT",

    /**
     * value: "OAuth"
     * @const
     */
    "OAuth": "OAuth"
};



export default AuthInfo;

