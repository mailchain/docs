---
image: 'img/thumbs/social-square-1.png'
---

# Frequently Asked Questions

## General

### What is Mailchain?

Mailchain is the communication layer for web3. It makes it possible for people to communicate in a crypto-native way. The platform consists of two parts:

1. An open source, multi-chain protocol for sending encrypted messages between blockchain wallet addresses.
2. A simple, unified inbox application that makes it easy for users to view and send messages using the protocol and to keep track of their on-chain activity.

It's as simple as using email.

### What problem is Mailchain solving?

Today, there is no direct way to communicate via blockchain wallet addresses in a crypto-native way. Users are forced to make trade-offs when they link email addresses and lose pseudo-anonymity, or join chat groups for broadcast messages where it's hard to keep track of relevant communication.

Without communication as a first class citizen, many actions taken for granted on the Internet cannot take place in web3. Users can’t receive direct communications related to their savings, loans, and financial positions. They can’t receive information from projects they care about in the context of how they interact with them. They can’t contact others in their community, for example, to make an offer to purchase a digital collectible. Businesses can’t receive receipts for payments, or invoices. Developers can’t be reached in the event of security issues and can’t send out important communications to their users if there is an issue, upgrade, or decision to be made. Adoption is held back.

### Why do I need Mailchain?

Mailchain acts as your web3 inbox, receiving messages in the context of your identities. Digital art-related messages get sent to your digital collector identity, gaming-related notifications get sent to your gaming identity, and DeFi notifications get sent to your DeFi identity. Mailchain gives you the power to communicate and maintain privacy at the same time.

### How much does it cost to send a message on Mailchain?

Mailchain’s economic model is designed to be sustainable. It provides a "public good" quota of free messages for human users ensuring anyone can have access to secure, private communication at no cost. The model also supports the protocol and its infrastructure providers through message fees for high volume senders. Fees are targeted to be below $0.005.

## Protocol & Decentralization

### Why has Mailchain developed its own protocol?

There is no purpose-built communication protocol that supports group or one-to-one, end-to-end encrypted messaging between web3 identities.

There are big challenges related to using other protocols. Constraints include scalability, security, and price volatility challenges.

Mailchain's protocol is purpose built for secure and private communication. It natively handles encryption, addressing, key lookups, transport, and storage.

### Will Mailchain be fully decentralized?

Yes. Mailchain will be progressively decentralized. Our initial priorities are user experience, security, and supporting user-owned identity and data. Mailchain will then decentralize its protocol functions with an incentivization structure that encourages members of the community to participate in running infrastructure.

### Can someone run their own Mailchain infrastructure?

As protocol functions are decentralized, anyone will be able to run their own Mailchain infrastructure.

### Why would someone run Mailchain infrastructure?

Businesses may want to run their own infrastructure to control how and where messages are stored. Other community members or service providers may run infrastructure in order to receive rewards.

## Mailchain Account Security

### What is a Secret Recovery Phrase?

A Secret Recovery Phrase, sometimes known as a "mnemonic seed phrase" is used to mathematically derive all the messaging keys, private keys, signatures and other secrets for your account.

It should never be shared with anyone because doing so would give full, irrevocable access to your account. A Secret Recovery Phrase cannot be changed or recovered.

### Who can access my account information?

Only you are able to access your account information and data using your Secret Recovery Phrase or account password. Mailchain _cannot_ access your account or account information.

### What happens if I forget or lose my password?

If you forget or lose your password, you can recover your account using your Secret Recovery Phrase.

### What happens if I forget or lose my Secret Recovery Phrase?

If you forget or lose your Secret Recovery Phrase, you can recover your account if you know your Mailchain username and password.

### What happens if I forget my Secret Recovery Phrase and my password?

If you forget your Secret Recovery Phrase and your password, your account will be inaccessible.

### Will my data be accessible after I have recovered my account?

When you log in to Mailchain with your Secret Recovery Phrase or username and password combination, your messages, registered wallets, settings, etc. will be accessible to you.

### What should I do if I suspect my Secret Recovery Phrase or username and password combination have been compromised?

Any user who suspects their Secret Recovery Phrase or username and password combination has been compromised should create a new account and migrate their blockchain addresses by re-registering them with the new account. Any new messages will now use the messaging keys for the new account.

<!-- Account recoverability options? -->

## Data & Messages

### Who can read my messages?

Mailchain messages are encrypted end-to-end. This means that once the sender has encrypted a message using the recipient's encryption key, only the recipient is able to decrypt it. The sender also keeps an encrypted version of the message.

Mailchain _cannot_ read your messages, the storage provider _cannot_ read your messages, your internet service provider _cannot_ read your messages.

### Where is my data stored?

Mailchain stores encrypted message data on IPFS and other distributed object stores.

### Are my messages stored on the blockchain?

No. When a message is sent, the message is encrypted and stored on distributed storage. An encrypted "delivery request", which contains information for the message recipient to be able to collect their encrypted message, is sent as a blockchain transaction. Once a message has been collected, it will be stored in the recipient's inbox, and can be removed from the distributed storage location.

<!-- ### Is my data backed up? -->
