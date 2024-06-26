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
 * The Identity model module.
 * @module model/Identity
 * @version 2023-01-15-preview
 */
class Identity {
    /**
     * Constructs a new <code>Identity</code>.
     * Identity for the resource.
     * @alias module:model/Identity
     */
    constructor() { 
        
        Identity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Identity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Identity} obj Optional instance to populate.
     * @return {module:model/Identity} The populated <code>Identity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Identity();

            if (data.hasOwnProperty('principalId')) {
                obj['principalId'] = ApiClient.convertToType(data['principalId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Identity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Identity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['principalId'] && !(typeof data['principalId'] === 'string' || data['principalId'] instanceof String)) {
            throw new Error("Expected the field `principalId` to be a primitive type in the JSON string but got " + data['principalId']);
        }
        // ensure the json data is a string
        if (data['tenantId'] && !(typeof data['tenantId'] === 'string' || data['tenantId'] instanceof String)) {
            throw new Error("Expected the field `tenantId` to be a primitive type in the JSON string but got " + data['tenantId']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * The principal ID of resource identity.
 * @member {String} principalId
 */
Identity.prototype['principalId'] = undefined;

/**
 * The tenant ID of resource.
 * @member {String} tenantId
 */
Identity.prototype['tenantId'] = undefined;

/**
 * The identity type.
 * @member {module:model/Identity.TypeEnum} type
 */
Identity.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Identity['TypeEnum'] = {

    /**
     * value: "SystemAssigned"
     * @const
     */
    "SystemAssigned": "SystemAssigned"
};



export default Identity;

