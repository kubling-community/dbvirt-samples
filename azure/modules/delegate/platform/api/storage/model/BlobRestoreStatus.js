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
import BlobRestoreParameters from './BlobRestoreParameters';

/**
 * The BlobRestoreStatus model module.
 * @module model/BlobRestoreStatus
 * @version 2023-01-01
 */
class BlobRestoreStatus {
    /**
     * Constructs a new <code>BlobRestoreStatus</code>.
     * Blob restore status.
     * @alias module:model/BlobRestoreStatus
     */
    constructor() { 
        
        BlobRestoreStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BlobRestoreStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlobRestoreStatus} obj Optional instance to populate.
     * @return {module:model/BlobRestoreStatus} The populated <code>BlobRestoreStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlobRestoreStatus();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('failureReason')) {
                obj['failureReason'] = ApiClient.convertToType(data['failureReason'], 'String');
            }
            if (data.hasOwnProperty('restoreId')) {
                obj['restoreId'] = ApiClient.convertToType(data['restoreId'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = BlobRestoreParameters.constructFromObject(data['parameters']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BlobRestoreStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlobRestoreStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['failureReason'] && !(typeof data['failureReason'] === 'string' || data['failureReason'] instanceof String)) {
            throw new Error("Expected the field `failureReason` to be a primitive type in the JSON string but got " + data['failureReason']);
        }
        // ensure the json data is a string
        if (data['restoreId'] && !(typeof data['restoreId'] === 'string' || data['restoreId'] instanceof String)) {
            throw new Error("Expected the field `restoreId` to be a primitive type in the JSON string but got " + data['restoreId']);
        }
        // validate the optional field `parameters`
        if (data['parameters']) { // data not null
          BlobRestoreParameters.validateJSON(data['parameters']);
        }

        return true;
    }


}



/**
 * The status of blob restore progress. Possible values are: - InProgress: Indicates that blob restore is ongoing. - Complete: Indicates that blob restore has been completed successfully. - Failed: Indicates that blob restore is failed.
 * @member {module:model/BlobRestoreStatus.StatusEnum} status
 */
BlobRestoreStatus.prototype['status'] = undefined;

/**
 * Failure reason when blob restore is failed.
 * @member {String} failureReason
 */
BlobRestoreStatus.prototype['failureReason'] = undefined;

/**
 * Id for tracking blob restore request.
 * @member {String} restoreId
 */
BlobRestoreStatus.prototype['restoreId'] = undefined;

/**
 * @member {module:model/BlobRestoreParameters} parameters
 */
BlobRestoreStatus.prototype['parameters'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
BlobRestoreStatus['StatusEnum'] = {

    /**
     * value: "InProgress"
     * @const
     */
    "InProgress": "InProgress",

    /**
     * value: "Complete"
     * @const
     */
    "Complete": "Complete",

    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed"
};



export default BlobRestoreStatus;

