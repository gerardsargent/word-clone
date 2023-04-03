import React from "react";

function Banner({ answer, hasWon, turnNumber }) {
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
    </div>
  );
}

export default Banner;
