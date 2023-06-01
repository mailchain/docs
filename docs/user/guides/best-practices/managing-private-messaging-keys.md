---
title: 'Managing Private Messaging Keys'
slug: './managing-private-messaging-keys'
sidebar_position: 10
image: 'img/thumbs/social-square-1.png'
---

# Managing Private Messaging Keys in Mailchain

Private keys play a vital role in services that operate on a cryptographic foundation. In Mailchain, private messaging keys authenticate the sender of messages and can decrypt messages, maintaining a trusted environment. This article aims to highlight the best practices for managing private messaging keys, outline the potential risks, and provide key recommendations.

:::info
NOTE: Private messaging keys are NOT the same as a wallet private key. This article relates only to _private messaging keys_.

Private keys for wallets can used to sign transactions, so can spend your money or move your assets. You NEVER need to enter a private key, seed phrase, or secret recovery phrase for your wallet into Mailchain.
:::

## Understanding Private Messaging Keys

Private keys are unique identifiers, like digital fingerprints, that validate the identity of a user in a cryptographic system. In Mailchain, private messaging keys validate that the sender of a message is indeed who they claim to be. This mechanism enhances security, but it also requires careful management.

Mailchain software works in a way that avoids any need to transmit your private messaging keys, so your keys always remain in your possession and are never visible to Mailchain.

## Best Practices for Managing Private Messaging Keys

### Never Share Your Private Messaging Keys

This point cannot be overstressed: your private messaging keys should remain private. They are your personal access keys, and revealing them is akin to giving away your password. Don’t share them under any circumstances, even with trusted individuals or entities. Anyone possessing your private messaging key can impersonate you, leading to potential misuse of your Mailchain account.

### Dedicated Accounts for 3rd Party Services

If you are going to share any private messaging keys, a dedicated account that is used for 3rd party services can help compartmentalize your activities and limit damage in the event of a security breach. By segregating the account, you minimize the risk associated with a compromised key.

### Regular Key Updates

Like passwords, private messaging keys should be changed periodically. This practice reduces the risk of key compromise over time. Develop a key rotation schedule and stick to it. With Mailchain, you can update the Private Messaging Key for any registered address or identity by re-registering the address or identity.

Please be aware that it is not currently possible to update the messaging keys for a mailchain identity account, i.e. `<username>@mailchain.com`.

Please see [FAQs: Mailchain Account Security](/user/faqs/#mailchain-account-security) for answers to common security questions.

### Regularly Backup Your Keys

Private messaging keys are like house keys; losing them means losing access. Therefore, keeping regular backups is essential. However, be cautious about where and how you store these backups. Opt for secure locations such as encrypted drives, and avoid common cloud storage services that may be susceptible to breaches.

### Use Secure Channels for Transmission

If you ever need to transmit your private messaging key (although this scenario should be avoided), always use a secure, encrypted communication channel. Regular email or messaging apps may be intercepted by malicious actors. Instead, use secure, end-to-end encrypted platforms.

## Risks to Bear in Mind

:::caution
Mailchain will never ask you for your private keys for your wallet, and it never transmits your private messaging keys.
:::

### Unauthorized Access

The most substantial risk associated with private messaging keys is unauthorized access. If a malicious actor obtains your key, they can send or receive messages as you. This can lead to a range of problems from identity theft to corporate data leaks.

### Key Loss

Losing your key can result in losing access to your account and all associated data. It's akin to losing the keys to a safe – the contents remain locked away without any means of access.

### Key Compromise

If your private messaging key isn't securely stored or transmitted, there's a risk of compromise. A compromised key can lead to unauthorized access and misuse, similar to the risks posed by unauthorized access.

## Conclusion

Private keys used for messaging are different from those used to send transactions from your wallet. Private messaging keys unlock the benefits of secure email communication, but they come with their own set of responsibilities. Following best practices and understanding the associated risks can help you stay safe without compromising your security posture.
