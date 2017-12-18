const express = require('express');
var json = require("jsonify");
var $ = require("jquery");
const app = express();
const app_location = '/public';
var path = require('path');
var request = require('request');
require('request-to-curl');
var _ = require('underscore')._

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + app_location + '/index.html'));
})

app.use(express.static('public'));

app.listen(process.env.PORT || 5000);

var sass = require('node-sass');
sass.render({
  file: "public/css/main.scss",
});
