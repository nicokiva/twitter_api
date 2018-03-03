require('dotenv').load();

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Tweet = require('./api/models/tweetModel'),
	tweetController = require('./api/controllers/tweetController'),
	bodyParser = require('body-parser');
 
mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION_STRING); 


let twitterProcess = require('./twitterProcess');
twitterProcess.getTimeline(tweetController.storeTweet);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/tweetRoutes');
routes(app);


app.listen(port);
console.log('Listening port ' + port);