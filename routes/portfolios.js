const express = require('express');
const router = express.Router();

const envVars = require("dotenv").config();

if (envVars.error) {
  throw envVars.error;
}

const { checkJwt } = require('../controllers/auth');
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio } = require('../controllers/portfolios');

router.get('', getPortfolios);
router.get('/:id', getPortfolioById);

// TODO: create middleware to check for admin rights!!!!
router.post('', checkJwt, createPortfolio);
router.patch('/:id', checkJwt, updatePortfolio);

module.exports = router;