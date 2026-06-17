# 🎮 Pokédle

Your favorite daily game, but... Pokémon themed! Built with React and Vite as a project to learn React.

## 🚀Demo

https://pokedle-lilac.vercel.app/

## How it works

Guess the secret Pokémon's name in 6 tries. After each guess, tiles light up:

- 🟩 Green — correct letter, correct position
- 🟨 Yellow — correct letter, wrong position
- ⬛ Grey — letter not in the name

The on-screen keyboard tracks the best status seen for each letter across all your guesses, so you can see at a glance which letters you've ruled out.

## Built with

- React
- Vite
- Plain CSS

## Running it locally

```bash
git clone https://github.com/rebecca-marusca/Pokedle.git
cd Pokedle
npm install
npm run dev
```

## Future Improvements

- [ ] Save progress with localStorage so a refresh doesn't reset the game
- [ ] Validate guesses against a real Pokémon name list
- [ ] Daily Pokémon (same word for all players each day, like the original Wordle)
- [ ] Improve UI/UX
