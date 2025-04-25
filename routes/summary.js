const express = require('express');
const Client = require('../models/Client');
const router = express.Router();

router.get('/',
  async (req, res) => {
    res.status(200).json('summary page.');
  }
);

module.exports = router;
