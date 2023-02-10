import React, { useState } from "react";

import Guess from "../Guess";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Results from "../Results";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guesses, setGuesses] = useState<string[]>([]);

  const onSubmit = (value: string) => {
    setGuesses([...guesses, value]);
  };

  const match = guesses[guesses.length - 1] === answer;
  const finished = match || guesses.length === NUM_OF_GUESSES_ALLOWED;
  return (
    <>
      <Results data={guesses} answer={answer} />
      {finished && (
        <Banner match={match} answer={answer} tries={guesses.length} />
      )}
      <Guess onSubmit={onSubmit} disabled={finished} />
    </>
  );
};

export default Game;
