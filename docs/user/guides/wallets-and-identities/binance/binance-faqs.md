---
title: 'Binance FAQs'
sidebar_position: 4
# image: 'img/thumbs/mailchain-mailto-messagetodaos.png'
---

# Binance FAQs

Frequently asked questions for working with BNB Smart Chain (BSC), .bnb names and Mailchain.

### Can someone send me a Mailchain message to my BSC address or .bnb name?

You can ask anyone to send messages to your BSC address or your .bnb name… it’s a Web3 identity afterall!

### Are .bnb domains supported for for communication?

Yes. `.bnb` domains registered through SPACE ID are supported in Mailchain.

### What happens when someone sends a message to my .bnb name in Mailchain?

When someone sends a Mailchain message to a .bnb name, Mailchain resolves the address via SPACE ID and delivers the message to the resolved address (the registered wallet address).

If you have already registered the wallet address in Mailchain, then the message will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the communication protocol will still accept the encrypted message and store it for up to 90 days. You can synchronize mail for this address when you register the wallet address. (See [How to add your .bnb name in Mailchain](/user/guides/wallets-and-identities/binance/binance-getting-started/#how-to-add-your-bnb-name-to-mailchain))

### What happens when my .bnb domain name expires?

When your .bnb name domains expires, Mailchain messages will no longer be sent to the address. If someone else registers the domain, they will be able to receive messages to this address.

### My .bnb name domain was not found, what should I check?

1. Check you are registering the intended wallet address
2. Check your .bnb name resolves to your address correctly at SPACE ID (see <a href="https://space.id/profile/domains" target="_blank">https://space.id/profile/domains</a>).

### What happens if I change where my .bnb name resolves?

Mailchain will always resolve the underlying domain from the SPACE ID API, the .bnb name provider, so it will reflect the latest changes returned by the resolver.

### How do I set my primary .bnb name?

To configure your .bnb primary names, please see <a href="https://docs.space.id/getting-started/tutorials/manage" target="_blank">https://docs.space.id/getting-started/tutorials/manage</a>.

### Does Mailchain support shorthand addressing for binance smart chain addresses and .bnb names?

| Address Type        | Fully qualified Mailchain address                 | Shorthand Mailchain address | Name service address                |
| ------------------- | ------------------------------------------------- | --------------------------- | ----------------------------------- |
| BNB Smart Chain[^1] | `<address>@ethereum.mailchain.com`                |                             | `<address>@ethereum`                |
| .bnb                | _yourname_.bnb<span>@</span>spaceid.mailchain.com | _yourname_.bnb              | _yourname_.bnb<span>@</span>spaceid |

[^1]: BNB Smart Chain addresses are derived in the same way as Ethereum addresses.
