import React, { FC } from "react";

interface WinProps {
  tries: number;
  onRestart?: () => void;
}

const Win: FC<WinProps> = ({ tries, onRestart }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in&nbsp;
        <strong>{tries} guesses</strong>.
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default Win;
