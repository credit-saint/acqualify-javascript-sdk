/**
 * API Documentation
 * The Acqualify API provides services to mortgage brokers and realtors to help applicants qualify for loans.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Zip model module.
* @module model/Zip
* @version 1.0.0
*/
export default class Zip {
    /**
    * Constructs a new <code>Zip</code>.
    * @alias module:model/Zip
    * @class
    * @param zip {Number} 
    */

    constructor(zip) {
        
        
        this['zip'] = zip;
        
    }

    /**
    * Constructs a <code>Zip</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Zip} obj Optional instance to populate.
    * @return {module:model/Zip} The populated <code>Zip</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Zip();
                        
            
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} zip
    */
    'zip' = undefined;




}
