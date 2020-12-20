/* 

Working with Object, Properties & Methods

*/
const person = {
  name: "Kalash Nikov",
  age: 27,
  greet: () => {
    console.log("Hi, I am " + this.name); // this refers to person object and that way we can acces properties & methods
  },
};

const person2 = {
  name: "Boss Novich",
  age: 21,
  greet: function () {
    console.log("Hi, I am " + this.name); // if you make the arrow function into a normal function. this will now refer to the person object
  },
};

const person3 = {
  name: "Eric Cartman",
  age: 17,
  greet() {
    console.log("Hi, I am " + this.name); // or write it this way
  },
};

person.greet(); // returns undefined. Link in footnote
person2.greet(); // returns proper value
person3.greet(); // returns return proper value


/*

  https://academind.com/tutorials/this-keyword-function-references/

*/
