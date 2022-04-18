const pullrequest = {
    title: "Duda",
    author: " Robert",
    branchname: "Prueba",
    datecreated: "16 abr 2022 22:00",
    status: "nothing to commit, working tree clean",
    repositoryNameAssociated: "Error de semana",

    getStatus: function(){
        return this.status
    },

    getTitleAndAutor: function(){
        return this.title + this.author
    }
} 

console.log("El estado es: " + pullrequest.getStatus())
console.log("El titulo y autor es: " + pullrequest.getTitleAndAutor())