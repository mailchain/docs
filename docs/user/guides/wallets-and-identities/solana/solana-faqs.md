---
title: 'Solana FAQs'
sidebar_position: 4
image: 'img/thumbs/mailchain-solana-message.png'
---

# Solana FAQs

Frequently asked questions for working with Solana and Solana Name Service (.sol domain name) in Mailchain.

### Can someone send me a Mailchain message to my Solana address or .sol domain name?

You can ask anyone to send messages to your Solana address or .sol name… it’s a Web3 identity afterall!

### What happens when someone sends a message to my Solana Domain Name (.sol) in Mailchain?

When someone sends a Mailchain message to a Solana Name Service domain, Mailchain resolves the .sol name and delivers the message to the resolved address (the owner address).

If you have already registered the wallet address in Mailchain, then the message will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the protocol will still accept the encrypted message and store it for up to 90 days. You can synchronize messages for this address when you register the wallet address. (See [How to add your Solana name to Mailchain](/user/guides/wallets-and-identities/solana/solana-getting-started/#how-to-add-your-solana-address-or-sol-domain-to-mailchain))

### My Solana Domain Name was not found, what should I check?

1. Check you are registering the intended wallet address
2. Check your Solana domain is listed in the Collection for your wallet address on the https://sns.id website

### What happens if I make a change to where my .sol name resolves?

Mailchain will always resolve the underlying name from the Solana contracts so it will reflect the latest changes returned by the resolver.

### How Do I Register A .sol Name?

To register a .sol name, visit https://sns.id/ and follow instructions.

### Does Mailchain support shorthand addressing for Solana Wallets and Solana Name Service domains?

| TLD     | Fully qualified Mailchain address                     | Shorthand Mailchain address             | Name service address            |
| ------- | ----------------------------------------------------- | --------------------------------------- | ------------------------------- |
| .solana | _yourwalletaddress_<span>@</span>solana.mailchain.com | _yourwalletaddress_<span>@</span>solana |                                 |
| .sol    | _yourname_.sol<span>@</span>sol.mailchain.com         | _yourname_.sol                          | _yourname_.sol<span>@</span>sol |
