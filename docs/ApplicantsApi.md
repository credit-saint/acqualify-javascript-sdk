# ApiDocumentation.ApplicantsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lookupApplicant**](ApplicantsApi.md#lookupApplicant) | **GET** /api/v1/lookup-applicant | Returns public information about a loan applicant

<a name="lookupApplicant"></a>
# **lookupApplicant**
> InlineResponse200 lookupApplicant(firstName, lastName, addrLine1, city, state, zip, dob, opts)

Returns public information about a loan applicant

See publicly available financial info about a loan applicant including credit score, based on name, address and date of birth

### Example
```javascript
import ApiDocumentation from 'api_documentation';
let defaultClient = ApiDocumentation.ApiClient.instance;

// Configure API key authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer_token.apiKeyPrefix = 'Token';

let apiInstance = new ApiDocumentation.ApplicantsApi();
let firstName = new ApiDocumentation.FirstName(); // FirstName | Applicant first name
let lastName = new ApiDocumentation.LastName(); // LastName | Applicant last name
let addrLine1 = new ApiDocumentation.AddrLine1(); // AddrLine1 | Address line 1
let city = new ApiDocumentation.City(); // City | City
let state = new ApiDocumentation.State(); // State | State (2-letter abbreviation)
let zip = new ApiDocumentation.Zip(); // Zip | Zip code
let dob = new ApiDocumentation.Dob(); // Dob | Date of birth (MM/DD/YYYY)
let opts = { 
  'addrLine2': new ApiDocumentation.AddrLine2(), // AddrLine2 | Address line 2
  'email': new ApiDocumentation.Email(), // Email | Applicant email address
  'phoneNumber': new ApiDocumentation.PhoneNumber(), // PhoneNumber | Phone number
  'loanAmount': new ApiDocumentation.LoanAmount() // LoanAmount | Loan amount
};
apiInstance.lookupApplicant(firstName, lastName, addrLine1, city, state, zip, dob, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | [**FirstName**](.md)| Applicant first name | 
 **lastName** | [**LastName**](.md)| Applicant last name | 
 **addrLine1** | [**AddrLine1**](.md)| Address line 1 | 
 **city** | [**City**](.md)| City | 
 **state** | [**State**](.md)| State (2-letter abbreviation) | 
 **zip** | [**Zip**](.md)| Zip code | 
 **dob** | [**Dob**](.md)| Date of birth (MM/DD/YYYY) | 
 **addrLine2** | [**AddrLine2**](.md)| Address line 2 | [optional] 
 **email** | [**Email**](.md)| Applicant email address | [optional] 
 **phoneNumber** | [**PhoneNumber**](.md)| Phone number | [optional] 
 **loanAmount** | [**LoanAmount**](.md)| Loan amount | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

