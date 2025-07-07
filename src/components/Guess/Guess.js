import { WORD_LENGTH } from '../../constants';

function Guess({ guess }) {
  return (
    <p className="guess">
      {Array(WORD_LENGTH).keys().map((i) => 
        <span key={Math.random()} className="cell">
          { guess?.at(i) ?? '' }
        </span>
      )}
    </p>
  );
}

export default Guess;
