var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes');
const mongoose = require('mongoose');
var cors = require('cors')

var app = express();


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);

app.use('/api', indexRouter);



const connectDB = () => {
  // return mongoose.connect(process.env.DATABASE_URL);
  return mongoose.connect("mongodb://127.0.0.1:27017/myteator")
}

connectDB().then(() => {
  app.listen(3000)
})

