// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const twilio = require('twilio');

client.messages
    .create({
        from: 'whatsapp:+14155238886',
        body: 'Hello there! I am fake-news-authenticator. Send me your URL and I will help you to check the reliability of the article.',
        to: 'whatsapp:+85251058222'
    })
    .then(message => console.log(message.sid));

