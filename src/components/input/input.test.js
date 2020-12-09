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
};

describe('Render Phase', () => {
    describe('Word has not been guessed', () => {
        test('Should render component without error', () => {});

        test('Should render input box', () => {});

        test('Should render submit button', () => {});
    });

    describe('Word has been guessed', () => {
        test('Should render component without error', () => {});

        test('Should not render input box', () => {});

        test('Should not render submit button', () => {});
    });
});

describe('Update State', () => {});
