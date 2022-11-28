---
title: 'UD FAQs'
sidebar_position: 4
---

# Unstoppable Domains FAQs

Frequently asked questions for working with Unstoppable Domains (UD) and Mailchain.

### Can someone send me a Mailchain message to my UD name?

You can ask anyone to send messages to your UD name… it’s a Web3 identity afterall!

### What happens when someone sends a message to my UD name in Mailchain?

When someone sends a Mailchain message to a UD name, Mailchain resolves the UD name and delivers the message to the resolved owner address.

![see UD name](../img-unstoppable-domains/ud_faqs/ud_faq_1.png)

If you have already registered the wallet address, then the message will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the protocol will still accept the encrypted message and store it for up to 90 days. You can synchronise messages for this address when you register the wallet address. (See [How to add your Unstoppable Domain to Mailchain](/user/guides/name-services/unstoppable-domains/unstoppable-domains-getting-started#how-to-add-your-unstoppable-domain-to-mailchain))

### What happens if I no longer own my UD name?

If your address is no longer the owner of the UD name, it will not resolve and Mailchain messages will no longer be sent to the address. If someone else registers the address that owns the name in Mailchain, they will be able to receive messages sent to the UD name.

### My UD name was not found, what should I check?

1. Check you are registering the intended wallet address.
2. Check that the address appears in the https://ud.me profile.

    ![see UD name](../img-unstoppable-domains/ud_faqs/ud_faq_2.png)

### How does Mailchain resolve UD names?

Mailchain uses the Unstoppable Domains resolver API, so results will always reflect the Unstoppable Domains registry.

### Do I need to mint an Unstoppable Domain to use it with Mailchain?

Yes, you need to "mint" your Unstoppable Domain to be able to use it with Mailchain. The process of minting generates the NFT domain and sends it to the owner's address.

### Which Unstoppable Domains top level domains do you support?

Mailchain supports sending and receiving messages for any Unstoppable Domain top-level domain (TLD).

### Does Mailchain Support shorthand addressing for Unstoppable Domains?

| TLD         | Fully qualified Mailchain address                            | Shorthand Mailchain address |
| ----------- | ------------------------------------------------------------ | --------------------------- |
| .crypto     | _yourname_.crypto<span>@</span>unstoppable.mailchain.com     | _yourname_.crypto           |
| .nft        | _yourname_.nft<span>@</span>unstoppable.mailchain.com        | _yourname_.nft              |
| .x          | _yourname_.x<span>@</span>unstoppable.mailchain.com          | _yourname_.x                |
| .wallet     | _yourname_.wallet<span>@</span>unstoppable.mailchain.com     | _yourname_.wallet           |
| .bitcoin    | _yourname_.bitcoin<span>@</span>unstoppable.mailchain.com    |                             |
| .dao        | _yourname_.dao<span>@</span>unstoppable.mailchain.com        | _yourname_.dao              |
| .888        | _yourname_.888<span>@</span>unstoppable.mailchain.com        | _yourname_.888              |
| .zil        | _yourname_.zil<span>@</span>unstoppable.mailchain.com        |                             |
| .blockchain | _yourname_.blockchain<span>@</span>unstoppable.mailchain.com | _yourname_.blockchain       |
