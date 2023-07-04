---
title: 'Getting Started with Coinbase Decentralized ID'
sidebar_position: 2
---

Mailchain users can use their Coinbase Decentralized IDs (.cb.id) to send and receive web3 mail. It’s simple to get started…

# Introduction

Coinbase is working with the Ethereum Name Service (ENS), a decentralized identity infrastructure provider, to offer Coinbase-managed web3 usernames free to users.

A Coinbase username is a decentralized form of ID that allows you to personalize your wallet address, making it easier to access web3 and for others to locate, remember and send funds to your wallet through your Coinbase username (for example, using username.cb.id instead of 0x7ec…).

Your Coinbase username (username.cb.id) is a “subdomain” tied to Coinbase’s Domain Name System (DNS) domain (cb.id), which is also registered under the ENS protocol. _Source: [Coinbase Help](https://help.coinbase.com/en/wallet/managing-account/coinbase-ens-support)_

---

## Add Your Coinbase Decentralized ID To Mailchain

### Prerequisites:

-   [ ] You own a .cb.id username (see [here](https://help.coinbase.com/en/wallet/managing-account/coinbase-ens-support))
-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))

import MetamaskConnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_metamask_connect.mdx'
import MetamaskVerify from '/docs/user/guides/getting-started/register-a-wallet-partials/\_metamask_verify.mdx'
import NameserviceCoinbase from '/docs/user/guides/getting-started/register-a-wallet-partials/\_nameservice_coinbase.mdx'
import MetamaskDisconnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_metamask_disconnect.mdx'

### Step 1: Connect your wallet

<MetamaskConnect />

### Step 2: Verify your address

<MetamaskVerify />

### Step 3: Adding your .cd.id decentralized ID

<NameserviceCoinbase />

### Step 4: Disconnect your wallet

<MetamaskDisconnect imagePath="/img/user/guides/getting-started/img-register-a-wallet/example-sub-inbox-coinbase.png"/>

## How To Send A Message Using Your .cb.id Username

With Mailchain you can send Mailchain message from your .cb.id username to other Mailchain users.

### Prerequisites

-   [ ] You own a .cb.id username (see [here](https://help.coinbase.com/en/wallet/managing-account/coinbase-ens-support))
-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))
-   [ ] You have added your .cb.id username to Mailchain (see [above](#add-your-coinbase-decentralized-id-to-mailchain))

### Compose And Send A Message From Your .cb.id Username

1. Log into your Mailchain account.

1. Click 'Compose' in the sidebar.

1. In the New Message window, click the “From” dropdown menu and select your .cb.id username.

1. Fill out the rest of the message, then click Send

1. Your message should be successfully sent.

Done! Your recipient will receive your message from your .cb.id username.
