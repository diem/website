---
id: try-wallet-admin
title: 'Try the Wallet Administration Dashboard'
sidebar_label: Try the Wallet Admin Dashboard 

---


## Overview

The admin UI allows admin users to perform several administrative task:



*   Review registered users.
*   Block users.
*   Add new admin users.
*   Settle Liquidity Provider debt.

To access the admin UI, log in using admin credentials. Upon login the user will be presented with UI different from the regular user.


>
>    Note: There always exists an admin user named admin@lrw_
>

> 
>    Note: The admin UI is not accessible in the mobile app. 
>


## Main page

The main page of the admin UI shows the total number of registered users and the total wallet balances for each Libra currency. From the main page user can browse to three secondary pages:



*   User management
*   Administrators management
*   Liquidity management

>
> Pending illustration: Admin main page 
>




## User and admin management pages

Both these pages offer a list of users. Clicking “Block” button will force the user to be logged out immediately and prevent them from entering the system again.

On the administrators management page “Add administrator” button allows adding a new admin user to the system.


## Liquidity management page

This page simulates management of the wallet debt for its liquidity provider. The wallet continuously sells and buys funds from the liquidity provider. While the Libra funds are immediately transferred, the corresponding fiat amount is accumulated and settled manually. In real-world scenarios the settlement usually involves some kind of wire transfer. Here, for demonstration purposes, clicking “Settle” marks the debt as settled immediately.
