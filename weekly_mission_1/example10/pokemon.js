export default class Mypokemon{
    constructor(Pokemon) {
        this.Pokemon = Pokemon 
      }
  
      sayHello(){
          console.log(`Mi pokemon ${this.Pokemon} te saluda!!!`)
      }
}