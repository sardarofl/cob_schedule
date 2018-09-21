var express = require('express');
var router = express.Router();
var CSV_CONVERTERS=require('../models/csvgets');

router.get('/csvgets',function(req,res,next){

res.json(CSV_CONVERTERS.getAllTasks());

});

module.exports=router;