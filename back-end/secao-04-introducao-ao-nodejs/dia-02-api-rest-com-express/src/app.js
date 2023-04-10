const path = require('path');
const express = require('express');
const { readJSON } = require('./utils/json');

const MOVIES_JSON_PATH = path.resolve(__dirname, './data/movies.json');

const OK = 200;
const NOT_FOUND = 404;

const app = express();

app.get('/movies/', async (_, res) => {
  const movieList = await readJSON(MOVIES_JSON_PATH);
  res.status(OK).json({ movies: movieList });
});

app.get('/movies/:id', async (req, res) => {
  const requestedId = Number(req.params.id);
  const movieList = await readJSON(MOVIES_JSON_PATH);

  const requestedMovie = movieList.find((movie) => movie.id === requestedId);
  if (requestedMovie) {
    res.status(OK).json({ movie: requestedMovie });
  }
  res.status(NOT_FOUND).json({ message: 'Movie not found' });
});

module.exports = app;
