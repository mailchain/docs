---
title: 'Authenticated webhook'
---

At the end of this tutorial, you will have built an Express App, that exposes an API to send messages via Mailchain. Your API accepts POST requests meaning applications may use your API as a webhook commonly used to trigger notifications. Your app will use the [Mailchain SDK](https://www.npmjs.com/package/@mailchain/sdk) to send messages and Bearer tokens to authenticate incoming requests. In most cases, you would add a route to an existing Express App, but for this tutorial, you'll create a new app.

## Prerequisites

This guide adds authentication to an existing endpoint for sending messages. To complete this tutorial, you need to:

1. Complete the [send via API](./send-via-api.md) guide.
1. [Create a new Mailchain account](../../user/guides/getting-started/1-create-a-mailchain-account.md) for development and testing purposes.

## Step 1 - Install passport

The existing API we built in the previous guide is unauthenticated, meaning it accepts any valid POST request and sends a message. [Passport](https://www.passportjs.org) authenticates the API requests.

To install `passport` and `passport-http-bearer` libraries and types, open a terminal window and navigate the root directory of your code, then run:

```bash
npm install --save passport passport-http-bearer
npm install --save--dev @types/passport @types/passport-http-bearer
```

[passport](https://www.npmjs.com/package/passport) provides multiple different authentication strategies for APIs and works with Express. [passport-http-bearer](https://www.npmjs.com/package/passport-http-bearer) configures Passport to use the bearer strategy for authentication.

---

## Step 2 - Generate authentication tokens

Your API will use the bearer authentication scheme to authenticate requests. You'll need to create a list of known tokens and provide them to the application. Passport then looks at the request token and searches for it in the known tokens list.

### Bearer authentication scheme

HTTP requests use the `Authentication` header to send authentication details to the server. `Authentication` headers specify the method or authentication scheme and credentials. Bearer is an authentication scheme commonly used to authenticate HTTP API requests. The format for a `Bearer` authentication header is:

```
"Authorization: Bearer {token}"
```

:::note

The value of the token can be anything, usually a random generated string that is meaningless to the client. Random values make for easy authentication but since the request is not signed. Care must be taken to properly protect the token as anyone with the token can make requests.

:::

### Generate tokens

You need to use a secure random generator to safely generate bearer tokens. The latest version of `openssl` implements a secure random generator that generates and formats random values of any length.

Open a terminal window and execute the following command:

```bash
openssl rand 32 -hex
```

Try running it again, notice that each time you run it you get a different unique value.

---

## Step 3 - Provide tokens to app

Your app will extract the bearer token from the HTTP request `Authorization` header. It will then look for the supplied bearer token in a list of known tokens. If it finds a match then the server will authenticate the request.

The known tokens are stored in the `BEARER_TOKENS` environment variable. `BEARER_TOKENS` is a comma separated list, meaning you can join multiple outputs from [generate tokens](#generate-tokens) with commas to create a list of tokens for you API. Paste the following command in your terminal window to quickly generate 3 random tokens separated by commas:

```
echo BEARER_TOKENS=$(openssl rand 32 -hex),$(openssl rand 32 -hex),$(openssl rand 32 -hex)
```

Open `.env.development.local` in your editor, and copy the output of the above command to the bottom of the file:

After your `.env.development.local` should look similar to this:

```env
SECRET_RECOVERY_PHRASE=enter your secret phrase here

// highlight-next-line
BEARER_TOKENS=token-1,token-2,token-3
```

## Step 4 - Authenticate application

Your application will use passport to authenticate requests looking for the bearer token.

The new additions to the `app.ts` code:

1. Import `passport` and `passport-http-bearer` dependencies.
1. Calls `initializeAuthentication` from the constructor.
1. `initializeAuthentication` uses the bearer strategy with passport and checks tokens with `BEARER_TOKENS` environment variable.

In your editor open the existing `app.ts` file in the `src/` folder. Replace the existing contents by copying and pasting the code below into it.

```typescript title="app.ts" showLineNumbers
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
// highlight-start
import passport from 'passport';
import { Strategy } from 'passport-http-bearer';
// highlight-end
import { NODE_ENV, PORT, ORIGIN, CREDENTIALS } from '@config';
import { Routes } from '@interfaces/routes.interface';
import errorMiddleware from '@middlewares/error.middleware';

class App {
	public app: express.Application;
	public env: string;
	public port: string | number;

	constructor(routes: Routes[]) {
		this.app = express();
		this.env = NODE_ENV || 'development';
		this.port = PORT || 3000;

		// highlight-next-line
		this.initializeAuthentication();
		this.initializeMiddlewares();
		this.initializeRoutes(routes);
		this.initializeErrorHandling();
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.debug(`=================================`);
			console.debug(`======= ENV: ${this.env} =======`);
			console.debug(`🚀 App listening on the port ${this.port}`);
			console.debug(`=================================`);
		});
	}

	public getServer() {
		return this.app;
	}

	// highlight-start
	private initializeAuthentication() {
		passport.use(
			'bearer',
			new Strategy((token, done) => {
				const { BEARER_TOKENS } = process.env;
				if (!BEARER_TOKENS) {
					return done(new Error('server has no bearer tokens'));
				}

				const authenticated = BEARER_TOKENS.split(',').some((v) => token === v);
				if (!authenticated) {
					return done(null, false);
				}

				return done(null, {}, { scope: 'all' });
			}),
		);

		this.app.use(passport.initialize());
	}
	// highlight-end

	private initializeMiddlewares() {
		this.app.use(
			morgan('dev', {
				stream: {
					write: (message: string) => {
						console.debug(message.substring(0, message.lastIndexOf('\n')));
					},
				},
			}),
		);
		this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
		this.app.use(hpp());
		this.app.use(helmet());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	private initializeRoutes(routes: Routes[]) {
		routes.forEach((route) => {
			this.app.use('/', route.router);
		});
	}

	private initializeErrorHandling() {
		this.app.use(errorMiddleware);
	}
}

export default App;
```

Remember to save `app.ts` after pasting the code.

## Step 5 - Authenticated mail route

The existing mail route accepts unauthenticated requests. You'll replace `MailRoute` with `AuthenticatedMailRoute` which authenticates requests before sending mails.

### Update mail route

`AuthenticatedMailRoute` code:

1. Sends mails using the same flow as [`MailRoute`](./send-via-api.md#add-mail-route)
1. Requires `Bearer` authentication token that passport checks in `app.ts`

In your editor open the existing `mail.route.ts` in the `src/routes/` folder. Replacing the existing code, copy and paste the code below into it.

```typescript title="src/routes/mail.route.ts"
import { Router } from 'express';
import passport from 'passport';
import { Routes } from '@interfaces/routes.interface';
import MailController from '@/controllers/mail.controller';

class AuthenticatedMailRoute implements Routes {
	public router = Router();
	private readonly _mailController: MailController;

	constructor() {
		this._mailController = new MailController();
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(
			'/send',
			// highlight-next-line
			passport.authenticate('bearer', { session: false }),
			this._mailController.postMail,
		);
	}
}

export default AuthenticatedMailRoute;
```

Remember to save `mail.route.ts` after pasting the code.

### Add route to server

Now `AuthenticatedMailRoute` has replaced `MailRoute` all that remains is removing `MailRoute` and adding `AuthenticatedMailRoute` to the server.

The server code:

1. Adds routes.
1. Listens to incoming requests.

In your editor open the existing `server.ts` file in the `src/` folder. Replace the existing contents by copying and pasting the code below into it.

```typescript title="src/server.ts"
import App from '@/app';
import IndexRoute from '@routes/index.route';
import MailRoute from './routes/mail.route';

const app = new App([new IndexRoute(), new AuthenticatedMailRoute()]);

app.listen();
```

Remember to save `server.ts` after pasting the code.

---

## Test your webhook using CURL

You are ready to test your webhook using [curl](https://curl.se). You'll need to extend the requests from the [send API tutorial](./send-via-api.md#test-your-api-using-curl) to include an authentication header.

### Start Server

Open a terminal window and navigate to your project root directory, then run:

```bash
npm run dev
```

The output should look like:

```
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/* .env
[nodemon] watching extensions: js,ts,json
[nodemon] starting `ts-node -r tsconfig-paths/register --transpile-only src/server.ts`
info: =================================
info: ======= ENV: development =======
info: 🚀 App listening on the port 3000
info: =================================
```

This confirms that the app started correctly and can be accessed via http://localhost:3000.

Now you can start testing your app by sending it HTTP requests.

### Create `Authorization` header

The `AuthenticatedMailRoute` expects a valid `Bearer` token in the `Authorization` header.

:::note

The `Authorization` header is case-sensitive meaning both the header name and scheme (`Bearer`) must be supplied with the correct case. The format and casing is:

`Authorization: Bearer {token}`

:::

To get a valid bearer token check `.env.development.local` for `BEARER_TOKENS` environment variable, this is a comma separated list of tokens. You can pick any token from the list.

:::note

If you change `BEARER_TOKENS` environment variable, you'll need to restart your server. Stop by pressing `ctrl+c` then [start](#start-server) it again.

:::

### Send test requests

Use the output [from above](#create-authorization-header) to populate an authorization header. Edit the command below by replacing `{token}` with a valid bearer token.

```bash
curl http://localhost:3000/send -i -X POST \
 --header 'Authorization: Bearer {token}' \
 --header 'Content-Type: application/json' \
 -d '{"to": ["0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com"], "subject": "Sent via curl", "content": {"text": "Hello Mailchain 👋", "html": "<p>Hello Mailchain 👋</p>"}}'
```

Open a terminal window and paste the edited command. After a few seconds, you should get a response that looks a bit like this:

```bash {1,6}
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
...

{"status": "success"}
```

`200 OK` means that it worked. 200 is the HTTP response code for success. You can check the message has been sent by looking in the [sent folder](https://app.mailchain.com/sent) in the Mailchain web app. Awesome you have sent a Mailchain message using your authenticated webhook.

### Troubleshooting

The following error code and responses will help you troubleshoot:

| Error                       | Error Code | Possible Issue                                                                                                                                                                                                                                    |
| --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HTTP/1.1 401 Unauthorized` | `401`      | The authentication is not working:<br/>- Check the header response: `WWW-Authenticate: Bearer realm="Users", error="..."` for clues.<br/>- Check the Bearer token is correct.<br/>- Check the `app.ts` code is correct.<br/>- Restart the server. |
| `HTTP/1.1 404 Not Found`    | `404`      | The API endpoint is not found. Check your mail route.                                                                                                                                                                                             |

## Conclusion

Congratulations 🎉 you've extended the send API and added authenticated. You can use this authenticated webhook to send messages from other services and apps, for example notifying your product's users.

## What's next?

Try finding where you can use your webhook. Let us know of any interesting integrations or if you need any support via our [Discord](https://discord.gg/2gqGpagbhe) channel.
