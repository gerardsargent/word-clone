/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkLetter({ guessedLetter, answerLetter, answer }) {
  // Step 1: Look for correct letters.
  if (guessedLetter === answerLetter) {
    return {
      letterId: crypto.randomUUID(),
      letter: guessedLetter,
      status: "correct",
    };
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  let status = "incorrect";

  if (answer.includes(guessedLetter)) {
    status = "misplaced";
  }

  return {
    letterId: crypto.randomUUID(),
    letter: guessedLetter,
    status,
  };
}
