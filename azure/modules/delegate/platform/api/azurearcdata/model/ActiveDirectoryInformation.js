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
import KeytabInformation from './KeytabInformation';

/**
 * The ActiveDirectoryInformation model module.
 * @module model/ActiveDirectoryInformation
 * @version 2023-01-15-preview
 */
class ActiveDirectoryInformation {
    /**
     * Constructs a new <code>ActiveDirectoryInformation</code>.
     * Active Directory information that related to the resource.
     * @alias module:model/ActiveDirectoryInformation
     */
    constructor() { 
        
        ActiveDirectoryInformation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActiveDirectoryInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActiveDirectoryInformation} obj Optional instance to populate.
     * @return {module:model/ActiveDirectoryInformation} The populated <code>ActiveDirectoryInformation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActiveDirectoryInformation();

            if (data.hasOwnProperty('keytabInformation')) {
                obj['keytabInformation'] = KeytabInformation.constructFromObject(data['keytabInformation']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActiveDirectoryInformation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActiveDirectoryInformation</code>.
     */
    static validateJSON(data) {
        // validate the optional field `keytabInformation`
        if (data['keytabInformation']) { // data not null
          KeytabInformation.validateJSON(data['keytabInformation']);
        }

        return true;
    }


}



/**
 * @member {module:model/KeytabInformation} keytabInformation
 */
ActiveDirectoryInformation.prototype['keytabInformation'] = undefined;






export default ActiveDirectoryInformation;

