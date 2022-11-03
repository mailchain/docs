---
title: 'Send mail via an API'
---

At the end of this tutorial you will have built an Express App, that exposes and API you can use to send messages with Mailchain. Your app will use the [Mailchain SDK](https://www.npmjs.com/package/@mailchain/sdk) that handles signatures, encryption and sending the message. In most cases you would add a route to an existing Express App, but for this tutorial you'll create a new app.

## Prerequisites

To complete this tutorial, you will need to:

1. Download and install [NodeJS](https://nodejs.org/en/download/).
1. Install [npx](https://www.npmjs.com/package/npx) by running `npm install -g npx`.
1. [Create new Mailchain account](../../user/guides/getting-started/1-create-a-mailchain-account.md) for development and testing purposes.

---

## Step 1 - New API server

You will create an new [Express](https://expressjs.com) app that exposes and API, the simplest way to do that is with a tool that creates an Express App structure. There are various express generators, for this tutorial use [typescript-express-starter](https://www.npmjs.com/package/typescript-express-starter).

To begin, open a terminal window on your computer and run:

```bash
npx typescript-express-starter@9.2.0 mailchain-send-api
```

:::note

`typescript-express-starter` does change from time to time, so using `typescript-express-starter@9.2.0` guarantees this tutorial completes successfully.

If you get a message similar to below, likely it because its the first time using npx to run express generator, or this specific version. Press `y` to continue, you will only need to do this once.

```
Need to install the following packages:
  typescript-express-starter@9.2.0
Ok to proceed? (y)
```

:::

`typescript-express-starter` will ask you for some details:

1. Accept the `default` template, by pressing `enter`.
1. Press `n` when asked to update to latest packages, this guarantees this tutorial completes successfully.
1. Press `y` when asked to `removed duplicate packages at npm`.

`typescript-express-starter` can take a while to setup a new project as it's installing npm packages. Once completed you will get an a message confirming it completed successfully:

```
? Please select the template you want default
? Do you want to update all packages in the node_modules directory and dependency ? No
? Do you want to Used to removed duplicate packages at npm ? Yes
[ 1 / 3 ] 🔍  copying project...
[ 2 / 3 ] 🚚  fetching node_modules...
[ 3 / 3 ] 🔗  linking node_modules...
─────────────────────────────────────────
✔ Complete setup project
```

Your Express App is now created. Open `mailchain-send-api` in your favorite code editor. You'll see it contains example services, controllers, routes, etc. Later you will extend this functionality.

Check you can start your `mailchain-send-api` app in development mode by running:

```bash
cd mailchain-send-api && npm run dev
```

The output should looks like:

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

Press `ctrl` + `c` together, this will stop the Express App.

---

## Step 2 - Mailchain SDK

Mailchain SDK is the easiest way to use Mailchain, it deals with all of the encryption, signatures, and hashing for you.

### Install

To install the Mailchain SDK you need to run an `npm` command in the base directory of your project `mailchain-send-api`. If you are following from Step 1, you should already be in this folder. Otherwise, open up a terminal window and navigate to your `mailchain-send-api` folder.

Install Mailchain SDK using `npm`:

```bash
npm install --save @mailchain/sdk
```

:::note

npm installed Mailchain SDK and added it as dependency to your project. You can see this change by opening `package.json`, you will find an entry for `@mailchain/sdk`. This tells package the package manager that `@mailchain/sdk` is a dependency and should be installed along other dependencies.

```json title="package.json"
// ...
"dependencies": {
    // highlight-next-line
    "@mailchain/sdk": "^0.7.5",
    "bcrypt": "^5.0.1",
    "class-transformer": "^0.5.1",
// ...
```

:::

You have not installed the Mailchain SDK and are ready to configure it.

### Secret Recovery Phrase

A Mailchain account is web3 identity, this means that the account is created via a private key that the user owns and controls. In Mailchain's case the Secret Recovery Phrase creates the private key.

:::warning

Whoever has the Secret Recovery Phrase controls the account. You should treat Secret Recovery Phrases as if they are private keys. They MUST be kept safely and only saved in a trusted store.

:::

We suggest for development and testing that you use a Secret Recovery Phrase from a test account. Go ahead and create a [new account](https://app.mailchain.com/register) if you don't already have one. Your Secret Recovery Phrase is available to view or download when you register your account. To get your Secret Recovery Phrase afterwards go to the [settings page](https://app.mailchain.com/settings) and look for the Secret Recovery Phrase section.

### Configure

The Mailchain SDK needs to be authenticated with your Secret Recovery Phrase to send messages. We are assuming you are developing on a local machine and it is secure.

Environment variables let you set values that are passed to your server-side code. Your code sets environment variables using `env` files. The environment files are in the root directory of your app and are named according to the environment, e.g. `.env.development.local`.

:::warning

Care must be taken to avoid storing environment variables in source control. For this tutorial there is a `.gitignore` file. This tells git to ignores each of the existing environment files. This prevents changes to the existing environment files being stored in git. Make sure you add new environments to `.gitignore`.

:::

Use your test development account's Secret Recovery Phrase that you retrieved from the [previous step](#secret-recovery-phrase). Open `.env.development.local` in your editor, and add a new line to the bottom `SECRET_RECOVERY_PHRASE=enter your secret phrase here`.

Replace `enter your secret phrase here` with your Secret Recovery Phrase and save the file.

After your `.env.development.local` should look similar to this:

```env
# PORT
PORT = 3000

# TOKEN
SECRET_KEY = secretKey

# LOG
LOG_FORMAT = dev
LOG_DIR = ../logs

# CORS
ORIGIN = *
CREDENTIALS = true

// highlight-next-line
SECRET_RECOVERY_PHRASE=enter your secret phrase here
```

In your terminal window run `npm run dev` from the root directory of your `mailchain-send-api` app. You should get a response similar to below:

```
info: =================================
info: ======= ENV: development =======
info: 🚀 App listening on the port 3000
info: =================================
```

This means is successfully started and listening on port 3000.

:::note

[nodemon](https://www.npmjs.com/package/nodemon) automatically restarts your API when file changes are detected. However it doesn't pickup changes to `.env.development.local` so you need to restart the server manually by pressing `ctrl` + `c` and running `npm run dev`. You will only need to do this when changing the `SECRET_RECOVERY_PHRASE` setting.

:::

---

## Step 3 - Create a service for send mail

Express uses services to perform tasks, in this case send a mail using the Mailchain SDK. The service will send messages using the account based on the SECRET_RECOVERY_PHRASE environment variable.

`MailService` will perform the following actions:

1. Authenticate the Mailchain SDK using the `SECRET_RECOVERY_PHRASE`.
1. Set the `from` address to the currently authenticated user if it's not supplied.
1. Send mail using the Mailchain SDK.

Inside `src/services/` create `mail.service.ts` and copy the code below into it.

```typescript title="src/services/mail.service.ts"
import { Mailchain, SendMailParams, SendMailResult } from '@mailchain/sdk';

class MailService {
	async send(params: SendMailParams): Promise<SendMailResult> {
		// use environment variable to provide your secret recovery phrase
		const secretRecoveryPhrase = process.env.SECRET_RECOVERY_PHRASE;

		if (secretRecoveryPhrase == null) {
			throw new Error('You must provide a secret recovery phrase');
		}
		const mailchain = Mailchain.fromSecretRecoveryPhrase(secretRecoveryPhrase);

		if (!params.from || params.from === '') {
			// set the from address to current user if not provided
			const currentUser = await mailchain.user();
			params.from = currentUser.address;
		}

		return await mailchain.sendMail(params);
	}
}

export default MailService;
```

Remember to save `mail.service.ts` after pasting the code.

---

## Step 4 - Create mail controller

Controllers manage the incoming HTTP requests, and send the necessary data to the correct service.

`MailController` will perform the following actions:

1. Pass the HTTP request body to the send service.
1. Set the HTTP response `status` field using the SDK response.

In your editor create `mail.controller.ts` in the `src/controllers/` folder. Copy and paste the code below into it.

```typescript title="src/controllers/mail.controller.ts"
import { NextFunction, Request, Response } from 'express';
import mailService from '@services/mail.service';

class MailController {
	public mailService = new mailService();

	public postMail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const sendResult = await this.mailService.send(req.body);

			res.status(200).json({ status: sendResult.status });
		} catch (error) {
			next(error);
		}
	};
}

export default MailController;
```

Remember to save `mail.controller.ts` after pasting the code.

## Step 5 - Wire up API

RESTful API's are designed around paths and methods, in Express these are created in the `src/routes` folder.

### Add mail route

The API is called by clients using HTTP. The HTTP interface is modelled as a RESTful API making it familiar for developers and easy to discover. You will create an additional route that accepts mail parameters. The route will use the `sendMail` function you created in Step 3 above.

`MailRoute` performs the following actions:

1. Adds the `send` path.
1. Listens for a `POST`.
1. Route request to the mail controller.

In your editor create `mail.route.ts` in the `src/routes/` folder. Copy and paste the code below into it.

```typescript title="src/routes/mail.route.ts"
import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import MailController from '@/controllers/mail.controller';

class MailRoute implements Routes {
	public path = '/send';
	public router = Router();
	private mailController: MailController;
	constructor() {
		this.mailController = new MailController();
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(`${this.path}`, this.mailController.postMail);
	}
}

export default MailRoute;
```

Remember to save `mail.route.ts` after pasting the code.

### Add to server

Now `MailRoute` has been created, the final code change is to add `MailRoute` to the server.

The server code:

1. Adds routes.
1. Listens to incoming requests.

In your editor open the existing `server.ts` file in the `src/` folder. Replace the existing contents by copying and pasting the code below into it.

```typescript title="src/server.ts"
import App from '@/app';
import IndexRoute from '@routes/index.route';
import validateEnv from '@utils/validateEnv';
import MailRoute from './routes/mail.route';

validateEnv();

const app = new App([new IndexRoute(), new MailRoute()]);

app.listen();
```

Remember to save `server.ts` after pasting the code.

Now your app is ready to start accepting HTTP requests.

---

## Test your API using CURL

Now you have API that can send messages. You can test this by sending a sample request via HTTP.

:::note

Your Express App needs to be running to accept requests. If your Express App is not already running, open your terminal and navigate to the base directory of your project e.g. `mailchain-send-api` then run `npm run dev` to start your Express app.

:::

You can now test your API by sending a message. Open a new terminal window, and paste the following [curl](https://curl.se) command into a terminal window.

```bash
curl http://localhost:3000/send -i -X POST \
  -H 'Content-Type: application/json' \
  -d '{"to": ["0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com"], "subject": "Sent via curl", "content": {"text": "Hello Mailchain 👋", "html": "<p>Hello Mailchain 👋</p>"}}'
```

After a few seconds, you should get a response that looks a bit like this:

```bash {1,6}
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
...

{"status": "success"}
```

`200 OK` means that it worked. 200 is the HTTP response code for success. You can check the message has been sent by looking in the [sent folder](https://app.mailchain.com/sent) in the Mailchain web app. Awesome you have sent a Mailchain message via your API.

Want to try more? Edit the curl command above and give these go:

-   Send a message to your Mailchain account. Change the `to` address `"<username>@mailchain.com"`. Check your inbox and you will see your message. ✅
-   Want to send to an Ethereum address? Register your Ethereum address in the Mailchain application. Then send a message to `<ethereum-address>@ethereum.mailchain.com`. ✅

:::note

I get a status `200 OK` but I can't see the message in the sent folder. 200 means the API responded correctly, the message should of been sent. Make sure you are logged in with your development/testing account and try refreshing the sent folder.

:::

## Conclusion

Congratulations 🎉 you have built an App that exposes an API. You can use this API to send messages from other services and apps, for example notifying your product's users.
