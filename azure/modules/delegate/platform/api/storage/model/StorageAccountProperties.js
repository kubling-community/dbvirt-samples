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
import AzureFilesIdentityBasedAuthentication from './AzureFilesIdentityBasedAuthentication';
import BlobRestoreStatus from './BlobRestoreStatus';
import CustomDomain from './CustomDomain';
import Encryption from './Encryption';
import Endpoints from './Endpoints';
import GeoReplicationStats from './GeoReplicationStats';
import ImmutableStorageAccount from './ImmutableStorageAccount';
import KeyCreationTime from './KeyCreationTime';
import KeyPolicy from './KeyPolicy';
import NetworkRuleSet from './NetworkRuleSet';
import PrivateEndpointConnection from './PrivateEndpointConnection';
import RoutingPreference from './RoutingPreference';
import SasPolicy from './SasPolicy';
import StorageAccountSkuConversionStatus from './StorageAccountSkuConversionStatus';

/**
 * The StorageAccountProperties model module.
 * @module model/StorageAccountProperties
 * @version 2023-01-01
 */
class StorageAccountProperties {
    /**
     * Constructs a new <code>StorageAccountProperties</code>.
     * Properties of the storage account.
     * @alias module:model/StorageAccountProperties
     */
    constructor() { 
        
        StorageAccountProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageAccountProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StorageAccountProperties} obj Optional instance to populate.
     * @return {module:model/StorageAccountProperties} The populated <code>StorageAccountProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageAccountProperties();

            if (data.hasOwnProperty('provisioningState')) {
                obj['provisioningState'] = ApiClient.convertToType(data['provisioningState'], 'String');
            }
            if (data.hasOwnProperty('primaryEndpoints')) {
                obj['primaryEndpoints'] = Endpoints.constructFromObject(data['primaryEndpoints']);
            }
            if (data.hasOwnProperty('primaryLocation')) {
                obj['primaryLocation'] = ApiClient.convertToType(data['primaryLocation'], 'String');
            }
            if (data.hasOwnProperty('statusOfPrimary')) {
                obj['statusOfPrimary'] = ApiClient.convertToType(data['statusOfPrimary'], 'String');
            }
            if (data.hasOwnProperty('lastGeoFailoverTime')) {
                obj['lastGeoFailoverTime'] = ApiClient.convertToType(data['lastGeoFailoverTime'], 'Date');
            }
            if (data.hasOwnProperty('secondaryLocation')) {
                obj['secondaryLocation'] = ApiClient.convertToType(data['secondaryLocation'], 'String');
            }
            if (data.hasOwnProperty('statusOfSecondary')) {
                obj['statusOfSecondary'] = ApiClient.convertToType(data['statusOfSecondary'], 'String');
            }
            if (data.hasOwnProperty('creationTime')) {
                obj['creationTime'] = ApiClient.convertToType(data['creationTime'], 'Date');
            }
            if (data.hasOwnProperty('customDomain')) {
                obj['customDomain'] = CustomDomain.constructFromObject(data['customDomain']);
            }
            if (data.hasOwnProperty('sasPolicy')) {
                obj['sasPolicy'] = SasPolicy.constructFromObject(data['sasPolicy']);
            }
            if (data.hasOwnProperty('keyPolicy')) {
                obj['keyPolicy'] = KeyPolicy.constructFromObject(data['keyPolicy']);
            }
            if (data.hasOwnProperty('keyCreationTime')) {
                obj['keyCreationTime'] = KeyCreationTime.constructFromObject(data['keyCreationTime']);
            }
            if (data.hasOwnProperty('secondaryEndpoints')) {
                obj['secondaryEndpoints'] = Endpoints.constructFromObject(data['secondaryEndpoints']);
            }
            if (data.hasOwnProperty('encryption')) {
                obj['encryption'] = Encryption.constructFromObject(data['encryption']);
            }
            if (data.hasOwnProperty('accessTier')) {
                obj['accessTier'] = ApiClient.convertToType(data['accessTier'], 'String');
            }
            if (data.hasOwnProperty('azureFilesIdentityBasedAuthentication')) {
                obj['azureFilesIdentityBasedAuthentication'] = AzureFilesIdentityBasedAuthentication.constructFromObject(data['azureFilesIdentityBasedAuthentication']);
            }
            if (data.hasOwnProperty('supportsHttpsTrafficOnly')) {
                obj['supportsHttpsTrafficOnly'] = ApiClient.convertToType(data['supportsHttpsTrafficOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('networkAcls')) {
                obj['networkAcls'] = NetworkRuleSet.constructFromObject(data['networkAcls']);
            }
            if (data.hasOwnProperty('isSftpEnabled')) {
                obj['isSftpEnabled'] = ApiClient.convertToType(data['isSftpEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isLocalUserEnabled')) {
                obj['isLocalUserEnabled'] = ApiClient.convertToType(data['isLocalUserEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isHnsEnabled')) {
                obj['isHnsEnabled'] = ApiClient.convertToType(data['isHnsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('geoReplicationStats')) {
                obj['geoReplicationStats'] = GeoReplicationStats.constructFromObject(data['geoReplicationStats']);
            }
            if (data.hasOwnProperty('failoverInProgress')) {
                obj['failoverInProgress'] = ApiClient.convertToType(data['failoverInProgress'], 'Boolean');
            }
            if (data.hasOwnProperty('largeFileSharesState')) {
                obj['largeFileSharesState'] = ApiClient.convertToType(data['largeFileSharesState'], 'String');
            }
            if (data.hasOwnProperty('privateEndpointConnections')) {
                obj['privateEndpointConnections'] = ApiClient.convertToType(data['privateEndpointConnections'], [PrivateEndpointConnection]);
            }
            if (data.hasOwnProperty('routingPreference')) {
                obj['routingPreference'] = RoutingPreference.constructFromObject(data['routingPreference']);
            }
            if (data.hasOwnProperty('blobRestoreStatus')) {
                obj['blobRestoreStatus'] = BlobRestoreStatus.constructFromObject(data['blobRestoreStatus']);
            }
            if (data.hasOwnProperty('allowBlobPublicAccess')) {
                obj['allowBlobPublicAccess'] = ApiClient.convertToType(data['allowBlobPublicAccess'], 'Boolean');
            }
            if (data.hasOwnProperty('minimumTlsVersion')) {
                obj['minimumTlsVersion'] = ApiClient.convertToType(data['minimumTlsVersion'], 'String');
            }
            if (data.hasOwnProperty('allowSharedKeyAccess')) {
                obj['allowSharedKeyAccess'] = ApiClient.convertToType(data['allowSharedKeyAccess'], 'Boolean');
            }
            if (data.hasOwnProperty('isNfsV3Enabled')) {
                obj['isNfsV3Enabled'] = ApiClient.convertToType(data['isNfsV3Enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('allowCrossTenantReplication')) {
                obj['allowCrossTenantReplication'] = ApiClient.convertToType(data['allowCrossTenantReplication'], 'Boolean');
            }
            if (data.hasOwnProperty('defaultToOAuthAuthentication')) {
                obj['defaultToOAuthAuthentication'] = ApiClient.convertToType(data['defaultToOAuthAuthentication'], 'Boolean');
            }
            if (data.hasOwnProperty('publicNetworkAccess')) {
                obj['publicNetworkAccess'] = ApiClient.convertToType(data['publicNetworkAccess'], 'String');
            }
            if (data.hasOwnProperty('immutableStorageWithVersioning')) {
                obj['immutableStorageWithVersioning'] = ImmutableStorageAccount.constructFromObject(data['immutableStorageWithVersioning']);
            }
            if (data.hasOwnProperty('allowedCopyScope')) {
                obj['allowedCopyScope'] = ApiClient.convertToType(data['allowedCopyScope'], 'String');
            }
            if (data.hasOwnProperty('storageAccountSkuConversionStatus')) {
                obj['storageAccountSkuConversionStatus'] = StorageAccountSkuConversionStatus.constructFromObject(data['storageAccountSkuConversionStatus']);
            }
            if (data.hasOwnProperty('dnsEndpointType')) {
                obj['dnsEndpointType'] = ApiClient.convertToType(data['dnsEndpointType'], 'String');
            }
            if (data.hasOwnProperty('isSkuConversionBlocked')) {
                obj['isSkuConversionBlocked'] = ApiClient.convertToType(data['isSkuConversionBlocked'], 'Boolean');
            }
            if (data.hasOwnProperty('accountMigrationInProgress')) {
                obj['accountMigrationInProgress'] = ApiClient.convertToType(data['accountMigrationInProgress'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageAccountProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageAccountProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['provisioningState'] && !(typeof data['provisioningState'] === 'string' || data['provisioningState'] instanceof String)) {
            throw new Error("Expected the field `provisioningState` to be a primitive type in the JSON string but got " + data['provisioningState']);
        }
        // validate the optional field `primaryEndpoints`
        if (data['primaryEndpoints']) { // data not null
          Endpoints.validateJSON(data['primaryEndpoints']);
        }
        // ensure the json data is a string
        if (data['primaryLocation'] && !(typeof data['primaryLocation'] === 'string' || data['primaryLocation'] instanceof String)) {
            throw new Error("Expected the field `primaryLocation` to be a primitive type in the JSON string but got " + data['primaryLocation']);
        }
        // ensure the json data is a string
        if (data['statusOfPrimary'] && !(typeof data['statusOfPrimary'] === 'string' || data['statusOfPrimary'] instanceof String)) {
            throw new Error("Expected the field `statusOfPrimary` to be a primitive type in the JSON string but got " + data['statusOfPrimary']);
        }
        // ensure the json data is a string
        if (data['secondaryLocation'] && !(typeof data['secondaryLocation'] === 'string' || data['secondaryLocation'] instanceof String)) {
            throw new Error("Expected the field `secondaryLocation` to be a primitive type in the JSON string but got " + data['secondaryLocation']);
        }
        // ensure the json data is a string
        if (data['statusOfSecondary'] && !(typeof data['statusOfSecondary'] === 'string' || data['statusOfSecondary'] instanceof String)) {
            throw new Error("Expected the field `statusOfSecondary` to be a primitive type in the JSON string but got " + data['statusOfSecondary']);
        }
        // validate the optional field `customDomain`
        if (data['customDomain']) { // data not null
          CustomDomain.validateJSON(data['customDomain']);
        }
        // validate the optional field `sasPolicy`
        if (data['sasPolicy']) { // data not null
          SasPolicy.validateJSON(data['sasPolicy']);
        }
        // validate the optional field `keyPolicy`
        if (data['keyPolicy']) { // data not null
          KeyPolicy.validateJSON(data['keyPolicy']);
        }
        // validate the optional field `keyCreationTime`
        if (data['keyCreationTime']) { // data not null
          KeyCreationTime.validateJSON(data['keyCreationTime']);
        }
        // validate the optional field `secondaryEndpoints`
        if (data['secondaryEndpoints']) { // data not null
          Endpoints.validateJSON(data['secondaryEndpoints']);
        }
        // validate the optional field `encryption`
        if (data['encryption']) { // data not null
          Encryption.validateJSON(data['encryption']);
        }
        // ensure the json data is a string
        if (data['accessTier'] && !(typeof data['accessTier'] === 'string' || data['accessTier'] instanceof String)) {
            throw new Error("Expected the field `accessTier` to be a primitive type in the JSON string but got " + data['accessTier']);
        }
        // validate the optional field `azureFilesIdentityBasedAuthentication`
        if (data['azureFilesIdentityBasedAuthentication']) { // data not null
          AzureFilesIdentityBasedAuthentication.validateJSON(data['azureFilesIdentityBasedAuthentication']);
        }
        // validate the optional field `networkAcls`
        if (data['networkAcls']) { // data not null
          NetworkRuleSet.validateJSON(data['networkAcls']);
        }
        // validate the optional field `geoReplicationStats`
        if (data['geoReplicationStats']) { // data not null
          GeoReplicationStats.validateJSON(data['geoReplicationStats']);
        }
        // ensure the json data is a string
        if (data['largeFileSharesState'] && !(typeof data['largeFileSharesState'] === 'string' || data['largeFileSharesState'] instanceof String)) {
            throw new Error("Expected the field `largeFileSharesState` to be a primitive type in the JSON string but got " + data['largeFileSharesState']);
        }
        if (data['privateEndpointConnections']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['privateEndpointConnections'])) {
                throw new Error("Expected the field `privateEndpointConnections` to be an array in the JSON data but got " + data['privateEndpointConnections']);
            }
            // validate the optional field `privateEndpointConnections` (array)
            for (const item of data['privateEndpointConnections']) {
                PrivateEndpointConnection.validateJSON(item);
            };
        }
        // validate the optional field `routingPreference`
        if (data['routingPreference']) { // data not null
          RoutingPreference.validateJSON(data['routingPreference']);
        }
        // validate the optional field `blobRestoreStatus`
        if (data['blobRestoreStatus']) { // data not null
          BlobRestoreStatus.validateJSON(data['blobRestoreStatus']);
        }
        // ensure the json data is a string
        if (data['minimumTlsVersion'] && !(typeof data['minimumTlsVersion'] === 'string' || data['minimumTlsVersion'] instanceof String)) {
            throw new Error("Expected the field `minimumTlsVersion` to be a primitive type in the JSON string but got " + data['minimumTlsVersion']);
        }
        // ensure the json data is a string
        if (data['publicNetworkAccess'] && !(typeof data['publicNetworkAccess'] === 'string' || data['publicNetworkAccess'] instanceof String)) {
            throw new Error("Expected the field `publicNetworkAccess` to be a primitive type in the JSON string but got " + data['publicNetworkAccess']);
        }
        // validate the optional field `immutableStorageWithVersioning`
        if (data['immutableStorageWithVersioning']) { // data not null
          ImmutableStorageAccount.validateJSON(data['immutableStorageWithVersioning']);
        }
        // ensure the json data is a string
        if (data['allowedCopyScope'] && !(typeof data['allowedCopyScope'] === 'string' || data['allowedCopyScope'] instanceof String)) {
            throw new Error("Expected the field `allowedCopyScope` to be a primitive type in the JSON string but got " + data['allowedCopyScope']);
        }
        // validate the optional field `storageAccountSkuConversionStatus`
        if (data['storageAccountSkuConversionStatus']) { // data not null
          StorageAccountSkuConversionStatus.validateJSON(data['storageAccountSkuConversionStatus']);
        }
        // ensure the json data is a string
        if (data['dnsEndpointType'] && !(typeof data['dnsEndpointType'] === 'string' || data['dnsEndpointType'] instanceof String)) {
            throw new Error("Expected the field `dnsEndpointType` to be a primitive type in the JSON string but got " + data['dnsEndpointType']);
        }

        return true;
    }


}



/**
 * Gets the status of the storage account at the time the operation was called.
 * @member {module:model/StorageAccountProperties.ProvisioningStateEnum} provisioningState
 */
StorageAccountProperties.prototype['provisioningState'] = undefined;

/**
 * @member {module:model/Endpoints} primaryEndpoints
 */
StorageAccountProperties.prototype['primaryEndpoints'] = undefined;

/**
 * Gets the location of the primary data center for the storage account.
 * @member {String} primaryLocation
 */
StorageAccountProperties.prototype['primaryLocation'] = undefined;

/**
 * Gets the status indicating whether the primary location of the storage account is available or unavailable.
 * @member {module:model/StorageAccountProperties.StatusOfPrimaryEnum} statusOfPrimary
 */
StorageAccountProperties.prototype['statusOfPrimary'] = undefined;

/**
 * Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
 * @member {Date} lastGeoFailoverTime
 */
StorageAccountProperties.prototype['lastGeoFailoverTime'] = undefined;

/**
 * Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
 * @member {String} secondaryLocation
 */
StorageAccountProperties.prototype['secondaryLocation'] = undefined;

/**
 * Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
 * @member {module:model/StorageAccountProperties.StatusOfSecondaryEnum} statusOfSecondary
 */
StorageAccountProperties.prototype['statusOfSecondary'] = undefined;

/**
 * Gets the creation date and time of the storage account in UTC.
 * @member {Date} creationTime
 */
StorageAccountProperties.prototype['creationTime'] = undefined;

/**
 * @member {module:model/CustomDomain} customDomain
 */
StorageAccountProperties.prototype['customDomain'] = undefined;

/**
 * @member {module:model/SasPolicy} sasPolicy
 */
StorageAccountProperties.prototype['sasPolicy'] = undefined;

/**
 * @member {module:model/KeyPolicy} keyPolicy
 */
StorageAccountProperties.prototype['keyPolicy'] = undefined;

/**
 * @member {module:model/KeyCreationTime} keyCreationTime
 */
StorageAccountProperties.prototype['keyCreationTime'] = undefined;

/**
 * @member {module:model/Endpoints} secondaryEndpoints
 */
StorageAccountProperties.prototype['secondaryEndpoints'] = undefined;

/**
 * @member {module:model/Encryption} encryption
 */
StorageAccountProperties.prototype['encryption'] = undefined;

/**
 * Required for storage accounts where kind = BlobStorage. The access tier is used for billing. The 'Premium' access tier is the default value for premium block blobs storage account type and it cannot be changed for the premium block blobs storage account type.
 * @member {module:model/StorageAccountProperties.AccessTierEnum} accessTier
 */
StorageAccountProperties.prototype['accessTier'] = undefined;

/**
 * @member {module:model/AzureFilesIdentityBasedAuthentication} azureFilesIdentityBasedAuthentication
 */
StorageAccountProperties.prototype['azureFilesIdentityBasedAuthentication'] = undefined;

/**
 * Allows https traffic only to storage service if sets to true.
 * @member {Boolean} supportsHttpsTrafficOnly
 */
StorageAccountProperties.prototype['supportsHttpsTrafficOnly'] = undefined;

/**
 * @member {module:model/NetworkRuleSet} networkAcls
 */
StorageAccountProperties.prototype['networkAcls'] = undefined;

/**
 * Enables Secure File Transfer Protocol, if set to true
 * @member {Boolean} isSftpEnabled
 */
StorageAccountProperties.prototype['isSftpEnabled'] = undefined;

/**
 * Enables local users feature, if set to true
 * @member {Boolean} isLocalUserEnabled
 */
StorageAccountProperties.prototype['isLocalUserEnabled'] = undefined;

/**
 * Account HierarchicalNamespace enabled if sets to true.
 * @member {Boolean} isHnsEnabled
 */
StorageAccountProperties.prototype['isHnsEnabled'] = undefined;

/**
 * @member {module:model/GeoReplicationStats} geoReplicationStats
 */
StorageAccountProperties.prototype['geoReplicationStats'] = undefined;

/**
 * If the failover is in progress, the value will be true, otherwise, it will be null.
 * @member {Boolean} failoverInProgress
 */
StorageAccountProperties.prototype['failoverInProgress'] = undefined;

/**
 * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
 * @member {module:model/StorageAccountProperties.LargeFileSharesStateEnum} largeFileSharesState
 */
StorageAccountProperties.prototype['largeFileSharesState'] = undefined;

/**
 * List of private endpoint connection associated with the specified storage account
 * @member {Array.<module:model/PrivateEndpointConnection>} privateEndpointConnections
 */
StorageAccountProperties.prototype['privateEndpointConnections'] = undefined;

/**
 * @member {module:model/RoutingPreference} routingPreference
 */
StorageAccountProperties.prototype['routingPreference'] = undefined;

/**
 * @member {module:model/BlobRestoreStatus} blobRestoreStatus
 */
StorageAccountProperties.prototype['blobRestoreStatus'] = undefined;

/**
 * Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is false for this property.
 * @member {Boolean} allowBlobPublicAccess
 */
StorageAccountProperties.prototype['allowBlobPublicAccess'] = undefined;

/**
 * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
 * @member {module:model/StorageAccountProperties.MinimumTlsVersionEnum} minimumTlsVersion
 */
StorageAccountProperties.prototype['minimumTlsVersion'] = undefined;

/**
 * Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true.
 * @member {Boolean} allowSharedKeyAccess
 */
StorageAccountProperties.prototype['allowSharedKeyAccess'] = undefined;

/**
 * NFS 3.0 protocol support enabled if set to true.
 * @member {Boolean} isNfsV3Enabled
 */
StorageAccountProperties.prototype['isNfsV3Enabled'] = undefined;

/**
 * Allow or disallow cross AAD tenant object replication. Set this property to true for new or existing accounts only if object replication policies will involve storage accounts in different AAD tenants. The default interpretation is false for new accounts to follow best security practices by default.
 * @member {Boolean} allowCrossTenantReplication
 */
StorageAccountProperties.prototype['allowCrossTenantReplication'] = undefined;

/**
 * A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property.
 * @member {Boolean} defaultToOAuthAuthentication
 */
StorageAccountProperties.prototype['defaultToOAuthAuthentication'] = undefined;

/**
 * Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
 * @member {module:model/StorageAccountProperties.PublicNetworkAccessEnum} publicNetworkAccess
 */
StorageAccountProperties.prototype['publicNetworkAccess'] = undefined;

/**
 * @member {module:model/ImmutableStorageAccount} immutableStorageWithVersioning
 */
StorageAccountProperties.prototype['immutableStorageWithVersioning'] = undefined;

/**
 * Restrict copy to and from Storage Accounts within an AAD tenant or with Private Links to the same VNet.
 * @member {module:model/StorageAccountProperties.AllowedCopyScopeEnum} allowedCopyScope
 */
StorageAccountProperties.prototype['allowedCopyScope'] = undefined;

/**
 * @member {module:model/StorageAccountSkuConversionStatus} storageAccountSkuConversionStatus
 */
StorageAccountProperties.prototype['storageAccountSkuConversionStatus'] = undefined;

/**
 * Allows you to specify the type of endpoint. Set this to AzureDNSZone to create a large number of accounts in a single subscription, which creates accounts in an Azure DNS Zone and the endpoint URL will have an alphanumeric DNS Zone identifier.
 * @member {module:model/StorageAccountProperties.DnsEndpointTypeEnum} dnsEndpointType
 */
StorageAccountProperties.prototype['dnsEndpointType'] = undefined;

/**
 * This property will be set to true or false on an event of ongoing migration. Default value is null.
 * @member {Boolean} isSkuConversionBlocked
 */
StorageAccountProperties.prototype['isSkuConversionBlocked'] = undefined;

/**
 * If customer initiated account migration is in progress, the value will be true else it will be null.
 * @member {Boolean} accountMigrationInProgress
 */
StorageAccountProperties.prototype['accountMigrationInProgress'] = undefined;





/**
 * Allowed values for the <code>provisioningState</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountProperties['ProvisioningStateEnum'] = {

    /**
     * value: "Creating"
     * @const
     */
    "Creating": "Creating",

    /**
     * value: "ResolvingDNS"
     * @const
     */
    "ResolvingDNS": "ResolvingDNS",

    /**
     * value: "Succeeded"
     * @const
     */
    "Succeeded": "Succeeded"
};


/**
 * Allowed values for the <code>statusOfPrimary</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountProperties['StatusOfPrimaryEnum'] = {

    /**
     * value: "available"
     * @const
     */
    "available": "available",

    /**
     * value: "unavailable"
     * @const
     */
    "unavailable": "unavailable"
};


/**
 * Allowed values for the <code>statusOfSecondary</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountProperties['StatusOfSecondaryEnum'] = {

    /**
     * value: "available"
     * @const
     */
    "available": "available",

    /**
     * value: "unavailable"
     * @const
     */
    "unavailable": "unavailable"
};


/**
 * Allowed values for the <code>accessTier</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountProperties['AccessTierEnum'] = {

    /**
     * value: "Hot"
     * @const
     */
    "Hot": "Hot",

    /**
     * value: "Cool"
     * @const
     */
    "Cool": "Cool",

    /**
     * value: "Premium"
     * @const
     */
    "Premium": "Premium"
};


/**
 * Allowed values for the <code>largeFileSharesState</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountProperties['LargeFileSharesStateEnum'] = {

    /**
     * value: "Disabled"
     * @const
     */
    "Disabled": "Disabled",

    /**
     * value: "Enabled"
     * @const
     */
    "Enabled": "Enabled"
};


/**
 * Allowed values for the <code>minimumTlsVersion</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountProperties['MinimumTlsVersionEnum'] = {

    /**
     * value: "TLS1_0"
     * @const
     */
    "0": "TLS1_0",

    /**
     * value: "TLS1_1"
     * @const
     */
    "1": "TLS1_1",

    /**
     * value: "TLS1_2"
     * @const
     */
    "2": "TLS1_2"
};


/**
 * Allowed values for the <code>publicNetworkAccess</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountProperties['PublicNetworkAccessEnum'] = {

    /**
     * value: "Enabled"
     * @const
     */
    "Enabled": "Enabled",

    /**
     * value: "Disabled"
     * @const
     */
    "Disabled": "Disabled"
};


/**
 * Allowed values for the <code>allowedCopyScope</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountProperties['AllowedCopyScopeEnum'] = {

    /**
     * value: "PrivateLink"
     * @const
     */
    "PrivateLink": "PrivateLink",

    /**
     * value: "AAD"
     * @const
     */
    "AAD": "AAD"
};


/**
 * Allowed values for the <code>dnsEndpointType</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountProperties['DnsEndpointTypeEnum'] = {

    /**
     * value: "Standard"
     * @const
     */
    "Standard": "Standard",

    /**
     * value: "AzureDnsZone"
     * @const
     */
    "AzureDnsZone": "AzureDnsZone"
};



export default StorageAccountProperties;

