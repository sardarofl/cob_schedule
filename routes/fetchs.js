const express = require('express');
const router = express.Router();
const config = require('../config/database');
const mongoose = require('mongoose');
const Fetch = require('../models/fetch');


//fetch
router.get('/fetch_rooms',function(req,res){
	Fetch.getAllRooms(function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find rooms'});
				 res.json(callback);
     });
});

router.get('/fetch_accounts',function(req,res){
	Fetch.getAllAccounts(function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find accounts'});
				 res.json(callback);
     });
});

router.get('/fetch_rooms_byAccount/:account_id',function(req,res){
		var account_id = req.params.account_id;
	Fetch.getRoomByAccountID(account_id,function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find rooms'});
				 res.json(callback);
     });
});

router.get('/fetch_accountname_byAccountID/:account_id',function(req,res){
	var account_id = req.params.account_id;
	console.log(account_id);
Fetch.getAccountNameByAccountID(account_id,function(err,callback){
	if(err) return res.json({success:false, msg:'Failed to find accounts'});
			 res.json(callback);
 });
});

router.get('/fetch_roomcount_byAccountID/:account_id',function(req,res){
	var account_id = req.params.account_id;
Fetch.getRoomCountByAccountID(account_id,function(err,callback){
	if(err) return res.json({success:false, msg:'Failed to find room counts'});
			 res.json(callback);
 });
});

router.get('/fetch_meeting_byID/:meeting_id',function(req,res){
	var meeting_id = req.params.meeting_id;
Fetch.getmeetingByID(meeting_id,function(err,callback){
	if(err) return res.json({success:false, msg:'Failed to find meeting'});
			 res.json(callback);
 });
});


router.get('/fetch_workgroups_byAccountID/:account_id',function(req,res){
		var account_id = req.params.account_id;
	Fetch.getWorkgroupByAccountID(account_id,function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find workgroup'});
				 res.json(callback);
     });
});

router.get('/fetch_workgroups_byworkgroupID/:workgroup_id',function(req,res){
		var workgroup_id = req.params.workgroup_id;
	Fetch.getWorkgroupByWorkgroupID(workgroup_id,function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find workgroup'});
				 res.json(callback);
     });
});



router.get('/fetch_room_by_id/:id',function(req,res){
	var id = req.params.id;
	Fetch.getRoomByID(id, function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find rooms'});
				 res.json(callback);
     });
});

router.get('/fetch_room_name_by_id_array/:id_array',function(req,res){
	var id_array = req.params.id_array;
	Fetch.getRoomByIDArray(id_array, function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find rooms'});
				 res.json(callback);
     });
});


router.get('/fetch_events',function(req,res){
	Fetch.getAllEvents(function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find events'});
				 res.json(callback);
     });
});


router.get('/fetch_event_dates_forcurrentroom/:roomname',function(req,res){
		var roomname = req.params.roomname;
	Fetch.getEventDatesForCurrentRoom(roomname,function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find events'});
				 res.json(callback);
     });
});

router.get('/fetch_event_by_room_id/:roomid',function(req,res){
		var roomid = req.params.roomid;
	Fetch.getEventsForCurrentRoom(roomid,function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find events'});
				 res.json(callback);
     });
});

router.get('/fetch_events_byAccountID/:accountid',function(req,res){
	var accountid = req.params.accountid;
Fetch.getEventsForAccountID(accountid,function(err,callback){
	if(err) return res.json({success:false, msg:'Failed to find events'});
			 res.json(callback);
 });
});

router.get('/fetch_places',function(req,res){
	Fetch.getAllPlaces(function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find places'});
				 res.json(callback);
     });
});

router.get('/fetch_place_byadmin/:admin',function(req,res){
	var admin = req.params.admin;
	Fetch.getPlace_byadmin(admin, function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find place by admin'});
				 res.json(callback);
     });
});

router.get('/fetch_room_byplace/:place',function(req,res){
	var place = req.params.place;
	Fetch.getRoom_byplace(place, function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find room by place'});
				 res.json(callback);
     });
});

router.get('/fetch_event_byplace/:place',function(req,res){
	var place = req.params.place;
	Fetch.getEvent_byplace(place, function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find event by place'});
				 res.json(callback);
     });
});

router.get('/fetch_event_byroomname/:roomname',function(req,res){
	var roomname = req.params.roomname;
	Fetch.getEvent_byroomname(roomname, function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find event by roomname'});
				 res.json(callback);
     });
});



module.exports = router;
