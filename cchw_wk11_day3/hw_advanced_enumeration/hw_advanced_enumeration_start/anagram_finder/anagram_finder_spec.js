const assert = require('assert');
const AnagramFinder = require('./anagram_finder.js');

describe('AnagramFinder', function () {
  it('should be able to detect an anagram', function () {
    const anagramFinder = new AnagramFinder('act');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['cat', 'dog']), ['cat']);
  });

  it('should be able to detect a non-anagram', function () {
    const anagramFinder = new AnagramFinder('potato');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['tomato']), []);
  })

  it('should not detect words with too few letters as an anagram', function () {
    const anagramFinder = new AnagramFinder('good');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['dog']), []);
  });

  it('should not detect words with too many letters as an anagram', function () {
    const anagramFinder = new AnagramFinder('dog');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['good']), []);
  });

  it('should detect an anagram regardless of case', function () {
    const anagramFinder = new AnagramFinder('DeduCTionS');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['DiscOUnteD']), ['DiscOUnteD']);
  });

  it('should not detect a word as it\'s own anagram', function () {
    const anagramFinder = new AnagramFinder('javascript');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['javascript']), []);
  });

  it('should not detect an empty string as an anagram', function () {
    const anagramFinder = new AnagramFinder('word');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['']), []);
  });
});

describe('checkWordHasCorrectCharacters', function () {
  it("words with the correct number of characters return true", function(){
    const anagramFinder = new AnagramFinder('word');
    const wordToCheck = 'wrod';
    const expected = true;
    const actual = anagramFinder.checkWordHasCorrectCharacters(wordToCheck);
    assert.deepStrictEqual(actual, expected);
  }); 

  it("words with the inccorrect number of characters return false", function(){
    const anagramFinder = new AnagramFinder('word');
    const wordToCheck = 'wrodw';
    const expected = false;
    const actual = anagramFinder.checkWordHasCorrectCharacters(wordToCheck);
    assert.deepStrictEqual(actual, expected);
  }); 
});

  