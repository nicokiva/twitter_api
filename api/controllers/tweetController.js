'use strict';


var mongoose = require('mongoose'),
	Tweet = mongoose.model('Tweet');


function storeTweet(p) {
	let e = new Tweet(p);
	e.save();
}

function get(req, res) {
	if (req.query.pageSize && process.env.AVAILABLE_PAGE_SIZE.split(',').indexOf(req.query.pageSize) === -1) {
		return res.status(400)
			.json({ error: 'Invalid Page Size' });
	}

	if (req.query.page && parseInt(req.query.page) <= 0) {
		return res.status(400)
			.json({ error: 'Invalid Page Number' });
	}

	let pageSize = parseInt(req.query.pageSize) || parseInt(process.env.DEFAULT_PAGE_SIZE);
	let skip = ((parseInt(req.query.page) - 1) || 0) * pageSize;

	var filters = {};
	if (req.query.username) {
		filters.username = req.query.username;
	}

	if (req.query.user_mentions) {
		filters.user_mentions = { $all: req.query.user_mentions.split(',') };
	}

	if (req.query.hashtags) {
		filters.hashtags = { $all: req.query.hashtags.split(',') };
	}

	Tweet.find(filters)
		.limit(pageSize)
		.skip(skip)
		.sort({ created_at: -1 })
		.exec(
			(e, r) => {
				res.json({ size: r.length, data: r });
			}
		);
}


module.exports = {
	get: get,
	storeTweet: storeTweet
}