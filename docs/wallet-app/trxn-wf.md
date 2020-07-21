---
id: trxn-wf
title: 'Transaction Workflows'
sidebar_label: Transaction Workflows

---



A VASP needs to be able to handle the following on-chain transactions:

* Send and receive funds internally within the same VASP network.
* Send and receive funds externally to a user of another VASP.

The Libra Reference Wallet shows the workflow of each of these transaction types. 

### Implementation

Internal P2P transfer
*  Internal P2P transfer entails a simple balance check and storage update, and does not require any on-chain settlement. 

External P2P Transfer
* External P2P transfers are transactions between users in different VASP networks. This type of transaction requires an on-chain settlement. For any amount less than the amount needed for compliance, a VASP can directly send the transaction on-chain without doing any KYC validation. 
* Uses pylibra.


### Extend functionality

Currently the Libra Reference Wallet only implements three types of transactions. However, as the scope increases, other types of transactions, such as merchant pull request flow, could be added to extend the functionality of the Reference Wallet. 



## Reference

* [Set Up](set-up-reference-wallet.md) - Learn how to deploy the Libra Reference Wallet.
* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet.
* [Test the Local Mobile Wallet](try-local-mobile-wallet.md) - Test the local mobile version of the Libra Reference Wallet
* [Login and Authentication](login-and-auth.md) - Learn more about how login and authentication has been implemented. 
* [Life of a Transaction](/core/life-of-a-transaction.md)  - Understrand what happens when a transaction is submitted and executed.