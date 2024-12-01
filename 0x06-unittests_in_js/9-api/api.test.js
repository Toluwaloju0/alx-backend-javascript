const { expect } = require('chai');
const sinon = require('sinon');
const request = require('request');


describe('Index page', function() {
  it('should check GET /', function(done) {
    request('http://localhost:7865/', (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function() {
  it('check the cart page', function(done) {
    request('http://localhost:7865/cart/77', (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 77');
      done();
    });
  });
  it('should check for wrong route parameters', function(done) {
    request('http://localhost:7865/cart/wrong', (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
