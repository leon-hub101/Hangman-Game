import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

// Functional component to handle user input for guessing letters in the game
function Input({ handleGuess }) {
  // State to keep track of the current letter that the user is typing
  const [guess, setGuess] = useState("");

  // Function to handle the form submission when the user makes a guess
  const handleSubmit = (e) => {
    e.preventDefault();

    // Proceed if there is a guess
    if (guess) {
      handleGuess(guess); // Pass the guess to the parent (App.js)
    }
    setGuess(""); // Clear the input after submission
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <Form.Group>
        <Form.Control
          type="text"
          value={guess} // Bind the input value to the guess state
          onChange={(e) => setGuess(e.target.value.toLowerCase())} // Update the state with the lowercase letter entered by the user
          maxLength={1} // Limit the input to a single character
          placeholder="Enter a letter" // Placeholder text inside the input box
          required // Make the input required to ensure the form is not submitted with an empty field
          className="text-center" // Center the text in the input field
        />
      </Form.Group>
      {/* Button to submit the guess */}
      <Button type="submit" variant="primary" className="ml-2">
        Guess
      </Button>
    </Form>
  );
}

export default Input;
