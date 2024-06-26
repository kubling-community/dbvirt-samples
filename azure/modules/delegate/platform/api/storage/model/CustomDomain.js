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
 * The CustomDomain model module.
 * @module model/CustomDomain
 * @version 2023-01-01
 */
class CustomDomain {
    /**
     * Constructs a new <code>CustomDomain</code>.
     * The custom domain assigned to this storage account. This can be set via Update.
     * @alias module:model/CustomDomain
     * @param name {String} Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
     */
    constructor(name) { 
        
        CustomDomain.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CustomDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomDomain} obj Optional instance to populate.
     * @return {module:model/CustomDomain} The populated <code>CustomDomain</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomDomain();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('useSubDomainName')) {
                obj['useSubDomainName'] = ApiClient.convertToType(data['useSubDomainName'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomDomain</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomDomain</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomDomain.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

CustomDomain.RequiredProperties = ["name"];

/**
 * Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
 * @member {String} name
 */
CustomDomain.prototype['name'] = undefined;

/**
 * Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.
 * @member {Boolean} useSubDomainName
 */
CustomDomain.prototype['useSubDomainName'] = undefined;






export default CustomDomain;

