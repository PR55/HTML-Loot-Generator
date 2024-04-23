import * as GL from "./generationLogic.js"
import * as DL from "./detailGeneration.js"
import * as fs from 'node:fs'
import * as readline from 'node:readline'
import { resolve } from "node:path";


const rates = GL.genRanges(GL.retrieveProbability(), GL.genRates);

let arr = GL.genLoot(2, rates) // generate rarties

let detailArr = [];

arr.forEach(el => {if(el[1]) detailArr.push(DL.weaponObj(el))}); // generate weapon object of not none

let newStr = '\x1b[40m--------------------------------------------'; // makes the background black
detailArr.forEach(el => { // print each line of the object from keys

    for(let key in el)
    {
        if(newStr === ''){
            newStr += `${key}: ${el[key]}${GL.rarityColors[1]}`
        }
        else
        {
            newStr += `\n${key}: ${el[key]}${GL.rarityColors[1]}`
        }
    }
    newStr += '\n--------------------------------------------'
});

fs.writeFile('saveData.txt', newStr, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });
fs.readFile('saveData.txt','utf8',(err,data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = 'hi';

// const getName = () => {
//     return new Promise(resolve=>{
//         reader.question("What is your name? ", name =>{
//             reader.close();
//             resolve(name);
//         })
//     })
// }

// const getInput = async() => {
//     await getName();
// };

// while(true)
// {
//     input = await getName();

//     console.log(`Goodbye ${input}!`);

//     break;
// }
