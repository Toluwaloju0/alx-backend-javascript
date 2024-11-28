const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('shoud check if the calculateNumber works correctly for SUM', function() {
      assert.equal(calculateNumber(1, 2, 'SUM'), 3);
      assert.equal(calculateNumber(2.8, 4, 'SUM'), 7);
      assert.equal(calculateNumber(3.2, 3.8, 'SUM'), 7);
    });
  });
  describe('SUBTRACT', function() {
    it('Should check if the calculateNumber works correctly for SUBTRACT', function() {
      assert.equal(calculateNumber(3, 1, 'SUBTRACT'), 2);
      assert.equal(calculateNumber(3.9, 1, 'SUBTRACT'), 3);
      assert.equal(calculateNumber(3, 1.7, 'SUBTRACT'), 1);
    });
  });
  describe('DIVIDE', function() {
    it('Should check if the calculateNumber works correctly for DIVIDE', function() {
      assert.equal(calculateNumber(3, 1, 'DIVIDE'), 3);
      assert.equal(calculateNumber(3.9, 1, 'DIVIDE'), 4);
      assert.equal(calculateNumber(3, 0.2, 'DIVIDE'), 'Error');
    });
  });
});