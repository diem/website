---
id: inventory-mod
title: 'Inventory Module'
sidebar_label: Inventory Module

---



## Liquidity inventory setup

The liquidity inventory setup is part of the backend startup sequence. At start, an internal inventory user is created. This internal user manages the balance of the internal custody wallet inventory. After its creation, the backend[ “buys” its initial Libra funds from the external liquidity provider.](libra-c-source#inventory-management) The custodial wallet provider directs the liquidity provider to send purchased Libra Coins to the custody wallet’s Libra blockchain address.

From this point, the custodial wallet service can engage in Libra Blockchain transfers between its inventory account and the wallet user accounts to transfer the requested funds.

## Add, withdraw, or convert flows

A wallet user can select the following transfer types in the reference wallet

* Add funds
* Withdraw funds
* Convert funds



### Add funds

This transfer type is when a user wants to add funds to their wallet balance. 

For example, if a user wants to add 100LBRUSD and clicks “Add”. 

* The frontend will ask the backend for conversion rates, which will then be presented to the user. For this example, 100 LBRUSD will be added in exchange for 100 USD. 
* When the user is ready to proceed, the frontend will ask for a final quote from the backend and will present the final terms to the user.
* Once the user approves, the frontend will send an execute quote request to the backend. 
* The backend API will create an order with the order details and will then execute the process order workflow. The order will be dispatched and the correct workflow handler will be triggered. 
* The add/withdraw funds workflow will try to charge/refund the user payment method according to the order details. 
* If that succeeds, an internal network transaction is initiated to transfer the Libra Coins from the user account to the custody wallet inventory account or vice versa.
  * For purposes of the reference wallet, this transfer is not a blockchain transaction (i.e., it is an off-chain transaction) rather it updates the internal balance of the user.
  * Wallets may choose to structure their accounts differently than demonstrated here.
* After the internal transfer is complete, the wallet has to rebalance the inventory. This is the **cover process**. 

Usually, the cover process is independent of the order execution process and contains elements like exposure management, risk management, trading strategies, spread management, and more. 

The cover process in the Libra Reference Wallet is executed back-to-back with the order execution. In our example, the backend will be covered by trade with the liquidity provider.

#### Example cover process

* The wallet is committing to the liquidity provider to pay 100 USD in exchange for 100 LBRUSD.
* The wallet then asks the liquidity provider to withdraw the Libra balance into the customer wallet as part of the trade execution.
  * The trade with the liquidity provider represents the commitment and execution bonded together. 
* After the wallet asks the liquidity provider for and executes a quote to buy 100 LBRUSD/LBR, the liquidity provider will log on its side the wallet depth in fiat for -100USD and will transfer 100LBRUSD back to the wallet inventory account, which will now be balanced.


#### Withdraw funds

In the withdrawal process, things work the other way around. The user payment method is refunded, an internal transaction moves Libra Coins from the user account (off-chain) to the inventory account, and then in the cover process Libra Coins are traded in exchange for fiat back-to-back with the liquidity provider. 


#### Convert funds 

For the purpose of simplifying this Libra Reference Wallet, the conversion between Libra Coins of different currencies is represented by transactions between the custodial wallet and the user and reflected by internal transfers (off-chain) between the user account and the inventory account.


### Settlement flow

Settlement flow is not implemented at this point. This is the process where the liquidity provider and custody wallet settle the fiat balances owed to each other by passing a reference for fiat wire transfers between the custody wallet bank account and the liquidity provider bank account and vice versa to settle the debt. The settlement interface and internal structures are demonstrated in the liquidity provider-client implementation. 



### Main components

#### API methods

These provide the backend interface for frontend client requests. All calls related to liquidity are handled in the dedicated Flask blueprint under wallet/routes/cico.py.

| Methods                                           | Description                                                  |
| ------------------------------------------------- | ------------------------------------------------------------ |
| `GET /account/rates`                              | Return to the client all available conversion rates between currency pairs |
| `POST /account/quotes`                            | Request for a quote for a currency pair exchange. Return a quote id. |
| `POST /account/quotes/<quote_id>/actions/execute` | Execute the quote. At the end of execution, user balance will reflect the currency exchange. |
| `GET /account/quotes/<quote_id>`                  | Return the quote execution status.                           |



#### Liquidity module

This module is located under `wallet/liquidity.`

It contains all the utilities for rate calculation and client order processing, as well as a client to communicate with an external liquidity provider.

#### Client

The client simulates a client SDK that interacts with an external liquidity provider. It allows its user to ask for quotes from the liquidity provider, execute a trade with the liquidity provider on a given quote, and demonstrate the fiat settlement interface.

#### Order service

Contains the code that handles the end-user order creation, status updates, and utility functions that contain the logic required for the order execution and cover processes.

#### Rate service

A utility code that demonstrates rate calculation for different currency pairs with a fixed conversion table.

#### Exchange rates

Exchange rates are pre-defined. The liquidity provider supports a predefined set of currency pairs with fixed conversion rates. The Libra Reference Wallet supports a richer set of conversions by managing a conversion table which describes the steps required to convert between currencies that do not have a direct conversion between them.



## Reference

* [Set Up](set-up-reference-wallet.md) - Learn how to deploy the Libra Reference Wallet.
* [Wallet Architecture](wallet-arch.md) - Learn more about PubSub and how it's implemented.
* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet
* [Try the Demo Wallet](public-demo-wallet.md) - Check out the demo wallet running on testnet. 
* [Libra Coins Sourcing](liquidity.md) - Read about how Libra Coins are sourced.