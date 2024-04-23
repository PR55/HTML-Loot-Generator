export const genRates = [ //percentages of loot drop
    .30,
    .28,
    .19,
    .15,
    .0575,
    .01
];


export const probNum = 500; //Maximum of range

export const rarityNames = [ //Rarity types, none is placeholder for out of range.
    'None',
    'Common',
    'Uncommon',
    'Rare',
    'Ultra Rare',
    'Epic',
    'Legendary'
];
// white,
export const rarityColors = [ // changes colors of text in console
    null, // none rarity
    '\x1b[37m', // white, also used in consoleOutput.js to reset text to default color.
    '\x1b[32m', // green
    '\x1b[36m', // cyan
    '\x1b[35m', // purple
    '\x1b[33m', // yellow
    '\x1b[31m' // red
]

export let retrieveProbability = () => probNum; // accessor function

export let randomNum = (min, max) => Math.random() * Math.round((max - min) + min); //generate loot num, forced whole number

export let genRanges = (maxRange, arrPercentages) => { //Generates number to handle the rarity, based off probability ranges
    let pArr = [];
    for(let i = 0; i < arrPercentages.length; i++){
        pArr.push(maxRange * arrPercentages[i]);
    }
    return pArr;
}

export let labelRarity = (num, ranges) =>{ // Helper to label rarities in loot array generation
    let ind = -1;
    let numV = num;
    for(let i = 0; i < ranges.length; i++)
    {
        if(numV > ranges[i])
        {
            ind = i;
            numV -= ranges[i];
        }
        else
        {
            break;
        }
    }
    return [rarityNames[ind + 1], rarityColors[ind + 1]];
}

export let genLoot = (length, ranges) => // Generates a random number and then replaces itself with a label from labelRarity function
{
    let lootArr = [];
    while(lootArr.length < length)
    {
        lootArr.push(randomNum(22, retrieveProbability()));
        lootArr[lootArr.length - 1] = labelRarity(lootArr[lootArr.length - 1] ,ranges);
    }
    return lootArr;
}
let rateArray = genRanges(retrieveProbability(), genRates); // ranges for rarities


let lootArray = genLoot(10, rateArray); //generates loot
