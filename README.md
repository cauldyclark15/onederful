Description: Create a simple website that fetches patient's health insurance information using onederful api (https://developers.onederful.co/). This website will be used by dental offices to verify the eligibility of a patient's insurance information.

Requirements

1. A simple form where a user of this website can put in the patient's information like first, last name, member ID, birthdate, provider
2. Upon form submit, it should make an api call to fetch information about the patient's health insurance like basic information, coverage, deductible, limitations, coinsurance, maximums
3. Add ability to add dependents (https://developers.onederful.co/#request_dependent) when submitting the form.
4. Unit test (Use any framework. Ideally jest)
5. This website should be deployed in a publicly accessible url
6. Github url where the source code is pushed

Tech stack

1. React
2. Antd (https://ant.design/docs/react/introduce)

You can use the following credential to interact with onederful API
Onederful credential
AUTH_URL = 'https://sandbox.onederful.co/sandbox/oauth2/token';
ELIGIBILITY_URL = 'https://sandbox.onederful.co/sandbox/eligibility';
CLIENT_ID = 'ONEDERFUL_CLIENT_ID';
CLIENT_SECRET = 'ONEDERFUL_CLIENT_SECRET';
