---
title: 'Getting Started with BNB Smart Chain and .bnb Names'
sidebar_position: 2
---

Mailchain users can use their BNB Smart Chain (BSC) wallet addresses and .bnb names to send and receive messages. It’s simple to get started…

# Introduction

_**Binance Smart Chain** is a sovereign smart contract blockchain delivering Ethereum Virtual Machine (EVM) compatible programmability. Designed to run in parallel with Binance Chain, Binance Smart Chain retains the former’s fast execution times and low transaction fees while adding Smart Contracts functionality to support compatible dApps._ - Source: [BNB Chain](https://www.bnbchain.org/en/activity)

_**.bnb domain names** are provided by [SPACE ID](https://space.id/), a company building a universal name service network with a one-stop identity platform to discover, register, trade, manage web3 domains. It also provides a multi-chain name service for everyone to easily build and create a web3 identity._ — Source: [SPACE ID Documentation](https://docs.space.id/)

---

## How To Add Your BNB Smart Chain Address or .bnb Domain Name To Mailchain

### Prerequisites:

-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))
-   [ ] (Optional) You have a .bnb name, registered through SPACE ID, registered to your address (see [here](/user/guides/wallets-and-identities/spaceid/spaceid-faqs#how-do-i-register-a-space-id-domain))

### Add Your SPACE ID Domain to Mailchain

1. Log in to your Mailchain Account.

1. Click “Register Your Wallet”.

 <!-- ![register your wallet](../img-binance/binance1_1.png) -->

1. A modal will open. Select a wallet provider (e.g. Metamask), then click 'Connect'

 <!-- ![select wallet](../img-binance/binance1_2.png) -->

1. Choose the address to connect, then click Next.

 <!-- ![choose address](../img-binance/binance1_3.png) -->

1. Click 'Connect' to confirm Mailchain should be able to read your address.

 <!-- ![connect wallet](../img-binance/binance1_3-1.png) -->

1. The address is now connected, but we need to register it in Mailchain. To do this, click 'Verify Address'

 <!-- ![address connected](../img-binance/binance1_4.png) -->

1. A 'Signature Request' will appear in your wallet. It contains the following text:

    ```bash
    Message:
    Welcome to Mailchain!

    Please sign to start using this address with Mailchain. This will not trigger a blockchain transaction or cost any gas fees.

    What's happening?
    A messaging key will be registered with this address and used only for messaging. It will replace any existing registered messaging keys.

    Technical Details:
    Address: `your_address`
    Messaging key: `a_generated_messaging_key`
    Nonce: `a_number`
    ```

    <!-- ![signature request](../img-binance/binance1_5.png) -->

1. Review the request and click 'Sign' to complete verification.

 <!-- ![sign to complete](../img-binance/binance1_6.png) -->

1. The next step checks for connected name services, including .bnb names. If you do not see your .bnb name here, you can manually search for it using the search box. If it still cannot be found, please see SPACE ID FAQs [here](/user/guides/wallets-and-identities/spaceid/spaceid-faqs/#my-space-id-domain-was-not-found-what-should-i-check).

1. You can add a custom label for your address. By default, Mailchain will populate your primary SPACE ID domain or the first one it finds. In this example, the name has been manually changed. Click Apply to save and continue.

 <!-- ![add label](../img-binance/binance1_8.png) -->

1. Mailchain is able to receive messages for your wallet address before you sign up. Click 'Synchronize' to retrieve these messages, or click 'Skip' to synchronize later. Any synchronized messages will appear in your inbox.

 <!-- ![check for existing addresses](../img-binance/binance1_9.png) -->

1. You can now click 'Done' to disconnect your wallet and close the modal, or choose to register another address.

 <!-- ![disconnect wallet](../img-binance/binance1_10.png) -->

1. You will now see the newly added inbox on the left. This will be labelled with the label you provided when registering the address. Any messages sent to that address or your .bnb name will appear in this inbox.

 <!-- ![new address added](../img-binance/binance1_11.png) -->

## How To Send A Message From Your BNB Smart Chain Address or .bnb Name

With Mailchain you can send Mailchain messages from your .bnb name or BSC address to other Mailchain users.

### Prerequisites

-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))
-   [ ] (optional) You have a .bnb name registered to your address (see [here](/user/guides/wallets-and-identities/spaceid/spaceid-faqs/#how-do-i-register-a-space-id-domain))
-   [ ] (optional) You have added your .bnb domain to Mailchain (see [above](/user/guides/wallets-and-identities/binance/binance-getting-started/#how-to-add-your-bnb-smart-chain-address-or-bnb-domain-name-to-mailchain))

### Compose And Send A Message From Your .bnb Name or BNB Smart Chain Address

1. Log into your Mailchain account.

1. Click 'Compose' in the sidebar.

 <!-- ![compose message](../img-binance/binance2_1.png) -->

1. In the New Message window, click the “From” dropdown menu and select your BSC address or .bnb name.

 <!-- ![select your web3 identity](../img-binance/binance2_2.png) -->

1. Fill out the rest of the message, then click Send.

 <!-- ![write message](../img-binance/binance2_3.png) -->

1. Your message should be successfully sent.

 <!-- ![message sent](../img-binance/binance2_4.png) -->

Done! Your recipient will receive your message from your address or .bnb name.
