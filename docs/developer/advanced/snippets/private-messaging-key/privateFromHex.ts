import { privateMessagingKeyFromHex, privateMessagingKeyToHex, publicMessagingKeyToHex } from '@mailchain/sdk/internal';

const recoveredPrivateMessagingKey = privateMessagingKeyFromHex('...'); // securely supply private messaging key hex bytes

// The private messaging key for the address MUST be kept secure.
console.log(`Private messaging - ${privateMessagingKeyToHex(recoveredPrivateMessagingKey)}`);
// The public messaging key for the address can be shared.
console.log(`Public messaging - ${publicMessagingKeyToHex(recoveredPrivateMessagingKey.publicKey)}`);
