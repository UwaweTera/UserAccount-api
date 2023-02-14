import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import config from "../config/config";

passport.use(new GoogleStrategy({
    clientID: config.google.client_id,
    clientSecret: config.google.client_secret,
    callbackURL: config.google.redirect_uri
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));