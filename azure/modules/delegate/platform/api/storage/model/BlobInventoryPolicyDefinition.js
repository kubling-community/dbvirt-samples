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
import BlobInventoryPolicyFilter from './BlobInventoryPolicyFilter';

/**
 * The BlobInventoryPolicyDefinition model module.
 * @module model/BlobInventoryPolicyDefinition
 * @version 2023-01-01
 */
class BlobInventoryPolicyDefinition {
    /**
     * Constructs a new <code>BlobInventoryPolicyDefinition</code>.
     * An object that defines the blob inventory rule.
     * @alias module:model/BlobInventoryPolicyDefinition
     * @param format {module:model/BlobInventoryPolicyDefinition.FormatEnum} This is a required field, it specifies the format for the inventory files.
     * @param schedule {module:model/BlobInventoryPolicyDefinition.ScheduleEnum} This is a required field. This field is used to schedule an inventory formation.
     * @param objectType {module:model/BlobInventoryPolicyDefinition.ObjectTypeEnum} This is a required field. This field specifies the scope of the inventory created either at the blob or container level.
     * @param schemaFields {Array.<String>} This is a required field. This field specifies the fields and properties of the object to be included in the inventory. The Schema field value 'Name' is always required. The valid values for this field for the 'Blob' definition.objectType include 'Name, Creation-Time, Last-Modified, Content-Length, Content-MD5, BlobType, AccessTier, AccessTierChangeTime, AccessTierInferred, Tags, Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, Snapshot, VersionId, IsCurrentVersion, Metadata, LastAccessTime, Tags, Etag, ContentType, ContentEncoding, ContentLanguage, ContentCRC64, CacheControl, ContentDisposition, LeaseStatus, LeaseState, LeaseDuration, ServerEncrypted, Deleted, DeletionId, DeletedTime, RemainingRetentionDays, ImmutabilityPolicyUntilDate, ImmutabilityPolicyMode, LegalHold, CopyId, CopyStatus, CopySource, CopyProgress, CopyCompletionTime, CopyStatusDescription, CustomerProvidedKeySha256, RehydratePriority, ArchiveStatus, XmsBlobSequenceNumber, EncryptionScope, IncrementalCopy, TagCount'. For Blob object type schema field value 'DeletedTime' is applicable only for Hns enabled accounts. The valid values for 'Container' definition.objectType include 'Name, Last-Modified, Metadata, LeaseStatus, LeaseState, LeaseDuration, PublicAccess, HasImmutabilityPolicy, HasLegalHold, Etag, DefaultEncryptionScope, DenyEncryptionScopeOverride, ImmutableStorageWithVersioningEnabled, Deleted, Version, DeletedTime, RemainingRetentionDays'. Schema field values 'Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, DeletionId' are valid only for Hns enabled accounts.Schema field values 'Tags, TagCount' are only valid for Non-Hns accounts.
     */
    constructor(format, schedule, objectType, schemaFields) { 
        
        BlobInventoryPolicyDefinition.initialize(this, format, schedule, objectType, schemaFields);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, format, schedule, objectType, schemaFields) { 
        obj['format'] = format;
        obj['schedule'] = schedule;
        obj['objectType'] = objectType;
        obj['schemaFields'] = schemaFields;
    }

    /**
     * Constructs a <code>BlobInventoryPolicyDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlobInventoryPolicyDefinition} obj Optional instance to populate.
     * @return {module:model/BlobInventoryPolicyDefinition} The populated <code>BlobInventoryPolicyDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlobInventoryPolicyDefinition();

            if (data.hasOwnProperty('filters')) {
                obj['filters'] = BlobInventoryPolicyFilter.constructFromObject(data['filters']);
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = ApiClient.convertToType(data['schedule'], 'String');
            }
            if (data.hasOwnProperty('objectType')) {
                obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
            }
            if (data.hasOwnProperty('schemaFields')) {
                obj['schemaFields'] = ApiClient.convertToType(data['schemaFields'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BlobInventoryPolicyDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlobInventoryPolicyDefinition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BlobInventoryPolicyDefinition.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `filters`
        if (data['filters']) { // data not null
          BlobInventoryPolicyFilter.validateJSON(data['filters']);
        }
        // ensure the json data is a string
        if (data['format'] && !(typeof data['format'] === 'string' || data['format'] instanceof String)) {
            throw new Error("Expected the field `format` to be a primitive type in the JSON string but got " + data['format']);
        }
        // ensure the json data is a string
        if (data['schedule'] && !(typeof data['schedule'] === 'string' || data['schedule'] instanceof String)) {
            throw new Error("Expected the field `schedule` to be a primitive type in the JSON string but got " + data['schedule']);
        }
        // ensure the json data is a string
        if (data['objectType'] && !(typeof data['objectType'] === 'string' || data['objectType'] instanceof String)) {
            throw new Error("Expected the field `objectType` to be a primitive type in the JSON string but got " + data['objectType']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['schemaFields'])) {
            throw new Error("Expected the field `schemaFields` to be an array in the JSON data but got " + data['schemaFields']);
        }

        return true;
    }


}

BlobInventoryPolicyDefinition.RequiredProperties = ["format", "schedule", "objectType", "schemaFields"];

/**
 * @member {module:model/BlobInventoryPolicyFilter} filters
 */
BlobInventoryPolicyDefinition.prototype['filters'] = undefined;

/**
 * This is a required field, it specifies the format for the inventory files.
 * @member {module:model/BlobInventoryPolicyDefinition.FormatEnum} format
 */
BlobInventoryPolicyDefinition.prototype['format'] = undefined;

/**
 * This is a required field. This field is used to schedule an inventory formation.
 * @member {module:model/BlobInventoryPolicyDefinition.ScheduleEnum} schedule
 */
BlobInventoryPolicyDefinition.prototype['schedule'] = undefined;

/**
 * This is a required field. This field specifies the scope of the inventory created either at the blob or container level.
 * @member {module:model/BlobInventoryPolicyDefinition.ObjectTypeEnum} objectType
 */
BlobInventoryPolicyDefinition.prototype['objectType'] = undefined;

/**
 * This is a required field. This field specifies the fields and properties of the object to be included in the inventory. The Schema field value 'Name' is always required. The valid values for this field for the 'Blob' definition.objectType include 'Name, Creation-Time, Last-Modified, Content-Length, Content-MD5, BlobType, AccessTier, AccessTierChangeTime, AccessTierInferred, Tags, Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, Snapshot, VersionId, IsCurrentVersion, Metadata, LastAccessTime, Tags, Etag, ContentType, ContentEncoding, ContentLanguage, ContentCRC64, CacheControl, ContentDisposition, LeaseStatus, LeaseState, LeaseDuration, ServerEncrypted, Deleted, DeletionId, DeletedTime, RemainingRetentionDays, ImmutabilityPolicyUntilDate, ImmutabilityPolicyMode, LegalHold, CopyId, CopyStatus, CopySource, CopyProgress, CopyCompletionTime, CopyStatusDescription, CustomerProvidedKeySha256, RehydratePriority, ArchiveStatus, XmsBlobSequenceNumber, EncryptionScope, IncrementalCopy, TagCount'. For Blob object type schema field value 'DeletedTime' is applicable only for Hns enabled accounts. The valid values for 'Container' definition.objectType include 'Name, Last-Modified, Metadata, LeaseStatus, LeaseState, LeaseDuration, PublicAccess, HasImmutabilityPolicy, HasLegalHold, Etag, DefaultEncryptionScope, DenyEncryptionScopeOverride, ImmutableStorageWithVersioningEnabled, Deleted, Version, DeletedTime, RemainingRetentionDays'. Schema field values 'Expiry-Time, hdi_isfolder, Owner, Group, Permissions, Acl, DeletionId' are valid only for Hns enabled accounts.Schema field values 'Tags, TagCount' are only valid for Non-Hns accounts.
 * @member {Array.<String>} schemaFields
 */
BlobInventoryPolicyDefinition.prototype['schemaFields'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
BlobInventoryPolicyDefinition['FormatEnum'] = {

    /**
     * value: "Csv"
     * @const
     */
    "Csv": "Csv",

    /**
     * value: "Parquet"
     * @const
     */
    "Parquet": "Parquet"
};


/**
 * Allowed values for the <code>schedule</code> property.
 * @enum {String}
 * @readonly
 */
BlobInventoryPolicyDefinition['ScheduleEnum'] = {

    /**
     * value: "Daily"
     * @const
     */
    "Daily": "Daily",

    /**
     * value: "Weekly"
     * @const
     */
    "Weekly": "Weekly"
};


/**
 * Allowed values for the <code>objectType</code> property.
 * @enum {String}
 * @readonly
 */
BlobInventoryPolicyDefinition['ObjectTypeEnum'] = {

    /**
     * value: "Blob"
     * @const
     */
    "Blob": "Blob",

    /**
     * value: "Container"
     * @const
     */
    "Container": "Container"
};



export default BlobInventoryPolicyDefinition;

