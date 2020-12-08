import { combineReducers } from 'redux';

// Reducers
import successReducer from './success.reducer';

export default combineReducers({
    success: successReducer
});
