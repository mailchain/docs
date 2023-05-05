import { resolveAddress } from '@mailchain/sdk/internal';

async function main() {
	const address = '0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com';
	const { error: resolveAddressError } = await resolveAddress(address);
	if (resolveAddressError) {
		const { type, message } = resolveAddressError;
		console.warn(`ERROR check address - ${address} - ${type} - ${message}`);
	}

	console.log(`${address} is reachable.`);
}

main();
