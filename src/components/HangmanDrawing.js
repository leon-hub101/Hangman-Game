import React from "react";

function HangmanDrawing({ wrongGuesses }) {
  const images = [
    require("../assets/hangman-images/state0.GIF"), // No wrong guesses yet
    require("../assets/hangman-images/state1.GIF"),
    require("../assets/hangman-images/state2.GIF"),
    require("../assets/hangman-images/state3.GIF"),
    require("../assets/hangman-images/state4.GIF"),
    require("../assets/hangman-images/state5.GIF"), // 5 wrong guesses
    require("../assets/hangman-images/state6.GIF"),
    require("../assets/hangman-images/state7.GIF"),
    require("../assets/hangman-images/state8.GIF"),
    require("../assets/hangman-images/state9.GIF"),
    require("../assets/hangman-images/state10.GIF"), // 10 wrong guesses (final stage)
  ];

  // Limit the number of images to the length of the array
  const maxIndex = images.length - 1; // Maximum index is 10 (for state10.GIF)
  const currentImageIndex = Math.min(wrongGuesses.length, maxIndex); // Use the smaller of wrongGuesses.length or maxIndex

  return (
    <div className="hangman-images">
      {/* Display the image that corresponds to the current number of wrong guesses */}
      <img
        src={images[currentImageIndex]}
        alt={`Hangman stage ${currentImageIndex}`}
      />
    </div>
  );
}

export default HangmanDrawing;
