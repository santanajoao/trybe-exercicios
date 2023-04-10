const express = require('express');
const { getMovies, addMovie } = require('./helpers/movies');

const OK = 200;
const NOT_FOUND = 404;

const app = express();

app.use(express.json());

app.get('/movies', async (_, res) => {
  const movieList = await getMovies();
  res.status(OK).json({ movies: movieList });
});

app.get('/movies/:id', async (req, res) => {
  const requestedId = Number(req.params.id);
  const movieList = await getMovies();

  const requestedMovie = movieList.find((movie) => movie.id === requestedId);
  if (requestedMovie) {
    res.status(OK).json({ movie: requestedMovie });
  } else {
    res.status(NOT_FOUND).json({ message: 'Movie not found' });
  }
});

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const newMovie = await addMovie(movie, price);
  res.status(OK).json({ movie: newMovie });
});

module.exports = app;
