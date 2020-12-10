import { combineReducers } from 'redux';

// Reducers
import successReducer from './success/success.reducer';
import guessedWordsReducer from './guess-word/guess-word.reducer';

export default combineReducers({
    success: successReducer,
    guessedWords: guessedWordsReducer
});
