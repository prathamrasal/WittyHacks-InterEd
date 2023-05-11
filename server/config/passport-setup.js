const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require('../models/User')


passport.use(new GoogleStrategy({
    callbackURL: "/api/auth/google/redirect",
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    scope: ["profile", "email"],
}, async (accessToken, refreshToken, profile, done) => {
    // console.log(profile)
    const user = await User.findOne({ email: profile._json.email })
    if (user) {
        done(null, user)
    } else {
        const result = await new User({
            username: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value
        }).save()
        done(null, result)
    }
}));

passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/redirect",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );
  

passport.serializeUser((user, done) => {
            console.log(user)
            done(null, user);
        });

passport.deserializeUser((user, done) => {
    done(null, user);
});