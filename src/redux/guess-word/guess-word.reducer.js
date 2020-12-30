import { GUESS_WORD } from '../types';
const initialState = [];

/**
 * @function guessWordReducer
 * @param {array} state - Array of guessed words
 * @param {*} action - action to be reduced
 * @returns {boolean} - new guessedWords state
 */
const guessWordReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GUESS_WORD:
            return [...state, payload];

        default:
            return state;
    }
};

export default guessWordReducer;
