import React from "react";

function GuessResults({ guessesList }) {
  console.log({ guessesList });

  return (
    <div className="guess-results">
      {guessesList.map(({ guessId, guess }) => {
        return (
          <p key={guessId} className="guess">
            {guess.map(({ letterId, letter }) => {
              return (
                <span key={letterId} className="cell">
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
