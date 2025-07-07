
import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const setNewGuess = (newGuess) => console.info(newGuess);

  return <GuessInput setNewGuess={setNewGuess} />;
}

export default Game;
