---
title: Addresses formatting
---

## Fully Qualified Mailchain Addresses

Mailchain addressing provides broad support for known address schemes, including Mailchain accounts and identities, blockchain protocol addresses, Web3 names, and traditional email. The format is based on the RFC5322 Addr-Spec Specification to ensure maximum compatibility with other programs and future-proof support for potential address schemes (‘local-part’@’domain-part’).

Please refer to the table below for definition and examples:

| Type                  | Template                                        | Examples                                                                                                                                     |
| --------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Mailchain             | `<username>@mailchain.com`                      | `alice@mailchain.com`<br />`bob@mailchain.com`                                                                                               |
| Ethereum              | `<address>@ethereum.mailchain.com`              | `0xA6F44f3d978B5cf7dA7A71Db8A5947E5598a5a05@ethereum.mailchain.com`<br />`0xeffc29fe76F4d73B823C6d319E8fDE65c5D5719d@ethereum.mailchain.com` |
| Namservices (generic) | `<nsDomain>@<nsName>.mailchain.com`             | `alice.eth@ens.mailchain.com`<br />`alice.crypto@unstoppable.mailchain.com`<br />`alice.hodl@freename.mailchain.com`                         |
| ENS                   | `<ensDomain>@ens.mailchain.com`                 | `alice.eth@ens.mailchain.com`<br />`bob.cb.id@ens.mailchain.com`                                                                             |
| Unstoppable           | `<unstoppableDomain>@unstoppable.mailchain.com` | `alice.crypto@unstoppable.mailchain.com`<br />`bob.wallet@unstoppable.mailchain.com`                                                         |
| Freename              | `<freenameDomain>@freename.mailchain.com`       | `alice.hodl@freename.mailchain.com`<br />`bob.aurora@freename.mailchain.com`                                                                 |

## Shorthand Addresses

Each name service may support a shorthand address format (e.g. `alice.eth` for ENS). Please see name service FAQs for specific name service shorthands:

-   [Aurora](/user/guides/name-services/aurora/aurora-faqs#does-mailchain-support-shorthand-addressing-for-aurora)
-   [ENS](/user/guides/name-services/ens/ens-faqs#does-mailchain-support-shorthand-addressing-for-ens)
-   [Freename](/user/guides/name-services/freename/freename-faqs#does-mailchain-support-shorthand-addressing-for-freename)
-   [Unstoppable Domains](/user/guides/name-services/unstoppable-domains/unstoppable-domains-faqs#does-mailchain-support-shorthand-addressing-for-unstoppable-domains)
