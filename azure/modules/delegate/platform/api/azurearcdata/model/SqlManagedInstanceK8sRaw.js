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
import SqlManagedInstanceK8sSpec from './SqlManagedInstanceK8sSpec';

/**
 * The SqlManagedInstanceK8sRaw model module.
 * @module model/SqlManagedInstanceK8sRaw
 * @version 2023-01-15-preview
 */
class SqlManagedInstanceK8sRaw {
    /**
     * Constructs a new <code>SqlManagedInstanceK8sRaw</code>.
     * The raw kubernetes information.
     * @alias module:model/SqlManagedInstanceK8sRaw
     * @extends Object
     */
    constructor() { 
        
        SqlManagedInstanceK8sRaw.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SqlManagedInstanceK8sRaw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SqlManagedInstanceK8sRaw} obj Optional instance to populate.
     * @return {module:model/SqlManagedInstanceK8sRaw} The populated <code>SqlManagedInstanceK8sRaw</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SqlManagedInstanceK8sRaw();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('spec')) {
                obj['spec'] = SqlManagedInstanceK8sSpec.constructFromObject(data['spec']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SqlManagedInstanceK8sRaw</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SqlManagedInstanceK8sRaw</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/SqlManagedInstanceK8sSpec} spec
 */
SqlManagedInstanceK8sRaw.prototype['spec'] = undefined;






export default SqlManagedInstanceK8sRaw;

