const express = require('express');
const {
  getChocolates,
  getChocolateById,
  getChocolatesByBrandId,
  searchChocolatesByName,
  updateChocolate,
} = require('./helpers/chocolates');

const app = express();
app.use(express.json());

const OK = 200;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const INTERNAL_ERROR_MESSAGE = 'Sorry! Some internal error ocurred';

app.get('/chocolates', async (_, res) => {
  try {
    const chocolates = await getChocolates();
    res.status(OK).json({ chocolates });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: `${INTERNAL_ERROR_MESSAGE}: ${error.message}`,
    });
  }
});

app.get('/chocolates/total', async (_, res) => {
  try {
    const chocolates = await getChocolates();
    res.status(OK).json({ totalChocolates: chocolates.length });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: `${INTERNAL_ERROR_MESSAGE}: ${error.message}`,
    });
  }
});

app.get('/chocolates/search', async (req, res) => {
  try {
    const { name } = req.query;
    const result = await searchChocolatesByName(name);
    if (result.length > 0) {
      res.status(OK).json({ chocolates: result });
    } else {
      res.status(NOT_FOUND).json({ chocolates: [] });
    }
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: `${INTERNAL_ERROR_MESSAGE}: ${error.message}`,
    });
  }
});

app.get('/chocolates/:id', async (req, res) => {
  try {
    const requestedId = Number(req.params.id);
    const requestedChocolate = await getChocolateById(requestedId);
    if (requestedChocolate) {
      res.status(OK).json({ chocolate: requestedChocolate });
    } else {
      res.status(NOT_FOUND).json({ message: 'Chocolate not found' });
    }
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: `${INTERNAL_ERROR_MESSAGE}: ${error.message}`,
    });
  }
});

app.put('/chocolates/:id', async (req, res) => {
  try {
    const requestedId = Number(req.params.id);
    const { name, brandId } = req.body;

    const updatedChocolate = await updateChocolate(requestedId, name, brandId);
    if (updatedChocolate) {
      res.status(OK).json(updatedChocolate);
    } else {
      res.status(NOT_FOUND).json({ message: 'Chocolate not found' });
    }
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: `${INTERNAL_ERROR_MESSAGE}: ${error.message}`,
    });
  }
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  try {
    const brandId = Number(req.params.brandId);
    const brandChocolates = await getChocolatesByBrandId(brandId);
    res.status(OK).json({ chocolates: brandChocolates });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: `${INTERNAL_ERROR_MESSAGE}: ${error.message}`,
    });
  }
});

module.exports = app;
