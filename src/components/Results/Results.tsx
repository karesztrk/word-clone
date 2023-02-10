import React, { FC } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

interface ResultsProps {
  data: string[];
  answer: string;
}

interface CheckedGuess {
  letter: string;
  status: "incorrect" | "correct" | "misplaced";
}

type CheckedGuesses = CheckedGuess[];

const Results: FC<ResultsProps> = ({ data, answer = "" }) => {
  return (
    <div className="guess-results">
      {Array.from(
        /* Pad the array to the difficiluty level ... */
        { ...data, length: NUM_OF_GUESSES_ALLOWED },
        /* ... Add empty strings to the padded area */
        (x) => x ?? "".padStart(5)
      ).map((guess, i) => (
        <p key={i} className="guess">
          {(checkGuess(guess, answer) as CheckedGuesses).map(
            ({ letter, status }, j) => (
              <span key={j} className={`cell ${data.length > i ? status : ""}`}>
                {letter}
              </span>
            )
          )}
        </p>
      ))}
    </div>
  );
};

export default Results;
