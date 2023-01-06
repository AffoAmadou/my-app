import CalculeScore, { Capitaine, Hero, Soldat, Traitre } from "./Odin"

describe("Odin", () => {

    describe("Single value", () => {
        test('Hero should be 3', () => {
            expect(CalculeScore(Hero)).toEqual(3);
        })

        test('Capitaine should be 2', () => {
            expect(CalculeScore(Capitaine)).toEqual(2);
        })

        test('Soldat should be 1', () => {
            expect(CalculeScore(Soldat)).toEqual(1);
        })

        test("wrong value shoud throw error", () =>{
            expect(() => CalculeScore(9)).toThrow(Error)
        })
    })

    describe("Interaction", () => {
        test('Hero and Capitain should be 5', () => {
            expect(CalculeTwoDices(Hero, Capitaine)).toEqual(5);
        })

        test('Hero and Soldat should be 4', () => {
            expect(CalculeTwoDices(Hero, Soldat)).toEqual(4);
        })

        test('Capitaine and Soldat should be 4', () => {
            expect(CalculeTwoDices(Capitaine, Soldat)).toEqual(3);
        })

        test("Capitaine and Traitre should be 1", () => {
            expect(CalculeTwoDices(Capitaine, Traitre))
        })
    })


    describe("Three Values", () => {
        test('Hero and Capitain should be 5', () => {
            expect(CalculeThreeDices(Hero, Capitaine, Soldat)).toEqual(6);
        })
    })


    describe("Controle array", () => {
        test('Hero VS Capitain and Soldat', () => {
            expect(CalculeThreeDices(Hero, [Capitaine, Soldat])).toEqual(true);
        })
        
    })

})
describe("Pouvoir traitre", () => {
    describe("3 dés", () => {
        test("traitre avec des unites non hero", () => {
            expect(CalculeThreeDices([Traitre, Capitaine, Soldat])).toEqual(4)
        })
        test("traitre avec Heros et unité random", () => {
            expect(CalculeThreeDices([Traitre, Hero, Capitaine])).toEqual(3)
        })
        test("traitre avec 2 heros", () => {
            expect(CalculeThreeDices([Traitre, Hero, Hero])).toEqual(4)
        })
    })
    describe("4 dés", () => {
        test("double traitres, double Hero", ()=>{
            expect(CalculeFourDices([Traitre, Traitre, Hero, Hero])).toEqual(2)
        })
    })
    describe("5 dés", () => {
        test("double traitre, triple hero", ()=>{
            expect(CalculeFiveDices([Traitre, Traitre, Hero, Hero, Hero])).toEqual(5)
        })
    })
})

describe("Pouvoir Mage", () => {
    describe("2 dés", () => {
        test("un mage, un Hero", () => {
            expect(CalculeMage(Mage, Hero)).toEqual(4)
        })
        test("un mage, un maudit", () => {
            expect(CalculeMage(Mage,Maudit)).toEqual(0)
        })
        test("deux mages", () => {
            expect(CalculeMage(Mage,Mage)).toEqual(0)
        })

    })
})