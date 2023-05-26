---
title: Addresses formatting
---

## Fully Qualified Mailchain Addresses

Mailchain addressing provides broad support for known address schemes, including Mailchain accounts and identities, blockchain protocol addresses, Web3 names, and traditional email. The format is based on the RFC5322 Addr-Spec Specification to ensure maximum compatibility with other programs and future-proof support for potential address schemes (‘local-part’@’domain-part’).

Please refer to the table below for definition and examples:

| Type                  | Template                                                                                                                                               | Examples                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Mailchain             | `<username>@mailchain.com`                                                                                                                             | `alice@mailchain.com`<br />`bob@mailchain.com`                                                                                               |
| Namservices (generic) | `<addressPart>.<nsDomain>@<nsName>.mailchain.com`                                                                                                      | `alice.eth@ens.mailchain.com`<br />`alice.crypto@unstoppable.mailchain.com`<br />`alice.hodl@freename.mailchain.com`                         |
| arb & bnb (SPACE ID)  | `<addressPart>.<spaceIdDomain>@spaceid.mailchain.com`                                                                                                  | `alice.arb@spaceid.mailchain.com`<br />`bob.bnb@spaceid.mailchain.com`                                                                       |
| Aurora                | `<addressPart>.aurora@freename.mailchain.com`                                                                                                          | `alice.aurora@freename.mailchain.com`                                                                                                        |
| Binance Smart Chain   | `<address>@ethereum.mailchain.com`                                                                                                                     | `0xA6F44f3d978B5cf7dA7A71Db8A5947E5598a5a05@ethereum.mailchain.com`                                                                          |
| Coinbase ID           | `<coinbaseProfile>.cb.id@ens.mailchain.com`                                                                                                            | `alice.cb.id@ens.mailchain.com`                                                                                                              |
| ENS                   | `<ensDomain>.eth@ens.mailchain.com`<br/><small>Notes:<br/>[1] Resolvable DNSSEC ENS names are supported.<br/>[2] ENS subdomains are supported.</small> | `alice.eth@ens.mailchain.com`                                                                                                                |
| Ethereum              | `<address>@ethereum.mailchain.com`                                                                                                                     | `0xA6F44f3d978B5cf7dA7A71Db8A5947E5598a5a05@ethereum.mailchain.com`<br />`0xeffc29fe76F4d73B823C6d319E8fDE65c5D5719d@ethereum.mailchain.com` |
| Freename              | `<addressPart>.<freenameDomain>@freename.mailchain.com`                                                                                                | `alice.hodl@freename.mailchain.com`                                                                                                          |
| Lens                  | `<lensHandle>.lens@lens.mailchain.com`                                                                                                                 | `alice.lens@lens.mailchain.com`<br />                                                                                                        |
| Tezos                 | `<address>@tezos.mailchain.com`                                                                                                                        | `tz1UenW36rnMpobJ8roNW5Bwevpry4YHmQzR@tezos.mailchain.com`                                                                                   |
| Tezos Domains         | `<addressPart>.tez@tezosdomains.mailchain.com`                                                                                                         | `alice.tez@tezosdomains.mailchain.com`                                                                                                       |
| Unstoppable           | `<addressPart>.<unstoppableDomain>@unstoppable.mailchain.com`                                                                                          | `alice.crypto@unstoppable.mailchain.com`<br />`bob.wallet@unstoppable.mailchain.com`                                                         |
| Avvy                  | `<addressPart>.avax@avvy.mailchain.com`                                                                                                                | `alice.avax@avvy.mailchain.com`                                                                                                        |

## Shorthand Addresses

Each name service may support a shorthand address format (e.g. `alice.eth` for ENS, `alice.lens` for Lens, `alice.near` for NEAR, etc.). Please see [Registering Wallets & Identities](/user/guides/wallets-and-identities) FAQs for specific details for shorthand addresses.
