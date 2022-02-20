const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
//async
app.post('/whatsapp',  async (req, res) => {
  const twiml = new MessagingResponse();//bodyparser
  const GOOGLE_APPLICATION_CREDENTIALS="/Users/longhchung/Desktop/jsexercisedemo/durhack/keys.json"
  async function quickstart(GOOGLE_APPLICATION_CREDENTIALS, req){
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');
  
    // Instantiates a client
    const client = new language.LanguageServiceClient();
  
    // The text to analyze
    const text = req.body.Body;
  
    const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({document: document});
    const sentiment = result.documentSentiment;
    
    twiml.message('Text: ',+text);
    twiml.message('Sentiment score:'+sentiment.score);
    twiml.message('Sentiment magnitude: '+sentiment.magnitude);

    return sentiment
  }

  if (req.body.Body == 'BBC') {
    twiml.message('Hi!');
  } else if (req.body.Body == 'Trump Is Trying') {
    //twiml.message(sentiment.score.toString());
    let sentiment = await quickstart(GOOGLE_APPLICATION_CREDENTIALS, req)
  
    console.log(`Sentiment score: ${sentiment.score}`);
    
        // console.log(`Text: ${text}`);
        // console.log(`Sentiment score: ${sentiment.score}`);
        // console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  } else {
    twiml.message(
      'No Body param match, Twilio sends this in the request to your server.'
    );
  }

  
  res.writeHead(200, {'Content-Type': 'text/xml'});

  //response.redirect('https://demo.twilio.com/welcome/sms/');
  //https://timberwolf-mastiff-9776.twil.io/demo-reply
  res.end(twiml.toString());
});





http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
//twilio phone-numbers:update "+447360545958" --sms-url="http://localhost:1337/whatsapp"