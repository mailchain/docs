import { MailSender, privateMessagingKeyFromHex } from '@mailchain/sdk/internal';

async function main() {
	// securely supply private messaging key hex bytes
	const recoveredPrivateMessagingKey = privateMessagingKeyFromHex('...');

	const mailSender = MailSender.fromSenderMessagingKey(recoveredPrivateMessagingKey);

	const { data: sentMail, error: sendMailError } = await mailSender.sendMail({
		// address related private messaging key
		from: `yoursername@mailchain.com`,
		// list of recipients (blockchain or mailchain addresses)
		to: [`0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com`],
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
}

main();
