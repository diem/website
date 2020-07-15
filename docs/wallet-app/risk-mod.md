---
id: risk-mod
title: 'Risk Module'
sidebar_label: Risk Module

---



The Risk module simulates the handling of the verification of a payment based on KYC information and the amount of the transaction.

### Anti-money laundering compliance


### Fraud prevention



### Implementation
The Libra Reference Wallet has a very simple risk check that happens synchronously with each transaction; it is a mocked out API that is simply based on the amount of the transaction. In production, the VASP will need to determine the risk check that is necessary to comply with AML and fraud prevention. 