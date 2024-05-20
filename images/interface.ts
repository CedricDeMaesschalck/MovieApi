import { Url } from "url";

export interface MovieInfo {
  id: number;
  director: string;
  cast: string[];
  wonOscars: boolean;
  letterboxdRating: number;
}


export interface Movie {
  id: string;
  name: string;
  posterURL: Url;
  synopsis: string;
  playtime: number;
  onNetflix: boolean;
  releaseDate: string;
  genre: string[];
  language: string;
  movieinfo: MovieInfo;
}


export { }
