import React from "react";

function GuessResults({ guessesList, turnNumber }) {
  return (
    <div className="guess-results">
      {guessesList.map(({ guessId, guess }, index) => {
        const shouldAnimate = index === turnNumber - 1;

        return (
          <p key={guessId} className="guess">
            {guess.map(({ letterId, letter, status }) => {
              return (
                <span
                  key={letterId}
                  className={`cell ${status} ${shouldAnimate ? `grow` : ""}`}
                >
                  {letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
