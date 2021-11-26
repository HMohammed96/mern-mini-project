const router = require('express').Router();

const {Beer} = require('../persistence/beer.js');

// CREATES A BEER ROUTE
router.post('/create', (req, res, next) => {
    const beer = new Beer(req.body);
    console.log(beer);

    beer.save().then((result) => {
        res.status(201).send(`${result} saved to database!`);
    })
    .catch((error) => {
        next(err);
    });
});

// GET ALL ROUTE
router.get('/getAll', (req, res) => {

    Beer.find((error, beerList) => {
        if (error) {
            console.log(`error :( : ${error}`);
        }
        res.status(200).send(beerList);
    });
});

// GET ONE BEER (BY ID)
router.get('/getId/:id', (req, res) => {
    console.log(req.params.id);

    Beer.findById(req.params.id, (error, result) => {
        if (error) {
            console.log(`error :( ${error}`);
        }
        res.status(200).send(result);
    });
});

// GET A BEER (BY NAME)
router.get('/getName/:name', (req, res) => {
    const name = req.params.name;
    console.log(name);

    Beer.find({"name" : name}, (error, result) => {
        if (error) {
            console.log(`error :( ${error}`);
        }
        res.status(200).send(result);
    });
});

// UPDATE A BEER
router.put('/update/:id', (req, res) => {
    const id = req.params.id;

    Beer.findByIdAndUpdate(id, req.body, (error, result) => {
        if (error) {
            console.log(`error :( ${error}`);
        }
        res.status(200).send(`${result} updated!`);
    });
});

// DELETE A BEER BY ID
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    Beer.findByIdAndDelete(id, (error, result) => {
        if (error) {
            console.log(`error :( ${error}`);
        }
        res.status(202).send(`${result} deleted!`);
    });
});

module.exports = router;