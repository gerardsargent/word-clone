import React from "react";

import { WORDS } from "../../data";
import "../../styles.css";
import { sample } from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);

  return (
    <>
      <GuessResults guessesList={guessesList} />
      <GuessInput guessesList={guessesList} setGuessesList={setGuessesList} />
    </>
  );
}

export default Game;
