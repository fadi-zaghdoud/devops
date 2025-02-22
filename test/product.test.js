require('dotenv').config({ path: '.env.test' });

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server'); // This exports the server instance from server.js
const Product = require('../product');
const mongoose = require('mongoose');

chai.use(chaiHttp);

describe('Test', () => {

  it('should POST a valid product', (done) => {
    let product = {
      name: "Test Product",
      price: 100,
      quantity: 20
    };

    chai.request(server)
      .post('/api/products')
      .send(product)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });

  // After all tests, attempt to close the server.
  after(function(done) {
    // Check if the server is still running before closing
    if (server && server.listening) {
      server.close((err) => {
        // If an error occurs (e.g., server already closed), ignore it.
        done();
      });
    } else {
      done();
    }
  });
});
