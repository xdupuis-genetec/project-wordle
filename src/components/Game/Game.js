import React from 'react';

import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import GuessesView from '../GuessesView';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const setNewGuess = (newGuess) => setGuesses([...guesses, newGuess]);

  return (
    <>
      <GuessesView guesses={guesses} />
      <GuessInput setNewGuess={setNewGuess} />
    </>
  );
}

export default Game;
