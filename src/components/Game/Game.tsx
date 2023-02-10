import React, { useState } from "react";

import Guess from "../Guess";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Results from "../Results";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guesses, setGuesses] = useState<string[]>([]);

  const onSubmit = (value: string) => {
    setGuesses([...guesses, value]);
  };
  return (
    <>
      <Results data={guesses} answer={answer} />
      <Guess onSubmit={onSubmit} />
    </>
  );
};

export default Game;
