---
id: pubsub
title: 'PubSub'
sidebar_label: PubSub

---



PubSub allows us to continually poll the blockchain and respond to events on-chain. Specifically, for the Libra Reference Wallet, we’re listening to payments made to the VASPs’ public on-chain addresses.

### Implementation

Our *pubsub* module is based on an open source project called *pubsub_proxy*, a lightweight wrapper around *pylibra*. For the Libra Reference Wallet, we redirect all events delivered by pubsub_proxy directly to our wallet service’s *on-chain* module for internal processing.

PubSub depends on the *PUBSUB_ADDR* environment variable.


### Extend functionality

*Pubsub_proxy* is designed to be extensible. You can extend *BasePubSubClient* to determine how to handle incoming payment events.



## Reference

* [Test the Local Web Wallet](try-local-web-wallet.md) - Test the local web version of the Libra Reference Wallet.
* [Test the Local Mobile Wallet](try-local-mobile-wallet.md) - Test the local mobile version of the Libra Reference Wallet
* [Wallet Architecture](wallet-arch.md) - Learn more about the different modules part of the wallet architecture.