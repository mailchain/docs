---
title: 'Getting Started With Solana'
sidebar_position: 2
image: 'img/thumbs/mailchain-solana-message.png'
---

Mailchain users can use their Solana wallet address or Solana domain to send and receive messages. It’s simple to get started…

<img
    className="guides-image"
    alt="composing a message from a Solana address"
    src="/img/thumbs/mailchain-solana-message.png"
/>

# Introduction

_**Solana** is a blockchain built for mass adoption. It's a high performance network that is utilized for a range of use cases, including finance, NFTs, payments, and gaming. Solana operates as a single global state machine, and is open, interoperable and decentralized. -_ Source: [Solana Documentation](https://docs.solana.com/)

_**Solana Name Service (SNS)** has a simple mission of providing a decentralized and affordable way to map domain names (represented as .sol) to on-chain data. Where on-chain data can be anything from a Solana (SOL) address to IPFS CID, images, text, and more. -_ Source: [Solana Name Service](https://docs.bonfida.org/collection/naming-service/an-introduction-to-the-solana-name-service)

---

## How To Add Your Solana Address or .sol Domain To Mailchain

### Prerequisites:

-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))
-   [ ] (Optional) You have a Solana SNS domain name in your wallet (see [here](/user/guides/wallets-and-identities/solana/solana-faqs#how-do-i-register-a-solana-domain))

import SolanaConnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_solana_connect.mdx'
import SolanaVerify from '/docs/user/guides/getting-started/register-a-wallet-partials/\_solana_verify.mdx'
import NameserviceSolana from '/docs/user/guides/getting-started/register-a-wallet-partials/\_nameservice_solana.mdx'
import SolanaDisconnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_solana_disconnect.mdx'

### Step 1: Connect your wallet

<SolanaConnect />

### Step 2: Verify your address

<SolanaVerify />

### Step 3: Adding your .sol (Solana Domain) name

<NameserviceSolana />

### Step 4: Disconnect your wallet

<SolanaDisconnect imagePath="/img/user/guides/getting-started/img-register-a-wallet/example-sub-inbox-solana.png"/>

## How To Send A Message Using Your .sol Name

With Mailchain you can send Mailchain message from your .sol name to other Mailchain users.

### Prerequisites

-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))
-   [ ] (Optional) You have a Solana SNS domain name in your wallet (see [here](/user/guides/wallets-and-identities/solana/solana-faqs#how-do-i-register-a-solana-domain))
-   [ ] You have added your Solana wallet address to Mailchain (see [above](/user/guides/wallets-and-identities/solana/solana-getting-started/#how-to-add-your-solana-address-or-sol-domain-to-mailchain))

### Compose And Send A Message From Your Solana Address or .sol Name

1. Log into your Mailchain account.

1. Click 'Compose' in the sidebar.

1. In the New Message window, click the “From” dropdown menu and select your Solana address or .solana name.

1. Fill out the rest of the message, then click Send

1. Your message should be successfully sent.

Done! Your recipient will receive your message from your .sol name.
