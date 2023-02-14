import express from 'express';
import routes from './routes/index';
import 'dotenv/config';
import './utils/googleLogin'
import passport from 'passport';
import session from 'express-session';
const app = express();
const port = process.env.PORT;

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use('/api/v1/', routes);
app.listen(port, ()=> console.log("Server run on port: ", port));