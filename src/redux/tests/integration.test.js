import { storeFactory } from '../../../test/testUtils';
import { guessWord } from '../guess-word/guess-word.actions';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe('No guessed words', () => {
        let store;
        const initialState = { secretWord };

        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test('Should update state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));

            const newState = store.getState();

            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [
                    {
                        guessedWord: unsuccessfulGuess,
                        letterMatchCount: 3
                    }
                ]
            };

            expect(newState).toEqual(expectedState);
        });

        test('Should update state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));

            const newState = store.getState();

            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            };

            expect(newState).toEqual(expectedState);
        });
    });

    describe('Some guessed words', () => {
        const guessedWords = [
            {
                guesedWord: 'agile',
                letterMatchCount: 1
            }
        ];

        const initialState = {
            secretWord,
            guessedWords
        };

        let store;

        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test('Should update state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));

            const newState = store.getState();

            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
            };

            expect(newState).toEqual(expectedState);
        });

        test('Should update state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));

            const newState = store.getState();

            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 }]
            };

            expect(newState).toEqual(expectedState);
        });
    });
});
