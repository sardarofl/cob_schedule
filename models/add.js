const config = require('../config/database');
var multer  =   require('multer');
var moment  =   require('moment');
var path = require('path');
const mongoose = require('mongoose');
const Room_schema = require('./room_schemas');
const Event_schema = require('./event_schemas');
const Place_schema = require('./place_schemas');
const Group_schema = require('./group_schemas');
const AccountsSchema = require('./accounts_schemas');

//multer
var filename_path;
var storage_tansley =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './csv');
  },

  filename: function (req, file, callback) {
    ////console.log(req);
    filename_path="cobtansley.csv";
    callback(null, "cobtansley.csv");
  }
});
var storage_haber =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './csv');
  },

  filename: function (req, file, callback) {
    ////console.log(req);
    filename_path="cobhaber.csv";
    callback(null, "cobhaber.csv");
  }
});

var upload_tansley = multer({ storage : storage_tansley}).single('image');
var upload_haber = multer({ storage : storage_haber}).single('image');
// var multiple_upload = multer({ storage : storage}).array('image');

//adding items

const Add_Items={
  TansleyUploadCSV:function(req,res, callback){
    upload_tansley(req,res,function(err) {

      callback();
    });
  },
  HaberUploadCSV:function(req,res, callback){
    upload_haber(req,res,function(err) {

      callback();
    });
  }
};


module.exports=Add_Items;
