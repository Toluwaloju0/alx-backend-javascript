const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('shoud check if the calculateNumber works correctly for SUM', () => {
      assert.equal(calculateNumber('SUM', 1, 2), 3);
      assert.equal(calculateNumber('SUM', 2.8, 4), 7);
      assert.equal(calculateNumber('SUM', 3.2, 3.8), 7);
    });
  });
  describe('sUBTRACT', () => {
    it('should check if the calculateNumber works correctly for SUBTRACT', () => {
      assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
      assert.equal(calculateNumber('SUBTRACT', 3.9, 1), 3);
      assert.equal(calculateNumber('SUBTRACT', 3, 1.7), 1);
    });
  });
  describe('dIVIDE', () => {
    it('should check if the calculateNumber works correctly for DIVIDE', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 1), 3);
      assert.equal(calculateNumber('DIVIDE', 3.9, 1), 4);
      assert.equal(calculateNumber('DIVIDE', 3, 0.2), 'Error');
    });
  });
});
