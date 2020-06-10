---
id: demo
title: components demo
sidebar_label: Components Demo
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

<Excerpt image="img/white-paper-excerpt.svg">
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
