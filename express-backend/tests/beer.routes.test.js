const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');

const server = require('../index.js');

const {Beer} = require('../persistence/beer.js');

chai.use(chaiHttp);

describe('Testing the beer routes', function() {

    const testBeer = {
        name : "testName",
        description : "testDescription",
        alcohol_free : true,
        type : "lager"
    };

    it('Testing the create a beer route', function() {

        chai.request(server)

        .post("/beer/create")

        .send(testBeer)

        .end(err, response) => {
            if(err) {
                console.log("Something is wrong!");
                done(err);
            };

            console.log("====================================");
            console.log(response.text);
            console.log("====================================");
            expect(err).to.be.null;
            expect(response).to.have.status(201);
            expect(response.text).to.be.a("string");
            expect(response.text).to.equal(`${testLizard.name} saved to database!`);
            done();

        });

    });








});
