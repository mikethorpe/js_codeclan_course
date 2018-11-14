const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    let wordLowerCase = this.word.toLowerCase();
    let wordAsArrayOfChars = wordLowerCase.split("");
    const result = wordAsArrayOfChars.every((char) => {
        let numberOfTimesCharacterFound = this.checkNumberOfCharOccurences(wordAsArrayOfChars, char);
        return !(numberOfTimesCharacterFound > 1);
    })
   return result;
}

IsogramFinder.prototype.checkNumberOfCharOccurences = function(charArray, charToMatch){
    const result = charArray.reduce((matches, char) => {
        if (char === charToMatch) {
            return matches += 1
        };
        return matches;
    }, 0)
    return result;
}


module.exports = IsogramFinder;
