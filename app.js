// Load env variables
require('dotenv').config();

// import path lib
const path = require('path');

// initialize express.js
const express = require('express');
const app = express();

// Connect to mongoDB
const connectDB = require('./config/dbconn');
connectDB();

// Models
const Client = require('./models/Client');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/clients', require('./routes/clients'));
app.use('/api/summary', require('./routes/summary'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
