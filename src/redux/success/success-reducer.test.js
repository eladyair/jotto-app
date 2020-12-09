import { CORRECT_GUESS } from '../types';
import successReducer from './success.reducer';

test('Should return default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {});

    expect(newState).toBe(false);
});

test('Should return a state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: CORRECT_GUESS });

    expect(newState).toBe(true);
});
