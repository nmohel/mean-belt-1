var mongoose = require('mongoose')
var Poll = mongoose.model('Poll');

module.exports = {
    getAllPolls: (req, res) => {
        Poll.find({})
        .sort('-createdAt')
        .then(polls => res.json(polls))
        .catch( (err) => {
            console.log(err)
            res.json({error: 'You got an error'});
        })
    },
    createPoll: (req, res) => {
        // console.log("CREATING",req.body)
        Poll.create(req.body)
        .then( (poll) => res.json(poll))
        .catch( (err) => {
            console.log(err)
            res.json({error: 'ERROR'});
        });
    },
    getOnePoll: (req, res) => {
        // console.log(req.params.id);
        Poll.findById(req.params.id)
        .then( (poll) => res.json(poll))
        .catch( (err) => {
            console.log(err)
            res.json({error: 'ERROR'});
        });
    },
    updatePoll: (req, res) => {
        // console.log(req.params.id);
        // console.log(req.body)
        Poll.findByIdAndUpdate(req.params.id, req.body)
        .then( (response) => res.json(response) )
        .catch( (err) => {
            console.log(err)
            res.json({error: 'ERROR'});
        });
    },
    deletePoll: (req, res) => {
        // console.log(req.params.id);
        Poll.findByIdAndRemove(req.params.id)
        .then( response => res.json(response))
        .catch( (err) => {
            console.log(err)
            res.json({error: 'ERROR'});
        });
    }

}