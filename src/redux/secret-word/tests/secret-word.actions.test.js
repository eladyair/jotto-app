import moxios from 'moxios';

// Redux
import { getSecretWord } from '../secret-word.actions';

// Test Utils
import { storeFactory } from '../../../../test/testUtils';

describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('Should add the response word to state', () => {
        const secretWord = 'party';

        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: secretWord
            });
        });

        return store.dispatch(getSecretWord()).then(() => {
            const newState = store.getState();

            expect(newState.secretWord).toBe(secretWord);
        });
    });
});
