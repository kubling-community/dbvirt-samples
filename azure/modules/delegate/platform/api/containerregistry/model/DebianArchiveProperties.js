/**
 * ContainerRegistryManagementClient
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2019-06-01-preview
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ArchivePackageSourceProperties from './ArchivePackageSourceProperties';
import ArchiveProperties from './ArchiveProperties';

/**
 * The DebianArchiveProperties model module.
 * @module model/DebianArchiveProperties
 * @version 2019-06-01-preview
 */
class DebianArchiveProperties {
    /**
     * Constructs a new <code>DebianArchiveProperties</code>.
     * The properties of the Debian package Archive.
     * @alias module:model/DebianArchiveProperties
     * @implements module:model/ArchiveProperties
     */
    constructor() { 
        ArchiveProperties.initialize(this);
        DebianArchiveProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebianArchiveProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebianArchiveProperties} obj Optional instance to populate.
     * @return {module:model/DebianArchiveProperties} The populated <code>DebianArchiveProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebianArchiveProperties();
            ArchiveProperties.constructFromObject(data, obj);

            if (data.hasOwnProperty('distributionName')) {
                obj['distributionName'] = ApiClient.convertToType(data['distributionName'], 'String');
            }
            if (data.hasOwnProperty('packageSource')) {
                obj['packageSource'] = ArchivePackageSourceProperties.constructFromObject(data['packageSource']);
            }
            if (data.hasOwnProperty('publishedVersion')) {
                obj['publishedVersion'] = ApiClient.convertToType(data['publishedVersion'], 'String');
            }
            if (data.hasOwnProperty('repositoryEndpointPrefix')) {
                obj['repositoryEndpointPrefix'] = ApiClient.convertToType(data['repositoryEndpointPrefix'], 'String');
            }
            if (data.hasOwnProperty('repositoryEndpoint')) {
                obj['repositoryEndpoint'] = ApiClient.convertToType(data['repositoryEndpoint'], 'String');
            }
            if (data.hasOwnProperty('provisioningState')) {
                obj['provisioningState'] = ApiClient.convertToType(data['provisioningState'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DebianArchiveProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DebianArchiveProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['distributionName'] && !(typeof data['distributionName'] === 'string' || data['distributionName'] instanceof String)) {
            throw new Error("Expected the field `distributionName` to be a primitive type in the JSON string but got " + data['distributionName']);
        }
        // validate the optional field `packageSource`
        if (data['packageSource']) { // data not null
          ArchivePackageSourceProperties.validateJSON(data['packageSource']);
        }
        // ensure the json data is a string
        if (data['publishedVersion'] && !(typeof data['publishedVersion'] === 'string' || data['publishedVersion'] instanceof String)) {
            throw new Error("Expected the field `publishedVersion` to be a primitive type in the JSON string but got " + data['publishedVersion']);
        }
        // ensure the json data is a string
        if (data['repositoryEndpointPrefix'] && !(typeof data['repositoryEndpointPrefix'] === 'string' || data['repositoryEndpointPrefix'] instanceof String)) {
            throw new Error("Expected the field `repositoryEndpointPrefix` to be a primitive type in the JSON string but got " + data['repositoryEndpointPrefix']);
        }
        // ensure the json data is a string
        if (data['repositoryEndpoint'] && !(typeof data['repositoryEndpoint'] === 'string' || data['repositoryEndpoint'] instanceof String)) {
            throw new Error("Expected the field `repositoryEndpoint` to be a primitive type in the JSON string but got " + data['repositoryEndpoint']);
        }
        // ensure the json data is a string
        if (data['provisioningState'] && !(typeof data['provisioningState'] === 'string' || data['provisioningState'] instanceof String)) {
            throw new Error("Expected the field `provisioningState` to be a primitive type in the JSON string but got " + data['provisioningState']);
        }

        return true;
    }


}



/**
 * Debian distribution Name.
 * @member {String} distributionName
 */
DebianArchiveProperties.prototype['distributionName'] = undefined;

/**
 * @member {module:model/ArchivePackageSourceProperties} packageSource
 */
DebianArchiveProperties.prototype['packageSource'] = undefined;

/**
 * The published version of the archive.
 * @member {String} publishedVersion
 */
DebianArchiveProperties.prototype['publishedVersion'] = undefined;

/**
 * @member {String} repositoryEndpointPrefix
 */
DebianArchiveProperties.prototype['repositoryEndpointPrefix'] = undefined;

/**
 * @member {String} repositoryEndpoint
 */
DebianArchiveProperties.prototype['repositoryEndpoint'] = undefined;

/**
 * The provisioning state of the archive at the time the operation was called.
 * @member {module:model/DebianArchiveProperties.ProvisioningStateEnum} provisioningState
 */
DebianArchiveProperties.prototype['provisioningState'] = undefined;


// Implement ArchiveProperties interface:
/**
 * @member {module:model/ArchivePackageSourceProperties} packageSource
 */
ArchiveProperties.prototype['packageSource'] = undefined;
/**
 * The published version of the archive.
 * @member {String} publishedVersion
 */
ArchiveProperties.prototype['publishedVersion'] = undefined;
/**
 * @member {String} repositoryEndpointPrefix
 */
ArchiveProperties.prototype['repositoryEndpointPrefix'] = undefined;
/**
 * @member {String} repositoryEndpoint
 */
ArchiveProperties.prototype['repositoryEndpoint'] = undefined;
/**
 * The provisioning state of the archive at the time the operation was called.
 * @member {module:model/ArchiveProperties.ProvisioningStateEnum} provisioningState
 */
ArchiveProperties.prototype['provisioningState'] = undefined;



/**
 * Allowed values for the <code>provisioningState</code> property.
 * @enum {String}
 * @readonly
 */
DebianArchiveProperties['ProvisioningStateEnum'] = {

    /**
     * value: "Creating"
     * @const
     */
    "Creating": "Creating",

    /**
     * value: "Updating"
     * @const
     */
    "Updating": "Updating",

    /**
     * value: "Deleting"
     * @const
     */
    "Deleting": "Deleting",

    /**
     * value: "Succeeded"
     * @const
     */
    "Succeeded": "Succeeded",

    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed",

    /**
     * value: "Canceled"
     * @const
     */
    "Canceled": "Canceled"
};



export default DebianArchiveProperties;

