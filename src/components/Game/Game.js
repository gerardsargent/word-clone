import React from "react";

import { ALLOWED_GUESS_LENGTH, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import "../../styles.css";
import { range, sample } from "../../utils";
import Banner from "../Banner/Banner";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [hasWon, setHasWon] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);
  const [guessesList, setGuessesList] = React.useState(() =>
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
    })
  );
  const [turnNumber, setTurnNumber] = React.useState(0);

  return (
    <>
      <GuessResults guessesList={guessesList} />
      <GuessInput
        answer={answer}
        guessesList={guessesList}
        isGameOver={hasWon || hasLost}
        setGuessesList={setGuessesList}
        setHasLost={setHasLost}
        setHasWon={setHasWon}
        setTurnNumber={setTurnNumber}
        turnNumber={turnNumber}
      />
      {(hasWon || hasLost) && (
        <Banner answer={answer} hasWon={hasWon} turnNumber={turnNumber} />
      )}
    </>
  );
}

export default Game;
