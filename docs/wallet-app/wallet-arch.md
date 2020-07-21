---
id: wallet-arch
title: 'Wallet Architecture'
sidebar_label: Wallet Architecture
---

The Libra Reference Wallet is structured into three main modules: 



## Wallet

The Wallet module manages the core functionality of a wallet, such as account creation and management, balance updates, as well as the business and compliance logic of sending and receiving transactions. This module has been developed so that the Libra Reference Wallet is custodial. Although you may use this information to develop wallets that are not custodial, these types of wallets will not be available at launch of mainnet. 



## Web app

The Libra Reference Wallet uses Flask as its web framework. The web app provides [a RESTful API](service-api.md) that is divided into user, account, CICO, and admin. 



## PubSub

PubSub allows you to continually poll the Libra Blockchain and respond to events on-chain. In the Libra Reference Wallet, we listen to the event stream to track payments made to the public on-chain address of a VASP (Virtual Asset Service Provider) or a wallet developer. 



## Reference

* [Set Up](set-up-reference-wallet.md) - Learn how to deploy the Libra Reference Wallet.
* [Service APIs](service-api.md) - Introduction to RESTful APIs that are organized in terms of high-level wallet functionalities
* [PubSub](pubsub.md) - Learn more about PubSub and how it's implemented.
* [Try the Demo Wallet](public-demo-wallet.md) - Check out the demo wallet running on testnet. 

