// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const twilio = require('twilio');
require('dotenv').config();
//console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_ACCOUNT_SID);
const accountSid = process.env.TWILIO_ACCOUNT_SID;
 const authToken = process.env.TWILIO_AUTH_TOKEN;
//const accountSid = 'ACab4f985bcb284f50e0b116f47c103b16';
//const authTok en = '499537e4d913d4fc22f6818a7d4abf2c';
const client = require('twilio')(accountSid, authToken);

//twilio phone-numbers:update "+447700152696" --sms-url="http://localhost:1337/sms"

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Hello there! im using whatsapp efvevev',
         to: 'whatsapp:+447826086566'
       })
      .then(message => console.log(message.sid));