---
title: 'Sending mails'
slug: './send'
---

# Sending mails

Using Mailchain you can send a mail to any blockchain address. Only the owner of the address will be able to receive and read the mail.

## Send your first mail

First install the packages needed.

```bash npm2yarn
npm install @mailchain/sdk
```

The code below sends a mail.

```ts
import { Mailchain } from '@mailchain/sdk';

const secretRecoveryPhrase = process.env.SECRET_RECOVERY_PHRASE!; // 25 word mnemonicPhrase

const mailchain = Mailchain.fromSecretRecoveryPhrase(secretRecoveryPhrase);

const { data, error } = await mailchain.sendMail({
	from: `yoursername@mailchain.com`, // sender address
	to: [`0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com`], // list of recipients (blockchain or mailchain addresses)
	subject: 'My first message', // subject line
	content: {
		text: 'Hello Mailchain 👋', // plain text body
		html: '<p>Hello Mailchain 👋</p>', // html body
	},
});
if (error) {
	// handle error
	console.warn('Mailchain error', error);
	return;
}
// handle success send mail result
console.log(data);
```

:::note

You can send a message to your `username@mailchain`, or if you've registered an ethereum address you can send a message to it (e.g. `0x.....@ethereum.mailchain.com`). You can also try sending a message to `0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com`, that's a valid, unmonitored address at Mailchain, we own the private key for it.

:::

After the message is successfully sent you will be able to see it in your [sent folder](https://app.mailchain.com/sent) and the recipient will see it in their inbox.

:::note

The Mailchain app checks for messages and updates the inbox in the background. You can force a refresh by clicking on the refresh icon above the list of messages.

:::
