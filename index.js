/**
 * Client App Host based on express
 */
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var favicon = require('serve-favicon');
var compression = require('compression');

var config = require('./config/environment');

var app = express();

// var env = app.get('env');

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());

app.use(express.static(__dirname + config.root));

var port = config.port;
app.listen(port, function() {
  console.log('Listenning on port: ', port);
});