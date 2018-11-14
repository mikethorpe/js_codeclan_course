const AnagramFinder = function (word) {
    this.word = word;
}

// Return only anagrams of the word 
AnagramFinder.prototype.findAnagrams = function (otherWords) {
    //get words that are not an exact match with this.word
    const nonDuplicateWords = this.getWordsNotExactMatch(otherWords)
    //check that we have the right number of each character in each word
    const wordsWithCorrectChars = this.getAllWordsWithCorrectCharacters(nonDuplicateWords);
    return wordsWithCorrectChars;
}

AnagramFinder.prototype.getWordsNotExactMatch = function(wordsToCheck){
    const wordsNotExactMatch = wordsToCheck.filter((word)=> {
        return word != this.word;
    })
    return wordsNotExactMatch;
}

AnagramFinder.prototype.getAllWordsWithCorrectCharacters = function(wordsToCheck){
    const wordsWithCorrectCharacters = wordsToCheck.filter((wordToCheck) => {
        return this.checkWordHasCorrectCharacters(wordToCheck);
    })
    return wordsWithCorrectCharacters;
}

//for each character in this.word check that there are the correct number of 
//occurrences in the wordToCheck
AnagramFinder.prototype.checkWordHasCorrectCharacters = function(wordToCheck){
    const wordInLowerCaseArray = this.word.toLowerCase().split("");
    const wordToCheckInLowerCaseArray = wordToCheck.toLowerCase().split("");
    const wordHasCorrectCharacters = wordInLowerCaseArray.every((char) => {
        const numberOfOccurrencesOfCharInWord = this.checkNumberOfCharOccurences(wordInLowerCaseArray, char);
        const numberOfOccurrencesOfCharInWordToCheck = this.checkNumberOfCharOccurences(wordToCheckInLowerCaseArray, char);
        return numberOfOccurrencesOfCharInWord === numberOfOccurrencesOfCharInWordToCheck;
    })
    return wordHasCorrectCharacters;
}

AnagramFinder.prototype.checkNumberOfCharOccurences = function(charArray, charToMatch){
    const result = charArray.reduce((matches, char) => {
        if (char === charToMatch) {
            return matches += 1
        };
        return matches;
    }, 0)
    return result;
}

module.exports = AnagramFinder;
