---
id: compliance-mod
title: 'Compliance Module'
sidebar_label: Compliance Module

---



### KYC (Know Your Customer)

When a new user wishes to create a Libra wallet account, an assessment is made of the risks involved with maintaining a business relationship with the user. The nature of the assessment is governed by various AML regulations and KYC guidelines, and differs by jurisdiction. The Libra Reference Wallet demonstrates a KYC procedure by requesting the user to provide personal identification information such as:

* First and last name
* Nationality
* Address
* Government issued identification document as a proof of nationality

This data is sent to an external KYC provider to assess the user. In this project, the KYC provider is not actually checking the user, and all users are automatically approved.

In a real world scenario, the wallet provider should ensure all the required regulatory checks are taking place. This may require more than one KYC/risk service provider and might include manual checks. Examples of such checks are: 

* Sanction screening
* Black-listed countries
* Document verification


### Transaction monitoring

All transactions, whether accepting or sending a user’s funds. must have all applicable regulatory checks completed. These checks are meant to prevent money laundering (AML) and terrorist financing (CTF). Depending on the jurisdiction, there may also be additional regulatory requirements for reporting.

In order to fulfill all of these requirements, a custodial wallet must have policies for checking and fulfilling them. Some requirements will have to be executed for a specific transaction, and some are performed cumulatively.

In this project, we use an external risk provider as a placeholder for such checks. The service will always approve the transactions since no specific checks are performed. 

When performing such checks on transactions, the possible responses can be, but are not limited to:

* Approval of transaction
* Denial of transaction
* Request additional data from the user
* Block the user
* Report to regulator

### Fraud prevention

As a custodial wallet, all blockchain transactions must use the wallet provider signature. When a transaction is approved on-chain, there is no way to reverse it. The wallet provider should take whatever measures it determines appropriate to ensure that the transaction request was made by the user and is not a fraud attempt, before submitting a blockchain transaction.

In the Libra network, the transactions are done between VASPs and then allocated to the end users. A fraudulent transaction can be reversed if the VASPs recognize it as such. Transfering to a non-custodial wallet on the Libra network will be limited to a certain threshold; this can help prevent sending hacked wallet balances to anonymous wallets.



## Reference

* [Set Up](set-up-reference-wallet.md) - Learn how to deploy the Libra Reference Wallet.
* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet.
* [Test the Local Mobile Wallet](try-local-mobile-wallet.md) - Test the local mobile version of the Libra Reference Wallet
* [Login and Authentication](login-and-auth.md) - Learn more about how login and authentication has been implemented. 
* [Inventory Module](inventory-mod.md) - Introduction to inventory setup and settlement flows. 