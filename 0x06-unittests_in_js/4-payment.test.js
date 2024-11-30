const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

const expect = chai.expect

describe('sendPaymentRequestToApi', function() {
  it('should check the maths called by sendPaymentRequestApi', function() {
    // Make a stub to for Utils.calculateNumber to return 10 always
    const utilsStub = sinon.stub(Utils, 'calculateNumber').returns  (10);

    const conoleLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(utilsStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(conoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    conoleLogSpy.restore();
    utilsStub.restore();
  });
});
