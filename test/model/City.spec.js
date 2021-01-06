/**
 * Acqualify API Documentation
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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AcqualifyApiDocumentation);
  }
}(this, function(expect, AcqualifyApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AcqualifyApiDocumentation.City();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('City', function() {
    it('should create an instance of City', function() {
      // uncomment below and update the code to test City
      //var instane = new AcqualifyApiDocumentation.City();
      //expect(instance).to.be.a(AcqualifyApiDocumentation.City);
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new AcqualifyApiDocumentation.City();
      //expect(instance).to.be();
    });

  });

}));
