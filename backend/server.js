require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const first_route = require('./routes/route');

const app = express(); // express app

// middleware
app.use(express.json()); // parse json data

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/routes', first_route);

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
        console.log("Connected to MongoDB");
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Server is listening on port " + process.env.PORT);
        });
    })
    .catch((err) => console.log(err));

