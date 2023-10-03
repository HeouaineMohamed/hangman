import React, { useState } from "react";

type Props = { text: string,guessedLetters: string[], reveal?:boolean };

export default function HagmanWord({ guessedLetters,text, reveal=false }: Props) {
    
  return (
    <div className="flex gap-1 text-4xl font-bold uppercase font-mono">
      {text.split("").map((letter, index) => (
        <span className="border-b-[8px] border-solid border-b-black" key={index}>
          <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible": "hidden",color:!guessedLetters.includes(letter) && reveal ? "red":"black"}}>{letter}</span>
        </span>
      ))}
    </div>
  );
}
