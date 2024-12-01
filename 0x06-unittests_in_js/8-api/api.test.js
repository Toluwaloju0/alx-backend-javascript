const { expect } = require('chai');
const sinon = require('sinon');
const request = require('request');


describe('Index page tests with pre-running server', function() {
  it('should check GET /', function(done) {
    request('http://localhost:7865/', (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
