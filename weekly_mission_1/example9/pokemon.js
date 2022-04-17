class Pokemon {
    constructor(Pokemon) {
      this.Pokemon = Pokemon 
    }

    sayHello(){
        console.log(`Mi pokemon ${this.Pokemon} te saluda!!!`)
    }

    sayMessage(message){
        console.log(`Mi pokemon ${this.Pokemon} te dice: ${message}`)
    }

  }

  module.exports = Pokemon

/*const charmeleon = new Pokemon("charmeleon")

console.log(charmeleon)
console.log(charmeleon.sayHello())
console.log(charmeleon.sayMessage())*/
  