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
import K8sNetworkSettings from './K8sNetworkSettings';

/**
 * The K8sSettings model module.
 * @module model/K8sSettings
 * @version 2023-01-15-preview
 */
class K8sSettings {
    /**
     * Constructs a new <code>K8sSettings</code>.
     * The kubernetes settings information.
     * @alias module:model/K8sSettings
     * @extends Object
     */
    constructor() { 
        
        K8sSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>K8sSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/K8sSettings} obj Optional instance to populate.
     * @return {module:model/K8sSettings} The populated <code>K8sSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new K8sSettings();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('network')) {
                obj['network'] = K8sNetworkSettings.constructFromObject(data['network']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>K8sSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>K8sSettings</code>.
     */
    static validateJSON(data) {
        // validate the optional field `network`
        if (data['network']) { // data not null
          K8sNetworkSettings.validateJSON(data['network']);
        }

        return true;
    }


}



/**
 * @member {module:model/K8sNetworkSettings} network
 */
K8sSettings.prototype['network'] = undefined;






export default K8sSettings;
