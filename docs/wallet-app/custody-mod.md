---
id: custody-mod
title: 'Custody Module'
sidebar_label: Custody Module

---



The Custody module handles crafting and signing transactions. Once a VASP is ready to settle a transaction on-chain, the Custody module needs to craft the transactions, sign with its private key, and return the signed transaction. The Custody module should be the only service that has access to the wallet’s private key. 

### Implementation

For the local development of the Libra Reference Wallet, the private key is randomly generated on instantiation of the wallet app. It can also take a private key via environment variable as *CUSTODIAL_PRIVATE_KEY*. 

For this demo wallet, we do not show an implementation of providing secure storage of private keys. Custody uses pylibra library to create signed transactions. 


### Extend functionality

A robust custody solution should be plugged in for a production-level product.



## Reference

* [Set Up](set-up-reference-wallet.md) - Learn how to deploy the Libra Reference Wallet.

* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet.

* [Test the Local Mobile Wallet](try-local-mobile-wallet.md) - Test the local mobile version of the Libra Reference Wallet

* [Compliance Module](compliance-mod.md) - Introduction to the compliance module.

* [Inventory Module](inventory-mod.md) - Introduction to inventory setup and settlement flows. 

  