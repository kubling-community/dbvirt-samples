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
 * The UploadWatermark model module.
 * @module model/UploadWatermark
 * @version 2023-01-15-preview
 */
class UploadWatermark {
    /**
     * Constructs a new <code>UploadWatermark</code>.
     * Properties on upload watermark.  Mostly timestamp for each upload data type
     * @alias module:model/UploadWatermark
     */
    constructor() { 
        
        UploadWatermark.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadWatermark</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadWatermark} obj Optional instance to populate.
     * @return {module:model/UploadWatermark} The populated <code>UploadWatermark</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadWatermark();

            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = ApiClient.convertToType(data['metrics'], 'Date');
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], 'Date');
            }
            if (data.hasOwnProperty('usages')) {
                obj['usages'] = ApiClient.convertToType(data['usages'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UploadWatermark</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadWatermark</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Last uploaded date for metrics from kubernetes cluster. Defaults to current date time
 * @member {Date} metrics
 */
UploadWatermark.prototype['metrics'] = undefined;

/**
 * Last uploaded date for logs from kubernetes cluster. Defaults to current date time
 * @member {Date} logs
 */
UploadWatermark.prototype['logs'] = undefined;

/**
 * Last uploaded date for usages from kubernetes cluster. Defaults to current date time
 * @member {Date} usages
 */
UploadWatermark.prototype['usages'] = undefined;






export default UploadWatermark;

