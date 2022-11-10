import { Request, Response } from "express";
import { postMovies } from "../repositories/moviesRepository";

export async function postMovie(req: Request, res: Response) {
  try {
    await postMovies(req.body);
    return res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}

export async function getMovies(req: Request, res: Response) {
  try {
    const { id } = req.params;
  } catch {
    return res.sendStatus(500);
  }
}
