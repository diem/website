---
id: demo
title: Components demo
sidebar_label: Components Demo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<br />

## Matches comps

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

## 4 Tabs
<MultiStepSnippet
  defaultValue="js"
  values={[
    { value: 'js', label: (
      <ColorCard 
        color="purpleDark"
        icon="img/transaction.svg"
        iconDark="img/transaction-dark.svg"
        overlay="Some random overlay"
        title="Send a test transaction"
        type="snippetTab"
      />
    )},
    { value: 'py', label: (
      <ColorCard 
        color="purpleLight"
        icon="img/docs/move-program.svg" 
        iconDark="img/docs/move-program-dark.svg"
        title="Write a move program"
        type="snippetTab"
      />
    )},
    { value: 'java', label: (
      <ColorCard 
        color="aqua"
        icon="img/docs/try-a-wallet.svg" 
        iconDark="img/docs/try-a-wallet-dark.svg"
        title="Try out a wallet"
        type="snippetTab"
      />
    )},
    { value: 'CSS', label: (
      <ColorCard 
        color="purpleLight"
        icon="img/docs/try-a-wallet.svg" 
        iconDark="img/docs/try-a-wallet-dark.svg"
        overlay="Another random overlay"
        title="Test of the fourth tab"
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
<TabItem value="CSS">

```java
class HelloWorldwefiowief {
  public static void main(String args[]) {
    System.out.println("Hellewfweo, World");
  }
}
```

</TabItem>
</MultiStepSnippet>

## 5 Tabs
<MultiStepSnippet
  defaultValue="js"
  values={[
    { value: 'js', label: (
      <ColorCard 
        color="purpleDark"
        icon="img/transaction.svg"
        iconDark="img/transaction-dark.svg"
        overlay="Some random overlay"
        title="Send a test transaction"
        type="snippetTab"
      />
    )},
    { value: 'py', label: (
      <ColorCard 
        color="purpleLight"
        icon="img/docs/move-program.svg" 
        iconDark="img/docs/move-program-dark.svg"
        title="Write a move program"
        type="snippetTab"
      />
    )},
    { value: 'java', label: (
      <ColorCard 
        color="aqua"
        icon="img/docs/try-a-wallet.svg" 
        iconDark="img/docs/try-a-wallet-dark.svg"
        title="Try out a wallet"
        type="snippetTab"
      />
    )},
    { value: 'fourth', label: (
      <ColorCard 
        color="purpleLight"
        icon="img/docs/try-a-wallet.svg" 
        iconDark="img/docs/try-a-wallet-dark.svg"
        overlay="Another random overlay"
        title="Test of the fourth tab"
        type="snippetTab"
      />
    )},
    { value: 'fifth', label: (
      <ColorCard 
        color="purpleDark"
        icon="img/docs/try-a-wallet.svg" 
        iconDark="img/docs/try-a-wallet-dark.svg"
        overlay="Another random overlay"
        title="Test of the fifth tab"
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
<TabItem value="fourth">

```java
class HeyYalllllll {
  public static void main(String args[]) {
    System.out.println("Hello!!!!, World");
  }
}
```

</TabItem>
<TabItem value="fifth">

```jsx
function test() {
  console.log(123);
}
```

</TabItem>

</MultiStepSnippet>

## One tab has much longer text than the rest
<MultiStepSnippet
  defaultValue="js"
  values={[
    { value: 'js', label: (
      <ColorCard 
        color="purpleDark"
        icon="img/transaction.svg"
        iconDark="img/transaction-dark.svg"
        title="Send a test transaction, jump over the lazy dog, be a quick brown fox"
        type="snippetTab"
      />
    )},
    { value: 'py', label: (
      <ColorCard 
        color="purpleLight"
        icon="img/docs/move-program.svg" 
        iconDark="img/docs/move-program-dark.svg"
        title="Write a move program"
        type="snippetTab"
      />
    )},
    { value: 'java', label: (
      <ColorCard 
        color="aqua"
        icon="img/docs/try-a-wallet.svg" 
        iconDark="img/docs/try-a-wallet-dark.svg"
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

## One tab has much longer text HOVER text than the rest
<MultiStepSnippet
  defaultValue="js"
  values={[
    { value: 'js', label: (
      <ColorCard 
        color="purpleDark"
        icon="img/transaction.svg"
        iconDark="img/transaction-dark.svg"
        overlay="This is going to be a very, very, very long overlay. Much longer than would probably be written, but something that really, really, really, really, really, really should be accounted for. Why you ask? Well, good question. It all comes down to some advice my grandfather gave me in 2009. Right before he passed away, he told me some words I'll never forget. He croaked, in a hoarse but insistent voice, 'If you ever have a hidden overlay, you must make sure to account for the corresponding height'. I'll never forget those words. Hope I made gramps proud."
        title="Send a test transaction"
        type="snippetTab"
      />
    )},
    { value: 'py', label: (
      <ColorCard 
        color="purpleLight"
        icon="img/docs/move-program.svg" 
        iconDark="img/docs/move-program-dark.svg"
        title="Write a move program"
        type="snippetTab"
      />
    )},
    { value: 'java', label: (
      <ColorCard 
        color="aqua"
        icon="img/docs/try-a-wallet.svg" 
        iconDark="img/docs/try-a-wallet-dark.svg"
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

## Normal Code Snippet

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


### Excerpt Demo

<Excerpt image="img/white-paper-excerpt.svg">
  The world truly needs a reliable digital currency and infrastructure that together can deliver on the promise of “the internet of money.” Securing your financial assets on your mobile device should be simple and intuitive. Moving money around globally should be as easy and cost-effective as — and even more safe and secure than — sending a text message or sharing a photo, no matter where you live, what you do, or how much you earn.  
   &nbsp;<a href='#'>— Libra White Paper</a>
</Excerpt>

