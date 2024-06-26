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
 * The SqlManagedInstanceUpdate model module.
 * @module model/SqlManagedInstanceUpdate
 * @version 2023-01-15-preview
 */
class SqlManagedInstanceUpdate {
    /**
     * Constructs a new <code>SqlManagedInstanceUpdate</code>.
     * An update to a SQL Managed Instance.
     * @alias module:model/SqlManagedInstanceUpdate
     */
    constructor() { 
        
        SqlManagedInstanceUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SqlManagedInstanceUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SqlManagedInstanceUpdate} obj Optional instance to populate.
     * @return {module:model/SqlManagedInstanceUpdate} The populated <code>SqlManagedInstanceUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SqlManagedInstanceUpdate();

            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SqlManagedInstanceUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SqlManagedInstanceUpdate</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Resource tags.
 * @member {Object.<String, String>} tags
 */
SqlManagedInstanceUpdate.prototype['tags'] = undefined;






export default SqlManagedInstanceUpdate;

