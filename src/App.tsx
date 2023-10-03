import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import "./App.css";
import HangmanDrawing from "./components/HangmanDrawing";
import Keyboard from "./components/Keyboard";
import HagmanWord from "./components/HagmanWord";

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessdLetters, setGuessdLetters] = useState<string[]>([]);
  const incorrectLetters = guessdLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessdLetters.includes(letter));
  const addGuessedLetter = useCallback(
    (key: string) => {
      if (guessdLetters.includes(key) || isLoser || isWinner) return;
      setGuessdLetters((current) => [...current, key]);
    },
    [guessdLetters, isLoser, isWinner]
  );
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessdLetters]);

  return (
    <div className="max-w-[800px] flex flex-col gap-8 my-0 mx-auto items-center">
      <div className="text-xl text-center ">
        {isWinner && "Winner!"} {isLoser && "you lose NiceTry"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HagmanWord guessedLetters={guessdLetters} text={wordToGuess} reveal={isLoser}/>
      <Keyboard
        activeLetter={guessdLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        disabled={isWinner || isLoser}
      />
    </div>
  );
}

export default App;
