const express = require('express');
const {
  getMovies,
  addMovie,
  getMovieById,
  updateMovie,
} = require('./helpers/movies');

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
    const requestedMovie = await getMovieById(requestedId);
    if (requestedMovie) {
      return res.status(OK).json({ movie: requestedMovie });
    }
    res.status(NOT_FOUND).json({ message: 'Movie not found' });
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

app.put('/movies/:id', async (req, res) => {
  const targetId = Number(req.params.id);
  const { movie, price } = req.body;
  const updatedMovie = await updateMovie(targetId, movie, price);
  if (updatedMovie) {
    return res.status(OK).json({ movie: updatedMovie });
  }
  res.status(NOT_FOUND).json({ message: 'Movie not found' });
});

module.exports = app;
