---
id: login-and-auth
title: 'Login and Authentication'
sidebar_label: Login and Authentication

---



Login and authentication deals with all logic related to a user creating a new account, signing in, logging out, and keeping a session.

### Implementation

The main features of the login and authentication implementation in the Libra Reference Wallet include:

* User registration
  * During registration, the user will choose a unique username and password, and provide information such as name, DOB, and other [KYC](compliance-mod#kyc-know-your-customer) related information.
  * Each user has a unique user ID (integer) and a unique username (string).
* Sign in and sign out
    * User signs in with the username and password.
    * The password is hashed using a simple Python hashlib.
    * Each sign in generates a new user session token. And, each sign out deletes the user session token.
* Session management
    * When a user creates a new account or signs in, the client is provided with a bearer token. This bearer token is a UUID string and will expire after a certain period of time for user security. 
    * The bearer token is stored in the token database, along with the user ID and expiration time.
    * Whenever the client makes an API call, they need to have the bearer token in the request header. The validity of the token is checked with every call. 
    * The token is valid if it exists in the token database and if it has not expired. 
    * If the token has expired, an unauthorized error is returned in the API call.
    * Each valid API call extends the expiration of the token.


### Extend functionality

* The bearer token is just one way of doing session management. Other forms of authentication can be used to make server calls more secure.
* Login and authentication can be made more secure by incorporating two-factor authentication.

### GitHub repository
https://github.com/libra/libra-wallet/blob/master/src/wallet/account.py