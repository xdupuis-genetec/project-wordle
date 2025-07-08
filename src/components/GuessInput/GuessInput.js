import React from 'react';
import { WORD_LENGTH } from '../../constants';

function GuessInput({ setNewGuess, disabled }) {
  const [text, setText] = React.useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      setNewGuess(text.toUpperCase());
      setText('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        disabled={disabled}
        required={true}
        title={`${WORD_LENGTH} letter word`}
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        type="text" 
        id="guess-input" 
        value={text} 
        onChange={(event) => setText(event.target.value)}>
      </input>
    </form>
  );
}

export default GuessInput;
