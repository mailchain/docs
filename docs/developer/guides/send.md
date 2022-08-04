# Sending

_Message a blockchain address_

Using Mailchain you can send a message to any blockchain address. Only the owner of the address will be able to receive and read the message.

Try sending a message to `0xbb56FbD7A2caC3e4C17936027102344127b7a112@etheruem.mailchain.com`, that's us at Mailchain, we own the private key for `0xbb56FbD7A2caC3e4C17936027102344127b7a112`.

```typescript
const mailchain = Mailchain.fromSeed('0x....');

mailchain.sendMail(mail);
```
