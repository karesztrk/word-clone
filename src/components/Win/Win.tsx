import React, { FC } from "react";

interface WinProps {
  tries: number;
}

const Win: FC<WinProps> = ({ tries }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in&nbsp;
        <strong>{tries} guesses</strong>.
      </p>
    </div>
  );
};

export default Win;
