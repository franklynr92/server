const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
        scope: ['profile', 'email'] 
    })
    );
    //google has a list of different scopes or permissions we can read off a user's account

    app.get('/auth/google/callback', passport.authenticate('google')); //this route gives the code and exchanges it for the user profile
}