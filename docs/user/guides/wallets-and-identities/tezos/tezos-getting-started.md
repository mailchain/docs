---
title: 'Getting Started With Tezos'
sidebar_position: 2
image: 'img/thumbs/mailchain-tezos-message.png'
---

Mailchain users can use their Tezos wallet address or Tezos domain to send and receive messages. It’s simple to get started…

<img
    className="guides-image"
    alt="composing a message from a Tezos address"
    src="/img/thumbs/mailchain-tezos-message.png"
/>

# Introduction

_**Tezos** is a public, open-source blockchain protocol relying on a low power consumption and energy-efficient consensus.
The protocol also incorporates a self-amending governance system, which allows continuous improvements while preserving the integrity of this consensus. This is a rare feature that eliminates hard forks troubles.
Tezos is also fundamentally designed to provide code safety through Formal Verification. -_ Source: [Tezos Documentation](https://opentezos.com/tezos-basics)

_**Tezos Domains** is a distributed, open, and extensible naming system using the Tezos blockchain.
The main function is to translate a meaningful and user-friendly alias to its corresponding Tezos address and vice versa. This translation is globally consistent so that all users see the same address for a given alias. -_ Source: [Tezos Domains](https://tezos.domains/en/about/faq)

---

## How To Add Your Tezos Address or .tez Domain To Mailchain

### Prerequisites:

-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))
-   [ ] (Optional) You have a Tezos Domains name registered to your address (see [here](/user/guides/wallets-and-identities/tezos/tezos-faqs#how-do-i-register-a-tezos-domain))
-   [ ] (Optional) You have configured the Tezos Domains reverse record (see [here](/user/guides/wallets-and-identities/tezos/tezos-faqs#how-do-i-set-a-tezos-domains-reverse-record))

import TezosConnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_tezos_connect.mdx'
import TezosVerify from '/docs/user/guides/getting-started/register-a-wallet-partials/\_tezos_verify.mdx'
import NameserviceTezos from '/docs/user/guides/getting-started/register-a-wallet-partials/\_nameservice_tezos.mdx'
import TezosDisconnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_tezos_disconnect.mdx'

### Step 1: Connect your wallet

<TezosConnect />

### Step 2: Verify your address

<TezosVerify />

### Step 3: Adding your .tez (Tezos Domain) name

<NameserviceTezos />

### Step 4: Disconnect your wallet

<TezosDisconnect imagePath="/img/user/guides/getting-started/img-register-a-wallet/example-sub-inbox-tezos.png"/>

## How To Send A Message Using Your .tez Name

With Mailchain you can send Mailchain message from your .tez name to other Mailchain users.

### Prerequisites

-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))
-   [ ] (optional) You have a Tezos Domains name registered to your address (see [here](/user/guides/wallets-and-identities/tezos/tezos-faqs/#how-do-i-register-a-tezos-domain))
-   [ ] You have added your Tezos wallet address to Mailchain (see [above](/user/guides/wallets-and-identities/tezos/tezos-getting-started/#how-to-add-your-tezos-address-or-tez-domain-to-mailchain))

### Compose And Send A Message From Your Tezos Address or .tez Name

1. Log into your Mailchain account.

1. Click 'Compose' in the sidebar.

1. In the New Message window, click the “From” dropdown menu and select your Tezos address or .tez name.

1. Fill out the rest of the message, then click Send

1. Your message should be successfully sent.

Done! Your recipient will receive your message from your .tez name.
