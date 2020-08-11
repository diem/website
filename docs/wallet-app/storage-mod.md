---
id: storage-mod
title: 'Storage Module'
sidebar_label: Storage Module

---



The Libra Reference Wallet uses SQL as its data store, and SQLAlchemy as the Python toolkit and object relational mapper. Storage is part of the Wallet module, and consists of models and utils. In wallet/storage, models.py defines the tables and utils are divided into respective modules based on which object the util reads or modifies. 

### User

User table stores all information related to the user’s identity, registration, and KYC information. On user registration, username, and password information are stored. KYC information such as full name, dob, address, and phone number are also stored during the registration process. 

### Account

While the user table deals with a user’s identification and login information, the account table purely deals with the user’s transactions. Each user has an account, in which all transactions and balances are stored. There is a special case for the admin user, who does not have any corresponding account. Currently each user has a single account, but the wallet could be extended for a user to hold multiple accounts. Another special case is the inventory account, which doesn’t have any corresponding user.  

### Transaction

Transactions table stores all the metadata of sending or receiving transactions. Depending on the transaction type, each transaction object may not have certain rows filled. For example, in the case of an in-network transaction, blockchain_version and sequence will be None since an in-network transaction does not require a blockchain transaction. In the case of an external transaction, either the source_id or the destination_id may be missing, since we will not have an ID for the external user. 

### Transaction log

Transaction log table stores the status of transactions as they get processed. These logs can be exposed to the user to show which stage a transaction is at. Example logs include “Settled on-chain” and “Transaction complete.”

### Subaddress

Subaddress is the internal user address of the Libra Reference Wallet. A subaddress is an 8-byte string that is meant to be one-time use. A new subaddress is generated each time a user generates a receiving address to send to a sender. 

### Token

Token table stores user session tokens for session authentication. When a user creates an account or signs in to their account, the server generates a token and stores it in the token table along with user_id and expiration_time. Whenever a user makes an API call, we check if the token exists in the table and that expiration_time has not passed. 

### Order

>
>Note: This section will be updated with the next version of this document. 
>


### Execution log

The execution log table is used for debugging and the data is not exposed to the user. Execution logs can easily be added in any function using add_execution_log(). 

## Reference

* [Login and Authentication](login-and-auth.md) - Learn more about how login and authentication has been implemented. 
* [Service APIs](service-api.md) - Introduction to RESTful APIs that are organized in terms of high-level wallet functionalities
* [Set Up](set-up-reference-wallet.md) - Learn how to deploy the Libra Reference Wallet.
* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet.
* [Test the Local Mobile Wallet](try-local-mobile-wallet.md) - Test the local mobile version of the Libra Reference Wallet