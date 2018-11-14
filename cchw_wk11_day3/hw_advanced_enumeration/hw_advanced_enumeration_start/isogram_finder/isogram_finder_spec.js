const assert = require('assert');
const IsogramFinder = require('./isogram_finder.js');

describe('IsogramFinder', function () {
  it('should be able to detect an isogram', function () {
    const isogramFinder = new IsogramFinder('subdermatoglyphic');
    assert.strictEqual(isogramFinder.isIsogram(), true);
  });

  it('should be able to detect a non-isogram', function () {
    const isogramFinder = new IsogramFinder('repeated');
    assert.strictEqual(isogramFinder.isIsogram(), false);
  });

  it('should be able to detect an isogram case insensitively', function () {
    const isogramFinder = new IsogramFinder('Uncopyrightable');
    assert.strictEqual(isogramFinder.isIsogram(), true);
  });

  it('should be able to detect a non-isogram case insensitively', function () {
    const isogramFinder = new IsogramFinder('NotAnIsogram');
    assert.strictEqual(isogramFinder.isIsogram(), false);
  });
});

describe('Check number of occurrences of character in array of chars', function(){

  it("should return the number of occurrences of character", function(){
    const isogramFinder = new IsogramFinder('');    
    const expected = 3;
    const arrayOfChars = 'abaca'.split('');
    const actual = isogramFinder.checkNumberOfCharOccurences(arrayOfChars, 'a');
    assert.deepStrictEqual(actual, expected);
  })

})
