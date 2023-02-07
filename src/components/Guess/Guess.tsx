import React, { ChangeEvent, FC, FormEvent, useState } from "react";

interface GuessProps {
  onSubmit: (value: string) => void;
}
const Guess: FC<GuessProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const onGuessChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.toUpperCase());
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.length !== 5) {
      window.alert("Your guess should be a word with 5 letters");
      return;
    }
    onSubmit(text);
    console.log(text);
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
      />
    </form>
  );
};

export default Guess;
