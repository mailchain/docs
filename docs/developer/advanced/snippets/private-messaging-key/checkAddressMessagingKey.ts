import { resolveAddress, privateMessagingKeyFromHex, publicMessagingKeyToHex } from '@mailchain/sdk/internal';

const recoveredPrivateMessagingKey = privateMessagingKeyFromHex('...'); // securely supply private messaging key hex bytes
const address = '0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com';

const { data: resolvedAddress, error: resolveAddressError } = await resolveAddress(address);
if (resolveAddressError) {
	const { type, message } = resolveAddressError;
	console.warn(`ERROR check address - ${address} - ${type} - ${message}`);
}

const resolvedPublicKey = publicMessagingKeyToHex(resolvedAddress.messagingKey);
const providedPublicKey = publicMessagingKeyToHex(recoveredPrivateMessagingKey.publicKey);

if (resolvedPublicKey !== providedPublicKey) {
	throw new Error(`Public messaging key does not match resolved address key, check the private key is correct. `);
}

console.log(`${address} messaging key matches latest address registry entry.`);
