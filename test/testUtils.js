import { ShallowWrapper } from 'enzyme';
import checkPropTypes from 'check-prop-types';

// Redux
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/redux/root-reducer';
import { middlewares } from '../src/redux/store';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer, middlewares
 * @function storeFactory
 * @param {object} initialState - Initial state for the store
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);

    expect(propError).toBeUndefined();
};
