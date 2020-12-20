/* 

Async & Promises

*/
const fetchData = (callback) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 - Konichiwa -> Timer inside fetchData is Done!");
    }, 1500);
  });
  return promise;
};

// This is A-syncronous. It takes a certain amount of time before it runs.
setTimeout(() => {
  console.log("1 - Ni Hao -> Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log("3 - Selam Aleykum -> Timer inside timer is done!");
    });
}, 2000);

// This is syncronous. It runs immediately
console.log("HEllO!");
console.log("HI!");
console.log("NAMESTE!");

/* 

More on Constructor Functions ---> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

*/
