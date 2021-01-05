import React from 'react';
import { shallow } from 'enzyme';

// Utils
import { storeFactory, findByTestAttr } from '../../../test/testUtils';

// Component
import Input from './input';

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
    const wrapper = shallow(<Input store={store} />)
        .dive()
        .dive();

    return wrapper;
};

describe('Render Phase', () => {
    describe('Word has not been guessed', () => {
        let wrapper;

        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });

        test('Should render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');

            expect(component.length).toBe(1);
        });

        test('Should render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');

            expect(inputBox.length).toBe(1);
        });

        test('Should render submit button', () => {
            const submitBtn = findByTestAttr(wrapper, 'submit-button');

            expect(submitBtn.length).toBe(1);
        });
    });

    describe('Word has been guessed', () => {
        let wrapper;

        beforeEach(() => {
            const initialState = { success: true };

            wrapper = setup(initialState);
        });

        test('Should render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');

            expect(component.length).toBe(1);
        });

        test('Should not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');

            expect(inputBox.length).toBe(0);
        });

        test('Should not render submit button', () => {
            const submitBtn = findByTestAttr(wrapper, 'submit-button');

            expect(submitBtn.length).toBe(0);
        });
    });
});

describe('Update State', () => {});

describe('Redux Props', () => {
    test('Should have `success` as a prop from the state', () => {
        const success = true;

        const wrapper = setup({ success });

        const successProp = wrapper.instance().props.success;

        expect(successProp).toBe(success);
    });

    test('Should have `guessWord` action creator as a function prop', () => {
        const wrapper = setup();

        const guessWordProp = wrapper.instance().props.guessWord;

        expect(guessWordProp).toBeInstanceOf(Function);
    });
});
