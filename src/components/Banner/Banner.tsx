import React, { FC } from "react";
import Lose from "../Lose";
import Win from "../Win";

interface BannerProps {
  match?: boolean;
  answer?: string;
  tries: number;
}

const Banner: FC<BannerProps> = ({ match, answer, tries }) => {
  if (match === undefined) {
    return <></>;
  }
  return match ? <Win tries={tries} /> : <Lose answer={answer} />;
};

export default Banner;
