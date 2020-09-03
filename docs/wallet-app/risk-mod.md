---
id: risk-mod
title: 'Risk Module'
sidebar_label: Risk Module

---



>
>Note: This section is currently under development
>

The Risk module simulates the handling of the verification of a payment based on KYC information and the amount of the transaction.

### Implementation
The Libra Reference Wallet has a very simple risk check that happens synchronously with each transaction; it is a mocked out API that is simply based on the amount of the transaction. In production, the VASP will need to determine the risk check that is necessary to comply with AML and fraud prevention. 



## Reference

* [Set Up](set-up-reference-wallet.md) - Learn how to deploy the Libra Reference Wallet.
* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet.
* [Test the Local Mobile Wallet](try-local-mobile-wallet.md) - Test the local mobile version of the Libra Reference Wallet
* [Login and Authentication](login-and-auth.md) - Learn more about how login and authentication has been implemented. 
* [Inventory Module](inventory-mod.md) - Introduction to inventory setup and settlement flows. 