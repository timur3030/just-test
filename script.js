'use strict';

let result = "";
let lines = 5;

for (let i = 0; i <= lines; i++) {
    for(let j = 0; j < lines -i; j++) {
        result += " ";
    }
    for(let j = 0; j < i*2 + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);