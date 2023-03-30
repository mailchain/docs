---
title: 'NEAR FAQs'
sidebar_position: 4
image: 'img/thumbs/near-web3-email.png'
---

# NEAR FAQs

Frequently asked questions for working with NEAR and Mailchain.

### Can someone send web3 email to my .near account ID?

You can ask anyone to send Mailchain mail to your .near account ID... it’s a Web3 identity afterall!

### What happens when someone sends mail to my NEAR account ID in Mailchain?

When someone sends a Mailchain mail to a NEAR account ID, Mailchain resolves the NEAR account from the Mailchain registry contract deployed on NEAR. It then uses the messaging key to encrypt the message, before delivering the mail to NEAR account ID.

If you have already registered the wallet address, then the mail will arrive in your inbox.

### What if I have not yet registered my wallet address with Mailchain?

If you have not yet registered the wallet address with Mailchain, the protocol will still accept the encrypted mail and store it for up to 90 days. You can synchronize mails for this address when you register the wallet address. (See [How to add your NEAR account to Mailchain](/user/guides/wallets-and-identities/near/near-getting-started#how-to-use-your-near-account-id-with-mailchain))

### Does it cost anything in fees to register a .near account ID?

Yes. To register a .near account with Mailchain, you need around 0.0006Ⓝ to cover network fees for the transaction that registers your account ID and messaging keys.

### How does Mailchain resolve .near account IDs?

Mailchain will always resolve the name from the messaging-keys.mailchain.near contract, [visible here](https://nearblocks.io/address/messaging-keys.mailchain.near), so it will reflect the latest version of registered messaging keys.

### Does Mailchain support shorthand addressing for .near account IDs?

Yes. Mailchain supports a shorthand format for sending web3 email to .near accounts. Please see below for the supported mail formats:

| TLD   | Fully qualified Mailchain address               | Shorthand Mailchain address | Name service address              |
| ----- | ----------------------------------------------- | --------------------------- | --------------------------------- |
| .near | _yourname_.near<span>@</span>near.mailchain.com | _yourname_.near             | _yourname_.near<span>@</span>near |
