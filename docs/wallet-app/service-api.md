---
id: service-api
title: 'Service APIs'
sidebar_label: Service APIs

---



Service APIs are a set of backend APIs that are organized in terms of high-level wallet functionalities. They are defined in the webapp layer, and the frontend uses these APIs to communicate with the backend. The service APIs are RESTful APIs that are divided into user, account, CICO, and admin. 

Docs can be generated locally using SwaggerUI. Instructions for how to get that set up can be found in the backend README under “Getting Started”, linked [here](https://github.com/libra/libra-reference-wallet/tree/master/backend#getting-started). 

### User

User APIs handle user creation, and information management and updates. 

![](/img/docs/service-api-user.svg)

### Account

Account APIs deal with an account’s address and transactions management. 

![](/img/docs/service-api-account.svg)

### CICO

CICO handles all cash-in and cash-out flows, including getting rates and executing a given quote.

![](/img/docs/service-api-cico.svg)

### Admin

Admin APIs fetch admin user account information and have debt settlement logic. 

![](/img/docs/service-api-admin.svg)



## Reference

* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet.
* [Test the Local Mobile Wallet](try-local-mobile-wallet.md) - Test the local mobile version of the Libra Reference Wallet
* [Login and Authentication](login-and-auth.md) - Learn more about how login and authentication has been implemented. 
* [Wallet Architecture](wallet-arch.md) - Learn more about the different modules part of the wallet architecture.