const objKeys = [ // details of each object
    'Name',
    'Owner',
    'Weapon Type',
    'Rarity',
    'Damage'
]

let weaponDamage = [ // [min, max] ranges for random generation (inclusive)
    [13, 25],
    [8, 18],
    [4, 13],
    [3, 11],
    [14, 32],
    [5, 17],
    [17, 35]
]

const weaponTypes = [ // weapon types
    'Battle Axe',
    'Bow',
    'Dagger',
    'Stave',
    'War Hammer',
    'Longsword',
    'Great Sword'
];

const namePW1 = [ // weapon names part 1
    'Stasha',
    'Trinity',
    'Serenity',
    'Oblivion',
    'Frostguard',
    'Dreamshadow',
    'Starfall',
    'Limbo',
    'Soulkeeper',
    'Chalice'
];

const nameP1 = [ // owner names part 1
    'Gawain',
    'John',
    'Amanda',
    'Michelle',
    'Paul',
    'Lukhal',
    'Mordred',
    'Nelluthel'
];

const nameP2 = [ // optional grammer modifiers
    ' of',
    ' the',
    ' of the',
    ''
];
const namePW3 = [ // weapon name p2
    'Sunderer',
    'Vengeance',
    'Core',
    'Retribution',
    'Eternal Rest',
    'Desecration',
    'Skulls',
    'Beacon',
    'Void',
    'Mystery'
];

const nameP3 = [// owner name p2
    ' Principle',
    ' Rund',
    ' Johnson'
];



export let weaponObj = (rarity, user) =>{ // goes through known keys to properly generate a weapon object
    let newOb = {};
    let weaponTypeInd;
    for(let key of objKeys){
        if(key === 'Name'){
            let ind1 = Math.floor(Math.random() * namePW1.length);
            let ind2 = Math.floor(Math.random() * nameP2.length);
            let ind3 = Math.floor(Math.random() * namePW3.length);
            newOb[key] = `${rarity[1]}${namePW1[ind1]}${nameP2[ind2]} ${namePW3[ind3]}`
        }
        else if(key === 'Owner'){
            let ind1 = Math.floor(Math.random() * nameP1.length);
            let ind2 = Math.floor(Math.random() * nameP2.length);
            let ind3 = Math.floor(Math.random() * nameP3.length);
            newOb[key] = `${nameP1[ind1]}${nameP2[ind2]}${nameP3[ind3]}`
        }
        else if(key === 'Rarity'){
            newOb[key] = `${rarity[1]}${rarity[0]}`;
        }
        else if(key === 'Weapon Type'){
            weaponTypeInd = Math.floor(Math.random() * weaponTypes.length);
            newOb[key] = `${weaponTypes[weaponTypeInd]}`
        }
        else if(key === 'Damage'){
            let Damage = Math.floor(Math.random() * (weaponDamage[weaponTypeInd][1] -
                weaponDamage[weaponTypeInd][0]) + weaponDamage[weaponTypeInd][0]);
            newOb[key] = `${Damage}`;
        }
        else{
            newOb[key] = 'aaaaaaa'; // catch for if a key has no case
        }
    }

    return newOb;
};
