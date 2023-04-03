import { ALLOWED_GUESS_LENGTH, NUM_OF_GUESSES_ALLOWED } from "./constants";
import { range } from "./utils";

export function checkLetter({ guessedLetter, answerLetter, answer }) {
  // Step 1: Look for correct letters.
  if (guessedLetter === answerLetter) {
    return {
      letterId: crypto.randomUUID(),
      letter: guessedLetter,
      status: "correct",
    };
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  let status = "incorrect";

  if (answer.includes(guessedLetter)) {
    status = "misplaced";
  }

  return {
    letterId: crypto.randomUUID(),
    letter: guessedLetter,
    status,
  };
}

export const generateNewGuessList = () =>
  range(0, NUM_OF_GUESSES_ALLOWED).map(() => {
    return {
      guessId: crypto.randomUUID(),
      guess: range(0, ALLOWED_GUESS_LENGTH).map(() => {
        return {
          letterId: crypto.randomUUID(),
          letter: "",
          status: null,
        };
      }),
    };
  });

export const emptyCurrentGuess = range(0, ALLOWED_GUESS_LENGTH).map(() => {
  return {
    letterId: crypto.randomUUID(),
    letter: "",
    status: null,
  };
});
