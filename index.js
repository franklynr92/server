const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys');
const app = express();



const PORT = process.env.PORT || 5000;
app.listen(PORT);


// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy'});
// });

//google has a list of different scopes or permissions we can read off a user's account