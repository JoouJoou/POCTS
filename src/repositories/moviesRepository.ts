import connection from "../database/database";
import { Movie } from "../protocols/moviesProtocols";

export async function postMovies(movieInfo: Movie) {
  return connection.query(
    `INSERT INTO movies (name, streaming, genre, status, review) VALUES ($1, $2, $3, $4, $5)`,
    [
      movieInfo.name,
      movieInfo.streaming,
      movieInfo.genre,
      movieInfo.status,
      movieInfo.review,
    ]
  );
}
