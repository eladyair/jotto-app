import { SET_SECRET_WORD } from '../types';

const initialState = null;

/**
 * @function secretWordReducer
 * @param {array} state - Array of guessed words
 * @param {*} action - action to be reduced
 * @returns {boolean} - new guessedWords state
 */
const secretWordReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_SECRET_WORD:
            return payload;

        default:
            return state;
    }
};

export default secretWordReducer;
