"use strict";

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

let firstNumberOver60;

for( let i=0; i <numbers.length; i++) {
    if(numbers[i] > 60){
        firstNumberOver60 = numbers[i];
        breaks;
    }
}

console.log(`The first number over 60 is ${firstNumberOver60}`);

function isOver60(someValue) {
    return (someValue > 60);
}

let firstNumberOver60Usingfind = numbers.find(isOver60);
let firstNumberOver60Usingindex = numbers.findIndex(isOver60);

console.log(`The first number over 60 is ${firstNumberOver60Usingfind} at `)