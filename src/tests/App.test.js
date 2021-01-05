import React from 'react';
import { shallow } from 'enzyme';

// Utils
import { storeFactory } from '../../test/testUtils';

// Component
import App, { UnconnectedApp } from '../App';

/**
 * Factory function to create a ShallowWrapper for the connected Input component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState);

    // By using dive twice (since its a redux connected component)
    // we get the actual compoenent jsx
    const wrapper = shallow(<App store={store} />)
        .dive()
        .dive();

    return wrapper;
};

describe('Unconnected App Component', () => {
    test('Should run `getSecretWord` on App mount', () => {
        const getSecretWordMock = jest.fn();

        const props = {
            getSecretWord: getSecretWordMock,
            success: false,
            guessedWords: []
        };
        // Set up app component with getSecretWordMock as the getSecretWord prop
        const wrapper = shallow(<UnconnectedApp {...props} />);

        // Run lifecycle method
        wrapper.instance().componentDidMount();

        // Check to see if the mock ran
        const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

        expect(getSecretWordCallCount).toBe(1);
    });
});

describe('Redux Props', () => {
    test('Should have access to `success` in state', () => {
        const success = true;

        const wrapper = setup({ success });

        const successProp = wrapper.instance().props.success;

        expect(successProp).toBe(success);
    });

    test('Should have access to `secretWord` in state', () => {
        const secretWord = 'party';

        const wrapper = setup({ secretWord });

        const secretWordProp = wrapper.instance().props.secretWord;

        expect(secretWordProp).toBe(secretWord);
    });

    test('Should have access to `guessedWords` in state', () => {
        const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];

        const wrapper = setup({ guessedWords });

        const guessedWordsProp = wrapper.instance().props.guessedWords;

        expect(guessedWordsProp).toEqual(guessedWords);
    });

    test('Should have `getSecretWord` action creator as a function in props', () => {
        const wrapper = setup();

        const getSecretWordProp = wrapper.instance().props.getSecretWord;

        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
});
