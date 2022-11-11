export type Movie = {
  name: string;
  streaming: string;
  genre: number;
  status: boolean;
  review?: string;
};

export type movieUpdater = Omit<Movie, "name" | "streaming" | "genre">;

export type streamingCount = {
  streaming: string;
  movies: number;
};
