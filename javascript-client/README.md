# my_api

MyApi - JavaScript client for my_api
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: v1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install my_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your my_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('my_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/my_api
then install it via:

```shell
    npm install YOUR_USERNAME/my_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MyApi = require('my_api');

var api = new MyApi.AccountApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.accountAccessDeniedGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MyApi.AccountApi* | [**accountAccessDeniedGet**](docs/AccountApi.md#accountAccessDeniedGet) | **GET** /Account/AccessDenied | 
*MyApi.AccountApi* | [**accountConfirmEmailGet**](docs/AccountApi.md#accountConfirmEmailGet) | **GET** /Account/ConfirmEmail | 
*MyApi.AccountApi* | [**accountExternalLoginCallbackGet**](docs/AccountApi.md#accountExternalLoginCallbackGet) | **GET** /Account/ExternalLoginCallback | 
*MyApi.AccountApi* | [**accountExternalLoginConfirmationPost**](docs/AccountApi.md#accountExternalLoginConfirmationPost) | **POST** /Account/ExternalLoginConfirmation | 
*MyApi.AccountApi* | [**accountExternalLoginPost**](docs/AccountApi.md#accountExternalLoginPost) | **POST** /Account/ExternalLogin | 
*MyApi.AccountApi* | [**accountForgotPasswordConfirmationGet**](docs/AccountApi.md#accountForgotPasswordConfirmationGet) | **GET** /Account/ForgotPasswordConfirmation | 
*MyApi.AccountApi* | [**accountForgotPasswordGet**](docs/AccountApi.md#accountForgotPasswordGet) | **GET** /Account/ForgotPassword | 
*MyApi.AccountApi* | [**accountForgotPasswordPost**](docs/AccountApi.md#accountForgotPasswordPost) | **POST** /Account/ForgotPassword | 
*MyApi.AccountApi* | [**accountLockoutGet**](docs/AccountApi.md#accountLockoutGet) | **GET** /Account/Lockout | 
*MyApi.AccountApi* | [**accountLoginGet**](docs/AccountApi.md#accountLoginGet) | **GET** /Account/Login | 
*MyApi.AccountApi* | [**accountLoginPost**](docs/AccountApi.md#accountLoginPost) | **POST** /Account/Login | 
*MyApi.AccountApi* | [**accountLoginWith2faGet**](docs/AccountApi.md#accountLoginWith2faGet) | **GET** /Account/LoginWith2fa | 
*MyApi.AccountApi* | [**accountLoginWith2faPost**](docs/AccountApi.md#accountLoginWith2faPost) | **POST** /Account/LoginWith2fa | 
*MyApi.AccountApi* | [**accountLoginWithRecoveryCodeGet**](docs/AccountApi.md#accountLoginWithRecoveryCodeGet) | **GET** /Account/LoginWithRecoveryCode | 
*MyApi.AccountApi* | [**accountLoginWithRecoveryCodePost**](docs/AccountApi.md#accountLoginWithRecoveryCodePost) | **POST** /Account/LoginWithRecoveryCode | 
*MyApi.AccountApi* | [**accountLogoutPost**](docs/AccountApi.md#accountLogoutPost) | **POST** /Account/Logout | 
*MyApi.AccountApi* | [**accountRegisterGet**](docs/AccountApi.md#accountRegisterGet) | **GET** /Account/Register | 
*MyApi.AccountApi* | [**accountRegisterPost**](docs/AccountApi.md#accountRegisterPost) | **POST** /Account/Register | 
*MyApi.AccountApi* | [**accountResetPasswordConfirmationGet**](docs/AccountApi.md#accountResetPasswordConfirmationGet) | **GET** /Account/ResetPasswordConfirmation | 
*MyApi.AccountApi* | [**accountResetPasswordGet**](docs/AccountApi.md#accountResetPasswordGet) | **GET** /Account/ResetPassword | 
*MyApi.AccountApi* | [**accountResetPasswordPost**](docs/AccountApi.md#accountResetPasswordPost) | **POST** /Account/ResetPassword | 
*MyApi.ManageApi* | [**manageChangePasswordGet**](docs/ManageApi.md#manageChangePasswordGet) | **GET** /Manage/ChangePassword | 
*MyApi.ManageApi* | [**manageChangePasswordPost**](docs/ManageApi.md#manageChangePasswordPost) | **POST** /Manage/ChangePassword | 
*MyApi.ManageApi* | [**manageDisable2faPost**](docs/ManageApi.md#manageDisable2faPost) | **POST** /Manage/Disable2fa | 
*MyApi.ManageApi* | [**manageDisable2faWarningGet**](docs/ManageApi.md#manageDisable2faWarningGet) | **GET** /Manage/Disable2faWarning | 
*MyApi.ManageApi* | [**manageEnableAuthenticatorGet**](docs/ManageApi.md#manageEnableAuthenticatorGet) | **GET** /Manage/EnableAuthenticator | 
*MyApi.ManageApi* | [**manageEnableAuthenticatorPost**](docs/ManageApi.md#manageEnableAuthenticatorPost) | **POST** /Manage/EnableAuthenticator | 
*MyApi.ManageApi* | [**manageExternalLoginsGet**](docs/ManageApi.md#manageExternalLoginsGet) | **GET** /Manage/ExternalLogins | 
*MyApi.ManageApi* | [**manageGenerateRecoveryCodesGet**](docs/ManageApi.md#manageGenerateRecoveryCodesGet) | **GET** /Manage/GenerateRecoveryCodes | 
*MyApi.ManageApi* | [**manageIndexGet**](docs/ManageApi.md#manageIndexGet) | **GET** /Manage/Index | 
*MyApi.ManageApi* | [**manageIndexPost**](docs/ManageApi.md#manageIndexPost) | **POST** /Manage/Index | 
*MyApi.ManageApi* | [**manageLinkLoginCallbackGet**](docs/ManageApi.md#manageLinkLoginCallbackGet) | **GET** /Manage/LinkLoginCallback | 
*MyApi.ManageApi* | [**manageLinkLoginPost**](docs/ManageApi.md#manageLinkLoginPost) | **POST** /Manage/LinkLogin | 
*MyApi.ManageApi* | [**manageRemoveLoginPost**](docs/ManageApi.md#manageRemoveLoginPost) | **POST** /Manage/RemoveLogin | 
*MyApi.ManageApi* | [**manageResetAuthenticatorPost**](docs/ManageApi.md#manageResetAuthenticatorPost) | **POST** /Manage/ResetAuthenticator | 
*MyApi.ManageApi* | [**manageResetAuthenticatorWarningGet**](docs/ManageApi.md#manageResetAuthenticatorWarningGet) | **GET** /Manage/ResetAuthenticatorWarning | 
*MyApi.ManageApi* | [**manageSendVerificationEmailPost**](docs/ManageApi.md#manageSendVerificationEmailPost) | **POST** /Manage/SendVerificationEmail | 
*MyApi.ManageApi* | [**manageSetPasswordGet**](docs/ManageApi.md#manageSetPasswordGet) | **GET** /Manage/SetPassword | 
*MyApi.ManageApi* | [**manageSetPasswordPost**](docs/ManageApi.md#manageSetPasswordPost) | **POST** /Manage/SetPassword | 
*MyApi.ManageApi* | [**manageTwoFactorAuthenticationGet**](docs/ManageApi.md#manageTwoFactorAuthenticationGet) | **GET** /Manage/TwoFactorAuthentication | 
*MyApi.StudentsapiApi* | [**apiStudentsapiByIdDelete**](docs/StudentsapiApi.md#apiStudentsapiByIdDelete) | **DELETE** /api/Studentsapi/{id} | 
*MyApi.StudentsapiApi* | [**apiStudentsapiByIdGet**](docs/StudentsapiApi.md#apiStudentsapiByIdGet) | **GET** /api/Studentsapi/{id} | 
*MyApi.StudentsapiApi* | [**apiStudentsapiByIdPut**](docs/StudentsapiApi.md#apiStudentsapiByIdPut) | **PUT** /api/Studentsapi/{id} | 
*MyApi.StudentsapiApi* | [**apiStudentsapiGet**](docs/StudentsapiApi.md#apiStudentsapiGet) | **GET** /api/Studentsapi | 
*MyApi.StudentsapiApi* | [**apiStudentsapiPost**](docs/StudentsapiApi.md#apiStudentsapiPost) | **POST** /api/Studentsapi | 


## Documentation for Models

 - [MyApi.Student](docs/Student.md)


## Documentation for Authorization

 All endpoints do not require authorization.
