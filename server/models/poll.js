var mongoose = require('mongoose');

var PollSchema = mongoose.Schema({
    creator: String,
    question: String,
    options: [{value: String, votes: Number}]
}, {timestamps: true});

mongoose.model('Poll', PollSchema);