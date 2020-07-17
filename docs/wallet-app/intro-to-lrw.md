---
id: intro-to-lrw
title: 'Introduction to the Libra Reference Wallet'
sidebar_label: Introduction
---



The Libra Reference Wallet is meant to help developers learn how a wallet could work on the Libra Blockchain. Once you [set up and deploy the Reference Wallet locally](set-up-reference-wallet.md), you can test and understand the concepts behind wallet development on the blockchain. The goal of the reference wallet project is to help you determine how to implement, customize, and integrate your wallet on the Libra network.

We’ve also created a public, online demo version of the Reference Wallet. This [Public Demo Wallet](public-demo-wallet.md) does not have all the functionalities of the Reference Wallet, and is only meant to provide a demonstration of basic wallet use cases on testnet.



### The lifecycle of a transaction

Before you get started with the Libra Reference Wallet, get familiar with how transactions are sent and received on the blockchain. 

When you submit a transaction to the network, you are cryptographically signing a transaction script and then waiting (by listening to the event stream) for consensus from validators. The diagram below shows the flow of a transaction once it’s been submitted. Learn more about this flow [here](/core/life-of-a-transaction.md). 

