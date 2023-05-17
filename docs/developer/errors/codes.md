---
title: 'Error codes'
sidebar_position: 20
pagination_next: null
pagination_prev: null
---

Learn more about error codes and how to resolve them.

SDK functions that return an error include an error code in the `type` attribute – a unique short string that is a brief explanation of the error. These codes play a role in our recommended error handling techniques.

Below is a list of possible error codes, along with additional information about how to resolve them. For convenience, every Error object links to their to this page in its `docs` attribute.

#### `address_invalid`

Address is invalid. Make sure address is syntax correct. Check error's `cause` for the underlying `error`. See [address formatting](../address-formatting.md) for correct address formatting.

#### `identity_not_found`

Identity is not found. Check address exists on supplied identity provider. When searching for name service providers check name is registered and resolves to the default protocol address.

#### `identity_provider_unsupported`

Identity provider is not support. Check list of supported identity providers.

#### `messaging_key_contact_call_error`

Failed calling messaging key contract or contract response is invalid. Check your connection, then try again.

#### `messaging_key_validation_failed`

Messaging key proof verification failed. The SDK will not use the messaging key for this address.

#### `messaging_key_unregistered`

Messaging key is not yet registered. Register messaging key for address then retry.

#### `preflight_check_failed`

Failed when performing checks before preparing a mail for sending. Check the error's `message` attribute for further information on what check failed.

#### `prepare_distributions_failures`

Before sending a mail, the SDK prepares each distributions for the recipients. One or more distributions failed to prepare. Check the error's `failures` attribute for the failed distributions and corresponding errors.

#### `protocol_unsupported`

Mailchain only supports certain protocols. Check you are using the latest version of the SDK and the protocol is supported then try again.

#### `resolve_addresses_failures`

Before preparing a mail to send, the SDK resolves all addresses in the `from`, `to`, `cc` and `bcc` fields. One or more of these addresses failed to resolve. Check the error's `failures` attribute for the failed addresses and corresponding errors.

#### `send_mail_delivery_request_failures`

Delivery requests are sent to each recipient in the `to`, `cc` and `bcc` fields. One or more delivery requests failed to send. Check the error's `failures` attribute for the failed delivery requests and their corresponding errors.

#### `sender_messaging_key_incorrect`

The `from` address messaging key is incorrect. Check the sender messaging key matches, the latest entry in the the key registry for the [`from` address](../advanced/resolve-address.mdx#check-address-messaging-key).

#### `unexpected_error`

An expected error occurred. Check error's `message` for more information and `cause` for the underlying `error`.
