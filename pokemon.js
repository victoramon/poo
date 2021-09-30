/* El nombre de la clase debe ir con mayuscula */
class Pokemon {

    #name = '';
    #type = '';
    #evolutions = [];

    constructor (name, type, evolutions){
        this.#name = name ;
        this.#type = type ;
        this.#evolutions = evolutions;
    }

    set name (name) {
        this.#name = name;
    }

    set type (type) {
        this.#type = type;
    }

    set evolutions (evolutions) {
        this.#evolutions = evolutions;
    }

    get name() {
        return this.#name;
    }

    get type() {
        return this.#type;
    }

    get evolutions() {
        return this.#evolutions;
    }

    attack() {
        return `${this.#name}, esta atacando`;
    }

    evolve(evolution = 0) {
        //Valida que la opción exista
        const EVOLVE = this.#evolutions[evolution] || '';
        let message = 'No puedo evolucionar';

        if(EVOLVE) {
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }
        return message;
    }

}

class TypeFire extends Pokemon {

    constructor(name, evolutions) {

        super(name, 'fire', evolutions);
    }

    message() {
        return `Hola, soy ${this.name} y soy de tipo fuergo`;
    }

}

const charmander = new TypeFire('Charmander', ['Charmeleon', 'Charizard']);

console.log (charmander.message());

charmander.name = 'Gato';
console.log (charmander.message());