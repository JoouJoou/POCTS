import { Router } from "express";
import genreRoute from "./genreRoutes";
import moviesRoute from "./moviesRoutes";

const Routes = Router();

Routes.use(moviesRoute);
Routes.use(genreRoute);

export default Routes;
