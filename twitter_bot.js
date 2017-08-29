const Twit = require('twit');
const config = require('./config');

console.log(require('shakespeare-insult').random());
console.log(require('shakespeare-insult').random());


var T = new Twit(config);

// var params = {
//     q: '@realDonaldTrump',
//     count: 5
// };

// T.get('search/tweets', params, gotData);

// function gotData(err, data, response) {
//     var tweets = data.statuses;
//     for (let i = 0; i < tweets.length; i++) {
//         // console.log(tweets[i].text);
//     }

// };
function dumbTweet() {
    let insult = require('shakespeare-insult').random();
    var tweet = {
        status: insult
    };

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        console.log(data)
    }
};