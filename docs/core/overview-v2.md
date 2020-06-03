---
id: overview-v2
title: Libra Core Overview
sidebar_label: Core Contributors
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="snippet-container">
  <Tabs
    defaultValue="js"
    values={[
      { label: 'Javascript', value: 'js', },
      { label: 'Python', value: 'py', },
      { label: 'Java', value: 'java', },
    ]
  }>
  <TabItem value="js">

  ```jsx
  import React, { useState } from "react";
   
  function Example() {
    const [count, setCount] = useState(0);
     
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  def hello_world():
    print('Hello, world!')
  ```

  </TabItem>
  <TabItem value="java">

  ```java
  class HelloWorld {
    public static void main(String args[]) {
      System.out.println("Hello, World");
    }
  }
  ```

  </TabItem>
  </Tabs>
</div>

### Excerpt Demo

<Excerpt image="img/white-paper-screenshot.png">
  The world truly needs a reliable digital currency and infrastructure that together can deliver on the promise of “the internet of money.” Securing your financial assets on your mobile device should be simple and intuitive. Moving money around globally should be as easy and cost-effective as — and even more safe and secure than — sending a text message or sharing a photo, no matter where you live, what you do, or how much you earn.  
  <a href='#'>— Libra White Paper</a>
</Excerpt>

```jsx
import React, { useState } from "react";
   
function Example() {
  const [count, setCount] = useState(0);
   
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

```
usage: <command> <args>

Use the following commands:

account | a
  Account operations
query | q
  Query operations
transfer | transferb | t | tb
  <sender_account_address>|<sender_account_ref_id> <receiver_account_address>|<receiver_account_ref_id> <number_of_coins> [gas_unit_price (default=0)] [max_gas_amount (default 10000)] Suffix 'b' is for blocking.
  Transfer coins from account to another.
help | h
  Prints this help
quit | q!
  Exit this client


Please, input commands:

libra%
```

Libra Core is the official name for the open-source implementation of the Libra protocol published by the Libra Association.

### Discover Core Contributor

<CardsWrapper>
  <ColorCard 
    color="purpleDark"
    icon="img/four-squares-temp.png"
    to="#"
    title="Send a test transaction"
  />
  <ColorCard 
    color="purpleLight"
    icon="img/four-squares-temp.png"
    to="#"
    title="Run a client"
  />
  <ColorCard 
    color="aqua"
    icon="img/four-squares-temp.png"
    to="#"
    title="Query the Libra blockchain"
  />
</CardsWrapper>

### Learn

<CardsWrapper>
  <OverlayCard 
    description="I want to understand nodes"
    icon="img/docs/node.svg" 
    title="Nodes" 
    to="#"
  />
  <OverlayCard 
    description="How do transactions work?"
    icon="img/four-squares-temp.png" 
    title="Transactions" 
    to="#"
  />
  <OverlayCard 
    description="What does a Libra account look like?"
    icon="img/wallet-app.svg" 
    title="Accounts" 
    to="#"
  />
</CardsWrapper>

### Develop

<CardsWrapper>
  <SimpleCard
    icon="img/four-squares-temp.png"
    title="Read me the core specifications"
    to="#"
  />
  <SimpleCard
    icon="img/four-squares-temp.png"
    title="Using the client SDK"
    to="#"
  />
  <SimpleCard
    icon="img/core-contributors.svg"
    title="Show me the developer APIs"
    to="#"
  />
</CardsWrapper>


* This software is the first implementation of the Libra protocol and the Move language.
* Libra Core includes both validator and client functionalities.
* Libra Core is written in Rust.

## Component READMEs of Libra Core

* [Admission Control](crates/admission-control.md)
* [Bytecode Verifier](crates/bytecode-verifier.md)
* [Consensus](crates/consensus.md)
* [Crypto](crates/crypto.md)
* [Execution](crates/execution.md)
* [Mempool](crates/mempool.md)
* [Move IR Compiler](crates/ir-to-bytecode.md)
* [Move Language](crates/move-language.md)
* [Network](crates/network.md)
* [Storage](crates/storage.md)
* [Virtual Machine](crates/vm.md)
