require('./core/global');
const config = require(config_path('index'));
const express = require('express');
const http = require('http');
require('express-group-routes');
require(routes_path('index'));
var app = express();
var server;


server = http.createServer(app);


routes(app);


server.listen(config.api.port, function () {
    console.log(`API Name: ${ config.api.name }`);
    console.log(`API URL: ${ config.api.url }`);
});
