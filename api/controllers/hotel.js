'use strict';

var Hotel = require('../models/hotel');
var mongoosePaginate = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');

//Devolver un listado de hoteles registradors
function getHotels(req, res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
	res.setHeader('Access-Control-Allow-Credentials', true); // If needed
	var page = 1;
	var itemsPerPage = 10;
	if(req.params.page) page = req.params.page;
	Hotel.find().sort('_id').paginate(page, itemsPerPage, (err, hotels, total) => {
		if(!hotels) return res.status(404).send({message : 'No hay hoteles creados'});
		if(err) return res.status(500).send({message : 'Hubo un problema en la consulta'});
		hotels.forEach(val => val.password = undefined);
		return res.status(200).send({
			hotels,
			total,
			pages : Math.ceil(total / itemsPerPage)
		});
	});
}


function getImageFile(req, res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
	res.setHeader('Access-Control-Allow-Credentials', true); // If needed
	var image_file = req.params.imageFile;
	var path_file = './uploads/hotels/' + image_file;
	fs.exist(path_file, (exist) => {
		if(exist){
			return res.sendFile(path.resolve(path_file));
		} else {
			return res.status(404).send({message : 'No existe la imagen'});
		}
	})
}

module.exports = {
	getHotels,
	getImageFile
};