---
id: compliance-mod
title: 'Compliance Module'
sidebar_label: Compliance Module

---



VASPs, including custodial wallet providers operating on the Libra Payments Network ("LPN"), will be required to maintain compliance programs and to comply with applicable anti-money laundering ("AML") and economic and financial sanctions ("sanctions") laws as well as standards established by Libra Networks. When a new user wishes to create a Libra wallet account, a VASP, pursuant to its compliance program would assess the AML and sanctions risks of maintaining a business relationship with the user. The compliance module assesses these risks at the time of customer onboarding and on an ongoing basis through Know Your Customer (KYC) procedures and transaction monitoring.

### KYC (Know Your Customer)

KYC procedures are intended to allow the wallet provider to identify, and confirm if required, the identity of a prospective user and to assess the AML and sanctions risk of the user at onboarding and on an ongoing basis.

The nature of a wallet provider’s KYC assessment is governed by applicable AML and sanctions laws and regulations, and may differ by jurisdiction and the specific policies and procedures established by the VASP with respect to AML and sanctions compliance, including in the context of the customer onboarding process.

The Libra Reference Wallet demonstrates an example of a risk-based KYC procedure that requests the user to provide personal identification information such as:

* First and last name
* Nationality
* Address
* Government issued identification document as a proof of nationality

The type of information requested of a user, including follow-up information or documentation, may vary depending on certain risk factors (e.g., customer geography, expected activity, and product type). 

The wallet provider must assess the risk of the client and ensure all the required regulatory checks take place. The wallet provider may undertake these checks itself or may involve one or more service providers. Certain checks may be automated while others may be manual.

In this demo, the user data is sent to an external KYC provider to assess the user. In the ordinary course, such an external provider would undertake certain checks of the prospective user. Examples of such checks include sanctions screening, negative news screening, black-listed country screening, and document verification. Based on this information the provider would assign a risk rating that would inform the wallet provider’s decision as to whether to onboard the customer or whether certain controls (e.g., product or transaction limitations) may be appropriate in light of the user's risk.

After a user has been onboarded, the wallet provider, pursuant to relevant laws and regulations, Libra Network standards, and its compliance program, must continue to assess the risk related to maintaining a business relationship with the user.

>Note: The compliance processes depicted in this document are for demonstration purposes only and do not reflect the specific compliance obligations of VASPs under applicable regulatory frameworks, their compliance programs, and/or standards imposed by Libra Networks.
> 
> In this project, the KYC provider is not actually checking the user, and all users are automatically approved.


### Transaction monitoring

Wallet providers generally must also conduct transaction monitoring on an ongoing basis to prevent their services from being used to conduct or facilitate illicit activity, including money laundering, terrorist financing, and/or violation of applicable sanctions. Transaction monitoring procedures must be designed to comply with relevant laws and regulations and the standards of Libra Networks, and should be commensurate with a wallet provider’s risk profile.

In a real-world scenario, transaction monitoring would generally encompass both inbound and outbound payments. Examples of behaviors that transaction monitoring may seek to identify include: 

* Attempts to circumvent account restrictions or network limits
* Unexpected behaviors
* Indicators of suspicious activity
* Travel Rule compliance (the Libra Reference Wallet does not simulate the Travel Rule)
* Sanctions compliance

As with KYC, the wallet provider may conduct transaction monitoring itself (e.g., through a financial intelligence function) or engage a service provider to assist in this process. In any case, the wallet provider remains ultimately responsible for its compliance with applicable laws and regulations and Libra Network standards. 

In a real world scenario, transaction monitoring may lead to various outcomes depending on the activity identified. These include but are not limited to:

* Approval of a transaction
* Denial of a transaction
* Request additional data from the user
* Restricting or limiting a user account
* Blocking a transaction or user funds, if required by law
* Making required reports to relevant regulator(s) (e.g., suspicious activity reports)



In a real-world situation, a wallet provider conducts continuous monitoring of its customers through periodic and risk-based KYC refreshes and transaction monitoring procedures. In addition, transactions on the LPN will be subject to Libra Networks' Financial Intelligence Function ("FIF") network monitoring. This network-wide monitoring, together with transaction monitoring undertaken by LPN service providers, will seek to detect illicit activity, including with respect to money laundering, terrorist financing, and other potentially evasive uses of the platform. The FIF will report identified activity to relevant regulators and law enforcement, where appropriate.

In this demo project, we use an external risk provider as a placeholder for transaction monitoring and regulatory checks. The service will always approve the transactions since no actual checks are performed, and since no specific reviews are actually being performed and no activity is actually being monitored in the demo project, no payments will be blocked, denied, or reported.

### Fraud prevention

As a custodial wallet, all blockchain transactions must use the wallet provider signature. When a transaction is approved on-chain, there is no way to reverse it. The wallet provider should take whatever measures it determines appropriate to ensure that the transaction request was made by the user and is not a fraud attempt, before submitting a blockchain transaction.

In the Libra Payment Network, the transactions are done between VASPs and then allocated to the end users. A fraudulent transaction can be reversed if the VASPs recognize it as such. 



## Reference

* [Set Up](set-up-reference-wallet.md) - Learn how to deploy the Libra Reference Wallet.
* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet.
* [Test the Local Mobile Wallet](try-local-mobile-wallet.md) - Test the local mobile version of the Libra Reference Wallet
* [Login and Authentication](login-and-auth.md) - Learn more about how login and authentication has been implemented. 
* [Inventory Module](inventory-mod.md) - Introduction to inventory setup and settlement flows. 