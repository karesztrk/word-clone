import React, { FC } from "react";
import Lose from "../Lose";
import Win from "../Win";

interface BannerProps {
  match?: boolean;
  answer?: string;
  tries: number;
  onRestart?: () => void;
}

const Banner: FC<BannerProps> = ({ match, answer, tries, onRestart }) => {
  if (match === undefined) {
    return <></>;
  }
  return match ? (
    <Win tries={tries} onRestart={onRestart} />
  ) : (
    <Lose answer={answer} onRestart={onRestart} />
  );
};

export default Banner;
