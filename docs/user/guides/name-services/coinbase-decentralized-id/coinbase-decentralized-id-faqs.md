---
title: 'Coinbase Decentralized ID FAQs'
sidebar_position: 4
---

# Coinbase Decentralized ID (.cb.id) FAQs

Frequently asked questions for working with Coinbase Decentralized ID (.cb.id) and Mailchain.

### Can someone send web3 email to my Coinbase Decentralized ID?

Yes. You can send and receive email using your Coinbase Decentralized ID... it’s a Web3 identity afterall!

### What happens when someone sends a mail to my Coinbase Decentralized ID in Mailchain?

When someone sends a Mailchain email to a Coinbase Decentralized ID, Mailchain resolves the username from the Coinbase Profile API and delivers the mail to the owner address returned by Coinbase.

If you have already registered the wallet address, then the mail will arrive in your inbox.

### What if I have not yet registered my Coinbase wallet address with Mailchain?

If you have not yet registered your Coinbase wallet address with Mailchain, the protocol will still accept the encrypted mail and store it for up to 90 days. You can synchronise mails for this address when you register the wallet address. (See [How to add your Coinbase Decentralized ID to Mailchain](/user/guides/name-services/coinbase-decentralized-id/coinbase-decentralized-id-getting-started#how-to-add-your-coinbase-username-to-mailchain))

### My Coinbase Decentralized ID was not found, what should I check?

1. Check you are registering the intended wallet address
2. Check your Coinbase Decentralized ID is owned by wallet address

### How does Mailchain resolve Coinbase Decentralized ID?

Mailchain will always resolve the name from the Coinbase Decentralized ID API so it will reflect the latest changes returned by Coinbase registry.

### What happens if I no longer own my Coinbase Decentralized ID?

If your address is no longer the owner of a Coinbase Decentralized ID, it will not resolve to your address. Mailchain mails sent to that .cb.id will no longer be received by your address. If someone else owns the Coinbase Decentralized ID, they will receive mails sent to that .cb.id in Mailchain. This will not have any impact on mails already in your inbox.

### What is the address format for Coinbase Decentralized IDs (.cb.id) in Mailchain?

Mailchain supports the following format for sending web3 email to Coinbase Decentralized ID:

| TLD    | Fully qualified Mailchain address               | Shorthand Mailchain address | Name service address              |
| ------ | ----------------------------------------------- | --------------------------- | --------------------------------- |
| .cb.id | _yourname_.cb.id<span>@</span>ens.mailchain.com |                             | _yourname_.cb.id<span>@</span>ens |
