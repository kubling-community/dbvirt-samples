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
 * The K8sActiveDirectoryConnector model module.
 * @module model/K8sActiveDirectoryConnector
 * @version 2023-01-15-preview
 */
class K8sActiveDirectoryConnector {
    /**
     * Constructs a new <code>K8sActiveDirectoryConnector</code>.
     * @alias module:model/K8sActiveDirectoryConnector
     */
    constructor() { 
        
        K8sActiveDirectoryConnector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>K8sActiveDirectoryConnector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/K8sActiveDirectoryConnector} obj Optional instance to populate.
     * @return {module:model/K8sActiveDirectoryConnector} The populated <code>K8sActiveDirectoryConnector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new K8sActiveDirectoryConnector();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>K8sActiveDirectoryConnector</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>K8sActiveDirectoryConnector</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
        }

        return true;
    }


}



/**
 * Name of the connector
 * @member {String} name
 */
K8sActiveDirectoryConnector.prototype['name'] = undefined;

/**
 * Name space of the connector
 * @member {String} namespace
 */
K8sActiveDirectoryConnector.prototype['namespace'] = undefined;






export default K8sActiveDirectoryConnector;

