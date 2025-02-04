# Wordle Clone

A simple Wordle-like game built with **React** and **Tailwind CSS** using a **Vite** setup. In this game, the user gets 6 attempts to guess a 5-letter word. Color-coded feedback is provided only for submitted guesses:

- **Green:** Correct letter in the correct position.
- **Yellow:** Correct letter in the wrong position.
- **Gray:** Incorrect letter.

## Features

- **Game Mechanics:**

  - 6 attempts to guess a 5-letter word.
  - Only submitted guesses are evaluated and color-coded.
  - Invalid words do not get submitted—if the word is not in the dictionary, an error message is shown and the row will be cleared.

- **User Experience:**

  - Responsive design using Tailwind CSS.
  - Clear, modern UI that works well on both desktop and mobile.
  - A “New Game” button to reset the game.

- **Tech Stack:**
  - React (with Vite)
  - Tailwind CSS (v3)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (or yarn)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tsingha97/WordleClone.git
   cd WordleClone
   ```

2. **How to Run**

   npm install
   npm run dev
