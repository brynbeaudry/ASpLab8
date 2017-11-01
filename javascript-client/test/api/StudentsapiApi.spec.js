/**
 * My API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
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
    factory(root.expect, root.MyApi);
  }
}(this, function(expect, MyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MyApi.StudentsapiApi();
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

  describe('StudentsapiApi', function() {
    describe('apiStudentsapiByIdDelete', function() {
      it('should call apiStudentsapiByIdDelete successfully', function(done) {
        //uncomment below and update the code to test apiStudentsapiByIdDelete
        //instance.apiStudentsapiByIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiStudentsapiByIdGet', function() {
      it('should call apiStudentsapiByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiStudentsapiByIdGet
        //instance.apiStudentsapiByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiStudentsapiByIdPut', function() {
      it('should call apiStudentsapiByIdPut successfully', function(done) {
        //uncomment below and update the code to test apiStudentsapiByIdPut
        //instance.apiStudentsapiByIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiStudentsapiGet', function() {
      it('should call apiStudentsapiGet successfully', function(done) {
        //uncomment below and update the code to test apiStudentsapiGet
        //instance.apiStudentsapiGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiStudentsapiPost', function() {
      it('should call apiStudentsapiPost successfully', function(done) {
        //uncomment below and update the code to test apiStudentsapiPost
        //instance.apiStudentsapiPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));