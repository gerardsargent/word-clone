import React from "react";

import { WORDS } from "../../data";
import { generateNewGuessList } from "../../game-helpers";
import "../../styles.css";
import { sample } from "../../utils";
import Banner from "../Banner/Banner";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

function Game() {
  const generateAnswer = () => sample(WORDS);
  const [answer, setAnswer] = React.useState(() => generateAnswer());
  const [hasWon, setHasWon] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);
  const [guessesList, setGuessesList] = React.useState(() =>
    generateNewGuessList()
  );
  const [turnNumber, setTurnNumber] = React.useState(0);

  console.log({ answer });

  const handleResetGame = () => {
    setHasWon(false);
    setHasLost(false);
    setTurnNumber(0);
    setGuessesList(generateNewGuessList());
    setAnswer(sample(WORDS));
  };

  return (
    <>
      <GuessResults guessesList={guessesList} turnNumber={turnNumber} />
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
        <Banner
          answer={answer}
          handleResetGame={handleResetGame}
          hasWon={hasWon}
          turnNumber={turnNumber}
        />
      )}
    </>
  );
}

export default Game;
