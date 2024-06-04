/**
 * BillingManagementClient
 * Billing client provides access to billing resources for Azure subscriptions.
 *
 * The version of the OpenAPI document: 2020-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../../BaseApiClient";
import TargetCloud from './TargetCloud';

/**
 * The InvoiceSectionProperties model module.
 * @module model/InvoiceSectionProperties
 * @version 2020-05-01
 */
class InvoiceSectionProperties {
    /**
     * Constructs a new <code>InvoiceSectionProperties</code>.
     * The properties of an invoice section.
     * @alias module:model/InvoiceSectionProperties
     */
    constructor() { 
        
        InvoiceSectionProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceSectionProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceSectionProperties} obj Optional instance to populate.
     * @return {module:model/InvoiceSectionProperties} The populated <code>InvoiceSectionProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceSectionProperties();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('systemId')) {
                obj['systemId'] = ApiClient.convertToType(data['systemId'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
            if (data.hasOwnProperty('targetCloud')) {
                obj['targetCloud'] = TargetCloud.constructFromObject(data['targetCloud']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceSectionProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceSectionProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['systemId'] && !(typeof data['systemId'] === 'string' || data['systemId'] instanceof String)) {
            throw new Error("Expected the field `systemId` to be a primitive type in the JSON string but got " + data['systemId']);
        }

        return true;
    }


}



/**
 * The name of the invoice section.
 * @member {String} displayName
 */
InvoiceSectionProperties.prototype['displayName'] = undefined;

/**
 * Dictionary of metadata associated with the invoice section.
 * @member {Object.<String, String>} labels
 */
InvoiceSectionProperties.prototype['labels'] = undefined;

/**
 * Identifies the state of an invoice section.
 * @member {module:model/InvoiceSectionProperties.StateEnum} state
 */
InvoiceSectionProperties.prototype['state'] = undefined;

/**
 * The system generated unique identifier for an invoice section.
 * @member {String} systemId
 */
InvoiceSectionProperties.prototype['systemId'] = undefined;

/**
 * Dictionary of metadata associated with the invoice section. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \\ ? /
 * @member {Object.<String, String>} tags
 */
InvoiceSectionProperties.prototype['tags'] = undefined;

/**
 * @member {module:model/TargetCloud} targetCloud
 */
InvoiceSectionProperties.prototype['targetCloud'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
InvoiceSectionProperties['StateEnum'] = {

    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",

    /**
     * value: "Restricted"
     * @const
     */
    "Restricted": "Restricted"
};



export default InvoiceSectionProperties;
