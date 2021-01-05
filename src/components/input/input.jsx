import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { guessWord } from '../../redux/guess-word/guess-word.actions';

export class UnconnectedInput extends Component {
    /**
     * @method constructor
     * @param {object} props - Component props
     * @returns {undefined}
     */
    constructor(props) {
        super(props);

        // Initializing the state
        this.state = {
            currentGuess: null
        };

        // Binding this for submitGuessedWord
        this.submitGuessedWord = this.submitGuessedWord.bind(this);
    }

    submitGuessedWord(event) {
        event.preventDefault();

        const guessedWord = this.state.currentGuess;

        if (guessedWord && guessedWord.length > 0) {
            this.props.guessWord(guessedWord);
        }
    }

    render() {
        const contents = this.props.success ? null : (
            <form className='form-inline'>
                <input
                    type='text'
                    placeholder='Enter guess'
                    className='mb-2 mx-sm-3'
                    data-test='input-box'
                    value={this.state.currentGuess}
                    onChange={event => this.setState({ currentGuess: event.target.value })}
                />
                <button type='submit' className='btn btn-primary mb-2' data-test='submit-button' onClick={event => this.submitGuessedWord(event)}>
                    Submit
                </button>
            </form>
        );

        return <div data-test='component-input'>{contents}</div>;
    }
}

const mapStateToProps = ({ success }) => {
    return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
