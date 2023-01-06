export const Hero = 3
export const Capitaine = 2
export const Soldat = 1
export const Traitre = 0 
export const Maudit = -1


function getCombinations(lenght = 7) {
    const toCombine = new Array(3)
        .fill('')
        .map((_, i) => i)
    let combinations = [];
    let temp = [];
    let slent = Math.pow(2, toCombine.length) - 1;

    for (let i = 0; i < slent; i++) {
        temp = [];
        for (var j = 0; j < toCombine.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp.push(toCombine[j]);
            }
        }

        if (temp.length > 0) {
            combinations.push(temp);
        }
    }

    const twoPartsCombinations = combinations.map(combi => {
        const completion = toCombine.filter(index => combi.indexOf(index) === -1)
        return [combi, completion]
    })

    return twoPartsCombinations
}

console.log('generated', getCombinations())


export default function CalculeScore(couleur) {
    switch (couleur) {
        case 'Hero':
            return Hero
            break;
        case 'Capitaine':
            return Capitaine
            break;
        case 'Soldat':
            return Soldat
            break;
        default:
            return ("VALEUR NON EXISTANTE: ".couleur)
    }

}