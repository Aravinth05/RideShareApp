var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var path = require('path');
var port = process.env.PORT || 8888;

mongoose.connect('mongodb://localhost/loginapp');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
global.appRoot = path.resolve(__dirname);
require("./app/app.js")(app);
app.listen(port);
console.log("App listening on port : " + port);
