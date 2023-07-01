import { Route, Switch } from "react-router-dom";
import Table from "./components/table";
import Navbar from "./components/navbar";
import Form from "./components/form";
import { useState } from "react";

function App() {
  const headers = [
    { path: "title", label: "Title" },
    { path: "genre", label: "Genre" },
    { path: "year", label: "Year" },
    { path: "rating", label: "Rating" },
  ];
  const [movies, setMovies] = useState([
    { title: "Die Hard", genre: "Action", year: "1988", rating: "8.1" },
    { title: "Terminator", genre: "Action", year: "1990", rating: "8.4" },
    { title: "Toy Story", genre: "Animation", year: "1999", rating: "9.0" },
    { title: "Elysium", genre: "Action", year: "2000", rating: "7.0" },
    { title: "Atomic Blonde", genre: "Action", year: "2007", rating: "6.1" },
    { title: "The General", genre: "Comedy", year: "1926", rating: "9.0" },
    { title: "Die Hard", genre: "Comedy", year: "1988", rating: "8.1" },
    { title: "The Gold Rush", genre: "Comedy", year: "1930", rating: "9.3" },
    { title: "Galaxy Quest", genre: "Comedy", year: "1957", rating: "8.0" },
    { title: "Paddington", genre: "Comedy", year: "2007", rating: "7.4" },
    { title: "Paddington 2", genre: "Comedy", year: "2010", rating: "6.1" },
    { title: "Cuttputli", genre: "Thriller", year: "2010", rating: "5.1" },
    { title: "Dillia’s gone", genre: "Thriller", year: "2020", rating: "7.6" },
    {
      title: "Luther: The Fallen Sun",
      genre: "Thriller",
      year: "2022",
      rating: "8.1",
    },
    { title: "Red", genre: "Action", year: "1994", rating: "6.2" },
    { title: "Unlocked", genre: "Thriller", year: "2023", rating: "6.9" },
    { title: "Gerry", genre: "Thriller", year: "1988", rating: "8.1" },
    { title: "Triangle", genre: "Horror", year: "2009", rating: "9.0" },
  ]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    genre: "",
    year: "",
    rating: "",
  });
  const handleChange = (field, newValue) => {
    setNewMovie({ ...newMovie, [field]: newValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.genre && newMovie.year && newMovie.rating)
      setMovies([...movies, newMovie]);
  };
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path={"/new"}
          render={(props) => {
            return (
              <Form
                headers={headers}
                newMovie={newMovie}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                {...props}
              />
            );
          }}
        />
        <Route
          path={"/"}
          render={(props) => {
            return <Table movies={movies} headers={headers} {...props} />;
          }}
        />
      </Switch>
    </>
  );
}

export default App;
