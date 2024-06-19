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
import SkuTier from './SkuTier';

/**
 * The Sku model module.
 * @module model/Sku
 * @version 2019-06-01-preview
 */
class Sku {
    /**
     * Constructs a new <code>Sku</code>.
     * The resource model definition representing SKU
     * @alias module:model/Sku
     * @param name {String} The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    constructor(name) { 
        
        Sku.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Sku</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Sku} obj Optional instance to populate.
     * @return {module:model/Sku} The populated <code>Sku</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sku();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tier')) {
                obj['tier'] = SkuTier.constructFromObject(data['tier']);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('family')) {
                obj['family'] = ApiClient.convertToType(data['family'], 'String');
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Sku</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Sku</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Sku.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['size'] && !(typeof data['size'] === 'string' || data['size'] instanceof String)) {
            throw new Error("Expected the field `size` to be a primitive type in the JSON string but got " + data['size']);
        }
        // ensure the json data is a string
        if (data['family'] && !(typeof data['family'] === 'string' || data['family'] instanceof String)) {
            throw new Error("Expected the field `family` to be a primitive type in the JSON string but got " + data['family']);
        }

        return true;
    }


}

Sku.RequiredProperties = ["name"];

/**
 * The name of the SKU. E.g. P3. It is typically a letter+number code
 * @member {String} name
 */
Sku.prototype['name'] = undefined;

/**
 * @member {module:model/SkuTier} tier
 */
Sku.prototype['tier'] = undefined;

/**
 * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
 * @member {String} size
 */
Sku.prototype['size'] = undefined;

/**
 * If the service has different generations of hardware, for the same SKU, then that can be captured here.
 * @member {String} family
 */
Sku.prototype['family'] = undefined;

/**
 * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
 * @member {Number} capacity
 */
Sku.prototype['capacity'] = undefined;






export default Sku;
