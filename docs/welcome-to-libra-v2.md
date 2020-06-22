---
id: welcome-to-libra-v2
title: Libra Developer Documentation
disable_pagination: true
sidebar_label: Home
---

Browse the latest documentation on the Libra Core, wallets, payments, and node operations. 

The Libra payment system is built on a secure, scalable, and reliable blockchain. It is backed by a reserve of high-quality liquid assets comprising cash or ca​sh eq​uivalents and very short-term government secu​rities. This will help ensure that people and businesses have confidence that their Libra Coins can be converted into their local currency. It is governed by the [Libra Association](http://libra.org/) and its subsidiary Libra Networks, tasked with developing and operating the Libra network and the Libra project.

<div className="margin-vert--xl" />

<CardsWrapper title="We welcome developers who want to:">
  <OverlayCard 
    description="I want to develop a wallet for the Libra Ecosystem"
    icon="img/wallet-app.svg" 
    iconDark="img/wallet-app-dark.svg"
    title="Build a Wallet" 
    to="#"
  />
  <OverlayCard 
    description="I'm a merchant who wants to integrate & accept Libra payments"
    icon="img/merchant-solutions.svg" 
    iconDark="img/merchant-solutions-dark.svg" 
    title="Accept Payments" 
    to="#"
  />
  <OverlayCard 
    description="I want to use Move to develop transaction logic & smart contract"
    icon="img/move.svg" 
    iconDark="img/move-dark.svg" 
    title="Develop with Move" 
    to="#"
  />
  <OverlayCard 
    description="I want to learn about Libra under the hood or contribute improvements"
    icon="img/core-contributors.svg" 
    iconDark="img/core-contributors-dark.svg" 
    title="Contribute to Core" 
    to="#"
  />
  <OverlayCard 
    description="I want to run a full Libra node"
    icon="img/node-operators.svg" 
    iconDark="img/node-operators-dark.svg" 
    title="Run a Node" 
    to="#"
  />
</CardsWrapper>


## Discover Libra Docs

<MultiStepSnippet
  defaultValue="js"
  values={[
    { value: 'js', label: (
      <ColorCard 
        color="purpleDark"
        icon="img/transaction.svg"
        iconDark="img/transaction-dark.svg"
        overlay="Send a test transaction to orem ipsum dolor sit amet, ctetur adipiscing elit, sed do"
        title="Send a test transaction"
        type="snippetTab"
      />
    )},
    { value: 'py', label: (
      <ColorCard 
        color="purpleLight"
        icon="img/docs/move-program.svg" 
        iconDark="img/docs/move-program-dark.svg"
        overlay="Second overlay (no content specified in comps"
        title="Write a move program"
        type="snippetTab"
      />
    )},
    { value: 'java', label: (
      <ColorCard 
        color="aqua"
        icon="img/docs/try-a-wallet.svg" 
        iconDark="img/docs/try-a-wallet-dark.svg"
        overlay="Third overlay (no content specified in comps"
        title="Try out a wallet"
        type="snippetTab"
      />
    )},
  ]
}>
<TabItem value="js">

```jsx
import React, { useState } from "react"; wef wef wef wef ewfw fe ew wef ewf we ;
 
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
</MultiStepSnippet>

## Explore Github

<CardsWrapper>
  <TagCard
    icon="img/github.svg"
    iconDark="img/github-dark.svg"
    tags={["Web", "Mobile", "Merchant"]}
    title="Reference Wallet"
    to="https://github.com/libra"
  />
  <TagCard
    icon="img/github.svg"
    iconDark="img/github-dark.svg"
    tags={["Web", "Mobile", "Merchant"]}
    title="Reference Merchant"
    to="https://github.com/libra"
  />
  <TagCard
    icon="img/github.svg"
    iconDark="img/github-dark.svg"
    tags={["Web", "Mobile", "Core"]}
    title="Libra Core"
    to="https://github.com/libra"
  />
</CardsWrapper>

<div className="margin-vert--lg" />

Check out the Libra network’s documentation and community sites, and stay up to date by signing up for our newsletter here.
Tell us your plan to build a product or service. We know that not all aspects of the Libra network will be available immediately to some developers. We're excited to work with the community to evolve these features, and look forward to your participation!
