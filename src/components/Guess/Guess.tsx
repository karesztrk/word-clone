import React, { ChangeEvent, FC, FormEvent, useState } from "react";

interface GuessProps {
  onSubmit: (value: string) => void;
  disabled?: boolean;
}
const Guess: FC<GuessProps> = ({ onSubmit, disabled }) => {
  const [text, setText] = useState("");

  const onGuessChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (/^[A-Z]{0,5}$/.test(value)) {
      setText(value);
    }
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={text}
        onChange={onGuessChange}
        maxLength={5}
        minLength={5}
        pattern="^[A-Z]{5}$"
        disabled={disabled}
      />
    </form>
  );
};

export default Guess;
