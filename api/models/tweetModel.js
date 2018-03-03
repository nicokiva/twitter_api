'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TweetSchema = new Schema({
  username: {
    type: String
  },

  created_at: {
    type: Date,
    default: Date.now
  },

  text: {
    type: String
  },

  hashtags: {
    type: [{
      type: String
    }]
  },

  user_mentions: {
    type: [{
      type: String
    }]
  }

});

module.exports = mongoose.model('Tweet', TweetSchema);