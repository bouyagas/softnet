const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const server =  express();

const port = process.env.PORT || 3002;

server.get('/', async (req, res) => {
   await res.json({hello: "Up and running "});
});

server.listen(port, () => console.log(`Server running on port ${port}`));