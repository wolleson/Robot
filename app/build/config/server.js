"use strict";
var port = 8080;
var bodyParser = require('body-parser');
var express = require('express');
var server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
var router = express.Router();
server.use(router);
server.listen(port, function () {
    console.log("BACK-END is running on port " + port);
});
module.exports = server;
