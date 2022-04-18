const issue = {
    title: "Haciendo mi primer issue",
    repositoryNameAssociated: "Prueba",
    status: "nothing to commit, working tree clean",
    numberOfComments: 50,
    labels: "Empezando, Issue-1",
    author: " Robert",
    dateCreated: "16 abr 2022 20:06",
    lastUpdated: "2 days ago",


    getTitle: function(){
      return this.title + this.author
    },
    getGeneralInfo: function(){
      return `El repositorio asociado es: ${this.repositoryNameAssociated}`
    }
   }
   
   console.log("El titulo y el autor es: " + issue.getTitle())
   console.log("El issue tiene un total de: " + issue.numberOfComments + " comentarios")
   console.log(issue.getGeneralInfo())