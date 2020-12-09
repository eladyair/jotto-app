import { CORRECT_GUESS } from '../types';

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
export const correctGuess = () => ({
    type: CORRECT_GUESS
});
