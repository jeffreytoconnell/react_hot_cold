import React from 'react';
//import './user_guess';
//import './game';

export default function GuessList (props) {
    const guesses = props.guesses.map((guess, index)=>(
        <li key = {index}>
            {guess}
            </li>
    ));
    return (
            <div>
            <h1>Guess List</h1>
            <ul>{guesses}</ul>  
            </div>
    );
}

