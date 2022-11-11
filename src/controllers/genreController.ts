import { Request, Response } from "express";
import { insertGenre } from "../repositories/genresRepository";

export async function postGenre(req: Request, res: Response) {
  try {
    await insertGenre(req.body.name);
    return res.sendStatus(201);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
