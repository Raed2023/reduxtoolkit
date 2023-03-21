import './App.css';
import React from "react";
import MovieList from "./component/MovieList";
import AddMovieForm from "./component/AddMovieForm";

function App() {
  return (
    <div>
      <MovieList />
      <AddMovieForm />
    </div>
  );
}

export default App;
