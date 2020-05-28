---
id: overview-v2
title: Libra Core Overview
sidebar_label: Core Contributors
---

<Code 
  language="jsx"
  code={`
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
 `}
/>

<Code
  language="bash"
  code={`
libra% query txn_acc_seq 0 0 true
>> Getting committed transaction by account and sequence number
Committed transaction: SignedTransaction {
 { raw_txn: RawTransaction {
    sender: 3ed8e5fafae4147b2a105a0be2f81972883441cfaaadf93fc0868e7a0253c4a8,
    sequence_number: 0,
    payload: {,
      transaction: peer_to_peer_transaction,
      args: [
        {ADDRESS: 8337aac709a41fe6be03cad8878a0d4209740b1608f8a81566c9a7d4b95a2ec7},
        {U64: 10000000},
      ]
    },
    max_gas_amount: 10000,
    gas_unit_price: 0,
    expiration_time: 1560466424s,
},
 public_key: 55af3fe3f28550a2f1e5ebf073ef193feda44344d94c463b48be202aa0b3255d,
 signature: Signature( R: CompressedEdwardsY: [210, 23, 214, 62, 228, 179, 64, 147, 81, 159, 180, 138, 100, 211, 111, 139, 178, 148, 81, 1, 240, 135, 148, 145, 104, 234, 227, 239, 198, 153, 13, 199], s: Scalar{
  bytes: [203, 76, 105, 49, 64, 130, 162, 81, 22, 237, 159, 26, 80, 181, 111, 94, 84, 6, 152, 126, 181, 192, 62, 103, 130, 94, 246, 174, 139, 214, 3, 15],
} ),
 }
 }
Events:
ContractEvent { access_path: AccessPath { address: 3ed8e5fafae4147b2a105a0be2f81972883441cfaaadf93fc0868e7a0253c4a8, type: Resource, hash: "217da6c6b3e19f1825cfb2676daecce3bf3de03cf26647c78df00b371b25cc97", suffix: "/sent_events_count/" } , index: 0, event_data: AccountEvent { account: 8337aac709a41fe6be03cad8878a0d4209740b1608f8a81566c9a7d4b95a2ec7, amount: 10000000 } }
ContractEvent { access_path: AccessPath { address: 8337aac709a41fe6be03cad8878a0d4209740b1608f8a81566c9a7d4b95a2ec7, type: Resource, hash: "217da6c6b3e19f1825cfb2676daecce3bf3de03cf26647c78df00b371b25cc97", suffix: "/received_events_count/" } , index: 0, event_data: AccountEvent { account: 3ed8e5fafae4147b2a105a0be2f81972883441cfaaadf93fc0868e7a0253c4a8, amount: 10000000 } }
  `}
/>

<Code
  language="python"
  code={`
# Function to reverse words of string 
def rev_sentence(sentence): 
    # first split the string into words 
    words = sentence.split(' ')  
  
    # then reverse the split string list and join using space 
    reverse_sentence = ' '.join(reversed(words))  
  
    # finally return the joined string 
    return reverse_sentence   
  
if __name__ == "__main__": 
    input = 'geeks quiz practice code'
    print rev_sentence(input)
`}
/>

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
