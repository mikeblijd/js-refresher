/* 

Arrays, Methods, Objects & Reference Types

*/
const hobbies = ["Sports", "Cooking"];

// LOOP
for (let hobby of hobbies) {
  console.log(hobbies);
}

// MAP
const moreHobbies = ["E-sports", "Betting"];

console.log(
  moreHobbies.map((hobby) => {
    return "Hobby: " + hobby;
  })
);

// same results as above beause it is a return, you could omit brackets and return
const evenMoreHobbies = ["Basketball", "Dancing"];

console.log(evenMoreHobbies.map((hobby) => "Hobby: " + hobby));

// PUSH
const alotMoreHobbies = ["Sports", "Cooking"];
alotMoreHobbies.push("Programming");

console.log(alotMoreHobbies);

/* 

  - https://academind.com/tutorials/reference-vs-primitive-values/
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#

*/
