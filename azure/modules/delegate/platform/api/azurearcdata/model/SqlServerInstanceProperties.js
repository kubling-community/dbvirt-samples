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
 * The SqlServerInstanceProperties model module.
 * @module model/SqlServerInstanceProperties
 * @version 2023-01-15-preview
 */
class SqlServerInstanceProperties {
    /**
     * Constructs a new <code>SqlServerInstanceProperties</code>.
     * Properties of SqlServerInstance.
     * @alias module:model/SqlServerInstanceProperties
     * @param containerResourceId {String} ARM Resource id of the container resource (Azure Arc for Servers).
     * @param status {module:model/SqlServerInstanceProperties.StatusEnum} The cloud connectivity status.
     */
    constructor(containerResourceId, status) { 
        
        SqlServerInstanceProperties.initialize(this, containerResourceId, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, containerResourceId, status) { 
        obj['containerResourceId'] = containerResourceId;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>SqlServerInstanceProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SqlServerInstanceProperties} obj Optional instance to populate.
     * @return {module:model/SqlServerInstanceProperties} The populated <code>SqlServerInstanceProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SqlServerInstanceProperties();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('edition')) {
                obj['edition'] = ApiClient.convertToType(data['edition'], 'String');
            }
            if (data.hasOwnProperty('containerResourceId')) {
                obj['containerResourceId'] = ApiClient.convertToType(data['containerResourceId'], 'String');
            }
            if (data.hasOwnProperty('createTime')) {
                obj['createTime'] = ApiClient.convertToType(data['createTime'], 'String');
            }
            if (data.hasOwnProperty('vCore')) {
                obj['vCore'] = ApiClient.convertToType(data['vCore'], 'String');
            }
            if (data.hasOwnProperty('cores')) {
                obj['cores'] = ApiClient.convertToType(data['cores'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('patchLevel')) {
                obj['patchLevel'] = ApiClient.convertToType(data['patchLevel'], 'String');
            }
            if (data.hasOwnProperty('collation')) {
                obj['collation'] = ApiClient.convertToType(data['collation'], 'String');
            }
            if (data.hasOwnProperty('currentVersion')) {
                obj['currentVersion'] = ApiClient.convertToType(data['currentVersion'], 'String');
            }
            if (data.hasOwnProperty('instanceName')) {
                obj['instanceName'] = ApiClient.convertToType(data['instanceName'], 'String');
            }
            if (data.hasOwnProperty('tcpDynamicPorts')) {
                obj['tcpDynamicPorts'] = ApiClient.convertToType(data['tcpDynamicPorts'], 'String');
            }
            if (data.hasOwnProperty('tcpStaticPorts')) {
                obj['tcpStaticPorts'] = ApiClient.convertToType(data['tcpStaticPorts'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
            }
            if (data.hasOwnProperty('licenseType')) {
                obj['licenseType'] = ApiClient.convertToType(data['licenseType'], 'String');
            }
            if (data.hasOwnProperty('azureDefenderStatusLastUpdated')) {
                obj['azureDefenderStatusLastUpdated'] = ApiClient.convertToType(data['azureDefenderStatusLastUpdated'], 'Date');
            }
            if (data.hasOwnProperty('azureDefenderStatus')) {
                obj['azureDefenderStatus'] = ApiClient.convertToType(data['azureDefenderStatus'], 'String');
            }
            if (data.hasOwnProperty('provisioningState')) {
                obj['provisioningState'] = ApiClient.convertToType(data['provisioningState'], 'String');
            }
            if (data.hasOwnProperty('hostType')) {
                obj['hostType'] = ApiClient.convertToType(data['hostType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SqlServerInstanceProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SqlServerInstanceProperties</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SqlServerInstanceProperties.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['edition'] && !(typeof data['edition'] === 'string' || data['edition'] instanceof String)) {
            throw new Error("Expected the field `edition` to be a primitive type in the JSON string but got " + data['edition']);
        }
        // ensure the json data is a string
        if (data['containerResourceId'] && !(typeof data['containerResourceId'] === 'string' || data['containerResourceId'] instanceof String)) {
            throw new Error("Expected the field `containerResourceId` to be a primitive type in the JSON string but got " + data['containerResourceId']);
        }
        // ensure the json data is a string
        if (data['createTime'] && !(typeof data['createTime'] === 'string' || data['createTime'] instanceof String)) {
            throw new Error("Expected the field `createTime` to be a primitive type in the JSON string but got " + data['createTime']);
        }
        // ensure the json data is a string
        if (data['vCore'] && !(typeof data['vCore'] === 'string' || data['vCore'] instanceof String)) {
            throw new Error("Expected the field `vCore` to be a primitive type in the JSON string but got " + data['vCore']);
        }
        // ensure the json data is a string
        if (data['cores'] && !(typeof data['cores'] === 'string' || data['cores'] instanceof String)) {
            throw new Error("Expected the field `cores` to be a primitive type in the JSON string but got " + data['cores']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['patchLevel'] && !(typeof data['patchLevel'] === 'string' || data['patchLevel'] instanceof String)) {
            throw new Error("Expected the field `patchLevel` to be a primitive type in the JSON string but got " + data['patchLevel']);
        }
        // ensure the json data is a string
        if (data['collation'] && !(typeof data['collation'] === 'string' || data['collation'] instanceof String)) {
            throw new Error("Expected the field `collation` to be a primitive type in the JSON string but got " + data['collation']);
        }
        // ensure the json data is a string
        if (data['currentVersion'] && !(typeof data['currentVersion'] === 'string' || data['currentVersion'] instanceof String)) {
            throw new Error("Expected the field `currentVersion` to be a primitive type in the JSON string but got " + data['currentVersion']);
        }
        // ensure the json data is a string
        if (data['instanceName'] && !(typeof data['instanceName'] === 'string' || data['instanceName'] instanceof String)) {
            throw new Error("Expected the field `instanceName` to be a primitive type in the JSON string but got " + data['instanceName']);
        }
        // ensure the json data is a string
        if (data['tcpDynamicPorts'] && !(typeof data['tcpDynamicPorts'] === 'string' || data['tcpDynamicPorts'] instanceof String)) {
            throw new Error("Expected the field `tcpDynamicPorts` to be a primitive type in the JSON string but got " + data['tcpDynamicPorts']);
        }
        // ensure the json data is a string
        if (data['tcpStaticPorts'] && !(typeof data['tcpStaticPorts'] === 'string' || data['tcpStaticPorts'] instanceof String)) {
            throw new Error("Expected the field `tcpStaticPorts` to be a primitive type in the JSON string but got " + data['tcpStaticPorts']);
        }
        // ensure the json data is a string
        if (data['productId'] && !(typeof data['productId'] === 'string' || data['productId'] instanceof String)) {
            throw new Error("Expected the field `productId` to be a primitive type in the JSON string but got " + data['productId']);
        }
        // ensure the json data is a string
        if (data['licenseType'] && !(typeof data['licenseType'] === 'string' || data['licenseType'] instanceof String)) {
            throw new Error("Expected the field `licenseType` to be a primitive type in the JSON string but got " + data['licenseType']);
        }
        // ensure the json data is a string
        if (data['azureDefenderStatus'] && !(typeof data['azureDefenderStatus'] === 'string' || data['azureDefenderStatus'] instanceof String)) {
            throw new Error("Expected the field `azureDefenderStatus` to be a primitive type in the JSON string but got " + data['azureDefenderStatus']);
        }
        // ensure the json data is a string
        if (data['provisioningState'] && !(typeof data['provisioningState'] === 'string' || data['provisioningState'] instanceof String)) {
            throw new Error("Expected the field `provisioningState` to be a primitive type in the JSON string but got " + data['provisioningState']);
        }
        // ensure the json data is a string
        if (data['hostType'] && !(typeof data['hostType'] === 'string' || data['hostType'] instanceof String)) {
            throw new Error("Expected the field `hostType` to be a primitive type in the JSON string but got " + data['hostType']);
        }

        return true;
    }


}

SqlServerInstanceProperties.RequiredProperties = ["containerResourceId", "status"];

/**
 * SQL Server version.
 * @member {module:model/SqlServerInstanceProperties.VersionEnum} version
 */
SqlServerInstanceProperties.prototype['version'] = undefined;

/**
 * SQL Server edition.
 * @member {module:model/SqlServerInstanceProperties.EditionEnum} edition
 */
SqlServerInstanceProperties.prototype['edition'] = undefined;

/**
 * ARM Resource id of the container resource (Azure Arc for Servers).
 * @member {String} containerResourceId
 */
SqlServerInstanceProperties.prototype['containerResourceId'] = undefined;

/**
 * The time when the resource was created.
 * @member {String} createTime
 */
SqlServerInstanceProperties.prototype['createTime'] = undefined;

/**
 * The number of logical processors used by the SQL Server instance.
 * @member {String} vCore
 */
SqlServerInstanceProperties.prototype['vCore'] = undefined;

/**
 * The number of total cores of the Operating System Environment (OSE) hosting the SQL Server instance.
 * @member {String} cores
 */
SqlServerInstanceProperties.prototype['cores'] = undefined;

/**
 * The cloud connectivity status.
 * @member {module:model/SqlServerInstanceProperties.StatusEnum} status
 */
SqlServerInstanceProperties.prototype['status'] = undefined;

/**
 * SQL Server update level.
 * @member {String} patchLevel
 */
SqlServerInstanceProperties.prototype['patchLevel'] = undefined;

/**
 * SQL Server collation.
 * @member {String} collation
 */
SqlServerInstanceProperties.prototype['collation'] = undefined;

/**
 * SQL Server current version.
 * @member {String} currentVersion
 */
SqlServerInstanceProperties.prototype['currentVersion'] = undefined;

/**
 * SQL Server instance name.
 * @member {String} instanceName
 */
SqlServerInstanceProperties.prototype['instanceName'] = undefined;

/**
 * Dynamic TCP ports used by SQL Server.
 * @member {String} tcpDynamicPorts
 */
SqlServerInstanceProperties.prototype['tcpDynamicPorts'] = undefined;

/**
 * Static TCP ports used by SQL Server.
 * @member {String} tcpStaticPorts
 */
SqlServerInstanceProperties.prototype['tcpStaticPorts'] = undefined;

/**
 * SQL Server product ID.
 * @member {String} productId
 */
SqlServerInstanceProperties.prototype['productId'] = undefined;

/**
 * SQL Server license type.
 * @member {module:model/SqlServerInstanceProperties.LicenseTypeEnum} licenseType
 */
SqlServerInstanceProperties.prototype['licenseType'] = undefined;

/**
 * Timestamp of last Azure Defender status update.
 * @member {Date} azureDefenderStatusLastUpdated
 */
SqlServerInstanceProperties.prototype['azureDefenderStatusLastUpdated'] = undefined;

/**
 * Status of Azure Defender.
 * @member {module:model/SqlServerInstanceProperties.AzureDefenderStatusEnum} azureDefenderStatus
 */
SqlServerInstanceProperties.prototype['azureDefenderStatus'] = undefined;

/**
 * The provisioning state of the Arc-enabled SQL Server resource.
 * @member {String} provisioningState
 */
SqlServerInstanceProperties.prototype['provisioningState'] = undefined;

/**
 * Type of host for Azure Arc SQL Server
 * @member {module:model/SqlServerInstanceProperties.HostTypeEnum} hostType
 */
SqlServerInstanceProperties.prototype['hostType'] = undefined;





/**
 * Allowed values for the <code>version</code> property.
 * @enum {String}
 * @readonly
 */
SqlServerInstanceProperties['VersionEnum'] = {

    /**
     * value: "SQL Server 2012"
     * @const
     */
    "SQL Server 2012": "SQL Server 2012",

    /**
     * value: "SQL Server 2014"
     * @const
     */
    "SQL Server 2014": "SQL Server 2014",

    /**
     * value: "SQL Server 2016"
     * @const
     */
    "SQL Server 2016": "SQL Server 2016",

    /**
     * value: "SQL Server 2017"
     * @const
     */
    "SQL Server 2017": "SQL Server 2017",

    /**
     * value: "SQL Server 2019"
     * @const
     */
    "SQL Server 2019": "SQL Server 2019",

    /**
     * value: "SQL Server 2022"
     * @const
     */
    "SQL Server 2022": "SQL Server 2022",

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown"
};


/**
 * Allowed values for the <code>edition</code> property.
 * @enum {String}
 * @readonly
 */
SqlServerInstanceProperties['EditionEnum'] = {

    /**
     * value: "Evaluation"
     * @const
     */
    "Evaluation": "Evaluation",

    /**
     * value: "Enterprise"
     * @const
     */
    "Enterprise": "Enterprise",

    /**
     * value: "Standard"
     * @const
     */
    "Standard": "Standard",

    /**
     * value: "Web"
     * @const
     */
    "Web": "Web",

    /**
     * value: "Developer"
     * @const
     */
    "Developer": "Developer",

    /**
     * value: "Express"
     * @const
     */
    "Express": "Express",

    /**
     * value: "Business Intelligence"
     * @const
     */
    "Business Intelligence": "Business Intelligence"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SqlServerInstanceProperties['StatusEnum'] = {

    /**
     * value: "Connected"
     * @const
     */
    "Connected": "Connected",

    /**
     * value: "Disconnected"
     * @const
     */
    "Disconnected": "Disconnected",

    /**
     * value: "Registered"
     * @const
     */
    "Registered": "Registered",

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown"
};


/**
 * Allowed values for the <code>licenseType</code> property.
 * @enum {String}
 * @readonly
 */
SqlServerInstanceProperties['LicenseTypeEnum'] = {

    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",

    /**
     * value: "Free"
     * @const
     */
    "Free": "Free",

    /**
     * value: "HADR"
     * @const
     */
    "HADR": "HADR",

    /**
     * value: "ServerCAL"
     * @const
     */
    "ServerCAL": "ServerCAL",

    /**
     * value: "LicenseOnly"
     * @const
     */
    "LicenseOnly": "LicenseOnly",

    /**
     * value: "PAYG"
     * @const
     */
    "PAYG": "PAYG",

    /**
     * value: "Paid"
     * @const
     */
    "Paid": "Paid"
};


/**
 * Allowed values for the <code>azureDefenderStatus</code> property.
 * @enum {String}
 * @readonly
 */
SqlServerInstanceProperties['AzureDefenderStatusEnum'] = {

    /**
     * value: "Protected"
     * @const
     */
    "Protected": "Protected",

    /**
     * value: "Unprotected"
     * @const
     */
    "Unprotected": "Unprotected",

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown"
};


/**
 * Allowed values for the <code>hostType</code> property.
 * @enum {String}
 * @readonly
 */
SqlServerInstanceProperties['HostTypeEnum'] = {

    /**
     * value: "Azure Virtual Machine"
     * @const
     */
    "Azure Virtual Machine": "Azure Virtual Machine",

    /**
     * value: "Azure VMWare Virtual Machine"
     * @const
     */
    "Azure VMWare Virtual Machine": "Azure VMWare Virtual Machine",

    /**
     * value: "Azure Kubernetes Service"
     * @const
     */
    "Azure Kubernetes Service": "Azure Kubernetes Service",

    /**
     * value: "AWS VMWare Virtual Machine"
     * @const
     */
    "AWS VMWare Virtual Machine": "AWS VMWare Virtual Machine",

    /**
     * value: "AWS Kubernetes Service"
     * @const
     */
    "AWS Kubernetes Service": "AWS Kubernetes Service",

    /**
     * value: "GCP VMWare Virtual Machine"
     * @const
     */
    "GCP VMWare Virtual Machine": "GCP VMWare Virtual Machine",

    /**
     * value: "GCP Kubernetes Service"
     * @const
     */
    "GCP Kubernetes Service": "GCP Kubernetes Service",

    /**
     * value: "Container"
     * @const
     */
    "Container": "Container",

    /**
     * value: "Virtual Machine"
     * @const
     */
    "Virtual Machine": "Virtual Machine",

    /**
     * value: "Physical Server"
     * @const
     */
    "Physical Server": "Physical Server",

    /**
     * value: "AWS Virtual Machine"
     * @const
     */
    "AWS Virtual Machine": "AWS Virtual Machine",

    /**
     * value: "GCP Virtual Machine"
     * @const
     */
    "GCP Virtual Machine": "GCP Virtual Machine",

    /**
     * value: "Other"
     * @const
     */
    "Other": "Other"
};



export default SqlServerInstanceProperties;
