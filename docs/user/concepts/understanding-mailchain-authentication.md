---
title: 'Authentication In Mailchain'
slug: './understanding-mailchain-authentication'
sidebar_position: 101
image: 'img/thumbs/social-square-1.png'
---

# Introduction

Your Mailchain account is your new identity.

You can use it for messaging other Mailchain users or any blockchain addresses. Your identity is yours. Nobody, not even Mailchain has access to it. When you create a Mailchain account, two things happen:

1. The Mailchain username that you choose is registered to your identity (which is linked to your [Secret Recovery Phrase](#your-secret-recovery-phrase)).
1. You create a [safe space](#your-safe-space) to keep your messages, registered addresses, labels, and other application data.

## Your Secret Recovery Phrase

Your _Secret Recovery Phrase_ is a collection of words that can be used to access your Mailchain identity.

If you lose this, you may not be able to recover your account (see _"What happens if I forget or lose my Secret Recovery Phrase?"_ below). Store a copy of it somewhere safe (for example a password manager or written down and locked away).

## Your Safe Space

Your data is encrypted with a key derived from your Secret Recovery Phrase. This key never leaves your browser unencrypted. Your password is used to encrypt this key, which is stored on Mailchain's server. When you choose a password, it should be a very strong password or passphrase. You should store a copy of it somewhere safe (for example a password manager or written down and locked away).

## Important considerations

### What happens if I forget or lose my password?

If you forget or lose your password, you can recover your account using your Secret Recovery Phrase.

### What happens if I forget or lose my Secret Recovery Phrase?

If you forget or lose your Secret Recovery Phrase, you can recover your account if you know your Mailchain username and password.

### What happens if I forget my Secret Recovery Phrase and my password?

If you forget your Secret Recovery Phrase and your password, your account will be inaccessible.

### Will my data be accessible after I have recovered my account?

When you log in to Mailchain with your Secret Recovery Phrase or username and password combination, your messages, registered wallets, settings, etc. will be accessible to you.

### What should I do if I suspect my Secret Recovery Phrase or username and password combination have been compromised?

Any user who suspects their Secret Recovery Phrase or username and password combination has been compromised should create a new account and migrate their blockchain addresses by re-registering them with the new account. Any new messages will now use the messaging keys for the new account.
