console.log("functions in javascript");

//Basic function:
function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // Output: 8



//Arrow function:
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 4)); // Output: 8



//Anonymous function:
const sayHello = function (name) {
  console.log(`Hello, ${name}!`);
};

sayHello("John"); // Output: "Hello, John!"



//Function with default parameter:
function greet(name = "world") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: "Hello, world!"
greet("John"); // Output: "Hello, John!"




//Function with rest parameter:
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
