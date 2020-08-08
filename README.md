# Math Mail

Let's do math, then email me about it.  It's got Typescript!  It's got tests!

## emailer

Uses mailgun to send me an email with a report; almost everything is just hard-coded into this file … for now?

Invoke with `ts-node ./emailer/index.ts`.  Preferably via cron.

## database

Simple library for storing and retrieving data as static files.  Import it everywhere; not invoked directly.

Included if you run `npm run test`.

## TODO:

* Write code to calculate primes which contain each other
* Put it on my raspberry pi
