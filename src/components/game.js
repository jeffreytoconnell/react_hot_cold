import React from 'react';

import UserGuess from './user_guess';
import GuessList from './guess_list';


export default class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();

        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value = '';
    }

    render() {
        return (
            <div>
            <UserGuess />
            <GuessList />
            </div>
        );
    }
};