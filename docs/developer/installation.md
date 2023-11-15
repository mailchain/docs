---
description: How to install Mailchain
---

# Installation

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Adding Mailchain to your application is easy. Mailchain's SDK makes interacting with the Mailchain protocol simple. Using the SDK you will be able to send, receive (coming soon... for now you can view replies in https://app.mailchain.com) and register addresses (coming soon).

To add Mailchain's SDK to your application install via your package manager of choice.

```mdx-code-block
<Tabs>
<TabItem value="npm">
```

```bash
npm install @mailchain/sdk
```

```mdx-code-block
</TabItem>
<TabItem value="yarn">
```

```bash
yarn add @mailchain/sdk
```

```mdx-code-block
</TabItem>
</Tabs>
```

## Browser support

As Mailchain SDK is to be run primary by Node applications, it requires some polyfills to be used in the browser. Depending on your setup, you may need to polyfill [Buffer](https://nodejs.org/api/buffer.html), [crypto](https://nodejs.org/api/crypto.html) and [stream](https://nodejs.org/api/stream.html).

```mdx-code-block
<Tabs>
<TabItem value="Webpack 5">
```

```bash
yarn add crypto-browserify stream-browserify
npm install crypto-browserify stream-browserify
```

```js
// webpack.config.js
const webpack = require('webpack');

module.exports = {
	// ...
	resolve: {
		fallback: {
			crypto: require.resolve('crypto-browserify'),
			stream: require.resolve('stream-browserify'),
		},
	},
	plugins: [
		// ...
		new webpack.ProvidePlugin({
			Buffer: ['buffer', 'Buffer'],
		}),
	],
};
```

```mdx-code-block
</TabItem>
<TabItem value="Vite">
```

```bash
yarn add -D vite-plugin-node-polyfills
npm install --save-dev vite-plugin-node-polyfills
```

```js
module.exports = defineConfig({
	// ...
	plugins: [
		// ...
		nodePolyfills({
			include: ['buffer', 'crypto', 'stream'],
		}),
	],
});
```

```mdx-code-block
</TabItem>
</Tabs>
```
