import React from "react";
import { ALLOWED_GUESS_LENGTH } from "../../constants";

function GuessInput({
  guessesList,
  setGuessesList,
  turnNumber,
  setTurnNumber,
}) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleChange = (value) => {
    setCurrentGuess(value);
  };

  const handleSubmit = () => {
    const currentGuessLetters = currentGuess.split("").map((letter) => {
      return {
        letterId: crypto.randomUUID(),
        letter,
      };
    });

    const nextGuess = {
      guessId: crypto.randomUUID(),
      guess: currentGuessLetters,
    };
    const nextGuessesList = [...guessesList];
    nextGuessesList[turnNumber] = nextGuess;

    setGuessesList(nextGuessesList);
    setTurnNumber(turnNumber + 1);
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
