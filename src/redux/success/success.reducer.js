import { CORRECT_GUESS } from '../types';
const initialState = false;

/**
 * @function successReducer
 * @param {array} state - Array of guessed words
 * @param {*} action - action to be reduced
 * @returns {boolean} - new success state
 */
const successReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CORRECT_GUESS:
            return true;
        default:
            return state;
    }
};

export default successReducer;
