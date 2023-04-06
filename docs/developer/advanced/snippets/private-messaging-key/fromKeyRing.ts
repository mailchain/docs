import { getPrivateMessagingKey, privateMessagingKeyToHex, publicMessagingKeyToHex } from '@mailchain/sdk/internal';
import { KeyRing } from '@mailchain/keyring';

const keyRing = KeyRing.fromSecretRecoveryPhrase('....'); // securely supply 24 word secret recovery phrase

// Address to get private messaging key for. Can be Mailchain, protocol or name service address.
// The address must be registered with the account secret recovery phrase.
const address = 'username@mailchain.com';

const { data: privateMessagingKey, error: getPrivateMessagingKeyError } = await getPrivateMessagingKey(
	address,
	keyRing,
);

if (getPrivateMessagingKeyError) {
	throw getPrivateMessagingKeyError;
}

// The private messaging key for the address MUST be kept secure.
console.log(`Private messaging key for ${address} - ${privateMessagingKeyToHex(privateMessagingKey)}`);
// The public messaging key for the address can be shared.
console.log(`Public messaging key for ${address} - ${publicMessagingKeyToHex(privateMessagingKey.publicKey)}`);
