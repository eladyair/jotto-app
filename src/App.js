import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { getSecretWord } from './redux/secret-word/secret-word.actions';

// Styles
import './App.css';

// Components
import GuessedWords from './components/guessed-words/guessed-words';
import Congrats from './components/congrats/congrats';
import Input from './components/input/input';

export class UnconnectedApp extends Component {
    /**
     * @method componentDidMount
     * @returns {undefined}
     */
    componentDidMount() {
        // Get the secret word
        this.props.getSecretWord();
    }

    render() {
        return (
            <div className='container'>
                <h1>Jotto</h1>
                <Congrats success={this.props.success} />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
            </div>
        );
    }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
    return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
