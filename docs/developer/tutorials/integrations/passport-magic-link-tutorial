---
title: 'Passport Magic Links with Mailchain'
---

This tutorial shows you how to create and send ‘login’ Magic links to any EVM-compatible blockchain address, ENS name or Unstoppable domain.

## Solution Overview

In this tutorial, we will build a todo list app, complete with functionality that allows users to sign in with Mailchain. By following along with this tutorial, you will learn how to use Passport for passwordless authentication using Mailchain to send magic links.

As we work through the tutorial, we'll be using [Express](https://expressjs.com/) as our web framework, along with [EJS](https://ejs.co/) as our template engine and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) for styling. We will use [SQLite](https://github.com/mapbox/node-sqlite3) as our database for storing data. Don't worry if you are not familiar with these technologies -- the necessary code will be provided at each step.

You can find an example of the final result here [/passport/todos-express-mailchain](https://github.com/passport/todos-express-mailchain) on Github.

## Prerequisites

To complete this tutorial, you need to first:

1. A working development environment with [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/)
2. An editor and terminal of your choosing.
3. A [Mailchain](https://mailchain.com/) account for development and testing purposes.

## Step 1 - Create a Starter App

We are going to start by creating a starter app, which has all the scaffolding needed to build a todo list.

Open a new terminal window on your computer, and run:

```
git clone https://github.com/passport/todos-express-starter.git mailchain-tutorial
```

You now have a directory named `'mailchain-tutorial'`. Let's `cd` into it:

```
cd mailchain-tutorial
```

Now that we are in the folder with the starter app files, we need to install the dependencies:

```
npm install
```

and start the server:

```
npm start
```

Check to see if it’s working by opening [http://localhost:3000](http://localhost:3000/) in your browser. You should be greeted with a todos ‘Sign in’ page.

## Step 2 - Add a Login Page

We want to let users sign in with any valid wallet address, web3 identity or Mailchain account. For that, we need to create a login page that prompts the user to enter one of these addresses.

In your terminal, create a file that will contain the authentication-related routes:

```
touch routes/auth.js
```

Now open the mailchain-tutorial folder in your favourite code editor and navigate to the `auth.js` file you have just created in `routes`

In `routes/auth.js` add the following code, which creates a login route that will render the login page.

```
var express = require('express');

var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
```

Next, we need to add this route to the app.

Open `'app.js'`:

-   at line 10:  `require`the newly created auth route by adding the following code below where `'routes/index'`is `require`'d:

```
var authRouter = require('./routes/auth');
```

-   at line 26: `use` the newly `require`'d `authRouter` below where `indexRouter` is `use`'d.

```
app.use('/', authRouter);
```

Now we will update the login page so the user can enter a Mailchain address.

Open the existing `login.ejs` file in the `views` folder and add the following form (line 15) below the `<h1>Sign in</h1>`heading:

```
<form action="/login/mailchain" method="post">
	<section>
		<label for="mailchain_address">Mailchain Address or ENS Name</label>
		<input id="mailchain_address" name="mailchain_address" type="text" autocomplete="username"
			placeholder="...@mailchain.com or ensname.eth" required autofocus>
	</section>
	<button type="submit">Sign in with Mailchain</button>
</form>
```

Refresh the page and click sign in.

We've now got a login page that prompts the user to sign in with a Mailchain address or ENS name.

## Step 3 - Setup Mailchain

Now we need a way to send [Mailchain](https://mailchain.com/) messages from the app.

For the purposes of this tutorial, we suggest you create a Mailchain account for testing.

Get the Secret Recovery Phrase for you testing Mailchain account and save it somewhere safe.

-   **Settings > [Secret Recovery Phrase](https://app.mailchain.com/settings/security/)**

Now that we have the Secret Recovery Phrase and a Mailchain address, we need to create a file to store them.

In your editor create a new file in mailchain-tutorial and label it `.env`

In the .env file, copy in in the following code and add your`FROM_ADDRESS` and the associated`SECRET_RECOVERY_PHRASE`:

```
FROM_ADDRESS=**user@mailchain.com**
SECRET_RECOVERY_PHRASE=**INSERT_SECRET_RECOVERY_PHRASE**
```

We also need to update our database schema to store a user's Mailchain address and verification status.

Open `'db.js'`and insert the following (line 16), between `name TEXT, \` and `email TEXT UNIQUE, \`

```
mailchain_address TEXT UNIQUE, \
mailchain_address_verified INTEGER, \
```

Now we need to delete the database and re-create it because we have already created the database in previous steps when testing the landing page. NOTE: This will delete any data you may have added in this tutorial so far. If you are considering adding this solution to an existing app, you would simply run a DB migration to alter your `users`table.

To delete the database, open a new terminal in your editor and run:

```
FROM_ADDRESS=**user@mailchain.com**
SECRET_RECOVERY_PHRASE=**INSERT_SECRET_RECOVERY_PHRASE**
```

We also need to update our database schema to store a user's Mailchain address and verification status.

Open `'db.js'`and insert the following (line 16), between `name TEXT, \` and `email TEXT UNIQUE, \`

```
mailchain_address TEXT UNIQUE, \
mailchain_address_verified INTEGER, \
```

Now we need to delete the database and re-create it because we have already created the database in previous steps when testing the landing page. NOTE: This will delete any data you may have added in this tutorial so far. If you are considering adding this solution to an existing app, you would simply run a DB migration to alter your `users`table.

To delete the database, open a new terminal in your editor and run:

```
rm ./var/db/todos.db
```

## Step 4 - Configure the Strategy

Now that we've set up Mailchain, we are ready to configure Passport and the `passport-magic-link`strategy.

First, in the terminal, install the necessary dependencies:

```
npm install passport
npm install passport-magic-link
npm install @mailchain/sdk
```

Open `auth.js` in the routes folder and `require`the newly installed packages at line 2, below where `express` is `require`'d:

```
var passport = require("passport");
var MagicLinkStrategy = require("passport-magic-link").Strategy;
var Mailchain = require("@mailchain/sdk").Mailchain;
var db = require("../db");
```

Next, add the following code at line 7, `under var router = express.Router();`, to configure the `MagicLinkStrategy`:

```
var mailchain = Mailchain.fromSecretRecoveryPhrase(process.env.SECRET_RECOVERY_PHRASE);
var fromAddress = process.env['FROM_ADDRESS'] || mailchain.user().address;
let createMailchainAddress = function(address) {
    switch (address) {
    case address.match(/^[\d\w\-\_]*@mailchain\.com$/)?.input: // Mailchain address:
      return address
    case address.match(/^0x[a-fA-F0-9]{40}$/)?.input: // Ethereum address:
        return address + '@ethereum.mailchain.com'
    case address.match(/^.*\.eth$/)?.input:  // ENS address:
        return address + '@ens.mailchain.com'
    case address.match(/^.*\.*@mailchain$/)?.input: // Mailchain address without .com:
        return address + '.com'
    default:
        console.error("Invalid address");
    }
}
passport.use(new MagicLinkStrategy({
  secret: 'keyboard cat', // change this to something secret
  userFields: [ 'mailchain_address' ],
  tokenField: 'token',
  verifyUserAfterToken: true
}, async function send(user, token) {
  var link = 'http://localhost:3000/login/mailchain/verify?token=' + token;

  var msg = {
    to: [ createMailchainAddress(user.mailchain_address) ],
    from: fromAddress,
    subject: 'Sign in to Todos',
    content: {
      text: 'Hello! Click the link below to finish signing in to Todos.\r\n\r\n' + link,
      html: '<h3>Hello!</h3><p>Click the link below to finish signing in to Todos.</p><p><a href="' + link + '">Sign in</a></p>',
    }
  };
  return await mailchain.sendMail(msg);
}, function verify(user) {
  return new Promise(function(resolve, reject) {
    db.get('SELECT * FROM users WHERE mailchain_address = ?', [
      user.mailchain_address
    ], function(err, row) {
      if (err) { return reject(err); }
      if (!row) {
        db.run('INSERT INTO users (mailchain_address, mailchain_address_verified) VALUES (?, ?)', [
          user.mailchain_address,
          1
        ], function(err) {
          if (err) { return reject(err); }
          var id = this.lastID;
          var obj = {
            id: id,
            mailchain_address: user.mailchain_address
          };
          return resolve(obj);
        });
      } else {
        return resolve(row);
      }
    });
  });
}));
```

The `MagicLinkStrategy` is now configured. The strategy will sanitize the input address, then send mails containing a magic link using Mailchain. When the user clicks on the magic link, the user record associated with the Mailchain address will be found. If a user record does not exist, one is created the first time someone signs in.

## Step 5 - Send Magic Link

Now that we have prompted the user for their Mailchain address, and have the strategy configured, the next step is to send the user a Mailchain message containing the Magic Link when they click "Sign in with Mailchain.”

You should still be in the `auth.js` file in `routes` but if not, open it now.

Add the following `route` at line 74, below `router.get('/login', function(req, res, next) { res.render('login'); });` and before `module.exports = router;`:

```
router.post('/login/mailchain', passport.authenticate('magiclink', {
  action: 'requestToken',
  failureRedirect: '/login'
}), function(req, res, next) {
  res.redirect('/login/mailchain/check');
});
```

This route will process the form on the login page and send a Mailchain message to the user.

Continuing within `auth.js`, add the following `route`, below the newly added `'/login/mailchain'` route and before `module.exports = router;`:

```
router.get('/login/mailchain/check', function(req, res, next) {
  res.render('login/mailchain/check');
});
```

This `route` will render a page instructing the user to check their Mailchain account and to click the link to authenticate login.

## Step 6 - Verify Mailchain Address

Now that we've sent the user a Mailchain message with a magic link, the next step is to verify the Mailchain address when they click the link.

Within `auth.js` in `routes`, add this `route` below the `/login/mailchain/check` route:

```
router.get(
  "/login/mailchain/verify",
  passport.authenticate("magiclink", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
  })
);
```

This route will verify the Mailchain address when the link is clicked.

Now in the terminal, create a folder and corresponding view for our route, by running the following commands:

```
mkdir views/login/mailchain
touch views/login/mailchain/check.ejs
```

Navigate to the folder you have just created, `login/mailchain/check.ejs` in the `views` folder, and add the following code:

```
<!DOCTYPE html><html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Express • TodoMVC</title>
    <link rel="stylesheet" href="/css/base.css" />
    <link rel="stylesheet" href="/css/index.css" />
    <link rel="stylesheet" href="/css/login.css" />
  </head>
  <body>
    <section class="prompt">
      <h3>todos</h3>
      <h1>Check your Mailchain Inbox</h1>
      <p class="instructions">
        We sent a magic link to your Mailchain address. Click the link in that
        message to sign in.
      </p>
      <hr />
      <p class="help">
        Didn't receive the message? <a href="/login">Get another link</a>
      </p>
    </section>
    <footer class="info">
      <p>Created by <a href="https://www.jaredhanson.me">Jared Hanson</a></p>
      <p>Part of <a href="https://todomvc.com">TodoMVC</a></p>
      <p>
        Authentication powered by
        <a href="https://www.passportjs.org">Passport</a>
        <br />
        &amp; <a href="https://mailchain.com">Mailchain</a>
      </p>
    </footer>
  </body>
</html>
```

Finally, update `views/index.ejs` and replace:

`<li class="user"><%= [user.name](http://user.name/) || user.username || user.email %></li>`

with:

```
<li class="user"> <%= [user.name](http://user.name/) || user.username || user.email || user.mailchain_address %></li>
```

We have now configured the flow for users to click "Sign in", enter a Mailchain address or ENS name and click "Sign in with Mailchain", which will send a magic link.

## Step 7 - Establish Session

Once we've verified the user's Mailchain address, we need a login session to remember the fact that the user has authenticated as they navigate the app.

To do that, we'll add session support.

Begin by running the following code in the terminal to instal the necessary dependencies:

```
npm install express-session
npm install connect-sqlite3
```

Open `app.js`and `require`the additional dependencies (line 8), below where `'morgan'`
 is `require`'d:

```
var passport = require('passport');
var session = require('express-session');

var SQLiteStore = require('connect-sqlite3')(session);
```

Add the following code at line 27, after `app.use(express.static(` middleware, to maintain and authenticate the session.

```
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));
```

Now we need to configure Passport to manage the login session.

Open `auth.js` in `routes` and add the following code below the Passport strategy and before `module.exports = router;`:

```
passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, mailchain_address: user.mailchain_address });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});
```

Now let’s try signing in again. In the terminal, run:

```
npm start
```

Open http://localhost:3000, click "Sign in", enter your Mailchain address and click "Sign in with Mailchain".

Now, check your Mailchain Inbox and click the link.

We are logged in! Go ahead and enter some tasks you've been needing to get done.

At this point, users can sign in with Mailchain! Next, we will add the ability to sign out.

## Step 8 - Sign Out

Now that users can sign in, they'll need a way to sign out.

Open 'routes/auth.js' and add this route at line 84, below the '/login/mailchain/verify' route:

```
router.post('/logout', function(req, res, next) {
req.logout(function(err) {
if (err) { return next(err); }
res.redirect('/');
});
});
```

Return to the app, where you should already be signed in, and click "Sign out."

We've now got a working app where users can sign in and sign out!
