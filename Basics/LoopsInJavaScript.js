console.log("loops in javascript");

//for loop
// for (let index = 1; index <= 5; index++) {
//   // console.log(index);
// }

/*
//while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
*/

/*
//for in loop
//The for-in loop is used to iterate over the properties of an object.
//for loop also works with arrays
let students = {
  ritvik: 30,
  shubham: 10,
  sachin: 5,
  jhon: 55,
  sam: 64,
};
for (const key in students) {
  console.log(`${key}: ${students[key]}`);
}

console.log("***************************************************");
for (let a in students) {
 // console.log("marks of " + a + " are " + students.a);
    console.log("marks of " + a + " are " + students[a]);
}
*/

//for of loop
//The for-of loop is used to iterate over the elements of an iterable object, such as an array or a string.
for (let b of "pranay") {
  console.log(b);
}

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

//for each loop
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach((number1) => {
  console.log(number1);
});
