---
title: 'Aurora FAQs'
sidebar_position: 4
image: 'img/thumbs/auroraXmc.png'
---

# Aurora FAQs

Frequently asked questions for working with Aurora and Mailchain.

### How do I register an .aurora name?

The .aurora registry is operated by Freename. Visit [Freename.io](https://freename.io) and follow instructions on their site.

### Can someone send me a Mailchain message to my Aurora address or .aurora name?

You can ask anyone to send messages to your .aurora name or the wallet address you use on aurora… it’s a Web3 identity after all!

### What happens when someone sends a message to my .aurora name in Mailchain?

When someone sends a Mailchain message to an Aurora name, Mailchain resolves the .aurora name and delivers the message to the resolved address (the address of registered owner of the .aurora NFT).

If you are the owner of the minted name, then the message will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the protocol will still accept the encrypted message and store it for up to 90 days. You can synchronize messages for this address when you register the wallet address. (See [How to add your .aurora name to Mailchain](/user/guides/name-services/aurora/aurora-getting-started#how-to-add-your-aurora-name-to-mailchain))

### My .aurora name was not found, what should I check?

1. Check you are registering the intended wallet address
2. Check your .aurora name is minted and in your wallet

### How does Mailchain resolve .aurora names?

Mailchain will always resolve the name from the [Freename.io](https://freename.io) resolver API so it will reflect the latest changes returned by the resolver.

### What happens if I no longer own my .aurora name?

If your address is no longer the owner of the .aurora name, it will not resolve and Mailchain messages will no longer be sent to the address. If someone else registers the address that owns the name in Mailchain, they will be able to receive messages sent to the .aurora name. This will not have any impact on messages already in your inbox.

### Does Mailchain support shorthand addressing for .aurora?

| TLD     | Fully qualified Mailchain address                     | Shorthand Mailchain address |
| ------- | ----------------------------------------------------- | --------------------------- |
| .aurora | _yourname_.aurora<span>@</span>freename.mailchain.com | _yourname_.crypto           |
