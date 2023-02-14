import {Router} from 'express'
import UserController from '../../controller/userController'
import { passportAuth, passportCallBack } from '../../utils/passport';
import { isLoggedIn } from '../../middleware/userMiddleware';
const route = Router();

route.get('/auth/google',passportAuth);
route.get('/google/callback',passportCallBack, UserController.googleAuth);
route.get('/protected',isLoggedIn, UserController.protected);
route.get('/logout', UserController.logout);
module.exports = route