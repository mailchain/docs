---
title: 'Avalanche FAQs'
sidebar_position: 4
# image: 'img/thumbs/mailchain-mailto-messagetodaos.png'
---

# Avalanche FAQs

Frequently asked questions for working with Avalanche, .avax names (by Avvy Domains) and Mailchain.

### Can someone send me a Mailchain message to my Avalanche address or .avax domain?

You can ask anyone to send messages to your Avalanche C-Chain address or an .avax domain configured to resolve to your C-Chain address… it’s a Web3 identity afterall!

### Are X-Chain or P-Chain addresses supported for communication?

Not currently, but we'd love to hear feedback on communication use cases for P-Chain addresses [here](https://feedback.mailchain.com/b/feature-requests/add-support-for-avalanche-p-chain-addresses) and X-Chain address [here](https://feedback.mailchain.com/b/feature-requests/add-support-for-avalanche-x-chain).

### Are .avax domains supported for communication?

Yes. `.avax` domains registered through Avvy Domains are supported in Mailchain.

### What happens when someone sends a message to my .avax domain in Mailchain?

When someone sends a Mailchain message to an .avax domain, Mailchain resolves the address via Avvy Domain's contracts and delivers the message to the resolved address (the registered wallet address).

If you have already registered the wallet address in Mailchain, then the message will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the communication protocol will still accept the encrypted message and store it for up to 90 days. You can synchronize mail for this address when you register the wallet address. (See [How to add your .avax domain in Mailchain](/user/guides/wallets-and-identities/avalanche/avalanche-getting-started/#how-to-add-your-avax-name-to-mailchain))

### What happens when my .avax domain name expires?

When your .avax domain domains expires, Mailchain messages will no longer be sent to the address. If someone else registers the domain, they will be able to receive messages to this address.

### My .avax domain domain was not found, what should I check?

1. Check you are registering the intended wallet address
2. Check your .avax domain resolves to your address correctly at Avvy Domains (see <a href="https://app.avvy.domains/user/domains" target="_blank">https://app.avvy.domains/user/domains</a>).

### What happens if I change where my .avax domain resolves?

Mailchain resolves the underlying domain from Avvy Domains contracts (the .avax domain provider), so the returned address will reflect the latest records.

### How do I register an .avax domain name?

Please visit https://app.avvy.domains/ to register your .avax domain name and follow instructions provided by Avvy Domains.

### How do I configure my .avax domain?

To configure your .avax domain name, please see <a href="https://avvy.domains/docs/" target="_blank">https://avvy.domains/docs/</a>.

In order to receive messages sent to your .avax domain in Mailchain, you need to ensure your name has a [forward resolution](https://avvy.domains/docs/forward-resolution/) record for a C-Chain address.

For Mailchain to be able to find your .avax name automatically when you register an address, it should have a [reverse resolution](https://avvy.domains/docs/reverse-resolution/) record configured.

### Can I use an Avvy Domain that is registered with Enhanced Privacy

Yes. Avvy Domains offers an [Enhanced Privacy](https://avvy.domains/docs/privacy-features-registrations/) feature that helps conceal domains from casual onlookers. If the domain is configured to resolve to a C-Chain address, it can be manually added when you register your C-Chain address with Mailchain. Please note that Mailchain will not be able to automatically discover your .avax name because reverse resolution is not supported when Enhanced Privacy is enabled.

### Does Mailchain support shorthand addressing for Avalanche addresses and .avax domains?

| Address Type  | Fully qualified Mailchain address               | Shorthand Mailchain address | Name service address              |
| ------------- | ----------------------------------------------- | --------------------------- | --------------------------------- |
| Avalanche[^1] | `<address>@ethereum.mailchain.com`              |                             | `<address>@ethereum`              |
| .avax         | _yourname_.avax<span>@</span>avvy.mailchain.com | _yourname_.avax             | _yourname_.avax<span>@</span>avvy |

[^1]: Avalanche C-Chain addresses are derived in the same way as Ethereum addresses.
