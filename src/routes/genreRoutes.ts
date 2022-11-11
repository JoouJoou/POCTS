import express from "express";
import { postGenre } from "../controllers/genreController";
import { validateSchema } from "../middlewares/validateSchema";
import { genreSchema } from "../schemas/genreSchemas";

const genreRoute = express.Router();

genreRoute.post("/genre", validateSchema(genreSchema), postGenre);

export default genreRoute;
