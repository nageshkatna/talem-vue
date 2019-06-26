const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const injuries = require('./routes/api/injuries');
const upload = require('./routes/api/upload');

//Bodyparser middleware 
app.use(bodyParser.json());
//CORS Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//Connection MongoDB
mongoose.connect('mongodb://nagesh:talem123@ds243317.mlab.com:43317/talem', { useNewUrlParser: true })
.then(()=> console.log('mongoDB connected'))
.catch(err=> console.log(err));

//Declaring Route
app.use('/api/injuries', injuries);
app.use('/api/upload', upload);

//configuring server on port 5000
const port = process.env.port || 5000
app.listen(5000, () => console.log(`server started on port ${port}`));