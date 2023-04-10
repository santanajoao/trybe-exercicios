const path = require('path');
const fs = require('fs').promises;

const MOVIES_JSON_PATH = path.resolve(__dirname, '../data/movies.json');
const JSON_IDENT = 2;

async function getMovies() {
  const response = await fs.readFile(MOVIES_JSON_PATH);
  return JSON.parse(response);
}

async function addMovie(name, price) {
  const movies = await getMovies();
  const lastIndex = movies.length - 1;
  const lastId = movies[lastIndex].id;

  const newId = lastId + 1;
  const newMovie = { id: newId, movie: name, price };
  movies.push(newMovie);

  await fs.writeFile(
    MOVIES_JSON_PATH,
    JSON.stringify(movies, null, JSON_IDENT),
  );

  return newMovie;
}

async function getMovieById(id) {
  const movieList = await getMovies();
  const requestedMovie = movieList.find((movie) => movie.id === id);
  return requestedMovie;
}

async function updateMovie(id, newName, newPrice) {
  const movieList = await getMovies();
  const targetMovie = movieList.find((movie) => movie.id === id);
  if (targetMovie) {
    targetMovie.movie = newName;
    targetMovie.price = newPrice;
  }
  fs.writeFile(MOVIES_JSON_PATH, JSON.stringify(movieList, null, 2));

  return targetMovie;
}

module.exports = { getMovies, getMovieById, addMovie, updateMovie };
