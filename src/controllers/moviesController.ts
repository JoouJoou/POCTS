import { Request, Response } from "express";
import {
  deleteMovie,
  insertMovies,
  selectAllMovies,
  selectMovieById,
  selectMoviesByGenres,
  selectStreamingBalance,
  updateMovie,
} from "../repositories/moviesRepository";

export async function postMovie(req: Request, res: Response) {
  try {
    await insertMovies(req.body);
    return res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}

export async function getMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { rows: movies } = await selectMovieById(Number(id));
    return res.send(movies);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const { rows: movies } = await selectAllMovies();
    return res.send(movies);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function getMoviesByGenre(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { rows: movies } = await selectMoviesByGenres(Number(id));
    console.log(movies);
    return res.send(movies);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function deleteMovieById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await deleteMovie(Number(id));
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function updateMovieStatusAndReview(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { rows: movie } = await selectMovieById(Number(id));
    if (movie.length === 0) {
      return res.sendStatus(404);
    }
    await updateMovie(Number(id), req.body);
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function getStreamingMoviesNumber(req: Request, res: Response) {
  try {
    const { rows: streamingBalance } = await selectStreamingBalance();
    return res.send(streamingBalance);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
