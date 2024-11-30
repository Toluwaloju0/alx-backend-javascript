const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token')

const expect = chai.expect;

describe('getPaymentTokenFromAPI', function() {
  it('should get the promise if the bool value is true', function() {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.equal({data: 'Successful response from the API' });
    });
    done();
  });
});
