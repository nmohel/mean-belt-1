var path = require('path');
var polls = require('../controllers/polls.js');

module.exports = function(app) {
    app.get('/polls', function(req, res) {
        // get all polls
        polls.getAllPolls(req, res)
    });
    app.post('/polls', function(req, res) {
        // adds a new poll to db
        polls.createPoll(req, res)
    });
    app.get('/polls/:id', function(req, res) {
        polls.getOnePoll(req, res)
    });
    app.put('/polls/:id', function(req, res) {
        polls.updatePoll(req, res);
    });
    app.delete('/polls/:id', function(req, res) {
        polls.deletePoll(req, res);
    });
    app.all("*", (request, response) => { response.sendFile(path.resolve("../client/dist/index.html")) });
}