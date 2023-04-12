const path = require('path');
const fs = require('fs').promises;

const MOVIES_JSON_PATH = path.resolve(__dirname, '../data/movies.json');

function toJSON(data) {
  const JSON_IDENT = 2;
  return JSON.stringify(data, null, JSON_IDENT);
}

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

  await fs.writeFile(MOVIES_JSON_PATH, toJSON(movies));

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
  fs.writeFile(MOVIES_JSON_PATH, toJSON(movieList));

  return targetMovie;
}

async function deleteMovie(id) {
  const movieList = await getMovies();

  let deletedMovie;
  const newList = movieList.reduce((result, movie) => {
    if (movie.id === id) {
      deletedMovie = { ...movie };
      return result;
    }
    return [...result, movie];
  }, []);

  fs.writeFile(MOVIES_JSON_PATH, toJSON(newList));

  return deletedMovie;
}

async function searchMovie(query) {
  const lowerCaseQuery = query.toLowerCase();
  const movieList = await getMovies();
  const searchResult = movieList.filter(({ movie: movieName }) => {
    const lowerCaseMovieName = movieName.toLowerCase();
    return lowerCaseMovieName.includes(lowerCaseQuery);
  });
  return searchResult;
}

module.exports = {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
  searchMovie,
};
