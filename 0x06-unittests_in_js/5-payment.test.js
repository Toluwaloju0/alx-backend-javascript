const { expect } = require('chai');

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('Test send payment to API', function() {
  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(function() {
    consoleSpy.restore();
  });

  it('should test sendPaymentRequestToAPI with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
  it('should test sendPaymentRequestToAPI with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
