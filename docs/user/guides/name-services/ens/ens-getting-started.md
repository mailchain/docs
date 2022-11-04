---
title: 'Getting Started with ENS'
sidebar_position: 2
---

Mailchain users can use their ENS domain to send and receive messages. It’s simple to get started…

![Mailchain message to ENS name](../img-ens/mailchain-mailto-messagetodaos.png)

# Introduction

_The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain.
ENS’s job is to map human-readable names like ‘alice.eth’ to machine-readable identifiers such as Ethereum addresses, other cryptocurrency addresses, content hashes, and metadata. ENS also supports ‘reverse resolution’, making it possible to associate metadata such as canonical names or interface descriptions with Ethereum addresses. —_ Source: [ENS Documentation](https://docs.ens.domains/)

---

## How To Add Your Ens Name To Mailchain

### Prerequisites:

-   [ ] You have an ENS name registered to your address (see [here](/user/guides/name-services/ens/ens-faqs#how-do-i-register-an-ens-domain))
-   [ ] You have configured the ENS Primary Resolver (see [here](/user/guides/name-services/ens/ens-faqs#how-do-i-set-an-ens-primary-resolver))
-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))

### Add Your ENS Name to Mailchain

1. Log in to your Mailchain Account
2. Click “Register Your Wallet”.

    ![register your wallet](../img-ens/ens_introduction/ens1_1.png)

3. A modal will open. Select a wallet provider (e.g. Metamask), then click 'Connect'

    ![select wallet](../img-ens/ens_introduction/ens1_2.png)

4. Choose the address to connect, then click Next.

    ![choose address](../img-ens/ens_introduction/ens1_3.png)

5. Click 'Connect' to confirm Mailchain should be able to read your address.

    ![connect wallet](../img-ens/ens_introduction/ens1_3%201.png)

6. The address is now connected, but we need to register it in Mailchain. To do this, click 'Verify Address'

    ![address connected](../img-ens/ens_introduction/ens1_4.png)

7. A 'Signature Request' will appear in your wallet. It contains the following text:

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

    ![signature request](../img-ens/ens_introduction/ens1_5.png)

8. Review the request and click 'Sign' to complete verification.

    ![sign to complete](../img-ens/ens_introduction/ens1_6.png)

9. The next step checks for connected name services, including ENS names. This example found `happywriter.eth`. If you do not see your ENS name here, please see ENS FAQs [here](/user/guides/name-services/ens/ens-faqs#my-ens-name-was-not-found-what-should-i-check).

    ![search for address](../img-ens/ens_introduction/ens1_7.png)

10. You can add a custom label for your address. By default, Mailchain will populate your ENS name. Click Apply to save and continue.

    ![add label](../img-ens/ens_introduction/ens1_8.png)

11. Mailchain is able to receive messages for your wallet address before you sign up. Click 'Synchronize' to retrieve these messages, or click 'Skip' to synchronize later. Any synchronized messages will appear in your inbox.

    ![check for existing addresses](../img-ens/ens_introduction/ens1_9.png)

12. You can now click 'Done' to disconnect your wallet and close the modal, or choose to register another address.

    ![disconnect wallet](../img-ens/ens_introduction/ens1_10.png)

13. You will now see the newly added inbox on the left. This will be labelled with the label you provided when registering the address. Any messages sent to that address or the ENS name will appear in this inbox.

    ![new address added](../img-ens/ens_introduction/ens1_11.png)

## How To Send A Message Using Your Ens Name

With Mailchain you can send Mailchain message from your ENS name to other Mailchain users.

### Prerequisites

-   [ ] You have an ENS name registered to your address (see [here](/user/guides/name-services/ens/ens-faqs#how-do-i-register-an-ens-domain))
-   [ ] You have configured the ENS Primary Resolver (see [here](/user/guides/name-services/ens/ens-faqs#how-do-i-set-an-ens-primary-resolver))
-   [ ] You have a Mailchain account (see [here](/user/guides/getting-started/create-a-mailchain-account))
-   [ ] You have added your ENS name to Mailchain (see [above](/user/guides/name-services/ens/ens-getting-started#how-to-add-your-ens-name-to-mailchain))

### Compose And Send A Message From Your Ens Name

1. Log into your Mailchain account.

    ![log into mailchain](../img-ens/ens_introduction/ens1_11%201.png)

2. Click 'Compose' in the sidebar.

    ![compose message](../img-ens/ens_introduction/ens2_1.png)

3. In the New Message window, click the “From” dropdown menu.

    ![choose from address](../img-ens/ens_introduction/ens2_2.png)

4. Select your ENS name.

    ![select ens name](../img-ens/ens_introduction/ens2_3.png)

5. Fill out the rest of the message, then click Send

    ![write message](../img-ens/ens_introduction/ens2_4.png)

6. Your message should be successfully sent.

    ![message sent](../img-ens/ens_introduction/ens2_5.png)

Done! Your recipient will receive your message from your ENS name.
