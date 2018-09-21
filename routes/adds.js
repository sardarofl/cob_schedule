const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Add = require('../models/add');
const passport = require('passport');
const jwt = require('jsonwebtoken');



router.post('/csvupload',function(req,res){
	var req = req;
	var res = res;

	  Add.UploadCSV(req,res, (err, category) =>{
	    if(err){
	     res.json({success:false, msg:'Failed to upload'});
	    }else{
	     res.json({success:true, msg:'uploaded'});
	    }
	  });
});

//add rooms
router.post('/add_room',function(req,res){
	var req = req;
	var res = res;

	  Add.AddToRooms(req,res, (err, category) =>{
	    if(err){
	     res.json({success:false, msg:'Failed to Add room'});
	    }else{
	     res.json({success:true, msg:'Room Added'});
	    }
	  });
});

//add rooms
router.post('/add_workgroup',function(req,res){
	var req = req;
	var res = res;

	  Add.AddToWorkgroup(req,res, (err, category) =>{
	    if(err){
	     res.json({success:false, msg:'Failed to Add workgroup'});
	    }else{
	     res.json({success:true, msg:'Room workgroup added'});
	    }
	  });
});

//add account
router.post('/add_account',function(req,res){
	var req = req;
	var res = res;

	  Add.AddToAccounts(req,res, (err, category) =>{
	    if(err){
	     res.json({success:false, msg:'Failed to Add account'});
	    }else{
	     res.json({success:true, msg:'account added'});
	    }
	  });
});

//add events
router.post('/add_event',function(req,res){
	var req = req;
	var res = res;
	Add.AddToEvents(req, res, function(err,rows){
		if(err){
		 res.json({success:false, msg:'Failed to add event'});
		}else{
		 res.json({success:true, msg:'Event Added'});
		}
     });
});

//add place
router.post('/add_place',function(req,res){
	var req = req;
	var res = res;
	Add.AddToPlaces(req, res, function(err,rows){
		if(err){
		 res.json({success:false, msg:'Failed to Add Place'});
		}else{
		 res.json({success:true, msg:'Place Added'});
		}
    });
});




module.exports = router;
