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

/**
 * The CorsRule model module.
 * @module model/CorsRule
 * @version 2023-01-01
 */
class CorsRule {
    /**
     * Constructs a new <code>CorsRule</code>.
     * Specifies a CORS rule for the Blob service.
     * @alias module:model/CorsRule
     * @param allowedOrigins {Array.<String>} Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or \"*\" to allow all domains
     * @param allowedMethods {Array.<module:model/CorsRule.AllowedMethodsEnum>} Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
     * @param maxAgeInSeconds {Number} Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.
     * @param exposedHeaders {Array.<String>} Required if CorsRule element is present. A list of response headers to expose to CORS clients.
     * @param allowedHeaders {Array.<String>} Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
     */
    constructor(allowedOrigins, allowedMethods, maxAgeInSeconds, exposedHeaders, allowedHeaders) { 
        
        CorsRule.initialize(this, allowedOrigins, allowedMethods, maxAgeInSeconds, exposedHeaders, allowedHeaders);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, allowedOrigins, allowedMethods, maxAgeInSeconds, exposedHeaders, allowedHeaders) { 
        obj['allowedOrigins'] = allowedOrigins;
        obj['allowedMethods'] = allowedMethods;
        obj['maxAgeInSeconds'] = maxAgeInSeconds;
        obj['exposedHeaders'] = exposedHeaders;
        obj['allowedHeaders'] = allowedHeaders;
    }

    /**
     * Constructs a <code>CorsRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CorsRule} obj Optional instance to populate.
     * @return {module:model/CorsRule} The populated <code>CorsRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CorsRule();

            if (data.hasOwnProperty('allowedOrigins')) {
                obj['allowedOrigins'] = ApiClient.convertToType(data['allowedOrigins'], ['String']);
            }
            if (data.hasOwnProperty('allowedMethods')) {
                obj['allowedMethods'] = ApiClient.convertToType(data['allowedMethods'], ['String']);
            }
            if (data.hasOwnProperty('maxAgeInSeconds')) {
                obj['maxAgeInSeconds'] = ApiClient.convertToType(data['maxAgeInSeconds'], 'Number');
            }
            if (data.hasOwnProperty('exposedHeaders')) {
                obj['exposedHeaders'] = ApiClient.convertToType(data['exposedHeaders'], ['String']);
            }
            if (data.hasOwnProperty('allowedHeaders')) {
                obj['allowedHeaders'] = ApiClient.convertToType(data['allowedHeaders'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CorsRule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CorsRule</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CorsRule.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['allowedOrigins'])) {
            throw new Error("Expected the field `allowedOrigins` to be an array in the JSON data but got " + data['allowedOrigins']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['allowedMethods'])) {
            throw new Error("Expected the field `allowedMethods` to be an array in the JSON data but got " + data['allowedMethods']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['exposedHeaders'])) {
            throw new Error("Expected the field `exposedHeaders` to be an array in the JSON data but got " + data['exposedHeaders']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['allowedHeaders'])) {
            throw new Error("Expected the field `allowedHeaders` to be an array in the JSON data but got " + data['allowedHeaders']);
        }

        return true;
    }


}

CorsRule.RequiredProperties = ["allowedOrigins", "allowedMethods", "maxAgeInSeconds", "exposedHeaders", "allowedHeaders"];

/**
 * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or \"*\" to allow all domains
 * @member {Array.<String>} allowedOrigins
 */
CorsRule.prototype['allowedOrigins'] = undefined;

/**
 * Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
 * @member {Array.<module:model/CorsRule.AllowedMethodsEnum>} allowedMethods
 */
CorsRule.prototype['allowedMethods'] = undefined;

/**
 * Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.
 * @member {Number} maxAgeInSeconds
 */
CorsRule.prototype['maxAgeInSeconds'] = undefined;

/**
 * Required if CorsRule element is present. A list of response headers to expose to CORS clients.
 * @member {Array.<String>} exposedHeaders
 */
CorsRule.prototype['exposedHeaders'] = undefined;

/**
 * Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
 * @member {Array.<String>} allowedHeaders
 */
CorsRule.prototype['allowedHeaders'] = undefined;





/**
 * Allowed values for the <code>allowedMethods</code> property.
 * @enum {String}
 * @readonly
 */
CorsRule['AllowedMethodsEnum'] = {

    /**
     * value: "DELETE"
     * @const
     */
    "DELETE": "DELETE",

    /**
     * value: "GET"
     * @const
     */
    "GET": "GET",

    /**
     * value: "HEAD"
     * @const
     */
    "HEAD": "HEAD",

    /**
     * value: "MERGE"
     * @const
     */
    "MERGE": "MERGE",

    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",

    /**
     * value: "OPTIONS"
     * @const
     */
    "OPTIONS": "OPTIONS",

    /**
     * value: "PUT"
     * @const
     */
    "PUT": "PUT",

    /**
     * value: "PATCH"
     * @const
     */
    "PATCH": "PATCH",

    /**
     * value: "CONNECT"
     * @const
     */
    "CONNECT": "CONNECT",

    /**
     * value: "TRACE"
     * @const
     */
    "TRACE": "TRACE"
};



export default CorsRule;

