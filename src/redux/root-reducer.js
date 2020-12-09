import { combineReducers } from 'redux';

// Reducers
import successReducer from './success/success.reducer';

export default combineReducers({
    success: successReducer
});
