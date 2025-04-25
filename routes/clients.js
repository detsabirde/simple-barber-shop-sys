const express = require('express');
const Client = require('../models/Client');
const router = express.Router();

router.get('/',
  async (req, res) => {
    // res.status(200).json('clients page.');
    res.sendFile('index.html', { root: './public' });
  }
);

module.exports = router;
