const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const expect = chai.expect;

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('shoud check if the calculateNumber works correctly for SUM', () => {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
      expect(calculateNumber('SUM', 2.8, 4)).to.equal(7);
      expect(calculateNumber('SUM', 3.2, 3.8)).to.equal(7);
    });
  });
  describe('sUBTRACT', () => {
    it('should check if the calculateNumber works correctly for SUBTRACT', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 3.9, 1)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 3, 1.7)).to.equal(1);
    });
  });
  describe('dIVIDE', () => {
    it('should check if the calculateNumber works correctly for DIVIDE', () => {
      expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
      expect(calculateNumber('DIVIDE', 3.9, 1)).to.equal(4);
      expect(calculateNumber('DIVIDE', 3, 0.2)).to.equal('Error');
    });
  });
});
