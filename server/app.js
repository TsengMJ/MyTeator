const express = require('express');

const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const apiRouter = require('./routes/api');
const avatarRouter = require('./routes/avator')


const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);

app.use('/api', apiRouter);
app.use('/avatar', avatarRouter)



const connectDB = () => {
  // return mongoose.connect(process.env.DATABASE_URL);
  return mongoose.connect("mongodb://127.0.0.1:27017/myteator")
}

connectDB().then(() => {
  app.listen(3000)
})

