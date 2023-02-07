import React, { ChangeEvent, useState } from "react";

const Guess = () => {
  const [text, setText] = useState("");

  const onGuessChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.toUpperCase());
  };

  const onSubmit = () => {
    if (text.length !== 5) {
      window.alert("Your guess should be a word with 5 letters");
    }
    console.log(text);
    setText("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
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
