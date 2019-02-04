const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require('morgan');

const postRoute = require('./src/api/postRoute');
const server =  express();

const port = process.env.PORT || 3002;


// Express middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(logger('dev'));

// DB config 
const db = require('./config/keys_dev').mongoURL

// Connect to MongoDB 
mongoose
  .connect(db,
   { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

server.use('/api/posts', postRoute);

server.get('/', async (req, res) => {
   await res.json({hello: "Up and running "});
});

server.listen(port, () => console.log(`Server running on port ${port}`));