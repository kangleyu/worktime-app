'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + "/build"));
app.listen(9010, function(){
  console.log("express static server is listening on port 9010");
});