---
id: libra-c-source
title: 'Libra Coin Sourcing'
sidebar_label: Libra Coin Sourcing

---

Generally, a custodial wallet service will be expected to buy and sell Libra Coins for fiat currency in the market, from a variety of service providers. This type of service is beyond the scope of the Libra Reference Wallet. 

The Libra Reference Wallet models this approach by 1) having an internal liquidity service that manages its liquidity processes and 2) arrangements with external liquidity provider stubs to simulate Libra Coin order fulfillment by a third-party service provider. This model facilitates a custodial wallet providing a fluid and smooth customer experience, through which a customer can purchase Libra Coins for fiat through the custodial wallet interface, without having to separately engage with the fiat-Libra Coin service provider. 

![](/img/docs/libra-c-sourcing.svg)



## Inventory management

A custodial wallet holds Libra Coins in an internal inventory account. When a customer buys or sells Libra Coins with the custodial wallet service, the transaction is performed internally against the custodial wallet service’s inventory account. In order to fulfill customer purchase or sale orders on an ongoing basis, a custodial wallet has to continuously manage its internal inventory, replenishing it or reducing it as needed. 

Specific liquidity management strategies may vary according to each business.

* For example, Libra Coin inventory management can be done in a **one-to-one** manner**.** This means for each customer transaction, a custodial wallet service will offset increases or decreases to its inventory with sales or purchases from a third-party liquidity provider. 
* Another approach is to manage Libra Coin inventory on a daily basis. A custodial wallet service would net all daily customer transactions and engage in one (or a few) transactions with a third-party liquidity provider to maintain desired Libra Coin inventory levels. 



For the sake of this demonstration, the Libra Reference Wallet implements **the one-to-one** approach**.** 



## Price Quotation Displays

Libra Coin prices are displayed in the Transfer section (Add, Withdraw, and Convert functions) of the wallet. Libra Coin price quotes from a custodial wallet to its customer aren’t expected to be changed very often. But as wallet customers will expect their transactions to be executed at the quoted rate as displayed, the wallet provider should try to limit the range of rates at which the transactions occur. While the front-end service is running, it polls for rates every few seconds. The price calculation used when a user wants to buy Libra Coins is based on these recently received rates. This way the price should not fluctuate too much while filling the order or updating the amounts displayed on the screen. Additionally, when a user confirms the simulated sale to convert Libra Coins to fiat or vice versa, the client validates that the price does not exceed boundaries (the boundary check is performed by the backend system), and then requests for execution.

Because quotes may last for a short time, customers may find it helpful for the wallet to display a benchmark rate for each currency. Such a rate would not be intended to bind the wallet or the third-party liquidity provider that provides the benchmark price, but instead gives an indication of the exchange rate in real time. 



## Architecture

The use cases handled by the custodial walletservice are:

* Add funds: This simulates the purchase of Libra Coins in exchange for a fiat currency.
* Withdraw funds: This simulates the withdrawal of fiat currency in exchange for the simulated sale of Libra Coins.
* Convert: This simulates a conversion between the different Libra Coins.

In the Add Funds use case, the user’s simulated credit card or bank account is charged the fiat currency amount to simulate the purchase. In the Withdraw Funds use case, the user’s simulated credit card or the bank account is credited to simulate the withdrawal.



## Reference

* [Set Up](set-up-reference-wallet.md) - Learn how to deploy the Libra Reference Wallet.
* [Inventory Module](inventory-mod.md) - Introduction to inventory setup and settlement flows. 
* [Wallet Architecture](wallet-arch.md) - Learn more about PubSub and how it's implemented.
* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet
* [Try the Demo Wallet](public-demo-wallet.md) - Check out the demo wallet running on testnet. 