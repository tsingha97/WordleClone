// A small list of valid words (feel free to expand)
export const validWords = [
  "APPLE",
  "BRAVE",
  "CRANE",
  "DREAM",
  "EAGER",
  "Brand",
  "CATCH",
  "CLIMB",
  "DANCE",
  // ... more words as desired
];

// Returns a random word from the list
export function getRandomWord() {
  const index = Math.floor(Math.random() * validWords.length);
  return validWords[index];
}
