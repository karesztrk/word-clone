import React, { FC } from "react";

interface LoseProps {
  answer?: string;
}

const Lose: FC<LoseProps> = ({ answer = "" }) => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
};

export default Lose;
