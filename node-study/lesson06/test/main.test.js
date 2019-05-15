const main = require('../main');
const should = require('should');

describe('text/main.text.js', () => {
  it('should be 55 when n === 10', () => {
    main.fibonacci(10).should.equal(55);
  });

  it('should be 1 when n === 1', () => {
    main.fibonacci(1).should.equal(1);
  });

  it('should be 0 when n === 0', () => {
    main.fibonacci(0).should.equal(0);
  });

  it('should throw when n > 10', () => {
    (function () {
      main.fibonacci(11);
    }).should.throw('n should <= 10');
  })

  it('should throw when n < 0', function () {
    (function () {
      main.fibonacci(-1);
    }).should.throw('n should >= 0');
  });

  it('should throw when n isnt Number', function () {
    (function () {
      main.fibonacci('呵呵');
    }).should.throw('n should be a Number');
  });
})
