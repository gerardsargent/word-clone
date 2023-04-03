import React from "react";

const OnScreenKeyboard = ({
  previousGuess,
  handleDelete,
  handleEnter,
  handleLetterInput,
  isAllowedToType = true,
}) => {
  const letterRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="keyboard-wrapper">
      {letterRows.map((row) => (
        <div key={crypto.randomUUID()} className="keyboard-row">
          {row.map((letter) => {
            const guessedLetter = previousGuess.find(
              (guess) => guess.letter === letter
            );
            const status = guessedLetter?.status || null;

            return (
              <button
                className={`input-key ${status}`}
                key={letter}
                type="button"
                disabled={!isAllowedToType}
                onClick={() => handleLetterInput(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
      <div className="keyboard-row">
        <button
          className="input-key action-key"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="input-key action-key"
          type="button"
          onClick={handleEnter}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default OnScreenKeyboard;
