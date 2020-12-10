import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// Root Reducer
import rootReducer from './root-reducer';

export const middlewares = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(rootReducer);
