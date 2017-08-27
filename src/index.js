import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';

ReactDOM.render(
    <Game />, // RENDERS COMPONENT IMPORTED FROM ABOVE
    document.getElementById('root') // RENDER TO DECLARED DIV
);
