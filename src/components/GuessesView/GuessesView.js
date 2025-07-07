import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from '../Guess';

function GuessesView({ guesses }) {
  return (
    <div className="guess-results">
      {Array(NUM_OF_GUESSES_ALLOWED).keys().map((row) => 
        <Guess key={row} guess={guesses[row]} />
      )}
    </div>
  );
}

export default GuessesView;
