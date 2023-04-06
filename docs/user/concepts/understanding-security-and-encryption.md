---
title: 'Security & Encryption'
slug: './understanding-security-and-encryption'
sidebar_position: 108
image: 'img/thumbs/social-square-1.png'
---

# Introduction

Mailchain gives you complete ownership of your data. We’ve built Mailchain around the principle that only you should be able to view your private data.

## End-to-End Encryption

All Mailchain messages are encrypted end-to-end by default. To achieve complete end-to-end encryption, your private keys are never revealed to the Mailchain protocol. Your Secret Recovery Phrase is used to create a series a private keys that each perform independent actions which allow you to privately, register addresses, authenticate, store and save messages.

The Mailchain application encrypts your data in your browser before storing it with Mailchain, meaning only you can decrypt it. Mailchain cannot decrypt your data. This includes your Secret Recovery Phrase, messages, and registered addresses.

## Logging in to Mailchain

After you successfully authenticate with your username and password, a key that is known only to you, is used to encrypt your Secret Recovery Phrase. Your password is never sent to Mailchain in any form. This also means we have no way recover your account if you lose your password or are unable to complete any other account recovery options.

Please see [FAQs](/user/faqs/) for more information on account recovery.

## Registering a Wallet Address

Mailchain uses a messaging key in place of your wallet key to encrypt and decrypt messages for each address. Messaging keys are more secure for encryption and mean you don’t expose your wallet’s private key.

When you register a wallet address with your Mailchain account, a new messaging key is generated. With your wallet, you sign a confirmation to indicate this key should be used for messaging. Signing this confirmation creates a proof that users can independently verify. The private messaging key is known only to you.

Registered addresses are encrypted before being stored, and you only need to verify ownership of your wallet address once. Mailchain disconnects your wallet after your wallet has created the proof. Your wallet private key is never exposed.

## Sending and Receiving Messages

Each time a message is sent via Mailchain, a new encryption key is created to encrypt the message contents and its location. This encryption key is then encrypted uniquely for each address that is receiving the message. A new key is created for each recipient and for each new message.

Only the intended recipient(s) can recover the key then decrypt the location and message contents. All information within or about your messages, for example, sender, subject or date, is encrypted. Mailchain cannot read your messages, the storage provider cannot read your messages, your internet service provider cannot read your messages.

When a message is sent, the message is encrypted and stored on distributed storage. An encrypted "delivery request" holds information for the message recipient to be able to collect their encrypted message. Messages are held in an ephemeral transport layer until the message has been retrieved by all the recipients or until it expires.

## Saving Messages

The Mailchain app will continuously check for new messages. Once a new message has been found, it is saved in your private inbox. Before being stored, messages are re-encrypted with a key that is specific to your inbox.

Your inbox is designed to be intuitive and can be filtered in a familiar way but, it is secured so that only you can see and understand the relationships between your addresses and content. All IDs, filters and metadata are hashed or encrypted with a key derived from your private messaging key. Mailchain’s database cannot identify any relationships even if multiple addresses received the same messages; all the IDs, filters and content look completely different.
