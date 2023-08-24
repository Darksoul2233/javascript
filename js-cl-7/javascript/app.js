// task 1

var numbers = [23, 34, 65, 12, 15, 36];
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log("sum of numbers :", sum);


// task 2


var Colors = ["Orange", "Blue", "Magenta", "Purple", "Black"];
var reversed = [];
for (let i = Colors.length; i >= 0; i--) {

    reversed.push(Colors[i])

}

console.log("Colors :", Colors);
console.log("reversed :", reversed);

// task 3

// table with for loop

let number = parseInt(prompt("Enter a number:"));

console.log(`Multiplication Table for ${number}:`);
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}

// table with while loop

// let i = 1;
// num = parseInt(prompt("enter a nnumber"));
// result = 0;
// while (i <= 20) {
//     let result = num * i;
//     console.log(`${num} x ${i} = ${result}`);
//     i++
// }


// task 4 

// const numberArray = [12, 45, 9, 74, 23, 65, 87];

// let largest = numberArray[0];
// for (let i = 1; i < numberArray.length; i++) {
//     if (numberArray[i] > largest) {
//         largest = numberArray[i];
//     }
// }

// console.log("The largest number in the array is:", largest);


// task 5

const numberArray = [12, 45, 9, 74, 23, 65, 87];

let smallest = numberArray[0];
for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i] < smallest) {
        smallest = numberArray[i];
    }
}

console.log("The smallest number in the array is:", smallest);
