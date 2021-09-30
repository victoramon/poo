const Charmander = new Pokemon('Charmander', 'Fire', ['Charmeleon', 'Charizard']);

const Squirtle = new Pokemon('Squirtle', 'Water', ['Wartortle', 'Blastoise']);

console.log((`${Charmander.name} es de tipo ${Charmander.type}`));
console.log(Charmander.attack());
console.log(Charmander.evolve(0));
console.log((`${Charmander.name} es de tipo ${Charmander.type}`));

console.log('----------------------------------------')

console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));
console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));