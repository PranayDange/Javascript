//there are 7 primitive datatypes in javascript


// Sort cut : 

// Primitive Data type : SSBBNNU
// S  - String
// S  - Symbol
// N - Null
// N - Number
// B - Boolean
// B - Big int
// U - Undefined

// Non - primitive - Object


let a="pranay"
let b=Symbol("i am a symbol")
let c=null;
let d=123;
let e=true;
let f=BigInt("570");
let g=undefined;
console.log(a,b,c,d,e,f,g)
console.log(typeof d) //typeof is used to see datatype 



//objects in js

//objects in js are called non-primitive
//objects consists of key value pair

//1)
const item={
    "name":"pranay",
    "age": 25,
    "city":"Rajura",
    "married":false

}
console.log(item["name"])

//2)
const propName = 'name';

const person = {
  [propName]: 'John',
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

