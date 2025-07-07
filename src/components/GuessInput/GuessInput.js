import React from 'react';

function GuessInput({ setNewGuess }) {
  const [text, setText] = React.useState('');

  return (
    <form class="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      setNewGuess(text.toUpperCase());
      setText('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required={true}
        title="5 letter word"
        minLength={5}
        maxLength={5}
        type="text" 
        id="guess-input" 
        value={text} 
        onChange={(event) => setText(event.target.value)}>
      </input>
    </form>
  );
}

export default GuessInput;
