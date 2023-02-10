import React, { useState } from "react";

import Guess from "../Guess";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Results from "../Results";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner";

const Game = () => {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState<string[]>([]);

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const onSubmit = (value: string) => {
    setGuesses([...guesses, value]);
  };

  const onRestart = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
  };

  const match = guesses[guesses.length - 1] === answer;
  const finished = match || guesses.length === NUM_OF_GUESSES_ALLOWED;
  return (
    <>
      <Results data={guesses} answer={answer} />
      {finished && (
        <Banner
          match={match}
          answer={answer}
          tries={guesses.length}
          onRestart={onRestart}
        />
      )}
      <Guess onSubmit={onSubmit} disabled={finished} />
    </>
  );
};

export default Game;
