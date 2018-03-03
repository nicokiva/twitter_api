'use strict'

let Twitter = require('twitter');

function getTimeline(cb) {
	let client = new Twitter({
		consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_API_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET
	});

	var stream = client.stream('statuses/filter', { track: 'javascript' });
	stream.on('data', function(event) {
		if (!event) {
			return;
		}

		let tweet = {
			text: event.text,
			username: event.user.name,
			hashtags: event.entities.hashtags.map(h => { return h.text.toLowerCase(); }),
			user_mentions: event.entities.user_mentions.map(h => { return h.screen_name.toLowerCase(); }),
			created_at: event.created_at
		};
		
console.log(tweet);

		cb.call(null, tweet);
	});
}

module.exports.getTimeline = getTimeline;