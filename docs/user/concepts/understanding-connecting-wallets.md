---
title: 'Connecting & Registering Wallets'
slug: './understanding-connecting-wallets'
sidebar_position: 102
---

# Introduction

Mailchain gives you the ability to check for messages sent to any of your blockchain addresses through your unified inbox. Once you register your blockchain address, you can start sending and receiving messages via that address.

Use cases include receiving notifications and communications based on your on-chain activities. You can also send messages from that address, and recipients can verify that the message originated from that address.

## How it works

Your Mailchain account has an identity key, which is used to generate messaging keys. When you register an existing blockchain wallet address, you prove that you own it by signing a message of confirmation.

This generates a verifiable proof without requiring a blockchain transaction or gas fee. It can then be associated with a messaging key.

When someone sends a message to your address, the application looks up your address at the registry lookup and receives a response containing the corresponding messaging key for your address.

## Bob and Alice use case example

Bob wants to send a message to Alice to let her know he has a new art collection coming out. He only knows the ethereum address she used when she bought his last piece. Alice has registered her ethereum address in Mailchain by signing a message confirming ownership with her wallet. Bob sends a message to Alice's address. In the background, the Mailchain application looks up Alice's address and gets the corresponding messaging key. The message is encrypted and routed using the messaging key details.

When Alice opens her inbox, she can see a message from Bob sent to her ethereum address. Alice's identity and message key details are used by the application to obtain and decrypt the message body, but the private key information is never revealed.

Bob has no way of knowing Alice has linked any other address to her Mailchain unified inbox.

When Bob receives a reply from Alice, he can check that the message key details are valid without knowing anything else about Alice's identity.
Alice never had to enter any sensitive information to Mailchain, and she retains full control and ownership of her private keys for encryption and decryption.

## Further Information

You can find more information on registering and removing wallets here:

-   [How to register a wallet](/user/guides/getting-started/register-a-wallet)
-   [How to remove a wallet](/user/guides/settings/remove-registered-address)
