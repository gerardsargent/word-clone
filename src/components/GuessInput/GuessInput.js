import React from "react";
import { ALLOWED_GUESS_LENGTH, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkLetter, emptyCurrentGuess } from "../../game-helpers";
import OnScreenKeyboard from "../OnScreenKeyboard/OnScreenKeyboard";

function GuessInput({
  answer,
  guessesList,
  setGuessesList,
  setHasLost,
  setHasWon,
  setTurnNumber,
  turnNumber,
}) {
  const [currentGuess, setCurrentGuess] = React.useState(emptyCurrentGuess);
  const [currentLetterPosition, setCurrentLetterPosition] = React.useState(0);

  const handleLetterInput = (letter) => {
    if (currentLetterPosition < ALLOWED_GUESS_LENGTH) {
      const nextCurrentGuess = [...currentGuess];

      nextCurrentGuess[currentLetterPosition] = {
        letterId: crypto.randomUUID(),
        letter,
        status: null,
      };

      const nextGuess = {
        guessId: crypto.randomUUID(),
        guess: nextCurrentGuess,
      };

      const nextGuessesList = [...guessesList];
      nextGuessesList[turnNumber] = nextGuess;

      setGuessesList(nextGuessesList);
      setCurrentLetterPosition(currentLetterPosition + 1);
      setCurrentGuess(nextCurrentGuess);
    }
  };

  const handleDelete = () => {
    if (currentLetterPosition > 0) {
      const nextLetterPosition = currentLetterPosition - 1;
      const nextCurrentGuess = [...currentGuess];

      nextCurrentGuess[nextLetterPosition] = {
        letterId: crypto.randomUUID(),
        letter: "",
        status: null,
      };

      const nextGuess = {
        guessId: crypto.randomUUID(),
        guess: nextCurrentGuess,
      };

      const nextGuessesList = [...guessesList];
      nextGuessesList[turnNumber] = nextGuess;

      setGuessesList(nextGuessesList);
      setCurrentLetterPosition(nextLetterPosition);
      setCurrentGuess(nextCurrentGuess);
    }
  };

  const handleSubmit = () => {
    const guessToSubmit = currentGuess.map(({ letter }, index) => {
      return checkLetter({
        guessedLetter: letter,
        answerLetter: answer[index],
        answer,
      });
    });

    const nextGuess = {
      guessId: crypto.randomUUID(),
      guess: guessToSubmit,
    };

    const nextGuessesList = [...guessesList];
    nextGuessesList[turnNumber] = nextGuess;

    setGuessesList(nextGuessesList);

    const isCorrectAnswer = nextGuess.guess.every(
      ({ status }) => status === "correct"
    );

    if (isCorrectAnswer) {
      setHasWon(true);
      setCurrentLetterPosition(0);
      setCurrentGuess(emptyCurrentGuess);
      return;
    }

    const nextTurnNumber = turnNumber + 1;

    if (nextTurnNumber === NUM_OF_GUESSES_ALLOWED) {
      setHasLost(true);
      setCurrentLetterPosition(0);
      setCurrentGuess(emptyCurrentGuess);
      return;
    }

    setCurrentGuess([...guessesList[nextTurnNumber].guess]);
    setCurrentLetterPosition(0);
    setTurnNumber(nextTurnNumber);
  };

  return (
    <OnScreenKeyboard
      previousGuess={guessesList[turnNumber > 0 ? turnNumber - 1 : 0].guess}
      handleLetterInput={handleLetterInput}
      handleDelete={handleDelete}
      handleEnter={handleSubmit}
    />
  );
}

export default GuessInput;
