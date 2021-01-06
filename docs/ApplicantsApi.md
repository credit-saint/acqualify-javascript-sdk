# AcqualifyApiDocumentation.ApplicantsApi

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
import AcqualifyApiDocumentation from 'acqualify_api_documentation';
let defaultClient = AcqualifyApiDocumentation.ApiClient.instance;

// Configure API key authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer_token.apiKeyPrefix = 'Token';

let apiInstance = new AcqualifyApiDocumentation.ApplicantsApi();
let firstName = new AcqualifyApiDocumentation.FirstName(); // FirstName | Applicant first name
let lastName = new AcqualifyApiDocumentation.LastName(); // LastName | Applicant last name
let addrLine1 = new AcqualifyApiDocumentation.AddrLine1(); // AddrLine1 | Address line 1
let city = new AcqualifyApiDocumentation.City(); // City | City
let state = new AcqualifyApiDocumentation.State(); // State | State (2-letter abbreviation)
let zip = new AcqualifyApiDocumentation.Zip(); // Zip | Zip code
let dob = new AcqualifyApiDocumentation.Dob(); // Dob | Date of birth (MM/DD/YYYY)
let opts = { 
  'addrLine2': new AcqualifyApiDocumentation.AddrLine2(), // AddrLine2 | Address line 2
  'email': new AcqualifyApiDocumentation.Email(), // Email | Applicant email address
  'phoneNumber': new AcqualifyApiDocumentation.PhoneNumber(), // PhoneNumber | Phone number
  'loanAmount': new AcqualifyApiDocumentation.LoanAmount() // LoanAmount | Loan amount
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

