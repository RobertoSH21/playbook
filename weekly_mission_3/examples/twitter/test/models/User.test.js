const User = require('./../../app/models/User')

describe("Tests para User", () =>{
    test("Requerimiento 1: creacion de User", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
    })

    test("Requerimiento 2: fechas en atributos de User", () => {
        const user = new User(1, "carlogilmar", "carlo", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test("Requerimiento 3: Agregando getters", () =>{
        const user = new User(1, "carlogilmar", "carlo", "Bio") 
        expect(user.getUsername).toBe("carlogilmar")
    })
})

