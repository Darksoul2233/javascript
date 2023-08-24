// program 1
let numbers1 = [1,2,3,4,5]
let arraylenght = numbers1.length;


if (arraylenght == 5) {

    console.log('last number of array is 5');
} else {
    console.log('number is not present');
}


// program2
function checkValueAtFirstOrLast(array, value) {
    if (array.length === 0) {
        return false;
    }

    if (array[0] === value || array[array.length - 1] === value) {
        return true;
    } else {
        return false;
    }
}

let numbers = [3, 7, 1, 9, 5];
let targetValue = 5;

let isValueAtFirstOrLast = checkValueAtFirstOrLast(numbers, targetValue);

if (isValueAtFirstOrLast) {
    console.log(`The value ${targetValue} is found at the first or last index.`);
} else {
    console.log(`The value ${targetValue} is not found at the first or last index.`);
}

// program 3

var studentNames = ["Alice", "Bob", "Charlie", "Ahsen", "David", "Emily"];

function checkName(nameToCheck) {
  var index = studentNames.indexOf(nameToCheck);
  return index;
}
var nameToSearch = "Ahsen";

var indexFound = checkName(nameToSearch);

if (indexFound !== -1) {
  console.log(nameToSearch + " is found at index " + indexFound + " in the list.");
} else {
  console.log(nameToSearch + " is not found in the list.");
}

// program 4
var elements = [45, 56, 7, 8, , 23, 45]

console.log(elements);

var indexToReplace = 2
var newvalue = 10

elements[indexToReplace] = newvalue;
console.log(elements);


// program 5

var fruits = ["apple", "mango" , "kiwi", "banana", "guvava"]

console.log(fruits);

fruits.splice(2,2,("Peach"))
console.log(fruits);



