import React from "react";

type Props = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (key: string) => void;
  disabled:boolean
};

export default function Keyboard({
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
  disabled
}: Props) {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className="grid grid-cols-keyboard gap-2 w-[850px]">
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            key={key}
            className="text-white  bg-gray-800 hover:bg-blue-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 uppercase"
            onClick={() => addGuessedLetter(key)}
            style={{background:isActive ?"grey":"",opacity:isInactive?0.3:1}}
            disabled={disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
