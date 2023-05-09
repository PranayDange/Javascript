//create a variable of type string and try to add a number to it
let a = "pranay";
let b = 6;
console.log(a + b);

//use typeof operator to find the datatype of the string in last question
console.log(typeof (a + b));

//create a const object in javascript can you change it to hold number later ---ans is no
const ad = {
  name: "pranay",
  section: 1,
  isPrinciple: false,
};
//ad=768

//try to add new key to the const object in problem 3 were you able to do it --- answer is yes
ad["friend"] = "mayur";
ad["name"] = "chaitanya";
console.log(ad);

//write a js program to create a word-meaning dictionary  of 5 words
const dict = {
  clarsach: "an ancient Irish and Scottish harp",
  pluvial: "of or relating to rain, especially much rain",
  futtock:
    "any of a number of timbers forming the lower, more curved portion of the frame in a wooden hull",
};

console.log(dict.futtock)
console.log(dict['futtock'])
