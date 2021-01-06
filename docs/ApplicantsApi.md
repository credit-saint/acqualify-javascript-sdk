# ApiDocumentation.ApplicantsApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lookupApplicant**](ApplicantsApi.md#lookupApplicant) | **GET** /lookup-applicant | Returns public information about a loan applicant


<a name="lookupApplicant"></a>
# **lookupApplicant**
> lookupApplicant(firstName, lastName, addrLine1, city, state, zip, dob, opts)

Returns public information about a loan applicant

See publicly available financial info about a loan applicant including credit score, based on name, address and date of birth

### Example
```javascript
var ApiDocumentation = require('api_documentation');
var defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: bearer_token
var bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer_token.apiKeyPrefix = 'Token';

var apiInstance = new ApiDocumentation.ApplicantsApi();

var firstName = "firstName_example"; // String | Applicant first name

var lastName = "lastName_example"; // String | Applicant last name

var addrLine1 = "addrLine1_example"; // String | Address line 1

var city = "city_example"; // String | City

var state = "state_example"; // String | State (2-letter abbreviation)

var zip = 789; // Number | Zip code

var dob = "dob_example"; // String | Date of birth (MM/DD/YYYY)

var opts = { 
  'addrLine2': "addrLine2_example", // String | Address line 2
  'email': "email_example", // String | Applicant email address
  'phoneNumber': "phoneNumber_example", // String | Phone number
  'loanAmount': "loanAmount_example" // String | Loan amount
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lookupApplicant(firstName, lastName, addrLine1, city, state, zip, dob, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | **String**| Applicant first name | 
 **lastName** | **String**| Applicant last name | 
 **addrLine1** | **String**| Address line 1 | 
 **city** | **String**| City | 
 **state** | **String**| State (2-letter abbreviation) | 
 **zip** | **Number**| Zip code | 
 **dob** | **String**| Date of birth (MM/DD/YYYY) | 
 **addrLine2** | **String**| Address line 2 | [optional] 
 **email** | **String**| Applicant email address | [optional] 
 **phoneNumber** | **String**| Phone number | [optional] 
 **loanAmount** | **String**| Loan amount | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

