import React from "react";
import { ALLOWED_GUESS_LENGTH } from "../../constants";
import { checkLetters } from "../../game-helpers";

function GuessInput({
  answer,
  guessesList,
  isGameOver,
  livesRemaining,
  setGuessesList,
  setHasLost,
  setHasWon,
  setLivesRemaining,
  setTurnNumber,
  turnNumber,
}) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleChange = (value) => {
    setCurrentGuess(value);
  };

  const handleSubmit = () => {
    const currentGuessLetters = currentGuess.split("").map((letter, index) => {
      return checkLetters({
        guessedLetter: letter,
        answerLetter: answer[index],
        answer,
      });
    });

    const nextGuess = {
      guessId: crypto.randomUUID(),
      guess: currentGuessLetters,
    };

    const nextGuessesList = [...guessesList];
    nextGuessesList[turnNumber] = nextGuess;

    setGuessesList(nextGuessesList);

    const isCorrectAnswer = nextGuess.guess.every(
      ({ status }) => status === "correct"
    );

    if (isCorrectAnswer) {
      setHasWon(true);
      return;
    }

    if (livesRemaining === 1) {
      setHasLost(true);
      return;
    }

    setLivesRemaining(livesRemaining - 1);
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
        disabled={isGameOver}
      />
    </form>
  );
}

export default GuessInput;
