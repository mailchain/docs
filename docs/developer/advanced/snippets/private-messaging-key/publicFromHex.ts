import { publicMessagingKeyFromHex, publicMessagingKeyToHex } from '@mailchain/sdk/internal';

const recoveredPublicMessagingKey = publicMessagingKeyFromHex('...');

// The public messaging key for the address can be shared.
console.log(`Public messaging - ${publicMessagingKeyToHex(recoveredPublicMessagingKey)}`);
