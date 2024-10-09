import React from "react";

// Functional component to display the word with correctly guessed letters
function WordDisplay({ word, correctGuesses }) {
  return (
    <div className="word-display">
      {word.split("").map((letter, index) => (
        <span key={index} className="letter">
          {correctGuesses.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
}

export default WordDisplay;
