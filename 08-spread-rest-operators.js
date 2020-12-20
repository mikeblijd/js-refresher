/* 

Understanding Spread, Rest Operaters & Copied Arrays

*/
// NESTED
let array = ["Sports", "Cooking"];
const nestedArray = [array];
console.log(nestedArray, '<--- This is a nested array');

// SLICED - makes a copy
array = ["Baking", "Soda"];
const slicedArray = array.slice();
console.log(slicedArray, '<--- This array is being sliced');

// Spread Operator
array = ["WNBA", "Swimming"];
const spreadOperator = [...array];
console.log(spreadOperator, '<--- This is a spreaded array');

// Rest Operator
const restOperator = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};

console.log(restOperator(1, 2, 3), '<--- Rest Operator'); // hard to add more arguments. In case use restOperatorPlus 

// rest operator ++
const restOperatorPlus = (...args) => {
  return args;
};

console.log(restOperatorPlus(1, 2, 3, 4), '<--- Rest Operator Plus!');
