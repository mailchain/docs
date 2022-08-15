# Sending

_Message a blockchain address_

Using Mailchain you can send a message to any blockchain address. Only the owner of the address will be able to receive and read the message.

## Send your first message

Try sending a message to `0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com`, that's us at Mailchain, we own the private key for `0xbb56FbD7A2caC3e4C17936027102344127b7a112`.

```typescript
import { Mailchain } from '@mailchain/sdk';

const mailchain = Mailchain.fromMnemonicPhrase('cat mail okay ...'); // use your seed phrase

mailchain.sendMail({
	from: `yoursername@mailchain.local`, // sender address
	to: [`0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com`], // list of receivers (blockchain or mailchain addresses)
	subject: 'My first message', // subject line
	content: {
		html: 'Hello Mailchain 👋', // plain text body
		text: '<p>Hello Mailchain 👋</p>', // html body
	},
});
```
