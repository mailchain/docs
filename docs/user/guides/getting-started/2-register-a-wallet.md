---
title: 'Register A Wallet'
sidebar_position: 2
image: 'img/thumbs/social-square-1.png'
---

import MetamaskConnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_metamask_connect.mdx'
import WalletconnectConnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_walletconnect_connect.mdx'
import CoinbasewalletConnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_coinbasewallet_connect.mdx'
import MetamaskVerify from '/docs/user/guides/getting-started/register-a-wallet-partials/\_metamask_verify.mdx'
import WalletconnectVerify from '/docs/user/guides/getting-started/register-a-wallet-partials/\_walletconnect_verify.mdx'
import CoinbasewalletVerify from '/docs/user/guides/getting-started/register-a-wallet-partials/\_coinbasewallet_verify.mdx'
import NameserviceNone from '/docs/user/guides/getting-started/register-a-wallet-partials/\_nameservice_none.mdx'
import NameserviceCoinbasewallet from '/docs/user/guides/getting-started/register-a-wallet-partials/\_nameservice_coinbasewallet.mdx'
import MetamaskDisconnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_metamask_disconnect.mdx'
import WalletconnectDisconnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_walletconnect_disconnect.mdx'
import CoinbasewalletDisconnect from '/docs/user/guides/getting-started/register-a-wallet-partials/\_coinbasewallet_disconnect.mdx'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How To Connect & Register A Wallet

If you have an existing blockchain wallet, you can register the wallet to receive messages sent to that address. Visit [connecting and registering wallets](/user/concepts/understanding-connecting-wallets) to learn more about connecting wallets.

:::tip Tips for registering different wallets

This guide goes through the steps of connecting and registering an Ethereum (or EVM) wallet address with Mailchain. The process is broadly similar for most wallets and protocols.

Guides for all supported protocols, web domain name services and identities can be found under [Registering Wallets & Identities](/user/guides/wallets-and-identities).

:::

## Register an existing blockchain wallet address

### Step 1: Connect your wallet

<Tabs groupId="connect-wallet">
    <TabItem value="metamask" label="Metamask">
        <MetamaskConnect />
  </TabItem>
  <TabItem value="walletconnect" label="WalletConnect">
    <WalletconnectConnect />  
  </TabItem>
  <TabItem value="coinbasewallet" label="Coinbase Wallet">
    <CoinbasewalletConnect />  
  </TabItem>
</Tabs>

### Step 2: Verify your address

<Tabs groupId="verify-wallet">
    <TabItem value="metamask" label="Metamask">
        <MetamaskVerify />
    </TabItem>
    <TabItem value="walletconnect" label="WalletConnect">
        <WalletconnectVerify />
  </TabItem>
    <TabItem value="coinbasewallet" label="Coinbase Wallet">
        <CoinbasewalletVerify />
  </TabItem>
</Tabs>

### Step 3: Web3 domain names and customization

<Tabs groupId="nameservice">
    <TabItem value="metamask" label="Metamask">
        <NameserviceNone />
    </TabItem>
    <TabItem value="walletconnect" label="WalletConnect">
        <NameserviceNone />
    </TabItem>
    <TabItem value="coinbasewallet" label="Coinbase Wallet">
        <NameserviceCoinbasewallet />
    </TabItem>
</Tabs>

### Step 4: Disconnect your wallet

<Tabs groupId="disconnect-wallet">
    <TabItem value="metamask" label="Metamask">
        <MetamaskDisconnect />
    </TabItem>
    <TabItem value="walletconnect" label="WalletConnect">
        <WalletconnectDisconnect />
    </TabItem>
    <TabItem value="coinbasewallet" label="Coinbase Wallet">
        <CoinbasewalletDisconnect />
    </TabItem>
</Tabs>
