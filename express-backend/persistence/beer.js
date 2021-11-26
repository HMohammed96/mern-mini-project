const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const beerSchema =  new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25,
        minlength: 3
    },
    description: {
        type: String,
        required: true
    },
    alcoholFree: boolean,
    type: String
});

const Beer = model('Beer', beerSchema);

module.exports = {'Club' :  Club};