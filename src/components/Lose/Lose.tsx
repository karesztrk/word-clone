import React, { FC } from "react";

interface LoseProps {
  answer?: string;
  onRestart?: () => void;
}

const Lose: FC<LoseProps> = ({ answer = "", onRestart }) => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default Lose;
