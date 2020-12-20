/* 

Named Function: store a function in a const 

*/
const name = "Kalash Nikov";
let age = 27;
var hasHobbies = true;

const summarizeUser = function (userName, userAge, userHasHobbies) {
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
