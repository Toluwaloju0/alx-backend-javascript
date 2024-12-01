const { expect } = import('chai');
const sinon = require('sinon');
const app = require('./api');
const request = require('request');

describe('Index Suite', function() {
  it('should check the index page', function() {
    request('http://localhost:7865/', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system')
    });
  });
});
