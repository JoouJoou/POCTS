import { Router } from "express";
import moviesRoute from "./moviesRoutes";

const Routes = Router();

Routes.use(moviesRoute);

export default Routes;
