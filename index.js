const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys');
const app = express();

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
  }, 
  (accessToken, refreshToken, profile, done) => {
    console.log('access Token:', accessToken);
    console.log('refresh Token:', refreshToken);
    console.log('profile:', profile);
   }
  )
);

app.get(
    '/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email'] 
  })
);

app.get('/auth/google/callback', passport.authenticate('google')); //this route gives the code and exchanges it for the user profile

const PORT = process.env.PORT || 5000;
app.listen(PORT);


// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy'});
// });

//google has a list of different scopes or permissions we can read off a user's account