import { WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';
import Cell from '../Cell';

function Guess({ guess, answer }) {

  const guessChecks = checkGuess(guess, answer)

  return (
    <p className="guess">
      {Array(WORD_LENGTH).keys().map((i) => 
        <Cell key={i} letter={guessChecks?.at(i)?.letter ?? ''} status={guessChecks?.at(i)?.status ?? ''} />
      )}
    </p>
  );
}

export default Guess;
