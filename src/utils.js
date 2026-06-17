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

console.log(checkGuess("eerie", "speed"));