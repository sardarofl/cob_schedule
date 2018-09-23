const express   = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const session  = require('express-session');
const mongoose = require('mongoose');
var cors=require('cors');
const config = require("./config/database")
const passport = require('passport');


//connect to database
mongoose.connect(config.database);
//on connection
mongoose.connection.on('connected', () => {
  console.log('connected to database '+config.database);
});
//on error
mongoose.connection.on('error', () => {
  console.log('Database Erro '+config.database);
});

//If you need it at some module
// var multer  =   require('multer');
// //multer
// var filename_path;
// var storage =   multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads');
//   },
//
//   filename: function (req, file, callback) {
//     //console.log(req);
//     filename_path=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
//     callback(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
//   }
// });
////this var upload = multer({ storage : storage}).single('image');
////or this var upload = multer({ storage : storage}).array('image');



//express
const app = express();
//app.use(express.static(path.join(__dirname, 'meetingroom/root')));
app.use(express.static(path.join(__dirname, 'distcobschedule')));
//app.use(express.static(path.join(__dirname, 'admin/root/assets')));
//app.use(express.static(path.join(__dirname, 'admin/root/assets/uploads')));
//app.use(express.static(path.join(__dirname, 'uploads')));
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
// console.log(path.join(__dirname, 'uploads'));
// app.use(express.static(path.join(__dirname, 'uploads')));
// app.use(express.static(path.join(__dirname, 'angular/backMMeeting/src/assets/uploads')));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
//require('./app/routes.js')(app);
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

//port
const port = process.env.PORT || 3013;

//cors
app.use(cors());

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//index route
app.get('/',(req,res) =>{
  res.send('Invalid Endpoint');
})


//routers
const csvget = require('./routes/csvgets')
const add = require('./routes/adds');
const users = require('./routes/users');

//use routers
app.use('/csvgets',csvget);
app.use('/additems',add);
app.use('/users',users);


app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, 'distcobschedule/index.html'));
});

app.get('/bemain/cobtansleyback', (req,res) =>{
  res.sendFile(path.join(__dirname, 'distcobschedule/index.html'));
});

app.get('/bemain/login', (req,res) =>{
  res.sendFile(path.join(__dirname, 'distcobschedule/index.html'));
});

app.get('/cobtansleyfront', (req,res) =>{
  res.sendFile(path.join(__dirname, 'distcobschedule/index.html'));
});


app.listen(port,  () => {
  console.log('Server started on port'+port);
});
