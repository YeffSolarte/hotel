'use strict';

var express = require('express');
var HotelController = require('../controllers/hotel');

var api = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir : './uploads/hotel'});

api.get('/hotels/:page?', HotelController.getHotels);
api.get('/get-image-hotel/:imageFile?', HotelController.getImageFile);

module.exports = api;