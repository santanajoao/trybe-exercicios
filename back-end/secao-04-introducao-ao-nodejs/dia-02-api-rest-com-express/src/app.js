const express = require('express');
const { getMovies, addMovie } = require('./helpers/movies');

const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const app = express();

app.use(express.json());

app.get('/movies', async (_, res) => {
  try {
    const movieList = await getMovies();
    res.status(OK).json({ movies: movieList });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const requestedId = Number(req.params.id);
    const movieList = await getMovies();

    const requestedMovie = movieList.find((movie) => movie.id === requestedId);
    if (requestedMovie) {
      res.status(OK).json({ movie: requestedMovie });
    } else {
      res.status(NOT_FOUND).json({ message: 'Movie not found' });
    }
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const newMovie = await addMovie(movie, price);
    res.status(CREATED).json({ movie: newMovie });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
});

module.exports = app;
