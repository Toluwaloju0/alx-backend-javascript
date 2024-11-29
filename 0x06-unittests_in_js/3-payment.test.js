const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect

describe('sendPaymentRequestToApi', function() {
  it('should check the maths called by sendPaymentRequestApi', function() {
    const utilCalNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(utilCalNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    utilCalNumberSpy.restore();
  });
});