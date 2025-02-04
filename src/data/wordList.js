// A small list of valid words (feel free to expand)
export const validWords = [
  "APPLE",
  "BRAVE",
  "CRANE",
  "DREAM",
  "EAGER",
  "BRAND",
  "CATCH",
  "CLIMB",
  "DANCE",
  "BREAK",
  "CLOUD",
  "DRINK",
  "EARTH",
  "BRAIN",
  // ... more words as desired
];

// Returns a random word from the list
export function getRandomWord() {
  const index = Math.floor(Math.random() * validWords.length);
  return validWords[index];
}
