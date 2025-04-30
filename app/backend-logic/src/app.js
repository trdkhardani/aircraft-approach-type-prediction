const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

const routes = require('./routes/route')

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes)

app.use(function (req, res, next) {
    return res.status(404).json({
        status: "error",
        message: "Endpoint not found",
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})