---
id: wallet-arch
title: 'Wallet Architecture'
sidebar_label: Wallet Architecture
---

The Libra Reference Wallet is structured into three main modules: 



## Wallet

The Wallet module manages the core functionality of a wallet, such as account creation and management, balance updates, as well as the business and compliance logic of sending and receiving transactions. This module has been developed so that the Libra Reference Wallet is custodial. You can develop wallets that are not custodial as well. 



## Web app

The Libra Reference Wallet uses Flask as its web framework. The web app provides [a RESTful API](service-api.md) that is divided into user, account, CICO, and admin. 



## PubSub

PubSub allows you to continually poll the blockchain and respond to events on-chain. In the Libra Reference Wallet, we listen to the event stream to track payments made to the public on-chain address of a VASP (Virtual Asset Service Provider) or a wallet developer. 