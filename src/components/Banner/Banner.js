import React from "react";
import ResetGameButton from "../ResetGameButton/ResetGameButton";

function Banner({ answer, handleResetGame, hasWon, turnNumber }) {
  return (
    <div className={`${hasWon ? "happy" : "sad"} banner`}>
      {hasWon ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {turnNumber} {turnNumber === 1 ? "turn" : "turns"}
          </strong>
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={handleResetGame}>Play again</button>
    </div>
  );
}

export default Banner;
