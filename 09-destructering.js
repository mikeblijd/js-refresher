/* 

destructering

*/

/*
    Allows us to quickly acces elements in an object

    Dropping is not deleting..

    To drop our data, we dont need to acces that specific code snippet we are working on
*/
const person = {
    name: 'Kalash Nikov',
    age: 27,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}
const printName = (personData) => {
    console.log(personData.name)
}

printName(person)

const { name, age } = person
console.log(name, age)


const hobbies = ['Sport', 'Cooking']
const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2)
