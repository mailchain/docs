import { resolveAddress } from '@mailchain/sdk/internal';

async function main() {
	const address = 'epistola.eth@ens.mailchain.com';

	const { data: resolvedAddress, error: resolveAddressError } = await resolveAddress(address);
	if (resolveAddressError) {
		const { type, message } = resolveAddressError;
		console.warn(`ERROR check address - ${address} - ${type} - ${message}`);
	}

	//highlight-start
	if (resolvedAddress.type === 'registered') {
		// Secrets or sensitive information should only be sent to registered users.
		console.log(`${address} registered`);
	} else if (resolvedAddress.type === 'vended') {
		console.log(`${address} not yet registered - still possible to send mail`);
	}
	//highlight-end
}
main();
