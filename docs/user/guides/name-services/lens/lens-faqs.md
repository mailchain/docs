---
title: 'Lens FAQs'
sidebar_position: 4
image: 'img/thumbs/lens-web3-email.png'
---

# Lens FAQs

Frequently asked questions for working with Lens Protocol and Mailchain.

### Can someone send web3 email to my .lens handle?

You can ask anyone to send Mailchain mail to your .lens handle... it’s a Web3 identity afterall!

### What happens when someone sends mail to my Lens handle in Mailchain?

When someone sends a Mailchain mail to a Lens handle, Mailchain resolves the Lens handle owner from the Lens API and delivers the mail to the owner's address.

If you have already registered the wallet address, then the mail will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the protocol will still accept the encrypted mail and store it for up to 90 days. You can synchronise mails for this address when you register the wallet address. (See [How to add your Lens handle to Mailchain](/user/guides/name-services/lens/lens-getting-started#how-to-add-your-lens-name-to-mailchain))

### My Lens handle was not found, what should I check?

![how to search for Lens handle on ens.domains](../img-ens/ens_introduction/Untitled.png)

1. Check you are registering the intended wallet address.
2. Check your lens handle is owned by wallet address.

### How does Mailchain resolve .lens handles?

Mailchain will always resolve the name from the [lens.xyz](https://lens.xyz) API so it will reflect the latest changes returned by Lens protocol.

### What happens if I no longer own my .lens handle?

If your address is no longer the owner of a .lens handle, it will not resolve and Mailchain mails will no longer be sent to the address. If someone else registers the wallet address that owns the .lens handle in Mailchain, they will be able to receive mails sent to that .lens handle. This will not have any impact on mails already in your inbox.

### Does Mailchain support shorthand addressing for Lens protocol?

Yes. Mailchain supports a shorthand format for sending web3 email to .lens handles. Please see below for the supported mail formats:

| TLD   | Fully qualified Mailchain address               | Shorthand Mailchain address | Name service address              |
| ----- | ----------------------------------------------- | --------------------------- | --------------------------------- |
| .lens | _yourname_.lens<span>@</span>lens.mailchain.com | _yourname_.lens             | _yourname_.lens<span>@</span>lens |
