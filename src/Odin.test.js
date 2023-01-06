import CalculeScore from "./Odin"

describe("Odin", () => {

    describe("Single value", () => {
        test('Hero should be 3', () => {
            expect(CalculeScore("Hero")).toEqual(3);
        })

        test('Capitaine should be 2', () => {
            expect(CalculeScore("Capitaine")).toEqual(2);
        })

        test('Soldat should be 1', () => {
            expect(CalculeScore("Soldat")).toEqual(1);
        })
    })

})