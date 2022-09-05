# Authenticate

You own and control your account and its data. Mailchain does not have access to any data or messages. Access is only possible using your username and password combination or Secret Recovery Phrase. Mailchain cannot reset your credentials.

:::note

You need a Mailchain account before you can authenticate with the SDK. You can [create an account](/user/guides/getting-started/create-a-mailchain-account) through the [app](https://app.mailchain.com/register).

:::

## Authenticate SDK

You can authenticate with your Secret Recovery Phrase (mnemonic seed phrase), private key, or password (coming soon).

### Mnemonic phrase

```ts
import { Mailchain } from '@mailchain/sdk';

const mnemonicPhrase = 'cat mail okay ...'; // securely include mnemonic phrase

const mailchain = Mailchain.fromMnemonicPhrase(mnemonicPhrase);
```

### Seed

```ts
import { Mailchain } from '@mailchain/sdk';

const mailchain = Mailchain.fromAccountSeed('0x....');
```

## Verify

A good way to verify that the account exists and get information about the registered user is to call the `.user()` method.

```ts
const user = await mailchain.user();
console.log(`username: ${user.username}, address: ${user.address}`);
```

This will display your account username and Mailchain account address.
The Mailchain SDK is now authenticated and you can start sending messages.
