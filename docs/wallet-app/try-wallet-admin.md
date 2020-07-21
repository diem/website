---
id: try-wallet-admin
title: 'Try the Wallet Administration Dashboard'
sidebar_label: Try the Wallet Admin Dashboard 

---


## Overview

The admin UI allows admin users to perform several administrative tasks:



*   Review registered users.
*   Block users.
*   Add new admin users.
*   Settle Liquidity Provider debt.

To access the admin UI, log in using admin credentials. Upon login the user will be presented with UI different from the regular user.

>
>Note: 
>    
>            - There always exists an admin user named admin@lrw
>           - The admin UI is not accessible in the mobile app.  
> 



## Main page

The main page of the admin UI shows the total number of registered users and the total wallet balances for each Libra currency. From the main page user can browse to three secondary pages:



*   User management
*   Administrators management
*   Liquidity management




## User and admin management pages

Both these pages offer a list of users. Clicking “Block” button will force the user to be logged out immediately and prevent them from entering the system again.

On the administrators management page “Add administrator” button allows adding a new admin user to the system.


## Liquidity management page

This page simulates management of the wallet debt for its liquidity provider. The wallet continuously sells and buys funds from the liquidity provider. While the Libra funds are immediately transferred, the corresponding fiat amount is accumulated and settled manually. In real-world scenarios the settlement usually involves some kind of wire transfer. Here, for demonstration purposes, clicking “Settle” marks the debt as settled immediately.

## Reference

* [Set Up](set-up-reference-wallet.md) - Learn how to deploy the Libra Reference Wallet.
* [Inventory Module](inventory-mod.md) - Introduction to inventory setup and settlement flows. 
* [Wallet Architecture](wallet-arch.md) - Learn more about PubSub and how it's implemented.
* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet
* [Test the Local Mobile Wallet](try-local-mobile-wallet.md) - Test the local mobile version of the Libra Reference Wallet