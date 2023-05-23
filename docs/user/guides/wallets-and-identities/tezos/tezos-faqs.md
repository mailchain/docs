---
title: 'Tezos FAQs'
sidebar_position: 4
# image: 'img/thumbs/mailchain-mailto-messagetodaos.png'
---

# Tezos FAQs

Frequently asked questions for working with Tezos and Tezos Domains in Mailchain.

### Can someone send me a Mailchain message to my Tezos address or .tez name?

You can ask anyone to send messages to your Tezos address or .tez name… it’s a Web3 identity afterall!

### What happens when someone sends a message to my Tezos Domains (.tez) name in Mailchain?

When someone sends a Mailchain message to a Tezos Domains name, Mailchain resolves the .tez name and delivers the message to the resolved address (the address the domain points to).

If you have already registered the wallet address in Mailchain, then the message will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the protocol will still accept the encrypted message and store it for up to 90 days. You can synchronize messages for this address when you register the wallet address. (See [How to add your Tezos name to Mailchain](/user/guides/wallets-and-identities/tezos/tezos-getting-started/#how-to-add-your-tezos-address-or-tez-domain-to-mailchain))

### What happens when my Tezos domain name expires?

When your Tezos Domains names expire, Mailchain messages will no longer be sent to the address. If someone else registers the name, they will be able to receive messages sent to the name.

### My Tezos Domains name was not found, what should I check?

1. Check you are registering the intended wallet address
2. Check your Tezos Domains name is configured with a reverse record in https://app.tezos.domains/

### What happens if I make a change to where my .tez name resolves?

Mailchain will always resolve the underlying name from the Tezos contracts so it will reflect the latest changes returned by the resolver.

### How Do I Register A .tez Name?

To register a .tez name, visit https://app.tezos.domains/ and follow instructions.

### How Do I Set A Tezos Domains Reverse Record?

To set a Tezos Domains reverse record, visit your dashboard at https://app.tezos.domains/. Select the name you wish to be the reverse resolved name, then make changes to the "Reverse Record" section.

### Does Mailchain support shorthand addressing for Tezos and Tezos Domains?

| TLD  | Fully qualified Mailchain address                      | Shorthand Mailchain address | Name service address                     |
| ---- | ------------------------------------------------------ | --------------------------- | ---------------------------------------- |
| .tez | _yourname_.tez<span>@</span>tezosdomains.mailchain.com | _yourname_.tez              | _yourname_.tez<span>@</span>tezosdomains |
