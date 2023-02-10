import React, { FC } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

interface ResultsProps {
  data: string[];
}

const Results: FC<ResultsProps> = ({ data }) => {
  return (
    <div className="guess-results">
      {Array.from(
        { ...data, length: NUM_OF_GUESSES_ALLOWED },
        (x) => x ?? "".padStart(5)
      ).map((guess, i) => (
        <p key={i} className="guess">
          {guess.split("").map((letter, j) => (
            <span key={j} className="cell">
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default Results;
