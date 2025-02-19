class User {
    constructor (id, username, name, bio){
      this.id = id
      this.username = username
      this.bio = bio
      this.dateCreated = new Date()
      this.lastUpdated = new Date()
    }

    get getUsername(){
        return this.username
    }

    set setUsername(newUsername){
        this.username = newUsername
    }
}

module.exports = User