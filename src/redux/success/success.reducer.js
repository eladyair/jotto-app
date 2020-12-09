const initialState = null;

/**
 * @function successReducer
 * @param {array} state - Array of guessed words
 * @param {*} action - action to be reduced
 * @returns {boolean} - new success state
 */
const successReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};

export default successReducer;
