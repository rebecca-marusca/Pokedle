export function checkGuess(guess, answer) {
    const result = Array(5).fill(null);
    const letterPool = {};

    for(let i=0; i<5; i++) {
        if(guess[i] === answer[i]) {
            result[i] = { letter: guess[i], status: "correct" };
        } else {
            letterPool[answer[i]] = (letterPool[answer[i]] || 0) + 1;
        }
    }

    for(let i=0; i<5; i++) {
        if(result[i]) continue;

        if(letterPool[guess[i]]) {
            result[i] = { letter: guess[i], status: "present"};
            letterPool[guess[i]]--;
        } else {
            result[i] = { letter: guess[i], status: "absent" };
        }
    }

    return result;
}

export function getLetterStatuses(guesses) {
  const statuses = {};
  const priority = { correct: 3, present: 2, absent: 1 };

  for (const guess of guesses) {
    for (const tile of guess) {
      const current = statuses[tile.letter];
      if (!current || priority[tile.status] > priority[current]) {
        statuses[tile.letter] = tile.status;
      }
    }
  }

  return statuses;
}

console.log(checkGuess("eerie", "speed"));