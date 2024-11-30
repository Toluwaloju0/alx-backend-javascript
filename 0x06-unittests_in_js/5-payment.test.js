const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

const expect = chai.expect;

describe('Test send payment to API', function() {
  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(function() {
    consoleSpy.restore();
  });

  it('should test sendPaymentRequestToAPI with 100 and 20', function() {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
  it('should test sendPaymentRequestToAPI with 10 and 10', function() {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
