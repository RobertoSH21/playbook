const Ajolonauta = require('./../app/Ajolonauta')

describe("Prueba de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: creacion de objeto', () => {   
        const woopa = new Ajolonauta("Woopa")
        expect(woopa.name).toBe("Woopa");
    });
})