import { ReactElement } from "react";

type Props = { numberOfGuesses: number };

export default function HangmanDrawing({ numberOfGuesses }: Props) {
  const Head: ReactElement = (
    <div className="w-[50px] h-[50px] rounded-full border-black border-[5px] border-solid absolute top-[75px] -right-6"></div>
  );
  const Body: ReactElement = (
    <div className="w-[7px] h-[100px] bg-black absolute top-[120px] right-[0px]"></div>
  );
  const RightArm: ReactElement = (
    <div className="w-[7px] h-[60px] -rotate-45 bg-black absolute top-[140px] -right-[20px]"></div>
  );
  const LeftArm: ReactElement = (
    <div className="w-[7px] h-[60px] rotate-45 bg-black absolute top-[140px] right-[20px]"></div>
  );
  const RightFoot: ReactElement = (
    <div className="w-[7px] h-[60px] -rotate-45 bg-black absolute top-[210px] -right-[20px]"></div>
  );
  const LeftFoot: ReactElement = (
    <div className="w-[7px] h-[60px] rotate-45 bg-black absolute top-[210px] right-[20px]"></div>
  );
  const BODY_PARTS = [Head, Body, RightArm, LeftArm, RightFoot, LeftFoot];
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-20 w-3 bg-black ml-[328px] absolute" />
      <div className="w-52 h-3 bg-black ml-32" />
      <div className="h-96 w-3 bg-black ml-32" />
      <div className="h-[10px] w-64 bg-black" />
    </div>
  );
}
