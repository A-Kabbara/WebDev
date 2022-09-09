console.log("Working With Arrays")

let numbers = [6, 3, 1, 2, 9];
NumberSort = numbers.sort();
console.log(NumberSort);
console.log("==========");

let states = ["SA" , "TAS", "QNS", "WA", "VIC" , "NSW"];
console.log(states);

StateArrayLength = states.length;
console.log("The number of states in this array:")
console.log(StateArrayLength);

console.log("==========");
StateReverse = states.reverse();
console.log("The states Reversed:");
console.log(StateReverse);
console.log("=========");

console.log("Lets add a new state to this array :)");
states.push("ACT");
console.log(states);
console.log("=========");

console.log("Lets see what index Victoria is at?");
VictoriaIndex = states.findIndex((states) => states === "VIC");
console.log(VictoriaIndex);
console.log("========");

console.log("Let's a remove NSW");
states.splice(0,1);
console.log(states);
console.log("====");

console.log("Lets Check the Index of Victoria now");
console.log(states.findIndex((states) => states === "VIC"));


