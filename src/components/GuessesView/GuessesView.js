
function GuessesView({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess) => <p key={guess} class="guess">{guess}</p>)}
    </div>
  );
}

export default GuessesView;
