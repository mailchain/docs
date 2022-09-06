---
title: 'Register A Wallet'
sidebar_position: 2
---

# How To Connect & Register A Wallet

If you have an existing blockchain wallet, you can register the wallet to receive messages sent to that address. Visit [connecting and registering wallets](/user/concepts/understanding-connecting-wallets) for more information.

Follow these steps to connect and register an existing blockchain wallet address:

1. Click a button to open the connect wallet modal:

    ![](./img-register-a-wallet/connect-buttons.png)

1. Select a wallet provider (e.g. Metamask), then click 'Connect'

    ![](./img-register-a-wallet/connect-wallet.png)

1. Choose the address to connect, then click Next.

    ![](./img-register-a-wallet/connect-address.png)

1. Click 'Connect' to confirm Mailchain should be able to read your address.

    ![](./img-register-a-wallet/connect-address-confirm.png)

    The address is now connected, but we need to register it in Mailchain. To do this:

1. Click 'Verify Address'

    ![](./img-register-a-wallet/verify-address-button.png)

1. A 'Signature Request' will appear in your wallet. It contains the following text:

    > Message: <br />
    > Welcome to Mailchain! <br />
    >
    > Please sign to start using this address with Mailchain. This will not trigger a blockchain transaction or cost any gas fees. <br />
    >
    > What's happening? <br />
    > A messaging key will be registered with this address and used only for messaging. It will replace any existing registered messaging keys. <br />
    >
    > Technical Details: <br />
    > Address: `your_address` <br />
    > Messaging key: `a_generated_messaging_key` <br />
    > Nonce: `a_number`

    Review the request and click 'Sign'.

    ![](./img-register-a-wallet/wallet-signature-request.png)

    Your wallet is now verified.

1. By default, Mailchain is able to receive messages for your existing blockchain wallet address before you sign up. Click 'Synchronize' to get these messages, or click 'Skip' to synchronize later.

    ![](./img-register-a-wallet/wallet-sync.png)

1. You can now click 'Done' to disconnect your wallet and close the modal, or choose to register another address.

    ![](./img-register-a-wallet/wallet-verified.png)

### Tips

You will be able to see a folder in the sidebar for your registered address. To manage the address, click on 'Settings'.

![](./img-register-a-wallet/registered-address-folder.png)

When you compose a message, you can select the address to send from in the message dropdown.

![](./img-register-a-wallet/compose-from-registered-address.png)
