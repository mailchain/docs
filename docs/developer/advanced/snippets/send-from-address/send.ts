import { MailSender } from '@mailchain/sdk/internal';
import { ED25519PrivateKey } from '@mailchain/crypto';
import { decodeHex } from '@mailchain/encoding';

const privateMessagingKeyBytes = '...'; // securely supply private messaging key hex bytes

const recoveredPrivateMessagingKey = ED25519PrivateKey.fromSeed(decodeHex(privateMessagingKeyBytes));

const { data: sentMail, error: sendMailError } = await MailSender.fromSenderMessagingKey(
	recoveredPrivateMessagingKey,
).sendMail({
	from: `yoursername@mailchain.com`, // address of the private messaging key
	to: [`0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com`], // list of recipients (blockchain or mailchain addresses)
	subject: 'My first message', // subject line
	content: {
		text: 'Hello Mailchain 👋', // plain text body
		html: '<p>Hello Mailchain 👋</p>', // html body
	},
});

if (sendMailError) {
	throw sendMailError;
}

console.log(`Message sent successfully: ${sentMail}`);
