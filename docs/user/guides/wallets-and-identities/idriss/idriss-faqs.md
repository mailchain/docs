---
title: 'Idriss FAQs'
sidebar_position: 4
image: 'img/thumbs/idriss-web3-email.png'
---

# Idriss FAQs

Frequently asked questions for working with IDriss and Mailchain.

### Can someone send me a Mailchain message to my IDriss name?

You can ask anyone to send messages to your IDriss name… it’s a Web3 identity afterall!

### Which IDriss name types are supported?

Mailchain supports IDriss Twitter handles (e.g. `yourTwitterHandle.x`).

### What happens when someone sends a message to my IDriss name in Mailchain?

When someone sends a Mailchain message to an IDriss name, Mailchain resolves the IDriss name and delivers the message to the resolved address (the registered ETH address).

If you have already registered the wallet address in Mailchain, then the message will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the protocol will still accept the encrypted message and store it for up to 90 days. You can synchronize messages for this address when you register the wallet address. (See [How to add your IDriss name to Mailchain](/user/guides/wallets-and-identities/idriss/idriss-getting-started#how-to-add-your-idriss-name-to-mailchain))

### My IDriss name was not found, what should I check?

1. Check your name is supported by Mailchain (see [here](/user/guides/wallets-and-identities/idriss/idriss-faqs#which-idriss-name-types-are-supported))
2. Check you are registering the intended wallet address
3. Check your Reverse Record is configured to resolve your address in https://idriss.xyz/dashboard

### What happens if I make a change where my IDriss address resolves?

Mailchain will always resolve the underlying name from the IDriss API so it will reflect the latest changes returned by the resolver.

### How do I register an IDriss name?

Follow the instructions in the [IDriss Docs](https://docs.idriss.xyz/user-guides/idriss-book).

### How do I set an IDriss reverse record?

Head to [https://idriss.xyz/dashboard](https://idriss.xyz/dashboard) and follow the instructions.

### What are the Mailchain address formats for IDriss?

| TLD | Fully qualified Mailchain address              | Shorthand Mailchain address | Name service address             |
| --- | ---------------------------------------------- | --------------------------- | -------------------------------- |
| .x  | _yourname_.x<span>@</span>idriss.mailchain.com |                             | _yourname_.x<span>@</span>idriss |
