import { CORRECT_GUESS } from '../types';
import { correctGuess } from './success.actions';

describe('correctGuess', () => {
    test("Should return an action with type 'CORRECT_GUESS'", () => {
        const action = correctGuess();
        expect(action).toEqual({ type: CORRECT_GUESS });
    });
});
