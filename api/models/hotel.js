'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let HotelSchema = Schema({
	name : String,
	stars : Number,
	price : Number,
	image : String,
	amenities : Array
});

module.exports = mongoose.model('Hotel', HotelSchema);