---
title: 'Freename FAQs'
sidebar_position: 4
image: 'img/thumbs/freenameXmc.png'
---

# Freename FAQs

Frequently asked questions for working with Freename and Mailchain.

### How do I register an Freename domain name?

Visit [Freename.io](https://freename.io) and follow instructions on their site.

### Can someone send me a Mailchain message to my Freename top-level domain (TLD) or second-level domain (SLD)?

You can ask anyone to send messages to your Freename TLD or SLD using the address format below: [Does Mailchain support shorthand addressing for Freename](#does-mailchain-support-shorthand-addressing-for-freename)

### What happens when someone sends a message to my Freename domain in Mailchain?

When someone sends a Mailchain message to a Freename domain, Mailchain resolves the Freename domain and delivers the message to the resolved address (the address of registered owner of the Freename NFT).

If you are the owner of the minted name, then the message will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the protocol will still accept the encrypted message and store it for up to 90 days. You can synchronize messages for this address when you register the wallet address. (See [How to add your Freename domain to Mailchain](/user/guides/name-services/freename/freename-getting-started#how-to-add-your-freename-domain-name-to-mailchain))

### My Freename domain was not found, what should I check?

1. Check you are registering the intended wallet address
2. Check your Freename domain is minted and in your wallet

### How does Mailchain resolve Freename domains?

Mailchain will always resolve the name from the [Freename.io](https://freename.io) resolver API so it will reflect the latest changes returned by the resolver.

### What address record does Mailchain use when it resolves a name?

Mailchain will resolve and return the first valid record from this order: `ETH` record, `Owner` record.

### What happens if I no longer own my Freename domain?

If the Freename domain no longer resolves to your address, Mailchain messages will no longer be sent to your address either. If someone else registers a wallet address in Mailchain that the Freename domain resolves to, they will receive messages sent to the Freename domain. This will not have any impact on messages already in your inbox.

### Does Mailchain support shorthand addressing for Freename?

| TLD          | Fully qualified Mailchain address                               | Shorthand Mailchain address | Name service address                              |
| ------------ | --------------------------------------------------------------- | --------------------------- | ------------------------------------------------- |
| .hodl        | _yourname_.hodl<span>@</span>freename.mailchain.com             | _yourname_.hodl             | _yourname_.hodl<span>@</span>freename             |
| _Other TLDs_ | _yourname_._web3domainname_<span>@</span>freename.mailchain.com |                             | _yourname_._web3domainname_<span>@</span>freename |
