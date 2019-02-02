const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
const mongoose = require('mongoose');

const userAuthApi = require('./src/api/userAuthRoute')
const server = express();

const port = process.env.PORT || 3001

// Express middleware
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

// DB Config 
const db = require('./config/keys_dev').mongoURI;

mongoose.connect(db, 
 { useNewUrlParser: true }
)
.then(() => console.log('Mongodb is Connected'))
.catch((err) => console.log(err))

// paasport middleware
server.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// User Api
server.use('/api/users', userAuthApi);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

server.listen(port, () => console.log(`Server running on port ${port}`));