---
title: 'Getting Started with ENS'
sidebar_position: 2
image: 'img/thumbs/mailchain-mailto-messagetodaos.png'
---

Mailchain users can use their ENS domain to send and receive messages. It’s simple to get started…

<img
    className="guides-image"
    alt="a message to DAOs"
    src="/img/thumbs/mailchain-mailto-messagetodaos.png"
/>

# Introduction

_The [Ethereum Name Service (ENS)](https://ens.domains) is a distributed, open, and extensible naming system based on the Ethereum blockchain.
ENS’s job is to map human-readable names like ‘alice.eth’ to machine-readable identifiers such as Ethereum addresses, other cryptocurrency addresses, content hashes, and metadata. ENS also supports ‘reverse resolution’, making it possible to associate metadata such as canonical names or interface descriptions with Ethereum addresses. —_ Source: [ENS Documentation](https://docs.ens.domains/)

---

## How To Add Your ENS Name To Mailchain

### Prerequisites:

-   [ ] You have an ENS name registered to your address (see [here](/user/guides/wallets-and-identities/ens/ens-faqs#how-do-i-register-an-ens-domain))
-   [ ] You have configured the ENS Primary Resolver (see [here](/user/guides/wallets-and-identities/ens/ens-faqs#how-do-i-set-an-ens-primary-resolver))
-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))

import MetamaskConnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_metamask_connect.mdx'
import MetamaskVerify from '/docs/user/guides/getting-started/register-a-wallet-partials/\_metamask_verify.mdx'
import NameserviceEns from '/docs/user/guides/getting-started/register-a-wallet-partials/\_nameservice_eth.mdx'
import MetamaskDisconnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_metamask_disconnect.mdx'

### Step 1: Connect your wallet

<MetamaskConnect />

### Step 2: Verify your address

<MetamaskVerify />

### Step 3: Adding your .eth ENS name

<NameserviceEns />

### Step 4: Disconnect your wallet

<MetamaskDisconnect imagePath="/img/user/guides/getting-started/img-register-a-wallet/example-sub-inbox-eth.png"/>

## How To Send A Message Using Your ENS Name

With Mailchain you can send Mailchain message from your ENS name to other Mailchain users.

### Prerequisites

-   [ ] You have an ENS name registered to your address (see [here](/user/guides/wallets-and-identities/ens/ens-faqs#how-do-i-register-an-ens-domain))
-   [ ] You have configured the ENS Primary Resolver (see [here](/user/guides/wallets-and-identities/ens/ens-faqs#how-do-i-set-an-ens-primary-resolver))
-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))
-   [ ] You have added your ENS name to Mailchain (see [above](/user/guides/wallets-and-identities/ens/ens-getting-started#how-to-add-your-ens-name-to-mailchain))

### Compose And Send A Message From Your ENS Name

1. Log into your Mailchain account.

1. Click 'Compose' in the sidebar.

1. In the New Message window, click the “From” dropdown menu.

1. Select your ENS name.

1. Fill out the rest of the message, then click Send

1. Your message should be successfully sent.

Done! Your recipient will receive your message from your ENS name.
