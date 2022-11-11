import connection from "../database/database";
import {
  Movie,
  movieUpdater,
  streamingCount,
} from "../protocols/moviesProtocols";
import { QueryResult } from "pg";

export async function insertMovies(movieInfo: Movie) {
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

export async function selectMovieById(id: Number): Promise<QueryResult<Movie>> {
  return connection.query(
    `SELECT movies.id, movies.name, movies.streaming, genres.name AS genre, movies.status, movies.review FROM movies JOIN genres ON movies.genre = genres.id WHERE movies.id=$1`,
    [id]
  );
}

export async function selectAllMovies(): Promise<QueryResult<Movie>> {
  return connection.query(
    `SELECT movies.id, movies.name, movies.streaming, genres.name AS genre, movies.status, movies.review FROM movies JOIN genres ON movies.genre = genres.id`
  );
}

export async function selectMoviesByGenres(
  genreId: number
): Promise<QueryResult<Movie>> {
  return connection.query(
    `SELECT movies.id, movies.name, movies.streaming, genres.name AS genre, movies.status, movies.review FROM movies JOIN genres ON movies.genre = genres.id WHERE genres.id=$1`,
    [genreId]
  );
}

export async function deleteMovie(id: number) {
  return connection.query(`DELETE FROM movies WHERE id = $1`, [id]);
}

export async function updateMovie(id: number, movieInfo: movieUpdater) {
  return connection.query(
    `UPDATE movies SET status=$1, review=$2 WHERE id = $3`,
    [movieInfo.status, movieInfo.review, id]
  );
}

export async function selectStreamingBalance(): Promise<
  QueryResult<streamingCount>
> {
  console.log("teste");
  return await connection.query(
    `SELECT movies.streaming, count(movies.name) AS movies FROM movies GROUP BY movies.streaming`
  );
}
