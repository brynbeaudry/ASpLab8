# MyApi.StudentsapiApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiStudentsapiByIdDelete**](StudentsapiApi.md#apiStudentsapiByIdDelete) | **DELETE** /api/Studentsapi/{id} | 
[**apiStudentsapiByIdGet**](StudentsapiApi.md#apiStudentsapiByIdGet) | **GET** /api/Studentsapi/{id} | 
[**apiStudentsapiByIdPut**](StudentsapiApi.md#apiStudentsapiByIdPut) | **PUT** /api/Studentsapi/{id} | 
[**apiStudentsapiGet**](StudentsapiApi.md#apiStudentsapiGet) | **GET** /api/Studentsapi | 
[**apiStudentsapiPost**](StudentsapiApi.md#apiStudentsapiPost) | **POST** /api/Studentsapi | 


<a name="apiStudentsapiByIdDelete"></a>
# **apiStudentsapiByIdDelete**
> apiStudentsapiByIdDelete(id)



### Example
```javascript
var MyApi = require('my_api');

var apiInstance = new MyApi.StudentsapiApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiStudentsapiByIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiStudentsapiByIdGet"></a>
# **apiStudentsapiByIdGet**
> apiStudentsapiByIdGet(id)



### Example
```javascript
var MyApi = require('my_api');

var apiInstance = new MyApi.StudentsapiApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiStudentsapiByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiStudentsapiByIdPut"></a>
# **apiStudentsapiByIdPut**
> apiStudentsapiByIdPut(id, opts)



### Example
```javascript
var MyApi = require('my_api');

var apiInstance = new MyApi.StudentsapiApi();

var id = 56; // Number | 

var opts = { 
  'student': new MyApi.Student() // Student | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiStudentsapiByIdPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **student** | [**Student**](Student.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: Not defined

<a name="apiStudentsapiGet"></a>
# **apiStudentsapiGet**
> [Student] apiStudentsapiGet()



### Example
```javascript
var MyApi = require('my_api');

var apiInstance = new MyApi.StudentsapiApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiStudentsapiGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Student]**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiStudentsapiPost"></a>
# **apiStudentsapiPost**
> apiStudentsapiPost(opts)



### Example
```javascript
var MyApi = require('my_api');

var apiInstance = new MyApi.StudentsapiApi();

var opts = { 
  'student': new MyApi.Student() // Student | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiStudentsapiPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **student** | [**Student**](Student.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: Not defined

