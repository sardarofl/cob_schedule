var express = require('express');
var router = express.Router();
var CSV_CONVERTERS=require('../models/csvgets');

router.get('/csvtansley',function(req,res,next){

res.json(CSV_CONVERTERS.getCSVTansley());

});

router.get('/csvhaber',function(req,res,next){

res.json(CSV_CONVERTERS.getCSVHaber());

});

router.get('/csvappleby',function(req,res,next){

    res.json(CSV_CONVERTERS.getCSVAppleby());
    
});

router.get('/csvmountainside',function(req,res,next){

    res.json(CSV_CONVERTERS.getCSVMountainSide());
    
});

module.exports=router;