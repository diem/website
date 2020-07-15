---
id: liquidity
title: 'Liquidity'
sidebar_label: Liquidity

---



A liquidity service provides the ability to convert funds from one currency to another. A full liquidity solution is usually beyond the functionality of a wallet. Most wallets would rely on external liquidity providers. 

The Libra Reference Wallet models this approach by having an internal liquidity service that manages its liquidity processes, and contacts external liquidity provider stubs to simulate liquidity order fulfillment by a third-party service provider.

![img](https://lh4.googleusercontent.com/w0ar4ZlT8rwkzfHhFQuPzqnJIu5ffuGzzjqzrQLSI_JVjDrxjnjnVoUw5wF5vWd4fVGHNagihWGNLIsFHRo4NGQ6i4ej0qidDBMNkIBPimokgqNEtlL5tR-7bubnBuG1uPmr3lik)



## Custodial wallets

The basic concept of moving between fiat currency and Libra Coins relies on a liquidity cycle, which usually involves a request for a quote from the liquidity provider and an actual buy or sell execution. However, in a custodial wallet, the user usually expects a fluid and smooth experience in which the money is transferred immediately, without the “exchange” experience of ever-changing rates. 

### Inventory management

To achieve this behavior, a custodial wallet holds funds in an internal inventory account. When a user buys or sells Libra Coins, the transaction is performed internally against the inventory account. In order to supply responsive liquidity services, a custodial wallet has to continuously manage the internal inventory, replenishing it or purging if needed. 

Specific liquidity management strategies may vary according to each business.

* For example, inventory management can be done in a **one-to-one** manner. This means for each transaction, a wallet will ask its liquidity provider to buy or sell funds to keep a constant amount in the inventory. 

* Another approach is to manage the inventory on a daily basis and cover all daily transactions in one request to the liquidity provider. 

For the sake of simplicity, the Libra Reference Wallet implements **the one-to-one** approach.

For a smooth and fluid experience, and because quotes usually last for a short time until expiry, there is a need for a benchmark rate for each currency. Such a rate doesn’t bind the wallet or the liquidity provider for the price offers, but instead gives an idea about the exchange rate of the currency at this moment. 

These rates aren’t expected to be changed very often. But, as the user will expect the actual buy to be charged as displayed, the wallet must limit the ability to move between rate boundaries. When the front-end is running, it polls for rates on a regular basis (every few seconds). When a user wants to buy Libra currency, its price calculation is based on these rates. This way the price should not change while filling or changing the amount on the screen. When moving forward to review the deal, the client validates that the price does not exceed boundaries (this is a backend decision), and then asks for execution.

## Architecture
The use cases handled by the service are:

* Add funds: This simulates the purchase of Libra Coins in exchange for a fiat currency.
* Withdraw funds: Used to simulate a withdrawal of fiat currency in exchange for deducted Libra Coins.
* Convert: Simulates a conversion between the different Libra currencies.

In the Add Funds use case, the user’s credit card or bank account is charged the fiat currency amount. In the Withdraw Funds use case, the user’s credit card or the bank account is credited to simulate the withdrawal.