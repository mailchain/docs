# Frequently Asked Questions

## General

### What is Mailchain?

Mailchain is building the next generation of messaging for web3. It provides a multi-protocol platform for sending and receiving messages between web3 addresses, where users don’t need to reveal private information about themselves. It's as simple as using email.

### What problem is Mailchain solving?

Today, there is no direct way to communicate via blockchain addresses in a crypto-native way. Users are forced to make trade-offs when they link email addresses and lose pseudo-anonymity, or join chat groups for broadcast messages where it's hard to keep track of relevant communication.

Without communication as a first class citizen, many actions taken for granted on the Internet cannot take place in web3. Users can’t receive direct communications related to their savings, loans, and financial positions. They can’t receive information from projects they care about in the context of how they interact with them. They can’t contact others in their community, for example, to make an offer to purchase a digital collectible. Businesses can’t receive receipts for payments, or invoices. Developers can’t be reached in the event of security issues and can’t send out important communications to their users if there is an issue, upgrade, or decision to be made. Adoption is held back.

### Why do I need Mailchain?

Mailchain acts as your web3 inbox, receiving messages in the context of your identities. Digital art-related messages get send to your digital collector identity, gaming-related notifications get sent to your gaming identity, and DeFi notifications get sent to your DeFi identity. Mailchain gives your the power to communicate and maintain privacy at the same time.

### How much does it cost to send a message on Mailchain?

For now, Mailchain is completely free. In future, Mailchain will subsidize a free tier for personal/low volume users. Higher volume users will pay a nominal transaction fee per message to cover transport and storage costs.

## Protocol and Decentralization

### Will Mailchain develop its own protocol?

Yes. The protocol will handle addressing, key lookups, transport, and storage. This is likely to leverage the security of an existing Layer 1 chain, whilst being able to support message sending at low cost and high throughput.

### Will Mailchain be fully decentralized?

Yes. Mailchain will be progressively decentralized. Our initial priorities are user experience, security, and supporting user-owned identity & data. Then, Mailchain will decentralize its protocol functions with an incentivization structure that encourages members of the community to participate in running infrastructure.

### Can Mailchain integrate or build on top of another protocol to avoid work duplication?

This has been explored previously. The biggest challenges are related to the other protocol's constraints (e.g. roadmap, scalability) and price volatility challenges. Mailchain constantly re-evaluates this position as new technologies and features become available.

### Can someone run their own Mailchain infrastructure?

As protocol functions are decentralized, the intention is for anyone to be able to run infrastructure.

### Why would someone run Mailchain infrastructure?
Businesses may want to run their own infrastructure to control how and where messages are stored. Other community members or service providers may run infrastructure in order to receive rewards.

## Mailchain Account Security

### Who can access my account information?

You are only able to access your account or any account information, with your private key or account password. Mailchain _cannot_ access your account or account information.

### What happens if I forget or lose my password?

If you forget or lose your password, you can recover your account using your seed phrase.

### What happens if I forget or lose my seed phrase?

If you forget or lose your seed phrase, you can recovery your account by logging into to Mailchain using your password.

### What happens if I forget my seed phrase and my password?

If you forget your seed phrase and your password, your account will be inaccessible.

<!-- Account recoverability options? -->

## Data & Messages

### Who can read my messages?

Mailchain messages are encrypted end-to-end. This means that once the sender has encrypted a message using the recipient's encryption key, only the recipient is able to decrypt it. The sender also keep an encrypted version of the message.
Mailchain _cannot_ read your messages, the storage provider _cannot_ read your messages, your internet service provider _cannot_ read your messages.

### Where is my data stored?

Mailchain stores encrypted message data on IPFS and other object stores.

<!-- ### Is my data backed up? -->
