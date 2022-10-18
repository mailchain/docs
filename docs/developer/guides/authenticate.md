# Authenticate

You own and control your account and its data. Mailchain does not have access to any data or messages. Access is only possible using your username and password combination or Secret Recovery Phrase. Mailchain cannot reset your credentials.

:::note

You need a Mailchain account before you can authenticate with the SDK. You can [create an account](/user/guides/getting-started/create-a-mailchain-account) through the [app](https://app.mailchain.com/register).

:::

Mailchain SDK's uses your private key to sign, decrypt and hash data. You need to authenticate the SDK to use any of the private methods such as sending a message.

Your private key never leaves your machine.

## SDK Methods

There are multiple way to provide your private key to the Mailchain SDK. You can authenticate with your Secret Recovery Phrase, seed bytes, or password (coming soon).

:::warning

Your Secret Recovery Phrase, seed bytes, or private key can not be changed. They should be stored encrypted and provided to your application securely.

:::

### Secret Recovery Phrase

Use your Secret Recovery Phrase to provide your private key to the SDK. Secret Recovery Phrase's, a 24 word [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) compatible mnemonic phrase, which is used to create your private key.

```ts
import { Mailchain } from '@mailchain/sdk';

const secretRecoveryPhrase = process.env.SECRET_RECOVERY_PHRASE!; // 25 word mnemonicPhrase

const mailchain = Mailchain.fromSecretRecoveryPhrase(secretRecoveryPhrase);
```

You can verify that the Secret Recovery Phrase you provided by verifying the authenticated [user details](#verify).

:::info

Your Secret Recovery Phrase is available when you created your Mailchain account. You can can also to view or download your Secret Recovery Phrase from the [settings page](https://app.mailchain.com/settings) within the Mailchain application.

:::

### Seed

```ts
import { Mailchain } from '@mailchain/sdk';

const seed = process.env.SEED!; // hex encoded seed bytes

const mailchain = Mailchain.fromAccountSeed(seed);
```

## Verify

A good way to verify that the account exists and get information about the registered user is to call the `.user()` method.

```ts
const user = await mailchain.user();
console.log(`username: ${user.username}, address: ${user.address}`);
```

This will display your account username and Mailchain account address.
The Mailchain SDK is now authenticated and you can start sending messages.
