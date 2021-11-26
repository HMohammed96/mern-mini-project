const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routing/routes/beer-route.js');

const app = express();

const errorLogger = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(err.message);
}

app.use(errorLogger);

app.use(express.json());
app.use('/beer', routes);

mongoose.connect('mongodb://localhost:27017/beer', {useNewUrlParser : true}, (error) => {
    if(error) {
        console.log(`Error! Cannot connect to database: ${error}`);

    } else {
        console.log("No error!");
    }
});

const server = app.listen(5015, () => {
    console.log("Listening on port 5015");
});