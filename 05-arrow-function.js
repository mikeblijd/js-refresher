/* 

Arrow Function: store a function in a arrow 

*/
const name = "Kalash Nikov";
let age = 27;
var hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies
  );
};

console.log(summarizeUser(name, age, hasHobbies));

/* 

Shorter way of writing arrow function if used mathmathically  --> you can omit brackets and return keyword

*/
const add = (a, b) => {
  return a + b;
};

// is the same as
const addOne = (a, b) => a + b;

// and even the same as
const addTwo = (a) => a + 1;

// and even the same as
const addRandom = () => 1 + 2;

console.log(addRandom(), add(0, 1), addOne(0, 1), addTwo(2));

/*

  An Arrow Function makes {this} keyword behave a certain way.

  this refers to whoever called a method that uses this 

*/
