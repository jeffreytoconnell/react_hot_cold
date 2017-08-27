import React from 'react';

export default class UserGuess extends React.Component {
    guess(event) {
        event.preventDefault();
        this.input.guess = '';
    }


render() { 
    return (
            <div>
            <h1>User Guess</h1>     
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>           
            </div>
        )
    }
};
