# Hangman Game

A classic word guessing game created using **React**. In this game, players must guess the letters of a hidden word before reaching the maximum number of incorrect guesses.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Game Rules](#game-rules)
- [Installation](#installation)
- [Running the Game](#running-the-game)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)

## Overview

This Hangman game is built with **React** and uses state management to track the player’s guesses, progress, and the status of the game (win/loss). It includes the following features:

- A word to guess.
- A riddle that serves as a clue for the hidden word.
- A Hangman drawing that updates with each wrong guess.
- An intuitive and responsive user interface styled using **React-Bootstrap** and custom CSS.
- A help modal that explains the game rules.
- Game restart functionality after a win or loss.

## Features

- **Dynamic Word Display**: Correct guesses are displayed, while unguessed letters remain hidden.
- **Hangman Drawing**: Updates as the player makes wrong guesses.
- **Win/Loss Tracking**: The game ends when the player either guesses the word or reaches 10 incorrect guesses.
- **Help Modal**: Players can access the rules and instructions through a modal.
- **Riddle-Based Guessing**: A riddle provides clues to help the player guess the word.

## Game Rules

1. The game will start with a riddle to help you guess the hidden word.
2. You have 10 incorrect guesses before the game is over, and the Hangman is fully drawn.
3. You win by guessing all the letters of the word before running out of incorrect guesses.
4. Each incorrect letter guess results in one part of the Hangman being drawn.
5. Once the game ends, either by winning or losing, you can restart the game to play again.

## Installation

To run this Hangman game on your local machine, follow these instructions:

### Prerequisites

- Ensure you have **Node.js** and **npm** installed. You can check if they're installed by running the following commands in your terminal:

  ```bash
  node -v
  npm -v
  ```

  If they are not installed, you can download and install them from [Node.js](https://nodejs.org/).

### Steps

1. Clone this repository to your local machine:

   ```bash
   git clone <your-repository-link>
   ```
2. Navigate to the project folder:

   ```bash
   cd <your-project-directory>
   ```
3. Install all the dependencies:

   ```bash
   npm install
   ```
4. Run the project:

   ```bash
   npm start
   ```

   This will start the development server, and you should see the game open in your browser at [http://localhost:3000](http://localhost:3000).

## Running the Game

After running `npm start`, the game should open in your browser. Simply enter a letter in the input box and press the **Guess** button to play. The game will notify you when you win or lose, and you'll have the option to restart the game.

## File Structure

The project is organized as follows:

```
src/
│
├── assets/
│   └── hangman-images/    # Hangman drawing images for each stage
│
├── components/
│   ├── GameEnd.js         # Game end component (win/loss messages)
│   ├── HangmanDrawing.js  # Displays hangman drawing based on wrong guesses
│   ├── HelpModal.js       # Modal with game instructions and help
│   ├── Input.js           # Input field for guessing letters
│   └── WordDisplay.js     # Displays the word with guessed letters
│
├── styles/
│   ├── App.css            # General styles for the app
│   └── components.css     # Component-specific styles
│
├── App.js                 # Main app file
├── index.js               # Entry point for React
└── reportWebVitals.js     # Optional file for measuring performance
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React-Bootstrap**: For styling and responsive components.
- **CSS**: Custom styling for layout and design.
- **JavaScript (ES6)**: For logic and functionality.

---

## Credits

Created by Leon Pretorius. If you have any questions or issues with the project, feel free to reach out!

---

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
