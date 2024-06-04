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
 * The GeoReplicationStats model module.
 * @module model/GeoReplicationStats
 * @version 2023-01-01
 */
class GeoReplicationStats {
    /**
     * Constructs a new <code>GeoReplicationStats</code>.
     * Statistics related to replication for storage account&#39;s Blob, Table, Queue and File services. It is only available when geo-redundant replication is enabled for the storage account.
     * @alias module:model/GeoReplicationStats
     */
    constructor() { 
        
        GeoReplicationStats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GeoReplicationStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeoReplicationStats} obj Optional instance to populate.
     * @return {module:model/GeoReplicationStats} The populated <code>GeoReplicationStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeoReplicationStats();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('lastSyncTime')) {
                obj['lastSyncTime'] = ApiClient.convertToType(data['lastSyncTime'], 'Date');
            }
            if (data.hasOwnProperty('canFailover')) {
                obj['canFailover'] = ApiClient.convertToType(data['canFailover'], 'Boolean');
            }
            if (data.hasOwnProperty('canPlannedFailover')) {
                obj['canPlannedFailover'] = ApiClient.convertToType(data['canPlannedFailover'], 'Boolean');
            }
            if (data.hasOwnProperty('postFailoverRedundancy')) {
                obj['postFailoverRedundancy'] = ApiClient.convertToType(data['postFailoverRedundancy'], 'String');
            }
            if (data.hasOwnProperty('postPlannedFailoverRedundancy')) {
                obj['postPlannedFailoverRedundancy'] = ApiClient.convertToType(data['postPlannedFailoverRedundancy'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GeoReplicationStats</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GeoReplicationStats</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['postFailoverRedundancy'] && !(typeof data['postFailoverRedundancy'] === 'string' || data['postFailoverRedundancy'] instanceof String)) {
            throw new Error("Expected the field `postFailoverRedundancy` to be a primitive type in the JSON string but got " + data['postFailoverRedundancy']);
        }
        // ensure the json data is a string
        if (data['postPlannedFailoverRedundancy'] && !(typeof data['postPlannedFailoverRedundancy'] === 'string' || data['postPlannedFailoverRedundancy'] instanceof String)) {
            throw new Error("Expected the field `postPlannedFailoverRedundancy` to be a primitive type in the JSON string but got " + data['postPlannedFailoverRedundancy']);
        }

        return true;
    }


}



/**
 * The status of the secondary location. Possible values are: - Live: Indicates that the secondary location is active and operational. - Bootstrap: Indicates initial synchronization from the primary location to the secondary location is in progress.This typically occurs when replication is first enabled. - Unavailable: Indicates that the secondary location is temporarily unavailable.
 * @member {module:model/GeoReplicationStats.StatusEnum} status
 */
GeoReplicationStats.prototype['status'] = undefined;

/**
 * All primary writes preceding this UTC date/time value are guaranteed to be available for read operations. Primary writes following this point in time may or may not be available for reads. Element may be default value if value of LastSyncTime is not available, this can happen if secondary is offline or we are in bootstrap.
 * @member {Date} lastSyncTime
 */
GeoReplicationStats.prototype['lastSyncTime'] = undefined;

/**
 * A boolean flag which indicates whether or not account failover is supported for the account.
 * @member {Boolean} canFailover
 */
GeoReplicationStats.prototype['canFailover'] = undefined;

/**
 * A boolean flag which indicates whether or not planned account failover is supported for the account.
 * @member {Boolean} canPlannedFailover
 */
GeoReplicationStats.prototype['canPlannedFailover'] = undefined;

/**
 * The redundancy type of the account after an account failover is performed.
 * @member {module:model/GeoReplicationStats.PostFailoverRedundancyEnum} postFailoverRedundancy
 */
GeoReplicationStats.prototype['postFailoverRedundancy'] = undefined;

/**
 * The redundancy type of the account after a planned account failover is performed.
 * @member {module:model/GeoReplicationStats.PostPlannedFailoverRedundancyEnum} postPlannedFailoverRedundancy
 */
GeoReplicationStats.prototype['postPlannedFailoverRedundancy'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
GeoReplicationStats['StatusEnum'] = {

    /**
     * value: "Live"
     * @const
     */
    "Live": "Live",

    /**
     * value: "Bootstrap"
     * @const
     */
    "Bootstrap": "Bootstrap",

    /**
     * value: "Unavailable"
     * @const
     */
    "Unavailable": "Unavailable"
};


/**
 * Allowed values for the <code>postFailoverRedundancy</code> property.
 * @enum {String}
 * @readonly
 */
GeoReplicationStats['PostFailoverRedundancyEnum'] = {

    /**
     * value: "Standard_LRS"
     * @const
     */
    "LRS": "Standard_LRS",

    /**
     * value: "Standard_ZRS"
     * @const
     */
    "ZRS": "Standard_ZRS"
};


/**
 * Allowed values for the <code>postPlannedFailoverRedundancy</code> property.
 * @enum {String}
 * @readonly
 */
GeoReplicationStats['PostPlannedFailoverRedundancyEnum'] = {

    /**
     * value: "Standard_GRS"
     * @const
     */
    "GRS": "Standard_GRS",

    /**
     * value: "Standard_GZRS"
     * @const
     */
    "GZRS": "Standard_GZRS",

    /**
     * value: "Standard_RAGRS"
     * @const
     */
    "RAGRS": "Standard_RAGRS",

    /**
     * value: "Standard_RAGZRS"
     * @const
     */
    "RAGZRS": "Standard_RAGZRS"
};



export default GeoReplicationStats;

