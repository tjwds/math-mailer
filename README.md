# Math Mail

Let's do math, then email me about it.  It's got Typescript!  It's got tests!

## emailer

Uses mailgun to send me an email with a report; almost everything is just hard-coded into this file … for now?

Invoke with `ts-node ./emailer/index.ts`.  Preferably via cron.

## database

Simple library for storing and retrieving data as static files.  Import it everywhere; not invoked directly.

Included if you run `npm run test`.

## prime-containers

Calculates all substrings of a prime that are also prime.  These aren't interesting at all, so I've left them off the mailer.
