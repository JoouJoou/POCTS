import express from "express";
import { postMovie } from "../controllers/moviesController";
import { validateSchema } from "../middlewares/validateSchema";
import moviesSchema from "../schemas/moviesSchemas";

const moviesRoute = express.Router();

moviesRoute.post("/movies", validateSchema(moviesSchema), postMovie);

export default moviesRoute;
