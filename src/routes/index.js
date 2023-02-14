import express  from "express";
import route from "./api/userRoute";

const routes = express.Router();
routes.use('/users', route);

export default routes