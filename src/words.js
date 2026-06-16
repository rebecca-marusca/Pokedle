const POKEMON = ['ekans', 'zubat', 'ditto', 'eevee', 'ralts', 'luxio', 'snivy'];

export function getRandomPokemon() {
    return POKEMON[Math.floor(Math.random() * POKEMON.length)];
}

export default POKEMON;