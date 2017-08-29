import React from 'react';


import GuessSection from './guesssection';
import GuessCount from './guesscount';
import GuessList from './guesslist';



export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: "Guess a number",
            answer: Math.floor(Math.random() * 100) + 1,
            guesses: []
        };
        console.log(this.state.answer);
    }
     playGame() {

    }

    guess(userGuess) {
        userGuess = parseInt(userGuess, 10)
        if (isNaN(userGuess)) {
            this.setState({
                feedback: "Enter a number smartass"
            })
            return;
        }
    
    
        const difference = Math.abs(userGuess - this.state.answer)
        let feedback;
        let direction;
        if (userGuess > this.state.answer){
            direction = 'Lower'
        } else {
            direction = 'Higher'
        }
        

        if (difference => 50){
            feedback = "Freezing Cold " + direction
        }
        else if (difference => 25){
            feedback = "Cold "+ direction
        }
        else if (difference => 10){
            feedback = "Warm "+ direction
        }
        else if (difference => 5){
            feedback = "Hella Hot " + direction
        }
        else {
            feedback = "You guessed it!"
        }
        this.setState({
            feedback,
            guesses: [...this.state.guesses, userGuess]
        })
    
    }

    render() {
        return (
            <div>
            <GuessSection feedback = {this.state.feedback} 
            onGuess={(userGuess) => this.guess(userGuess)}/>
            <GuessCount count={this.state.guesses.length}/>
            <GuessList guesses={this.state.guesses}/>
            </div>
            
            
        );
    }
}
