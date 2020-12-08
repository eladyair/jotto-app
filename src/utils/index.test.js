import { getLettersMatchCount } from '../utils';

describe('getLettersMatchCount', () => {
    const secretWord = 'party';

    test('Should return correct count when there are no matching letters', () => {
        const letterMatchCount = getLettersMatchCount('bones', secretWord);

        expect(letterMatchCount).toBe(0);
    });

    test('Should return correct count when there are 3 matching letters', () => {
        const letterMatchCount = getLettersMatchCount('train', secretWord);

        expect(letterMatchCount).toBe(3);
    });

    test('Should return correct count when there are duplicate letters in the guess', () => {
        const letterMatchCount = getLettersMatchCount('parka', secretWord);

        expect(letterMatchCount).toBe(3);
    });
});
