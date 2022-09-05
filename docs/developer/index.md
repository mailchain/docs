---
description: Mailchain is designed to be easy for developers to send messages quickly.
---

# Introduction

Keeping your users informed is important, but hard to do in Web3.

Mailchain is a multi-chain communication protocol that helps you communicate with your users across any protocol. It provides end-to-end encryption by default, and supports 1:1, 1:many and group messaging.

Using Mailchain you can easily send messages to any blockchain address on different protocols. Mailchain solves your messaging needs so you can focus on building your application.

## SDK

The preferred way to integrate with Mailchain is using our SDK. It takes care of the complexity working with the REST API including signing, verifying, encrypting, and decrypting.

The API is on course to be decentralized and could be run by anyone. This presents some additional considerations when you call the endpoints. We built the SDK with these in mind and it securely handles the following specifications:

-   Requests MUST be authenticated before they are transmitted, using the correct key.
-   Requests containing private data MUST be encrypted with the correct key before being transmitted.
-   Responses MUST be verified to ensure they are valid and up to date.
-   Responses containing encrypted data MUST be decrypted with the correct key before being read by the application.

The SDK handles this safely and has a simple interface so you can easily send messages and work with validated API responses. The SDK is open source and the API is open to the public so you can independently verify this at any time.

We think using the SDK is a better choice than calling the API directly, and we’d love to hear your feedback on how we can make it even better.
