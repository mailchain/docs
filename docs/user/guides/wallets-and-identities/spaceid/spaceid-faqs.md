---
title: 'SPACE ID FAQs'
sidebar_position: 4
image: 'img/thumbs/mailchain-mailto-messagetodaos.png'
---

# SPACE ID FAQs

Frequently asked questions for working with SPACE ID and Mailchain.

### Can someone send me a Mailchain message to my SPACE ID address?

You can ask anyone to send messages to your SPACE ID domain… it’s a Web3 identity afterall!

### Are .arb domains supported for for communication?

Yes. `.arb` domains registered through SPACE ID are supported in Mailchain.

### Are .bnb domains supported for for communication?

Yes. `.bnb` domains registered through SPACE ID are supported in Mailchain.

### What happens when someone sends a message to my SPACE ID domain in Mailchain?

When someone sends a Mailchain message to a SPACE ID domain, Mailchain resolves the SPACE ID domain and delivers the message to the SPACE ID Resolved Address (the registered wallet address).

If you have already registered the wallet address in Mailchain, then the message will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the communication protocol will still accept the encrypted message and store it for up to 90 days. You can synchronize mail for this address when you register the wallet address. (See [How to add your SPACE ID domain to Mailchain](/user/guides/wallets-and-identities/spaceid/spaceid-getting-started/#how-to-add-your-space-id-domain-to-mailchain))

### What happens when my SPACE ID domain expires?

When your SPACE ID domains expires, Mailchain messages will no longer be sent to the address. If someone else registers the domain, they will be able to receive messages to this address.

### My SPACE ID domain was not found, what should I check?

![how to search for ENS name on ens.domains](../img-ens/ens_introduction/Untitled.png)

1. Check you are registering the intended wallet address
2. Check your SPACE ID domain resolves to your address correctly (see <a href="https://space.id/profile/domains" target="_blank">https://space.id/profile/domains</a>).

### What happens if I change where my SPACE ID domain resolves?

Mailchain will always resolve the underlying domain from the SPACE ID API so it will reflect the latest changes returned by the resolver.

### How do I register a SPACE ID domain?

To register a SPACE ID domain, please see <a href="https://docs.space.id/getting-started/tutorials/register" target="_blank">https://docs.space.id/getting-started/tutorials/register</a>.

### How do I set a primary SPACE ID domain?

To set a primary SPACE ID domain, please see <a href="https://docs.space.id/getting-started/tutorials/manage" target="_blank">https://docs.space.id/getting-started/tutorials/manage</a>.

### Does Mailchain support shorthand addressing for SPACE ID domains?

| TLD  | Fully qualified Mailchain address                 | Shorthand Mailchain address | Name service address                |
| ---- | ------------------------------------------------- | --------------------------- | ----------------------------------- |
| .arb | _yourname_.arb<span>@</span>spaceid.mailchain.com |                             | _yourname_.arb<span>@</span>spaceid |
| .bnb | _yourname_.bnb<span>@</span>spaceid.mailchain.com | _yourname_.bnb              | _yourname_.bnb<span>@</span>spaceid |
