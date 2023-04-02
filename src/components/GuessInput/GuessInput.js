import React from "react";
import { ALLOWED_GUESS_LENGTH } from "../../constants";

function GuessInput() {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleChange = (value) => {
    setCurrentGuess(value);
  };

  const handleSubmit = () => {
    console.log({ currentGuess });
    setCurrentGuess("");
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        handleSubmit();
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={currentGuess}
        onChange={(event) => handleChange(event.target.value.toUpperCase())}
        id="guess-input"
        type="text"
        pattern={`[A-Za-z]{${ALLOWED_GUESS_LENGTH}}`}
      />
    </form>
  );
}

export default GuessInput;
