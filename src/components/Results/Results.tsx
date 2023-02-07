import React, { FC } from "react";

interface ResultsProps {
  data: string[];
}

const Results: FC<ResultsProps> = ({ data }) => {
  return (
    <div className="guess-results">
      {data.map((guess) => (
        <p key={guess} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
};

export default Results;
