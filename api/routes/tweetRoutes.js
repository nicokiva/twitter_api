'use strict';
module.exports = function(app) {
	var tweetController = require('../controllers/tweetController');

	app.route('/tweets')
		.get(tweetController.get)
};
