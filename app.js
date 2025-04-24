const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',
    async (req, res) => {
        res.json('Hello');
    }
);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
