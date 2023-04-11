const express = require('express');
const {
  getMovies,
  addMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
  searchMovie,
} = require('./helpers/movies');

const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const NOT_FOUND_MESSAGE = 'Movie not found';

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

app.get('/movies/search', async (req, res) => {
  const query = req.query.q;
  const searchResult = await searchMovie(query);
  res.status(OK).json({ movies: searchResult });
});

app.get('/movies/:id', async (req, res) => {
  try {
    const requestedId = Number(req.params.id);
    const requestedMovie = await getMovieById(requestedId);
    if (requestedMovie) {
      return res.status(OK).json({ movie: requestedMovie });
    }
    res.status(NOT_FOUND).json({ message: NOT_FOUND_MESSAGE });
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
  try {
    const targetId = Number(req.params.id);
    const { movie, price } = req.body;
    const updatedMovie = await updateMovie(targetId, movie, price);
    if (updatedMovie) {
      return res.status(OK).json({ movie: updatedMovie });
    }
    res.status(NOT_FOUND).json({ message: NOT_FOUND_MESSAGE });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const targetId = Number(req.params.id);
    const deletedMovie = await deleteMovie(targetId);
    if (deletedMovie) {
      return res.status(OK).json({ movie: deletedMovie });
    }
    res.status(NOT_FOUND).json({ message: NOT_FOUND_MESSAGE });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
});

module.exports = app;
