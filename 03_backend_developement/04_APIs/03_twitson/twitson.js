require('dotenv').load();
const webRequest = require("request");

function getLast7Twitt(twitterUsername){
  const OAuth = require("oauth");

  const oauth = new OAuth.OAuth(
    process.env.Request_token_URL, //TWITTER_REQUEST_URL,
    process.env.Access_token_URL, //TWITTER_ACCESS_URL,
    process.env.Consumer_Key_API_Key, //TWITTER_KEY,
    process.env.Consumer_Secret_API_Secret, // TWITTER_SECRET
    "1.0A",
    null,
    "HMAC-SHA1"
  );

  const urlTwitter = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="

  oauth.get(
    urlTwitter + twitterUsername,
    process.env.TWITTER_ACCESS_TOKEN,
    process.env.TWITTER_ACCESS_SECRET,
    function (error, data) {
      if (error) {
        console.log(error);
      }
      else {
        const text = JSON.parse(data).map(function(tweet) {
          return tweet.text;
        });
        //console.log(text);
        text.map(function(uniqueTweet) {
          callWatson(uniqueTweet);
        })
      }
    }
  );
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function callWatson(textToAnalyze){
  const usernameWatson = process.env.WATSON_USERNAME;
  const passwordWatson = process.env.WATSON_PASSWORD;
  const urlWatson = process.env.WATSON_URL;
  const authWatson = "Basic " + new Buffer(usernameWatson + ":" + passwordWatson).toString("base64");
  const uri = encodeURI(urlWatson + "/v1/analyze?version=2018-03-16&features=sentiment,emotion&language=en&text=" + textToAnalyze);
  const forty1stCharOfText = textToAnalyze.toString().slice(0, 40);

  webRequest({ url: uri, headers: { "Authorization": authWatson } }, function (error, response, body) {
    console.log(`${forty1stCharOfText}[...] | sentiment = ${JSON.parse(body).sentiment.document.label} | precision of: ${(Math.round(JSON.parse(body).sentiment.document.score * 10000))/100}%`);
  });
}
// callWatson("The Church is young because the Gospel is its lifeblood and regenerates it constantly.");
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

let test = getLast7Twitt("Pontifex");
console.log(test);
