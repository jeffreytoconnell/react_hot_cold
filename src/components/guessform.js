import React from 'react';

export default class GuessForm extends React.Component{
    onGuess(event) {
        event.preventDefault();
        if (this.props.onGuess) {
            const value = this.input.value
            this.props.onGuess(value)
        }
        this.input.value = '';
    }
    render() {
        return (
            <form onSubmit={event=>this.onGuess(event)}>
                <label htmlFor='userGuess'>
                    Please Enter your guess
                    </label>
                    <input type='text' name='userGuess' className='guessInput' maxLength='3' placeholder='Guess' ref={input=>this.input=input}/>
                    <input type='submit' value='Enter'/>
                    </form>
                    
        )
    }
}
