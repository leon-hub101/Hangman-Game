import React from "react";
import { Button } from "react-bootstrap";

// Functional component to handle the end of the game - displays a win or loss message and a restart button
function GameEnd({ status, word, restartGame, wrongGuesses }) {
  return (
    <div className="game-end">
      {status === "won" ? (
        <>
          <h2>Congratulations! You won!</h2>
          <p>
            You guessed the word "{word}" correctly with {wrongGuesses.length}{" "}
            wrong guesses!
          </p>
        </>
      ) : (
        <>
          <h2>You used all 10 guesses.</h2>
          <h2>Game Over! You're head is mine.</h2>
          <h2>The word was "{word}".</h2>
        </>
      )}
      <Button onClick={restartGame} variant="success">
        Restart
      </Button>
    </div>
  );
}

export default GameEnd;
