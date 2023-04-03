import React from "react";

function GuessResults({ guessesList }) {
  return (
    <div className="guess-results">
      {guessesList.map(({ guessId, guess }) => {
        return (
          <p key={guessId} className={`guess`}>
            {guess.map(({ letterId, letter, status }) => {
              return (
                <span key={letterId} className={`cell ${status}`}>
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
