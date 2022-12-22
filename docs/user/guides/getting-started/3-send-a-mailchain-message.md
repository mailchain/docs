---
title: Send A Mailchain Message
sidebar_position: 3
image: 'img/thumbs/social-square-1.png'
---

# How To Send Mailchain Messages

<video controls width="100%" poster="https://github.com/mailchain/video-tutorials/blob/main/posters/send_and_receive_a_message.png?raw=true">
    <source src="https://github.com/mailchain/video-tutorials/blob/main/videos/send_and_receive_a_message.mp4?raw=true" />
</video>

1. Log into your Mailchain account. (_Follow this guide to [create an account](./create-a-mailchain-account)_)

1. Click 'Compose' in the sidebar, and fill out the following fields:

    1. `To` is the intended recipient in any of the following formats:

        | Identity Type              | Address Format     | Example              |
        | -------------------------- | ------------------ | -------------------- |
        | Mailchain                  | username@mailchain | alice@mailchain      |
        | Ethereum                   | address@ethereum   | 0x123456789@ethereum |
        | More protocols coming soon |

        :::note
        If you send a message to an Ethereum address that has not yet signed up, the message will be retained for up to six months. It will be delivered to owner when they register the address with Mailchain.
        :::

    1. `From` is the address you are sending from. It will be your Mailchain address or any registered address.
    1. Fill out the `Subject` and the message body, then click Send.

When your message is sent, a confirmation box will pop up. You can view it in the "Sent" folder.

Now you can [read a message.](./4-read-a-mailchain-messages.md)
