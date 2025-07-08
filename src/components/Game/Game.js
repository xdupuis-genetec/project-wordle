import React from 'react';

import { GAME_STATES, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import Banner from '../Banner';
import GuessInput from '../GuessInput';
import GuessesView from '../GuessesView';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState(GAME_STATES.InProgress);

  const setNewGuess = (newGuess) => {
    const nextGuesses = [...guesses, newGuess]
    setGuesses(nextGuesses);
    if (newGuess === answer) {
      setGameState(GAME_STATES.Win)
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState(GAME_STATES.Lose)
    }
  }

  return (
    <>
      <GuessesView guesses={guesses} answer={answer} />
      <GuessInput setNewGuess={setNewGuess} disabled={gameState !== GAME_STATES.InProgress} />
      {gameState !== GAME_STATES.InProgress && 
        <Banner gameState={gameState}>
          { gameState === GAME_STATES.Win ? (
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>{guesses.length} guesses</strong>.
            </p>
          ) : ( 
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          )}
        </Banner>}
    </>
  );
}

export default Game;
