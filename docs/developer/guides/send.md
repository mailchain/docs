# Sending

_Message a blockchain address_

Using Mailchain you can send a message to any blockchain address. Only the owner of the address will be able to receive and read the message.

## Send your first message

```ts
import { Mailchain } from '@mailchain/sdk';

const mnemonicPhrase = 'cat mail okay ...'; // securely include mnemonic phrase

const mailchain = Mailchain.fromMnemonicPhrase(mnemonicPhrase); // use your mnemonic phrase

const result = await mailchain.sendMail({
	from: `yoursername@mailchain.local`, // sender address
	to: [`0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com`], // list of recipients (blockchain or mailchain addresses)
	subject: 'My first message', // subject line
	content: {
		text: 'Hello Mailchain 👋', // plain text body
		html: '<p>Hello Mailchain 👋</p>', // html body
	},
});

console.log(result);
```

:::note

You can send a message to yourself your `username@mailchain` if you've registered an ethereum address you can send a message to it `0x.....@mailchain.com`, or try sending a message to `0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com`, that's us at Mailchain, we own the private key for `0xbb56FbD7A2caC3e4C17936027102344127b7a112`.

:::

After the message is successfully sent you will be able to see it in your [sent folder](https://app.mailchain.com/sent) and the recipient will see it in their inbox.

:::note

Mailchain apps check for messages and update the inbox in the background, you can force a refresh by clicking on the refresh icon above the list of messages.

:::
