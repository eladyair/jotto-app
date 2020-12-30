import { GUESS_WORD, CORRECT_GUESS } from '../types';

// Utils
import { getLettersMatchCount } from '../../utils';

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed word
 * @returns {function} - Redux Thunk function
 */
export const guessWord = guessedWord => {
    return (dispatch, getState) => {
        const secretWord = getState().secretWord;

        const letterMatchCount = getLettersMatchCount(guessedWord, secretWord);

        dispatch({
            type: GUESS_WORD,
            payload: {
                guessedWord,
                letterMatchCount
            }
        });

        if (guessedWord === secretWord) {
            dispatch({ type: CORRECT_GUESS });
        }
    };
};
