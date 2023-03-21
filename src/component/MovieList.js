import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);

  const handleDelete = (id) => {
    dispatch(removeMovie({ id }));
  };

  return (
    <div>
      <h2>Movie Catalog</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year}) {movie.url}
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
