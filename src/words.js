const POKEMON = [
    'ekans', 'zubat', 'ditto', 'eevee', 'ralts', 'luxio', 'snivy', 'absol', 'aipom', 'arbok', 'azelf', 'bagon', 'budew', 'burmy', 'doduo', 'entei', 'gible', 'gloom', 'golem', 'hypno', 'klink', 'kubfu', 'lotad', 'lugia', 'luxio', 'magby', 'minun', 'numel', 'paras', 'pichu', 'ralts', 'riolu', 'rotom', 'shinx'
];

export function getRandomPokemon() {
    return POKEMON[Math.floor(Math.random() * POKEMON.length)];
}

export default POKEMON;