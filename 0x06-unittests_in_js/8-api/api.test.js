const { expect } = require('chai');
const sinon = require('sinon');
const app = require('./api');
const request = require('request');

describe('Index page', function() {
  it('should check GET /', function() {
    request('http://localhost:7865/', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system')
    });
  });
});
