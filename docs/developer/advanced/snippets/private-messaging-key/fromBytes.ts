import { decodeHex, encodeHex } from '@mailchain/encoding';
import { ED25519PrivateKey } from '@mailchain/crypto';

const privateMessagingKeyBytes = '...'; // securely supply private messaging key hex bytes

const recoveredPrivateMessagingKey = ED25519PrivateKey.fromSeed(decodeHex(privateMessagingKeyBytes));

// The private messaging key for the address MUST be kept secure.
console.log(`Private messaging - ${encodeHex(recoveredPrivateMessagingKey.bytes)}`);
// The public messaging key for the address can be shared.
console.log(`Public messaging - ${encodeHex(recoveredPrivateMessagingKey.publicKey.bytes)}`);
