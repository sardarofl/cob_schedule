const express = require('express');
const router = express.Router();
const config = require('../config/database');
const mongoose = require('mongoose');
const Delete = require('../models/delete');

//delete category
router.delete('/delete_room/:id/:roomdefaultlogo',function(req,res){
	var item = req.params.id;
	var roomdefaultlogo = req.params.roomdefaultlogo;
	var res = res;
	Delete.DeleteFromRooms(item,roomdefaultlogo,res, function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});

//delete product
router.delete('/delete_attendant/:eventid/:attendantid',function(req,res){
	var eventid = req.params.eventid;
	var attendantid = req.params.attendantid;

	Delete.DeleteFromAttendants(eventid,attendantid,res, function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});

router.delete('/delete_event/:id/:eventlogopath',function(req,res){
	var item = req.params.id;
	var eventlogopath = req.params.eventlogopath;
	Delete.DeleteFromEvents(item,eventlogopath,res, function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});


//delete from gallery
router.delete('/delete_place/:id',function(req,res){
	var item = req.params.id;
	Delete.DeleteFromPlaces(item,res, function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});




module.exports = router;
