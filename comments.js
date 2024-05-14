// Create web server
// http://localhost:3000/comments
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./models/comment');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/comments');

// Get all comments
app.get('/comments', function(req, res) {
  Comment.find({}, function(err, comments) {
    if (err) {
      console.log(err);
      res.status(500).send('Error');
    } else {
      res.send(comments);
    }
  });
});
