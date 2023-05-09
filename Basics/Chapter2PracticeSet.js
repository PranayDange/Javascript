console.log("Chapter two practice set");
/*
//problem 1
let age =prompt("what is your age")
let a = 25;
}
if(a<20 && a>10){
    console.log("person age is between 10 and 20");
}else{
    console.log("person age is not between 10 and 20");
*/

//problem 2
let age = prompt("what is your age");
age = Number.parseInt(age);
switch (age) {
  case "12":
    console.log("your age is 12");
    break;
  //case 13:
  case "13":
    console.log("your age is 13");
    break;
  //  case 11:
  case "11":
    console.log("your age is 11");
    break;
  default:
    console.log("your age is not special");
    break;
}


//problem 3
//write a program to see if number is divisible by 2 and 3

let num = prompt("enter a number")
if(num%2==0 && num%3==0){
    console.log('number is divisible');
}else{
    console.log('number is not divisible');
}