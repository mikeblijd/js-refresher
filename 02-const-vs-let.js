/* 

const vs let 

*/
const name = "Kalash Nikov";
let age = 27;
var hasHobbies = true;

age = 28; // var & let can be altered after initialization
// name = 'Nikov' <--- doesn't work, because a const variable can not be changed!

function summarizeUser(userName, userAge, userHasHobbies) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies
  );
}

console.log(summarizeUser(name, age, hasHobbies));
