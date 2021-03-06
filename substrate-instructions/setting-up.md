---
description: >-
  After installation, to start sending Mailchain messages on Substrate, follow
  the steps below...
---

# Setting Up

## Add Account

To send and receive messages with Mailchain on Substrate, you will need to add an existing account \(or create a new one and save the raw seed\).

```bash
mailchain account add --protocol=substrate --private-key=[PRIVATE-KEY-VALUE] --key-type=sr25519
```

* `--protocol=substrate`
* `--private-key` is the raw seed of your account to be able to sign and decrypt messages.
* `--key-type=` either `sr25519` or `ed25519` \(for Substrate\). The account type is selected when you create a substrate account.

{% hint style="info" %}
_Mailchain stores your private key in an encrypted format, a passphrase is required._

Enter a non-guessable passphrase, and again to confirm it. You must remember your password to decrypt the key later to send or receive messages.
{% endhint %}

{% hint style="danger" %}
You should never expose your private keys to an entity you don't trust.

Mailchain stores your private key locally, in an encrypted format. Your private keys are never sent anywhere. They are only used to decrypt messages data, and sign transactions.
{% endhint %}

