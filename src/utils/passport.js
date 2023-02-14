import passport from "passport";

const passportAuth = passport.authenticate('google', {scope: ['email','profile']});
const passportCallBack = passport.authenticate('google', {failureRedirect: '/'});

export {passportAuth, passportCallBack}