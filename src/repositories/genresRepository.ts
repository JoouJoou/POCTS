import connection from "../database/database";

export async function insertGenre(name: string) {
  return connection.query(`INSERT INTO genres (name) VALUES ($1)`, [name]);
}
