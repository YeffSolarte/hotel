'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

//charge Rutes
var hotel_routes = require('./routes/hotel');
//middlewares
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
//cors

//rutes
app.use('/api', hotel_routes);

//export

module.exports = app;