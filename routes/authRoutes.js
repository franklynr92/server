const passport = require('passport');

app.get(
    '/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email'] 
  })
);

app.get('/auth/google/callback', passport.authenticate('google')); //this route gives the code and exchanges it for the user profile
