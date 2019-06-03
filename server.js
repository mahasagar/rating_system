var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Logger = require('./server/util/logger.js'),
    requireDir = require('require-dir'),
    config = require('./config/development'),
    path = require('path');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(Logger.requestLogger);

app.use(express.static(path.join(__dirname, 'client')));

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-username,x-token');
    next();
};
app.use(allowCrossDomain);

var router = express.Router();
var routes = require('./server/routes');

routes.register(router);
app.use('/api', router);


mongoose.connect('mongodb://' + config.db.mongo.host + ':' + config.db.mongo.port + '/' + config.db.mongo.db);
app.listen(4000, function () {
    console.log("Welcome to Rating_System, server started at 4000")
})
module.exports = app;

