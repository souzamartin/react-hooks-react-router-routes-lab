import React from "react";
import { movies } from "../data";

function Movies() {
  
  const renderedMovies = movies.map(movie => {
    return (
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <p>{movie.time} minutes</p>
        <ul>
          {movie.genres.map(genre => {
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {renderedMovies}
    </div>
  )
}

export default Movies;
