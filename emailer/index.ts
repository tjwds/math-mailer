const database = require('../database/index');
const mailgun = require('mailgun-js');

const DOMAIN = database.getDataSync('mailgun_domain');
const API_KEY = database.getDataSync('mailgun_apikey')
const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});

const messageTemplate = `Here's the latest validity test from the database test file: ${database.getDataSync('example')}`

const data = {
	from: '🥧 <pi@automated.joewoods.dev>',
	to: 'automated@joewoods.dev',
	subject: `🥧 It's your Raspberry Pi report.`,
	text: messageTemplate,
};

console.log('🥧 Sending.');
mg.messages().send(data, (error: any, body: any) => {console.log(`🥧 ${body.message}`)});

