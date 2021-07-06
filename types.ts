import {ReactNode} from "react";

// left content types
export type OneGenreType = {
  id: number, name: string
}
export type GenresCollectionType = {
  data:{
    genres:Array<OneGenreType>
  },
  children ?: ReactNode;
}

// genres type
export type FilmTypeByGenre = {
  adult: boolean,
  backdrop_path?: string,
  genre_ids?: Array<number>,
  id: number,
  original_language: string,
  original_title: string,
  overview?:  string,
  popularity?: number,
  poster_path?: string,
  release_date: string | number,
  title: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number,
}

// film type

export type FilmType = {
  backdrop_path: string,
  budget: number,
  genres: Array<{id:number,name:string}>,
  homepage: string,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity:number,
  poster_path: string,
  status: string,
  tagline: string,
  title: string,
  vote_average: number,
  vote_count:number,
  release_date: string | number,
  revenue: number,
  runtime: number,
  production_companies: Array<{ name:string,[key:string]:any }>,
  production_countries: Array<{ name:string,[key:string]:string}>

}

