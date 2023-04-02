import React from "react";

function GuessResults({ guessesList }) {
  console.log({ guessesList });
  return (
    <div className="guess-results">
      {guessesList.map(({ guessId, guess }) => {
        const guessedWord = guess.map(({ letter }) => letter);

        return (
          <p key={guessId} className="guess">
            {guessedWord}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
