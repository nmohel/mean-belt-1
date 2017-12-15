var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 

//this is my app
var app = express();

//static stuff (angular dist)
app.use(express.static(path.join(__dirname, './../client/dist')));

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//require mongoose model config stuff and routes
require('./config/mongoose.js');
require('./config/routes.js')(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});