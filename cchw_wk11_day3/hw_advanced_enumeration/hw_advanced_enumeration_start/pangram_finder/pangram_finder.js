const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let phraseLowerCase = this.phrase.toLowerCase();
  const result = this.alphabet.every((letter) => {
    return phraseLowerCase.includes(letter);
  })
  return result;
}

module.exports = PangramFinder;
