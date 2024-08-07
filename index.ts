#! /usr/bin/env node
import inquirer from "inquirer";
let num1 = 80 
let num2 = 40
const guess = await inquirer.prompt({
    name : "num1",
    type : "number",
    message : "guess a number"
});
const target = await inquirer.prompt({
    name : "num2",
    type : "number",
    message : "guess a target number"
});
if (guess.num1 < target.num2) {
    console.log("your guess is low");
}
else if (guess.num1 > target.num2){
    console.log("your guess is high");
}
else {
    console.log("you guessed it rigt!");
}