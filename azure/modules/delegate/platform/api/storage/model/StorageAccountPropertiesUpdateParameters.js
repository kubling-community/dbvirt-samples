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
import CustomDomain from './CustomDomain';
import Encryption from './Encryption';
import ImmutableStorageAccount from './ImmutableStorageAccount';
import KeyPolicy from './KeyPolicy';
import NetworkRuleSet from './NetworkRuleSet';
import RoutingPreference from './RoutingPreference';
import SasPolicy from './SasPolicy';

/**
 * The StorageAccountPropertiesUpdateParameters model module.
 * @module model/StorageAccountPropertiesUpdateParameters
 * @version 2023-01-01
 */
class StorageAccountPropertiesUpdateParameters {
    /**
     * Constructs a new <code>StorageAccountPropertiesUpdateParameters</code>.
     * The parameters used when updating a storage account.
     * @alias module:model/StorageAccountPropertiesUpdateParameters
     */
    constructor() { 
        
        StorageAccountPropertiesUpdateParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageAccountPropertiesUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StorageAccountPropertiesUpdateParameters} obj Optional instance to populate.
     * @return {module:model/StorageAccountPropertiesUpdateParameters} The populated <code>StorageAccountPropertiesUpdateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageAccountPropertiesUpdateParameters();

            if (data.hasOwnProperty('customDomain')) {
                obj['customDomain'] = CustomDomain.constructFromObject(data['customDomain']);
            }
            if (data.hasOwnProperty('encryption')) {
                obj['encryption'] = Encryption.constructFromObject(data['encryption']);
            }
            if (data.hasOwnProperty('sasPolicy')) {
                obj['sasPolicy'] = SasPolicy.constructFromObject(data['sasPolicy']);
            }
            if (data.hasOwnProperty('keyPolicy')) {
                obj['keyPolicy'] = KeyPolicy.constructFromObject(data['keyPolicy']);
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
            if (data.hasOwnProperty('isSftpEnabled')) {
                obj['isSftpEnabled'] = ApiClient.convertToType(data['isSftpEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isLocalUserEnabled')) {
                obj['isLocalUserEnabled'] = ApiClient.convertToType(data['isLocalUserEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('networkAcls')) {
                obj['networkAcls'] = NetworkRuleSet.constructFromObject(data['networkAcls']);
            }
            if (data.hasOwnProperty('largeFileSharesState')) {
                obj['largeFileSharesState'] = ApiClient.convertToType(data['largeFileSharesState'], 'String');
            }
            if (data.hasOwnProperty('routingPreference')) {
                obj['routingPreference'] = RoutingPreference.constructFromObject(data['routingPreference']);
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
            if (data.hasOwnProperty('dnsEndpointType')) {
                obj['dnsEndpointType'] = ApiClient.convertToType(data['dnsEndpointType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageAccountPropertiesUpdateParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageAccountPropertiesUpdateParameters</code>.
     */
    static validateJSON(data) {
        // validate the optional field `customDomain`
        if (data['customDomain']) { // data not null
          CustomDomain.validateJSON(data['customDomain']);
        }
        // validate the optional field `encryption`
        if (data['encryption']) { // data not null
          Encryption.validateJSON(data['encryption']);
        }
        // validate the optional field `sasPolicy`
        if (data['sasPolicy']) { // data not null
          SasPolicy.validateJSON(data['sasPolicy']);
        }
        // validate the optional field `keyPolicy`
        if (data['keyPolicy']) { // data not null
          KeyPolicy.validateJSON(data['keyPolicy']);
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
        // ensure the json data is a string
        if (data['largeFileSharesState'] && !(typeof data['largeFileSharesState'] === 'string' || data['largeFileSharesState'] instanceof String)) {
            throw new Error("Expected the field `largeFileSharesState` to be a primitive type in the JSON string but got " + data['largeFileSharesState']);
        }
        // validate the optional field `routingPreference`
        if (data['routingPreference']) { // data not null
          RoutingPreference.validateJSON(data['routingPreference']);
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
        // ensure the json data is a string
        if (data['dnsEndpointType'] && !(typeof data['dnsEndpointType'] === 'string' || data['dnsEndpointType'] instanceof String)) {
            throw new Error("Expected the field `dnsEndpointType` to be a primitive type in the JSON string but got " + data['dnsEndpointType']);
        }

        return true;
    }


}



/**
 * @member {module:model/CustomDomain} customDomain
 */
StorageAccountPropertiesUpdateParameters.prototype['customDomain'] = undefined;

/**
 * @member {module:model/Encryption} encryption
 */
StorageAccountPropertiesUpdateParameters.prototype['encryption'] = undefined;

/**
 * @member {module:model/SasPolicy} sasPolicy
 */
StorageAccountPropertiesUpdateParameters.prototype['sasPolicy'] = undefined;

/**
 * @member {module:model/KeyPolicy} keyPolicy
 */
StorageAccountPropertiesUpdateParameters.prototype['keyPolicy'] = undefined;

/**
 * Required for storage accounts where kind = BlobStorage. The access tier is used for billing. The 'Premium' access tier is the default value for premium block blobs storage account type and it cannot be changed for the premium block blobs storage account type.
 * @member {module:model/StorageAccountPropertiesUpdateParameters.AccessTierEnum} accessTier
 */
StorageAccountPropertiesUpdateParameters.prototype['accessTier'] = undefined;

/**
 * @member {module:model/AzureFilesIdentityBasedAuthentication} azureFilesIdentityBasedAuthentication
 */
StorageAccountPropertiesUpdateParameters.prototype['azureFilesIdentityBasedAuthentication'] = undefined;

/**
 * Allows https traffic only to storage service if sets to true.
 * @member {Boolean} supportsHttpsTrafficOnly
 */
StorageAccountPropertiesUpdateParameters.prototype['supportsHttpsTrafficOnly'] = undefined;

/**
 * Enables Secure File Transfer Protocol, if set to true
 * @member {Boolean} isSftpEnabled
 */
StorageAccountPropertiesUpdateParameters.prototype['isSftpEnabled'] = undefined;

/**
 * Enables local users feature, if set to true
 * @member {Boolean} isLocalUserEnabled
 */
StorageAccountPropertiesUpdateParameters.prototype['isLocalUserEnabled'] = undefined;

/**
 * @member {module:model/NetworkRuleSet} networkAcls
 */
StorageAccountPropertiesUpdateParameters.prototype['networkAcls'] = undefined;

/**
 * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
 * @member {module:model/StorageAccountPropertiesUpdateParameters.LargeFileSharesStateEnum} largeFileSharesState
 */
StorageAccountPropertiesUpdateParameters.prototype['largeFileSharesState'] = undefined;

/**
 * @member {module:model/RoutingPreference} routingPreference
 */
StorageAccountPropertiesUpdateParameters.prototype['routingPreference'] = undefined;

/**
 * Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is false for this property.
 * @member {Boolean} allowBlobPublicAccess
 */
StorageAccountPropertiesUpdateParameters.prototype['allowBlobPublicAccess'] = undefined;

/**
 * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
 * @member {module:model/StorageAccountPropertiesUpdateParameters.MinimumTlsVersionEnum} minimumTlsVersion
 */
StorageAccountPropertiesUpdateParameters.prototype['minimumTlsVersion'] = undefined;

/**
 * Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true.
 * @member {Boolean} allowSharedKeyAccess
 */
StorageAccountPropertiesUpdateParameters.prototype['allowSharedKeyAccess'] = undefined;

/**
 * Allow or disallow cross AAD tenant object replication. Set this property to true for new or existing accounts only if object replication policies will involve storage accounts in different AAD tenants. The default interpretation is false for new accounts to follow best security practices by default.
 * @member {Boolean} allowCrossTenantReplication
 */
StorageAccountPropertiesUpdateParameters.prototype['allowCrossTenantReplication'] = undefined;

/**
 * A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property.
 * @member {Boolean} defaultToOAuthAuthentication
 */
StorageAccountPropertiesUpdateParameters.prototype['defaultToOAuthAuthentication'] = undefined;

/**
 * Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
 * @member {module:model/StorageAccountPropertiesUpdateParameters.PublicNetworkAccessEnum} publicNetworkAccess
 */
StorageAccountPropertiesUpdateParameters.prototype['publicNetworkAccess'] = undefined;

/**
 * @member {module:model/ImmutableStorageAccount} immutableStorageWithVersioning
 */
StorageAccountPropertiesUpdateParameters.prototype['immutableStorageWithVersioning'] = undefined;

/**
 * Restrict copy to and from Storage Accounts within an AAD tenant or with Private Links to the same VNet.
 * @member {module:model/StorageAccountPropertiesUpdateParameters.AllowedCopyScopeEnum} allowedCopyScope
 */
StorageAccountPropertiesUpdateParameters.prototype['allowedCopyScope'] = undefined;

/**
 * Allows you to specify the type of endpoint. Set this to AzureDNSZone to create a large number of accounts in a single subscription, which creates accounts in an Azure DNS Zone and the endpoint URL will have an alphanumeric DNS Zone identifier.
 * @member {module:model/StorageAccountPropertiesUpdateParameters.DnsEndpointTypeEnum} dnsEndpointType
 */
StorageAccountPropertiesUpdateParameters.prototype['dnsEndpointType'] = undefined;





/**
 * Allowed values for the <code>accessTier</code> property.
 * @enum {String}
 * @readonly
 */
StorageAccountPropertiesUpdateParameters['AccessTierEnum'] = {

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
StorageAccountPropertiesUpdateParameters['LargeFileSharesStateEnum'] = {

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
StorageAccountPropertiesUpdateParameters['MinimumTlsVersionEnum'] = {

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
StorageAccountPropertiesUpdateParameters['PublicNetworkAccessEnum'] = {

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
StorageAccountPropertiesUpdateParameters['AllowedCopyScopeEnum'] = {

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
StorageAccountPropertiesUpdateParameters['DnsEndpointTypeEnum'] = {

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



export default StorageAccountPropertiesUpdateParameters;
