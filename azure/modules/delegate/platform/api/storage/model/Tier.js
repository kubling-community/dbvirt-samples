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
* Enum class Tier.
* @enum {}
* @readonly
*/
export default class Tier {
    
        /**
         * value: "Standard"
         * @const
         */
        "Standard" = "Standard";

    
        /**
         * value: "Premium"
         * @const
         */
        "Premium" = "Premium";

    

    /**
    * Returns a <code>Tier</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Tier} The enum <code>Tier</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

