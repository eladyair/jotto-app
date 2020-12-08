const { func } = require('prop-types');

/**
 * @method getLettersMatchCount
 * @param {string} guessedWord - Guessed word
 * @param {*} secretWord - Secret word
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLettersMatchCount(guessedWord, secretWord) {
    const secretWordSet = new Set(secretWord.split(''));
    const guessedWordSet = new Set(guessedWord.split(''));

    return [...secretWordSet].filter((letter) => guessedWordSet.has(letter))
        .length;
}
