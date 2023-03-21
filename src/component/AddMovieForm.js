import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";

function AddMovieForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title: title,
      year: year,
    };
    dispatch(addMovie(newMovie));
    setTitle("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Year:
        <input
          type="text"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
