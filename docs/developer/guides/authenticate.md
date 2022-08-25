# Authenticate

You are in complete control of your account. You own your private key and seed phrase. We don't have access to them, not through security policy or permissions.

:::note

You need a Mailchain account before you can authenticate with the SDK. You can [create an account](user/guides/getting-started/create-a-mailchain-account) through the [app](https://app.mailchain.com/register).

:::

## Authenticate SDK

You can authenticate with your mnemonic phrase, seed, or password (coming soon).

### Mnemonic phrase

```typescript
import { Mailchain } from '@mailchain/sdk';

const mnemonicPhrase = 'cat mail okay ...'; // securely include mnemonic phrase

const mailchain = Mailchain.fromMnemonicPhrase(mnemonicPhrase);
```

### Seed

```typescript
import { Mailchain } from '@mailchain/sdk';

const mailchain = Mailchain.fromAccountSeed('0x....');
```

## Verify

A good way to verify that the account exists and get information about the registered user is to call the `.user()` method.

```typescript
const user = await mailchain.user();
console.log(`username: ${user.username}, address: ${user.address}`);
```

This will display your account username and Mailchain account address.
The Mailchain SDK is now authenticated and you can start sending messages.
