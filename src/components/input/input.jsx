import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { guessWord } from '../../redux/guess-word/guess-word.actions';

class Input extends Component {
    render() {
        const contents = this.props.success ? null : (
            <form className='form-inline'>
                <input type='text' placeholder='Enter guess' className='mb-2 mx-sm-3' data-test='input-box' />
                <button type='submit' className='btn btn-primary mb-2' data-test='submit-button'>
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

export default connect(mapStateToProps, { guessWord })(Input);
