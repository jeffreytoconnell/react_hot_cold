import React from 'react';
import GuessForm from './guessform';

export default function GuessSection (props) {
    return(
        <section> 
            <h1 id='feedback'> {props.feedback}</h1>
            <GuessForm onGuess = {props.onGuess}/> 
            </section>
    )
}