const Twit = require('twit');
const config = require('./config');
const userID = '25073877';

console.log(require('shakespeare-insult').random());


var T = new Twit(config);

var params = {
    q: '@realDonaldTrump',
    count: 5
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
        // console.log(tweets[i].text);
    }

};

function dumbTweet() {
    let insult = require('shakespeare-insult').random();
    var tweet = {
        status: '@realDonaldTrump ' + insult
    };

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        console.log(data)
    }
};
dumbTweet();




// open a stream following events from that user ID
var stream = T.stream('statuses/filter', { follow: (userID) });

stream.on('tweet', function(tweet) {
    // compare the user ID inside the Tweet object we passed in
    // to check it matches
    if (tweet.user.id == userID) {
        console.log("this was sent by the user we want to track")
        dumbTweet();
    } else {
        console.log(tweet.user.id + " - " + tweet.user.screen_name)
            // so we can ignore it
    }
});