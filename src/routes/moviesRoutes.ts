import express from "express";
import {
  deleteMovieById,
  getAllMovies,
  getMovie,
  getMoviesByGenre,
  getStreamingMoviesNumber,
  postMovie,
  updateMovieStatusAndReview,
} from "../controllers/moviesController";
import { validateSchema } from "../middlewares/validateSchema";
import { moviesSchema } from "../schemas/moviesSchemas";

const moviesRoute = express.Router();

moviesRoute.post("/movies", validateSchema(moviesSchema), postMovie);
moviesRoute.get("/movies", getAllMovies);
moviesRoute.get("/movies/:id", getMovie);
moviesRoute.get("/movies/genres/:id", getMoviesByGenre);
moviesRoute.delete("/movies/:id", deleteMovieById);
moviesRoute.put("/movies/:id", updateMovieStatusAndReview);
moviesRoute.get("/streamings", getStreamingMoviesNumber);

export default moviesRoute;
