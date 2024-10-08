import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WordDisplay from "./components/WordDisplay"; // Component to display the word being guessed
import Input from "./components/Input"; // Component to handle user input
import HangmanDrawing from "./components/HangmanDrawing"; // Component to display the hangman drawing
import HelpModal from "./components/HelpModal.js"; // Component for showing help/instructions to the user
import GameEnd from "./components/GameEnd"; // Component to display the end of the game
import "./Styles/App.css"; // Custom styles for your app

function App() {
  // The single word used in the game
  const word = "incomprehensible";

  // The riddle that provides a clue to the word
  const riddle = `
    Fiddle my riddle one letter a time.
    I'm 16 letters long, don't get we wrong.
    10 miss guesses, your head is mine.

    I’m hard to grasp, a puzzle to see,
    You might scratch your head when dealing with me.
    I twist and turn, beyond clear sight,
    Understanding me can be quite a fight.
    What word am I, so tricky to find,
    A concept that baffles even the sharpest mind?
  `;

  // State to keep track of the letters that have been guessed correctly
  const [correctGuesses, setCorrectGuesses] = useState([]);

  // State to keep track of the letters that have been guessed incorrectly
  const [wrongGuesses, setWrongGuesses] = useState([]);

  // State to track the status of the game - 'playing', 'won', or 'lost'
  const [gameStatus, setGameStatus] = useState("playing");

  // Function to handle the user's guess input
  const handleGuess = (letter) => {
    // Check if the letter has already been guessed (either correct or incorrect)
    if (correctGuesses.includes(letter) || wrongGuesses.includes(letter)) {
      // Notify the player that they already guessed this letter
      alert(`You've already guessed "${letter}". Try another letter.`);
      return; // Exit the function if the letter has already been guessed
    }

    // Proceed if the letter is not a repeated guess
    if (word.includes(letter)) {
      setCorrectGuesses([...correctGuesses, letter]);
    } else {
      setWrongGuesses([...wrongGuesses, letter]);
    }

    checkGameStatus(); // Check if the game is won or lost
  };

  // Function to check if the player has won or lost the game
  const checkGameStatus = () => {
    const allGuessed = word
      .split("")
      .every((letter) => correctGuesses.includes(letter));
    if (allGuessed) setGameStatus("won");
    if (wrongGuesses.length >= 9) setGameStatus("lost"); // Set the number of guesses to 10
  };

  // Function to restart the game by resetting the state
  const restartGame = () => {
    setCorrectGuesses([]);
    setWrongGuesses([]);
    setGameStatus("playing");
  };

  return (
    <div className="container text-center">
      <h1>Hangman Game</h1>

      {/* Display the riddle in a box */}
      <div className="riddle-box">
        <pre>{riddle}</pre>
      </div>

      {/* Display the hangman drawing based on the number of wrong guesses */}
      <HangmanDrawing wrongGuesses={wrongGuesses} />

      {/* Display the word with correctly guessed letters shown */}
      <WordDisplay word={word} correctGuesses={correctGuesses} />

      {/* Input component for the user to guess letters */}
      <div className="input-container">
        <Input
          handleGuess={handleGuess}
          correctGuesses={correctGuesses}
          wrongGuesses={wrongGuesses}
        />
      </div>

      {/* Display the GameEnd component with the option to restart */}
      {gameStatus !== "playing" && (
        <GameEnd status={gameStatus} word={word} restartGame={restartGame} />
      )}

      {/* Display a help modal with game instructions or information */}
      <HelpModal />
    </div>
  );
}

export default App;
