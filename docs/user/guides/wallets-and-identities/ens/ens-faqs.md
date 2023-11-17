---
title: 'ENS FAQs'
sidebar_position: 4
image: 'img/thumbs/mailchain-mailto-messagetodaos.png'
---

# ENS FAQs

Frequently asked questions for working with ENS and Mailchain.

### Can someone send me a Mailchain message to my ENS address?

You can ask anyone to send messages to your ENS name… it’s a Web3 identity afterall!

### What happens when someone sends a message to my ENS name in Mailchain?

When someone sends a Mailchain message to an ENS name, Mailchain resolves the ENS name and delivers the message to the ENS Resolved Address (the registered ETH address).

![see ens name](../img-ens/ens_introduction/ens_21.png)

If you have already registered the wallet address, then the message will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the protocol will still accept the encrypted message and store it for up to 90 days. You can synchronize messages for this address when you register the wallet address. (See [How to add your ENS name to Mailchain](/user/guides/wallets-and-identities/ens/ens-getting-started#how-to-add-your-ens-name-to-mailchain))

### What happens when my ENS name expires?

When your ENS names expires, Mailchain messages will no longer be sent to the address. If someone else registers the name, they will be able to receive messages to this address.

### My ENS name was not found, what should I check?

![how to search for ENS name on ens.domains](../img-ens/ens_introduction/Untitled.png)

1. Check you are registering the intended wallet address
2. Check your ENS Primary Resolver is configured to resolve your address in https://app.ens.domains

### What happens if I make a change where my ENS address resolves?

Mailchain will always resolve the underlying name from the ENS contracts so it will reflect the latest changes returned by the resolver.

### How do I register an ENS domain?

Follow the steps in this article, [ENS Docs: The Primary Name](https://support.ens.domains/en/articles/7890756-the-primary-name), to set your ENS Primary Resolver.

### How do I set an ENS Primary Resolver?

An ENS Primary Resolver designates one of your ENS names to represent your Ethereum account and act as your cross-platform Web3 username and profile.

Head to [https://app.ens.domains/](https://app.ens.domains/) and follow the instructions.

### Does Mailchain support shorthand addressing for ENS?

| TLD          | Fully qualified Mailchain address                          | Shorthand Mailchain address | Name service address                         |
| ------------ | ---------------------------------------------------------- | --------------------------- | -------------------------------------------- |
| .eth         | _yourname_.eth<span>@</span>ens.mailchain.com              | _yourname_.eth              | _yourname_.eth<span>@</span>ens              |
| _Other TLDs_ | _yourname_._web3domainname_<span>@</span>ens.mailchain.com |                             | _yourname_._web3domainname_<span>@</span>ens |
